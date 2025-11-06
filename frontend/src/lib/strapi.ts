import { Global, StrapiResponse, HomePage } from "@/types";
import { API_CONFIG, HTTP_STATUS, ERROR_MESSAGES } from "./constants";
import { STRAPI_QUERIES } from "./strapi-queries";

/**
 * Generic API response handler
 */
interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

/**
 * Generic fetch function with error handling
 */
async function fetchFromStrapi<T>(
  endpoint: string,
  queryString?: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_CONFIG.STRAPI_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: API_CONFIG.CACHE_REVALIDATION.DEFAULT,
      },
    };

    const response = await fetch(url, { ...defaultOptions, ...options });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`${ERROR_MESSAGES.FETCH_FAILED}: ${response.status}`, errorText);
      return { data: null, error: `${ERROR_MESSAGES.FETCH_FAILED}: ${response.status}` };
    }

    const result: StrapiResponse<T> = await response.json();
    return { data: result.data, error: null };
  } catch (error) {
    console.error(`${ERROR_MESSAGES.NETWORK_ERROR}:`, error);
    return { data: null, error: ERROR_MESSAGES.NETWORK_ERROR };
  }
}

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
  return `${API_CONFIG.STRAPI_URL}${url}`;
}

/**
 * Fetch global data (header and footer) from Strapi
 */
export async function fetchGlobalData(): Promise<Global | null> {
  const { data, error } = await fetchFromStrapi<Global>(
    API_CONFIG.ENDPOINTS.GLOBAL,
    STRAPI_QUERIES.GLOBAL_DATA(),
    {
      next: {
        revalidate: API_CONFIG.CACHE_REVALIDATION.DEFAULT,
      },
    }
  );

  if (error) {
    console.error("Error fetching global data:", error);
    return null;
  }

  return data;
}

/**
 * Fetch home page data from Strapi
 */
export async function fetchHomePageData(): Promise<HomePage | null> {
  const { data, error } = await fetchFromStrapi<HomePage>(
    API_CONFIG.ENDPOINTS.HOME_PAGE,
    STRAPI_QUERIES.HOME_PAGE_DATA(),
    {
      next: {
        revalidate: API_CONFIG.CACHE_REVALIDATION.DISABLED, // Disable caching for now
      },
    }
  );

  if (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }

  return data;
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
