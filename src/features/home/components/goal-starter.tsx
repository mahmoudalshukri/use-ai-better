"use client";

import { ChevronRight, Target } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { goalStarterCopy } from "@/content/site-copy";

export function GoalStarter() {
  const router = useRouter();
  const [goal, setGoal] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = goal.trim();
    router.push(trimmed ? `/discover?goal=${encodeURIComponent(trimmed)}` : "/discover");
  };

  return (
    <Card className="gap-0 p-5 sm:p-6 md:p-7 lg:self-end">
      <form onSubmit={submit}>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-primary">{goalStarterCopy.kicker}</p>
            <h2 className="mt-2 font-heading text-xl font-bold sm:text-2xl">{goalStarterCopy.heading}</h2>
          </div>
          <Target className="size-6 shrink-0 text-highlight" aria-hidden />
        </div>
        <label htmlFor="home-goal" className="sr-only">
          Your goal
        </label>
        <Textarea
          id="home-goal"
          value={goal}
          onChange={(event) => setGoal(event.target.value)}
          className="min-h-32 resize-none bg-card text-base leading-relaxed"
          placeholder={goalStarterCopy.placeholder}
        />
        <div className="mt-4 flex flex-wrap gap-2">
          {goalStarterCopy.suggestions.map((suggestion) => (
            <Button
              key={suggestion}
              type="button"
              variant="secondary"
              size="xs"
              className="rounded-full text-muted-foreground"
              onClick={() => setGoal(suggestion)}
            >
              {suggestion}
            </Button>
          ))}
        </div>
        <Button type="submit" size="lg" className="mt-6 h-11 w-full md:mt-7">
          {goalStarterCopy.submit}
          <ChevronRight data-icon="inline-end" />
        </Button>
      </form>
    </Card>
  );
}
