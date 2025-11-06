import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";
import { ImageLink } from "@/types";
import { IMAGE_CONFIG } from "@/lib/constants";

interface LogoProps {
  logo: ImageLink;
}

export function Logo({ logo }: LogoProps) {
  return (
    <Image
      src={logo.isUrl ? logo.url : getStrapiMedia(logo.image.url)}
      alt={logo.label ?? "Logo"}
      width={IMAGE_CONFIG.SIZES.LOGO.width}
      height={IMAGE_CONFIG.SIZES.LOGO.height}
      className="object-contain p-1"
    />
  );
}