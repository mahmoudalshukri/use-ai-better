"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

type Updater<T> = T | ((previous: T) => T);

// In-memory mirror keeps drafts working when localStorage is unavailable (e.g. private mode).
const memory = new Map<string, string | null>();
const listeners = new Set<() => void>();

function readRaw(key: string): string | null {
  if (memory.has(key)) return memory.get(key) ?? null;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(key);
  } catch {
    raw = null;
  }
  memory.set(key, raw);
  return raw;
}

function writeRaw(key: string, raw: string | null) {
  memory.set(key, raw);
  try {
    if (raw === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, raw);
  } catch {
    // Persistence is best-effort; the in-memory draft still works.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (event: StorageEvent) => {
    if (event.key) memory.delete(event.key);
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function parse<T>(raw: string | null, fallback: T): T {
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

/**
 * Browser-local draft state that is safe to use in statically rendered pages.
 * The server render (and hydration pass) always uses `initialValue`, so pass a
 * stable reference such as a module-level constant.
 */
export function useLocalDraft<T>(key: string, initialValue: T) {
  const raw = useSyncExternalStore(
    subscribe,
    () => readRaw(key),
    () => null,
  );

  const value = useMemo(() => parse(raw, initialValue), [raw, initialValue]);

  const setValue = useCallback(
    (updater: Updater<T>) => {
      const previous = parse(readRaw(key), initialValue);
      const next =
        typeof updater === "function" ? (updater as (previous: T) => T)(previous) : updater;
      writeRaw(key, JSON.stringify(next));
    },
    [key, initialValue],
  );

  const reset = useCallback(() => writeRaw(key, null), [key]);

  return [value, setValue, reset] as const;
}
