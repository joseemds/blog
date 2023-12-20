import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import mdx from "@astrojs/mdx";
import mochaTheme from "./src/assets/themes/latte.json";
import AutoImport from 'astro-auto-import';

// https://github.com/withastro/astro/issues/5357#issuecomment-1314219452

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://letrec.in',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), AutoImport({
    imports: [{
      './src/components/Title.astro': [['default', 'h2']]
    }]
  }), mdx(), react({
			experimentalReactChildren: true
		})],
  output: "static",
  markdown: {
    shikiConfig: {
      theme: mochaTheme
    }
  }
});
