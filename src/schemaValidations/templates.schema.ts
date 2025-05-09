import z from 'zod';

export const templateBody = z
    .object({
        id: z.number(),
        name: z.string(),
        description: z.string(),
        main_thumbnail: z.string(),
        sub_thumbnail: z.string(),
        status: z.string(),
    })
    .strict();

export type templateResType = z.TypeOf<typeof templateBody>;
