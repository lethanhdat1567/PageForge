import z from 'zod';

const fileOrUrl = z.union([
    z.instanceof(File).refine((file) => file.size > 0, {
        message: 'Ảnh không được để trống',
    }),
    z.string().nonempty('Ảnh không được để trống'),
]);

export const templateBody = z
    .object({
        id: z.number().optional(),
        name: z.string().nonempty('Tên không được để trống'),
        description: z.string().nonempty('Mô tả không được để trống'),
        main_thumbnail: fileOrUrl,
        sub_thumbnail: fileOrUrl,
        status: z.enum(['active', 'inactive']),
    })
    .strict();

export type templateResType = z.TypeOf<typeof templateBody>;
