import parse from "html-react-parser";

function renderBlocksContent(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) {
    return "";
  }
  return blocks.map(renderBlock).join("\n");
}

function renderBlock(block: any): string {
  switch (block.type) {
    case "paragraph":
      return `<p>${
        block.children ? block.children.map(renderInline).join("") : ""
      }</p>`;

    case "heading":
      const level: number = block.level || 1;
      const sizes: Record<number, string> = {
        1: "text-4xl font-serif font-bold",
        2: "text-2xl font-serif font-semibold",
        3: "text-2xl font-serif font-semibold",
        4: "text-xl font-serif font-medium",
        5: "text-lg font-serif font-medium",
        6: "text-base font-serif font-medium",
      };
      const text = block.children?.map(renderInline).join("") || "";
      return `<h${level} class="text-primary ${sizes[level]}">${text}</h${level}>`;

    case "list":
      const listTag = block.format === "ordered" ? "ol" : "ul";
      const itemsHTML = (block.children || [])
        .map((child: any) => {
          if (child.type === "listitem") {
            const content = renderBlocksContent(child.children || []);
            return `<li>${content}</li>`;
          }
          return "";
        })
        .join("");
      return `<${listTag}>${itemsHTML}</${listTag}>`;

    case "quote":
      return `<blockquote>${
        block.children ? block.children.map(renderInline).join("") : ""
      }</blockquote>`;

    default:
      return block.children ? block.children.map(renderInline).join("") : "";
  }
}

function renderInline(inline: any): string {
  let text = inline.text || "";
  if (inline.bold) text = `<strong>${text}</strong>`;
  if (inline.italic) text = `<em>${text}</em>`;
  if (inline.underline) text = `<u>${text}</u>`;
  if (inline.strikethrough) text = `<del>${text}</del>`;
  if (inline.code) text = `<code>${text}</code>`;
  if (inline.type === "link" && inline.url) {
    text = `<a href="${inline.url}">${text}</a>`;
  }
  return text;
}

export default function LongDescriptionSection({
  longDescription,
}: {
  longDescription: any[];
}) {
  return (
    <section className="bg-gray-200 my-8 md:my-16 px-4 md:px-12 lg:px-20 py-8 md:py-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] font-sans">
      <div className="container mx-auto max-w-7xl">
        {parse(renderBlocksContent(longDescription))}
      </div>
    </section>
  );
}
