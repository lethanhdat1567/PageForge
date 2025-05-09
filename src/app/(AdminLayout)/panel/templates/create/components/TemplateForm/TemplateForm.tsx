'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { templateBody, templateResType } from '@/schemaValidations/templates.schema';

function TemplateForm() {
    const form = useForm<z.infer<typeof templateBody>>({
        resolver: zodResolver(templateBody),
        defaultValues: {
            name: '',
            description: '',
            main_thumbnail: '',
            sub_thumbnail: '',
            status: 'public', // default status as 'public'
        },
    });

    function onSubmit(values: templateResType) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên Template</FormLabel>
                            <FormControl>
                                <Input placeholder="Template Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mô tả</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="main_thumbnail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ảnh chính</FormLabel>
                            <FormControl>
                                <Input placeholder="Main Thumbnail URL" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="sub_thumbnail"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Ảnh phụ</FormLabel>
                            <FormControl>
                                <Input placeholder="Sub Thumbnail URL" {...field} />
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

                <div className="flex justify-end">
                    <Button type="submit">Thêm Template</Button>
                </div>
            </form>
        </Form>
    );
}

export default TemplateForm;
