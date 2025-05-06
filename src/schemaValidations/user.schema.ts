import z from 'zod';

export const userBody = z
    .object({
        id: z.number(),
        username: z.string(),
        avatar: z.string(),
        email: z.string(),
        createAt: z.date(),
        updatedAt: z.date(),
    })
    .strict();

export type UserResType = z.TypeOf<typeof userBody>;
