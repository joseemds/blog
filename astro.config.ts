import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import mochaTheme from "./src/assets/themes/frappe.json"
import AutoImport from 'astro-auto-import';

// https://github.com/withastro/astro/issues/5357#issuecomment-1314219452
const shikiResourcePaths = Object.keys(
	import.meta.glob([
		"./node_modules/.pnpm/shiki@*/node_modules/shiki/languages/*.tmLanguage.json",
		"./node_modules/.pnpm/shiki@*/node_modules/shiki/themes/*.json",
	]),
);

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(
		{
			config: {applyBaseStyles: false}
		}
		), AutoImport({
		imports: [
		]
	}), mdx()],
	output: "static",
	markdown: {
		shikiConfig: { theme: mochaTheme }
	},
});
