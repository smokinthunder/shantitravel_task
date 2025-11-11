import { NeedHelp as NeedHelpSectionType } from "@/types";
import { ActionButton } from "../ui/action-button";

interface NeedHelpSectionProps {
  needHelp: NeedHelpSectionType;
}

export default function NeedHelpSection({ needHelp }: NeedHelpSectionProps) {
  return (
    <section className="bg-gray-200 my-8 md:my-16 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="container mx-auto max-w-7xl px-4 md:px-12 lg:px-20 py-8 md:py-12 flex flex-col items-center text-center">
        <h1 className="mb-4">{needHelp.title}</h1>
        <p className="mb-6 md:mb-8">{needHelp.subtitle}</p>
        <ActionButton
          link={needHelp.button}
          className="px-6 md:px-8 py-3 md:py-4 border-2 rounded-md"
        />
      </div>
    </section>
  );
}
