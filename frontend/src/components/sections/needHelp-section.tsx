import { NeedHelp as NeedHelpSectionType } from "@/types";
import { ActionButton } from "../ui/action-button";

interface NeedHelpSectionProps {
  needHelp: NeedHelpSectionType;
}

export default function NeedHelpSection({ needHelp }: NeedHelpSectionProps) {
  return (
    <section className="bg-gray-200 my-16 flex flex-col items-center px-20 py-12 min-w-full -mx-20 ">
      <h1 className=" mb-2">{needHelp.title}</h1>
      <p>{needHelp.subtitle}</p>
      <div className="text-center mt-8">
        <ActionButton
          link={needHelp.button}
          className="px-8 py-4 border-2 rounded-md "
        />
      </div>
    </section>
  );
}
