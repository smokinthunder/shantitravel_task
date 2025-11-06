import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";
import { IMAGE_CONFIG, UI_CONSTANTS } from "@/lib/constants";
import { StrapiMedia } from "@/types";

interface HeroImageProps {
  image: StrapiMedia;
  alt: string;
  position: "left" | "right";
}

export function HeroImage({ image, alt, position }: HeroImageProps) {
  const rotationClass = position === "left" ? "-rotate-6 -translate-x-20" : "rotate-6 translate-x-20";
  const zIndexClass = position === "left" ? "z-10" : "z-20";
  
  return (
    <div className={`absolute w-56 h-96 overflow-hidden transform ${rotationClass} ${zIndexClass}`}>
      <Image
        src={getStrapiMedia(image.url)}
        alt={alt}
        width={IMAGE_CONFIG.SIZES.HERO_IMAGE.width}
        height={IMAGE_CONFIG.SIZES.HERO_IMAGE.height}
        unoptimized
        className={`object-cover rounded-2xl ${UI_CONSTANTS.TRANSITIONS.DEFAULT}`}
      />
    </div>
  );
}