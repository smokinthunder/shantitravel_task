import { Global, StrapiResponse } from "@/types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

/**
 * Get the full URL for a Strapi media file
 */
export function getStrapiMedia(url: string | null): string {
  if (!url) {
    return "";
  }

  // If the URL is already absolute, return it
  if (url.startsWith("http")) {
    return url;
  }

  // Otherwise, prepend the Strapi URL
  return `${STRAPI_URL}${url}`;
}

/**
 * Fetch global data (header and footer) from Strapi
 * Using explicit populate for all nested components
 */
export async function fetchGlobalData(): Promise<Global | null> {
  try {
    // Explicitly populate each component field in header and footer
    // Note: blocks fields (like sustainablePolicy, text) are auto-included and don't need population
    const populateQuery = 
      // Header fields
      'populate[header][populate][links]=*' +
      '&populate[header][populate][menuTabs][populate]=*' +
      '&populate[header][populate][phone]=*' +
      '&populate[header][populate][language][populate]=*' +
      '&populate[header][populate][logo][populate]=*' +
      '&populate[header][populate][button]=*' +
      // Footer fields
      '&populate[footer][populate][footerColumns][populate]=*' +
      '&populate[footer][populate][logo][populate]=*' +
      '&populate[footer][populate][socialLinks][populate]=*' +
      '&populate[footer][populate][termsAndConditions][populate]=*' +
      '&populate[footer][populate][address]=*';
    
    const response = await fetch(
      `${STRAPI_URL}/api/global?${populateQuery}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 60, // Revalidate every 60 seconds
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch global data: ${response.status}`);
      const errorText = await response.text();
      console.error("Error details:", errorText);
      return null;
    }

    const result: StrapiResponse<Global> = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching global data:", error);
    return null;
  }
}

/**
 * Fetch home page data from Strapi
 */
export async function fetchHomePageData(): Promise<import("@/types").HomePage | null> {
  try {
   

       // Explicitly populate all fields including nested components
    const populateQuery = 
      'populate[0]=button1' +
      '&populate[1]=button2' +
      '&populate[2]=image1' +
      '&populate[3]=image2' +
      '&populate[4]=climate.months' +
      '&populate[5]=toursSection.tourCards.image' +
      '&populate[6]=toursSection.tourCards.highlights' +
      '&populate[7]=toursSection.viewAllButton';

    
    const response = await fetch(
      `${STRAPI_URL}/api/home-page?${populateQuery}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          revalidate: 0, // Disable caching for now to test
        },
      }
    );

    if (!response.ok) {
      console.error(`Failed to fetch home page data: ${response.status}`);
      const errorText = await response.text();
      console.error("Error details:", errorText);
      return null;
    }

    const result: import("@/types").StrapiResponse<import("@/types").HomePage> = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}

/**
 * Helper function to render Strapi blocks content
 */
// export function renderBlocksContent(blocks: any[]): string {
//   if (!blocks || !Array.isArray(blocks)) {
//     return "";
//   }

//   return blocks
//     .map((block) => {
//       if (block.type === "paragraph") {
//         return block.children?.map((child: any) => child.text).join("") || "";
//       }
//       return "";
//     })
//     .join("\n");
// }

/**
 * Helper function to render Strapi richtext blocks to HTML
 */
export function renderBlocksContent(blocks: any[]): string {
    if (!blocks || !Array.isArray(blocks)) {
        return "";
    }

    return blocks.map(renderBlock).join('\n');
}

function renderBlock(block: any): string {
    switch (block.type) {
        case 'paragraph':
            return `<p>${block.children ? block.children.map(renderInline).join('') : ''}</p>`;
        case 'heading':
            const level = block.level || 1;
            const text = block.children ? block.children.map(renderInline).join('') : '';
            return `<h${level}>${text}</h${level}>`;
        case 'list':
            const listType = block.format === 'ordered' ? 'ol' : 'ul';
            const items = block.children ? block.children.map((item: any) => `<li>${item.children ? item.children.map(renderInline).join('') : ''}</li>`).join('') : '';
            return `<${listType}>${items}</${listType}>`;
        case 'quote':
            return `<blockquote>${block.children ? block.children.map(renderInline).join('') : ''}</blockquote>`;
        default:
            return block.children ? block.children.map(renderInline).join('') : '';
    }
}

function renderInline(inline: any): string {
    let text = inline.text || '';
    if (inline.bold) text = `<strong>${text}</strong>`;
    if (inline.italic) text = `<em>${text}</em>`;
    if (inline.underline) text = `<u>${text}</u>`;
    if (inline.strikethrough) text = `<del>${text}</del>`;
    if (inline.code) text = `<code>${text}</code>`;
    // Handle links if present
    if (inline.type === 'link' && inline.url) {
        text = `<a href="${inline.url}">${text}</a>`;
    }
    return text;
}
