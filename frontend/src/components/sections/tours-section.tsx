import { TourCard } from "@/components/ui/tour-card";
import { ActionButton } from "@/components/ui/action-button";
import { ToursSection as ToursSectionType } from "@/types";
import { UI_CONSTANTS } from "@/lib/constants";

interface ToursSectionProps {
  toursSection: ToursSectionType;
}

export function ToursSection({ toursSection }: ToursSectionProps) {
  return (
    <div className="my-12 md:my-20 lg:my-28">
      {/* Section Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="mb-3 md:mb-4">
          {toursSection.title}
        </h1>
        {toursSection.subtitle && (
          <p className="text-gray-600 text-base md:text-lg">
            {toursSection.subtitle}
          </p>
        )}
      </div>

      {/* Tours Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6`}>
        {toursSection.tourCards?.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      {/* View All Button */}
      {toursSection.viewAllButton && (
        <div className="text-center mt-8 md:mt-10">
          <ActionButton 
            link={toursSection.viewAllButton}
            variant="outline"
            className="px-6 md:px-8 py-2 border-2 rounded-md hover:bg-primary hover:text-white"
          />
        </div>
      )}
    </div>
  );
}