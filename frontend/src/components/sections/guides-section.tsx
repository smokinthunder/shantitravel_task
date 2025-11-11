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
    <section className="my-28">
      <div className="flex flex-row my-16 items-center">
        <h1 className=" flex-1 mb-2">{title}</h1>
        <div className=" flex-4 grid lg:grid-cols-3 md:grid-cols-2 ">
          {guideCards.map((guideCard) => (
            <a href={guideCard.href ?? "#"}>
              <div className="flex flex-row items-center m-3 cursor-pointer hover:shadow rounded-md ">
                <Image
                  src={getStrapiMedia(guideCard.image.url)}
                  alt={guideCard.label}
                  width={IMAGE_CONFIG.SIZES.GUIDE_CARD.width}
                  height={IMAGE_CONFIG.SIZES.GUIDE_CARD.height}
                  unoptimized
                  className={` object-cover rounded-md hover:scale-105 ${UI_CONSTANTS.TRANSITIONS.HOVER}`}
                />
                <p className="mx-2 font-medium ">{guideCard.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="text-center mt-2">
        <ActionButton
          link={guidesSection.button}
          variant="outline"
          className="px-8 py-2 border-2 rounded-md hover:bg-primary hover:text-white"
        />
      </div>
    </section>
  );
}
