import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.string(),
    draft: z.boolean(),
    publishDate: z.string().transform((str) => new Date(str)),
    editDate: z
      .string()
      .transform((str) => new Date(str))
      .optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
