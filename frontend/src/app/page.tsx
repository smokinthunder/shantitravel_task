import { fetchHomePageData } from "@/lib/strapi";
import { HeroSection } from "@/components/sections/hero-section";
import { ClimateSection } from "@/components/sections/climate-section";
import { ToursSection } from "@/components/sections/tours-section";
import { UI_CONSTANTS } from "@/lib/constants";
import { ERROR_MESSAGES } from "@/lib/constants";

/**
 * HomePage component with structured sections
 */
export default async function HomePage() {
  const homePageData = await fetchHomePageData();

  if (!homePageData) {
    return (
      <section className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">{ERROR_MESSAGES.NO_DATA}</p>
      </section>
    );
  }

  const {
    title,
    description,
    region,
    button1,
    button2,
    image1,
    image2,
    climate,
    toursSection,
  } = homePageData;

  return (
    <main className={`container mx-auto ${UI_CONSTANTS.CONTAINER_PADDING} ${UI_CONSTANTS.SECTION_SPACING}`}>
      {/* Hero Section */}
      <HeroSection
        region={region}
        title={title}
        description={description}
        button1={button1}
        button2={button2}
        image1={image1}
        image2={image2}
      />

      {/* Climate Section */}
      {climate && (
        <ClimateSection climate={climate} region={region} />
      )}

      {/* Tours Section */}
      {toursSection && (
        <ToursSection toursSection={toursSection} />
      )}
    </main>
  );
}