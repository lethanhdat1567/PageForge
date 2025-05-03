import { z } from 'zod';

export const bookingBody = z.object({
    id: z.number().optional(),
    username: z.string().trim().min(1, 'Tên khách hàng không được bỏ trống'),
    phoneNumber: z
        .string()
        .trim()
        .min(10, 'Số điện thoại phải có ít nhất 10 ký tự')
        .max(15, 'Số điện thoại không hợp lệ')
        .regex(/^\d+$/, 'Số điện thoại chỉ được chứa chữ số'),
    bookingDate: z
        .string()
        .trim()
        .refine((val) => /^\d{4}-\d{2}-\d{2}$/.test(val) && !isNaN(Date.parse(val)), {
            message: 'Ngày đặt không hợp lệ (định dạng YYYY-MM-DD)',
        }),
    bookingTime: z
        .string()
        .trim()
        .refine((val) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(val), {
            message: 'Thời gian phải theo định dạng HH:MM (24h)',
        }),
    members: z.number().min(1, 'Số người phải lớn hơn hoặc bằng 1'),
    branch: z.string().min(1, 'Chi nhánh không được bỏ trống'),
    status: z.enum(['confirmed', 'pending', 'cancelled']),
    userNote: z.string().optional(),
    adminNote: z.string().optional(),
});

export type bookingResType = z.infer<typeof bookingBody>;

export const tableBody = z.object({
    id: z.number(),
    location: z.string().min(1, 'Vị trí không được để trống'), // Kiểm tra vị trí không được để trống
    capacity: z.number().min(1, 'Sức chứa phải lớn hơn 0'), // Kiểm tra sức chứa phải lớn hơn 0
    status: z.enum(['available', 'is_use', 'maintain'], {
        errorMap: () => ({ message: 'Trạng thái không hợp lệ' }), // Kiểm tra trạng thái hợp lệ
    }),
});

export type tableResType = z.infer<typeof tableBody>;
