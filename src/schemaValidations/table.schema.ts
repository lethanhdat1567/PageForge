import { z } from 'zod';

export const bookingBody = z.object({
    id: z.number(),
    username: z.string().min(1, 'Tên khách hàng không được bỏ trống'),
    phoneNumber: z.string().min(10, 'Số điện thoại phải có ít nhất 10 ký tự').max(15, 'Số điện thoại không hợp lệ'),
    bookingDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Ngày đặt không hợp lệ',
    }),
    bookingTime: z.string().refine((val) => /\d{2}:\d{2}/.test(val), {
        message: 'Thời gian phải theo định dạng HH:MM',
    }),
    members: z.number().min(1, 'Số người phải lớn hơn hoặc bằng 1'),
    status: z.enum(['Confirmed', 'Pending', 'Cancelled']).optional(),
    userNote: z.string().optional(),
    adminNote: z.string().optional(),
});

export type bookingResType = z.infer<typeof bookingBody>;
