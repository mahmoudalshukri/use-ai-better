import { PageContainer } from "@/components/shared/page-container";
import { siteConfig } from "@/config/site";
import { CategoryGrid } from "@/features/home/components/category-grid";
import { FeaturedTools } from "@/features/home/components/featured-tools";
import { HomeHero } from "@/features/home/components/home-hero";
import { HowItWorks } from "@/features/home/components/how-it-works";
import { PopularUseCases } from "@/features/home/components/popular-use-cases";
import { getTools } from "@/features/tools/registry";
import { getUseCases } from "@/features/use-cases/queries";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: siteConfig.seoTitle,
  absoluteTitle: true,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <PageContainer className="md:pt-16">
      <HomeHero />
      <CategoryGrid />
      <PopularUseCases useCases={getUseCases().slice(0, 3)} />
      <HowItWorks />
      <FeaturedTools tools={getTools().slice(0, 4)} />
    </PageContainer>
  );
}
