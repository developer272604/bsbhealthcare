import * as en from "./content";
import * as ta from "./content.ta";
import { lp, stripLang, type Lang } from "./lang-path";
export { lp, stripLang };
export type { Lang };
export const LANGS: Lang[] = ["en", "ta"];
/** Every named export of lib/content.ts – the Tamil file must provide the same shape. */
export type Content = typeof en;

const map: Record<Lang, Content> = { en, ta };
export const getContent = (lang: Lang): Content => map[lang];

export const htmlLang: Record<Lang, string> = { en: "en-IN", ta: "ta-IN" };
export const ogLocale: Record<Lang, string> = { en: "en_IN", ta: "ta_IN" };

