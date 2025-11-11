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
    <section className="flex flex-row  my-20">
      <h1 className=" flex-1 mb-2">
        {reasonsSection.title}
      </h1>
      <div className="flex-2">
        {reasonsSection.reason.map((item, index) => (
          <div key={item.id} className="mb-6">
            <div className="flex flex-row">
              <h1 className="font-semibold my-1 mx-3 text-primary">
                {index + 1}
              </h1>
              <div className="flex flex-col">
                <p className=" font-semibold ">{item.title}</p>
                <p>{parse(renderBlocksContent(item.description))}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
