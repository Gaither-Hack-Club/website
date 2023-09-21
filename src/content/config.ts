import { z, defineCollection } from "astro:content";

const workshopCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  workshops: workshopCollection,
};
