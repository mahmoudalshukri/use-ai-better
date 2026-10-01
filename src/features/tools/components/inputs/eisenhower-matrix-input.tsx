"use client";

import { MoreHorizontal, Plus } from "lucide-react";
import { useId, useState, type FormEvent } from "react";

import { LabeledSelect } from "@/components/shared/labeled-select";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  parseMatrixTasks,
  QUADRANTS,
  serializeMatrixTasks,
  type MatrixTask,
  type Quadrant,
} from "../../lib/matrix";
import type { ToolInputProps } from "../../types";

export function EisenhowerMatrixInput({ values, setValue }: ToolInputProps) {
  const taskInputId = useId();
  const [text, setText] = useState("");
  const [quadrant, setQuadrant] = useState<Quadrant>("Do now");
  const tasks = parseMatrixTasks(values.tasks);

  const save = (next: MatrixTask[]) => setValue("tasks", serializeMatrixTasks(next));

  const add = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    save([...tasks, { text: trimmed, quadrant }]);
    setText("");
  };

  const move = (index: number, target: Quadrant) =>
    save(tasks.map((task, i) => (i === index ? { ...task, quadrant: target } : task)));
  const remove = (index: number) => save(tasks.filter((_, i) => i !== index));

  return (
    <div>
      <form onSubmit={add} className="grid gap-2 sm:grid-cols-[minmax(0,1fr)_10rem_auto] sm:items-end">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={taskInputId} className="text-xs font-semibold text-muted-foreground">
            Task
          </Label>
          <Input
            id={taskInputId}
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Add a task"
            className="h-10 bg-card"
          />
        </div>
        <LabeledSelect
          label="Quadrant"
          value={quadrant}
          options={QUADRANTS}
          onValueChange={(value) => setQuadrant(value as Quadrant)}
          size="lg"
        />
        <Button type="submit" size="lg" className="h-10">
          <Plus data-icon="inline-start" />
          Add
        </Button>
      </form>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {QUADRANTS.map((box) => {
          const items = tasks
            .map((task, index) => ({ task, index }))
            .filter(({ task }) => task.quadrant === box);
          return (
            <section key={box} className="min-h-28 rounded-lg border p-3" aria-label={box}>
              <h3 className="text-sm font-bold">{box}</h3>
              {items.length === 0 ? (
                <p className="mt-2 text-xs text-muted-foreground">No tasks yet.</p>
              ) : (
                <ul className="mt-2 space-y-2">
                  {items.map(({ task, index }) => (
                    <li
                      key={`${task.text}-${index}`}
                      className="flex items-start gap-2 rounded-md bg-muted py-1.5 pr-1 pl-2.5 text-xs"
                    >
                      <span className="min-w-0 flex-1 pt-1 break-words">{task.text}</span>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon-xs" aria-label={`Move or remove “${task.text}”`}>
                            <MoreHorizontal />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Move to</DropdownMenuLabel>
                          {QUADRANTS.filter((target) => target !== box).map((target) => (
                            <DropdownMenuItem key={target} onSelect={() => move(index, target)}>
                              {target}
                            </DropdownMenuItem>
                          ))}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem variant="destructive" onSelect={() => remove(index)}>
                            Remove
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
