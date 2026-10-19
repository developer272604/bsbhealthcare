import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

/**
 * Crawl policy: everything public is allowed – for classic search engines AND for AI search / answer engines
 * (we WANT to be cited when people ask about POCT courses, home blood tests, diabetic care in Chennai).
 * llms.txt / llms-full.txt give those assistants a clean, plain-text summary of the whole site.
 */
const AI_AND_SEARCH_BOTS = [
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "DuckDuckBot",
  "YandexBot",
  "Applebot",
  "Applebot-Extended",
  "Google-Extended", // Gemini / Vertex AI
  "GPTBot", // OpenAI training
  "OAI-SearchBot", // ChatGPT search
  "ChatGPT-User",
  "ClaudeBot", // Anthropic
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Meta-ExternalAgent",
  "Amazonbot",
  "CCBot",
  "cohere-ai",
  "YouBot",
  "MistralAI-User",
];

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_AND_SEARCH_BOTS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
