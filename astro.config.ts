import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://github.com/withastro/astro/issues/5357#issuecomment-1314219452
const shikiResourcePaths = Object.keys(
	import.meta.glob([
		"./node_modules/.pnpm/shiki@*/node_modules/shiki/languages/*.tmLanguage.json",
		"./node_modules/.pnpm/shiki@*/node_modules/shiki/themes/*.json",
	]),
);

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  output: "server",
	adapter: vercel({
		includeFiles: shikiResourcePaths,
	}),
});
