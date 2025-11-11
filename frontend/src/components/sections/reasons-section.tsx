import { renderBlocksContent } from "@/lib/strapi";
import { Reasons as ReasonsSectionTypes } from "@/types";
import parse from "html-react-parser";

interface ReasonsSectionProps {
  reasonsSection: ReasonsSectionTypes;
}

export default function ReasonsSection({
  reasonsSection,
}: ReasonsSectionProps) {
  return (
    <section className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 my-12 md:my-16 lg:my-20">
      <h1 className="w-full lg:w-1/3 mb-0">
        {reasonsSection.title}
      </h1>
      <div className="w-full lg:w-2/3 space-y-6">
        {reasonsSection.reason.map((item, index) => (
          <div key={item.id} className="flex flex-row gap-3 md:gap-4">
            <h2 className="font-semibold text-primary text-2xl md:text-3xl flex-shrink-0">
              {index + 1}
            </h2>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-lg">{item.title}</p>
              <div className="text-gray-700">{parse(renderBlocksContent(item.description))}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
