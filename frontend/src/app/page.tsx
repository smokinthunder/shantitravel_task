import { fetchHomePageData, getStrapiMedia } from "@/lib/strapi";
import { HeroSection } from "@/components/sections/hero-section";
import { ClimateSection } from "@/components/sections/climate-section";
import { ToursSection } from "@/components/sections/tours-section";
import { GuidesSection } from "@/components/sections/guides-section";
import { IMAGE_CONFIG, UI_CONSTANTS } from "@/lib/constants";
import { ERROR_MESSAGES } from "@/lib/constants";
import NeedHelpSection from "@/components/sections/needHelp-section";
import ReasonsSection from "@/components/sections/reasons-section";
import LongDescriptionSection from "@/components/sections/long-description-section.tsx";
import ImageSection from "@/components/sections/image-section";
import Image from "next/image";

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
    guidesSection,
    needHelp,
    reasons,
    longDescription,
    imagesSection,
  } = homePageData;

  return (
    <main
      className={`container mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 max-w-7xl`}
    >
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
      {climate && <ClimateSection climate={climate} region={region} />}

      {/* Tours Section */}
      {toursSection && <ToursSection toursSection={toursSection} />}

      {/* Guides Section */}
      {guidesSection && <GuidesSection guidesSection={guidesSection} />}

      {needHelp && <NeedHelpSection needHelp={needHelp} />}

      {reasons && <ReasonsSection reasonsSection={reasons} />}

      {longDescription && (
        <LongDescriptionSection longDescription={longDescription} />
      )}
      {imagesSection && <ImageSection images={imagesSection} />}

      
    </main>
  );
}
