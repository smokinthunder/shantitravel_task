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
      <h2 className=" flex-1 text-4xl font-serif mb-2">
        {reasonsSection.title}
      </h2>
      <div className="flex-2">
        {reasonsSection.reason.map((item, index) => (
          <div key={item.id} className="mb-6">
            <div className="flex flex-row">
              <p className="text-4xl my-1 mx-2 font-serif text-primary">
                {index + 1}
              </p>
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
