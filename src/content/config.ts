import { defineCollection, z } from 'astro:content';

const lecture = defineCollection({
  type: 'content',
  schema: z.object({
    span: z
      .string()
      .regex(/^[0-9]+\/[0-9]+$/)
      .transform((val) => val.split('/', 2).map(Number) as [number, number]),
    name: z.string(),
    heading: z.string().optional(),
    id: z.string().length(7).regex(/^[A-Z]{4}[0-9]{3}$/),
    day: z.enum(['mon', 'tue', 'wed', 'thu', 'fri']),
    time: z.string().regex(/^[0-9]{2}:[0-9]{2}$/),
    room: z.string(),
    moodle: z.number().positive(),
    position: z.number().positive(),
  }),
});

const teacher = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    surname: z.string(),
    email: z.string().email(),
    address: z.string(),
    street: z.string(),
    city: z.string(),
    zip: z.string(),
  }),
});

export const collections = {
  lecture,
  teacher,
};
