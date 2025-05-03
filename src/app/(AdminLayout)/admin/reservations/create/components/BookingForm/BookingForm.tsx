'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { bookingBody, bookingResType } from '@/schemaValidations/table.schema';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import BranchSelect from '@/components/DataTable/components/BranchSelect/BranchSelect';
import { Textarea } from '@/components/ui/textarea';

function BookingForm() {
    const form = useForm<z.infer<typeof bookingBody>>({
        resolver: zodResolver(bookingBody),
        defaultValues: {
            username: '',
            phoneNumber: '',
            bookingDate: '',
            bookingTime: '',
            members: 1,
            branch: '',
            status: 'pending',
            userNote: '',
            adminNote: '',
        },
    });

    function onSubmit(values: bookingResType) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên khách hàng</FormLabel>
                            <FormControl>
                                <Input placeholder="Nguyễn Văn A" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Số điện thoại</FormLabel>
                            <FormControl>
                                <Input placeholder="0123456789" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[150px]">
                        <FormField
                            control={form.control}
                            name="bookingDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ngày đặt</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex-1 min-w-[120px]">
                        <FormField
                            control={form.control}
                            name="bookingTime"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Giờ đặt</FormLabel>
                                    <FormControl>
                                        <Input type="time" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="flex-1 min-w-[100px]">
                        <FormField
                            control={form.control}
                            name="members"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Số người</FormLabel>
                                    <FormControl>
                                        <Input type="number" min={1} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <FormField
                    control={form.control}
                    name="branch"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Chi nhánh</FormLabel>
                            <FormControl>
                                <BranchSelect />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Trạng thái</FormLabel>
                            <FormControl>
                                <select {...field} className="w-full border rounded px-3 py-2 bg-white dark:bg-black">
                                    <option value="pending">Chờ xác nhận</option>
                                    <option value="confirmed">Đã xác nhận</option>
                                    <option value="cancelled">Đã hủy</option>
                                </select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="userNote"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ghi chú của khách</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Không bắt buộc" className="min-h-[80px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="adminNote"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ghi chú của admin</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Không bắt buộc" className="min-h-[80px]" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-end">
                    <Button type="submit">Thêm</Button>
                </div>
            </form>
        </Form>
    );
}

export default BookingForm;
