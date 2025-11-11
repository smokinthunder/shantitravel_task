import { HeroImage } from "@/components/ui/hero-image";
import { ActionButton } from "@/components/ui/action-button";
import DescriptionWithReadMore from "@/components/custom/description";
import { Link, StrapiMedia } from "@/types";
import { UI_CONSTANTS } from "@/lib/constants";

interface HeroSectionProps {
  region?: string;
  title?: string;
  description?: any[];
  button1?: Link;
  button2?: Link;
  image1?: StrapiMedia;
  image2?: StrapiMedia;
}

export function HeroSection({
  region,
  title,
  description,
  button1,
  button2,
  image1,
  image2,
}: HeroSectionProps) {
  return (
    <div className={`flex flex-col md:flex-row justify-between items-center ${UI_CONSTANTS.GRID_GAPS.LARGE}`}>
      {/* Content Section */}
      <div className="md:w-1/2 space-y-6">
        {region && (
          <p className="text-lg font-medium text-gray-600 uppercase tracking-wide">
            {region}
          </p>
        )}
        
        {title && (
          <h1 className=" font-serif leading-tight">
            {title}
          </h1>
        )}
        
        {description && (
          <DescriptionWithReadMore description={description} />
        )}
        
        {(button1 || button2) && (
          <div className="flex flex-row gap-2">
            {button1 && <ActionButton link={button1} />}
            {button2 && <ActionButton link={button2} variant="outline" />}
          </div>
        )}
      </div>

      {/* Images Section */}
      {(image1 || image2) && (
        <div className="relative w-96 h-96 flex justify-center items-center">
          {image1 && (
            <HeroImage 
              image={image1} 
              alt="Destination image 1" 
              position="left" 
            />
          )}
          
          {image2 && (
            <HeroImage 
              image={image2} 
              alt="Destination image 2" 
              position="right" 
            />
          )}
        </div>
      )}
    </div>
  );
}