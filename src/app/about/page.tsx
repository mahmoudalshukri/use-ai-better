import type { Metadata } from "next";

import { InfoSection } from "@/components/shared/info-section";
import { PageContainer } from "@/components/shared/page-container";
import { PageHeader } from "@/components/shared/page-header";
import { aboutCopy } from "@/content/site-copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: aboutCopy.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageContainer>
      <PageHeader kicker={aboutCopy.kicker} title={aboutCopy.title} description={aboutCopy.description} />
      <div className="max-w-3xl space-y-10">
        <InfoSection title="The real challenge">{aboutCopy.challenge}</InfoSection>
        <InfoSection title="What this is">{aboutCopy.product}</InfoSection>
        <InfoSection title="Not an account workspace">{aboutCopy.workspace}</InfoSection>
        <InfoSection title={aboutCopy.principlesTitle}>
          <ul className="list-disc space-y-2 pl-5">
            {aboutCopy.principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </InfoSection>
        <InfoSection title={aboutCopy.sourceTitle}>{aboutCopy.source}</InfoSection>
      </div>
    </PageContainer>
  );
}
