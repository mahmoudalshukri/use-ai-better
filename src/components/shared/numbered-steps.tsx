import { Card } from "@/components/ui/card";

export function NumberedSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-5 space-y-3">
      {steps.map((step, index) => (
        <li key={step}>
          <Card className="flex-row gap-4 px-4 py-4 md:px-5">
            <span className="font-mono text-xs leading-6 text-highlight">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-relaxed">{step}</p>
          </Card>
        </li>
      ))}
    </ol>
  );
}
