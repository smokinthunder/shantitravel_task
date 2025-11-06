import { IMAGE_CONFIG, UI_CONSTANTS } from "@/lib/constants";
import { getStrapiMedia } from "@/lib/strapi";
import { StrapiMedia } from "@/types";
import Image from "next/image";

interface ImageSectionProps {
  images: StrapiMedia[];
}

export default function ImageSection({ images }: ImageSectionProps) {
  const imageWidthPercent = 100 / images.length;

  return (
    <section className="mt-16 flex flex-row w-full align-bottom -mb-14 h-56">
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            flexBasis: `${imageWidthPercent}%`,
            maxWidth: `${imageWidthPercent}%`,
          }}
          className={`flex `}
        >
          <Image
            src={getStrapiMedia(image.url)}
            alt={image.alternativeText || "Image"}
            unoptimized
            className={`object-cover ${UI_CONSTANTS.TRANSITIONS.DEFAULT}`}
            layout="responsive"
            width={600} // arbitrary large width for aspect ratio control
            height={600} // arbitrary large height for aspect ratio control
          />
        </div>
      ))}
    </section>
  );
}
