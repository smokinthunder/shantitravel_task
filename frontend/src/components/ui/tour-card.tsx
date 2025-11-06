import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi";
import { TourCard as TourCardType } from "@/types";
import { IMAGE_CONFIG, UI_CONSTANTS } from "@/lib/constants";

interface TourCardProps {
  tour: TourCardType;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <a
      href={tour.link || "#"}
      className={`group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md ${UI_CONSTANTS.TRANSITIONS.SHADOW}`}
    >
      {/* Tour Image */}
      {tour.image && (
        <div className="relative h-64 overflow-hidden">
          <Image
            src={getStrapiMedia(tour.image.url)}
            alt={tour.title}
            width={IMAGE_CONFIG.SIZES.TOUR_CARD.width}
            height={IMAGE_CONFIG.SIZES.TOUR_CARD.height}
            unoptimized
            className={`w-full h-full object-cover group-hover:scale-105 ${UI_CONSTANTS.TRANSITIONS.HOVER}`}
          />
        </div>
      )}

      {/* Tour Details */}
      <div className="p-6">
        {/* Location and Duration */}
        <div className="text-sm text-gray-500 mb-2 uppercase tracking-wide">
          {tour.location} • {tour.duration}
        </div>

        {/* Title */}
        <h3 className={`text-xl font-semibold mb-3 group-hover:text-primary ${UI_CONSTANTS.TRANSITIONS.COLORS}`}>
          {tour.title}
        </h3>

        {/* Highlights */}
        {tour.highlights && tour.highlights.length > 0 && (
          <ul className="space-y-1 mb-4 text-sm text-gray-600">
            {tour.highlights.map((highlight) => (
              <li key={highlight.id} className="flex items-start">
                <span className="mr-2 text-primary">•</span>
                <span>{highlight.label}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Price */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-lg font-semibold text-primary">
            {tour.price}
          </p>
        </div>
      </div>
    </a>
  );
}