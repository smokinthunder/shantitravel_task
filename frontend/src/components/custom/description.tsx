"use client";

import { useState } from "react";
import parse from "html-react-parser";
import { renderBlocksContent } from "@/lib/strapi";

export default function DescriptionWithReadMore({ description , charLimit = 3 }: { description: any[], charLimit?: number }) {
  const [expanded, setExpanded] = useState(false);

  if (!description || description.length === 0) return null;

  // Rendered content
  const fullContent = parse(renderBlocksContent(description));

  // Convert description to plain text for truncation preview
  const plainText = Array.isArray(description)
    ? description.map((block) => JSON.stringify(block)).join(" ")
    : String(description);

  const isLong = plainText.length > charLimit;

  return (
    <div className="text-sm">
      {isLong ? (
        <>
          <div>
            {expanded
              ? fullContent
              : parse(renderBlocksContent(description.slice(0, charLimit)))}
            {!expanded && "..."}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className=" underline mt-1 text-sm font-semibold cursor-pointer"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </>
      ) : (
        <div>{fullContent}</div>
      )}
    </div>
  );
}
