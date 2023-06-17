import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import mochaTheme from "./src/assets/themes/latte.json"
import AutoImport from 'astro-auto-import';

// https://github.com/withastro/astro/issues/5357#issuecomment-1314219452

// https://astro.build/config
export default defineConfig({
	site: 'https://letrec.in',
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
