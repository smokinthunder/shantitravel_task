import { TourCard } from "@/components/ui/tour-card";
import { ActionButton } from "@/components/ui/action-button";
import { ToursSection as ToursSectionType } from "@/types";
import { UI_CONSTANTS } from "@/lib/constants";

interface ToursSectionProps {
  toursSection: ToursSectionType;
}

export function ToursSection({ toursSection }: ToursSectionProps) {
  return (
    <div className="mt-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif mb-2">
          {toursSection.title}
        </h2>
        {toursSection.subtitle && (
          <p className="text-gray-600">
            {toursSection.subtitle}
          </p>
        )}
      </div>

      {/* Tours Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${UI_CONSTANTS.GRID_GAPS.MEDIUM}`}>
        {toursSection.tourCards?.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>

      {/* View All Button */}
      {toursSection.viewAllButton && (
        <div className="text-center mt-8">
          <ActionButton 
            link={toursSection.viewAllButton}
            variant="outline"
            className="px-8 py-2 border-2 rounded-md hover:bg-primary hover:text-white"
          />
        </div>
      )}
    </div>
  );
}