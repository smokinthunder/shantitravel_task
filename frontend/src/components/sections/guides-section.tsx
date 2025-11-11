import Image from "next/image";
import Link from "next/link";
import { GuidesSection as GuidesSectionType } from "@/types";
import { IMAGE_CONFIG, UI_CONSTANTS } from "@/lib/constants";
import { getStrapiMedia } from "@/lib/strapi";
import { ActionButton } from "../ui/action-button";

interface GuidesSectionProps {
  guidesSection: GuidesSectionType;
}

export function GuidesSection({ guidesSection }: GuidesSectionProps) {
  const { title, guideCards, button } = guidesSection;

  if (!guideCards || guideCards.length === 0) {
    return null;
  }

  return (
    <section className="my-12 md:my-20 lg:my-28">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 items-start lg:items-center">
        <h1 className="w-full lg:w-1/3 mb-0">{title}</h1>
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {guideCards.map((guideCard) => (
            <a key={guideCard.id} href={guideCard.href ?? "#"}>
              <div className="flex flex-row items-center p-3 cursor-pointer hover:shadow-md rounded-md transition-shadow">
                <Image
                  src={getStrapiMedia(guideCard.image.url)}
                  alt={guideCard.label}
                  width={IMAGE_CONFIG.SIZES.GUIDE_CARD.width}
                  height={IMAGE_CONFIG.SIZES.GUIDE_CARD.height}
                  unoptimized
                  className={`object-cover rounded-md hover:scale-105 ${UI_CONSTANTS.TRANSITIONS.HOVER}`}
                />
                <p className="ml-3 font-medium">{guideCard.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="text-center mt-8 md:mt-10">
        <ActionButton
          link={guidesSection.button}
          variant="outline"
          className="px-6 md:px-8 py-2 border-2 rounded-md hover:bg-primary hover:text-white"
        />
      </div>
    </section>
  );
}
