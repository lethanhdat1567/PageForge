import { z } from 'zod';

export const branchBody = z.object({
    id: z.number(),
    branch_name: z.string().min(1, 'Tên chi nhánh không được để trống'),
    num_of_table: z.number().min(1, 'Số lượng bàn phải lớn hơn 0'),
});

export type branchResType = z.infer<typeof branchBody>;
