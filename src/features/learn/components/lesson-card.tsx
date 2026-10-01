import { Card } from "@/components/ui/card";
import type { Lesson } from "@/types/content";

export function LessonCard({ lesson, index }: { lesson: Lesson; index: number }) {
  return (
    <Card id={lesson.slug} className="scroll-mt-24 flex-row items-start gap-4 p-5 md:p-6">
      <span className="font-mono text-xs leading-7 text-highlight">{String(index + 1).padStart(2, "0")}</span>
      <div className="min-w-0">
        <h2 className="font-heading text-lg font-bold sm:text-xl">{lesson.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lesson.summary}</p>
        <p className="mt-4 border-l-2 border-highlight pl-3 text-sm leading-relaxed">
          <strong>Takeaway:</strong> {lesson.takeaway}
        </p>
      </div>
    </Card>
  );
}
