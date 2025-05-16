'use client';

import classNames from 'classnames/bind';
import styles from './TemplateForm.module.scss';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { templateBody, templateResType } from '@/schemaValidations/templates.schema';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import PreviewImage from '@/components/PreviewImage/PreviewImage';
import UploadFile from '@/components/UploadFile/UploadFile';
import templateApiRequest from '@/HttpRequest/templateRequest';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const cx = classNames.bind(styles);

function TemplateForm({ template }: { template?: templateResType }) {
    const router = useRouter();
    const [mainFile, setMainFile] = useState<File | null>(null);
    const [subFile, setSubFile] = useState<File | null>(null);
    const [bannerFile, setBannerFile] = useState<File | null>(null);
    const [isPaid, setIsPaid] = useState(false);

    const form = useForm<z.infer<typeof templateBody>>({
        resolver: zodResolver(templateBody),
        defaultValues: {
            name: template?.name ?? '',
            price: template?.price ?? '',
            description: template?.description ?? '',
            main_thumbnail: template?.main_thumbnail,
            sub_thumbnail: template?.sub_thumbnail,
            banner: template?.banner,
            status: template?.status ?? 'active',
        },
    });

    const onSubmit = async (values: templateResType) => {
        const formData = new FormData();

        formData.append('name', values.name);
        formData.append('description', values.description);
        formData.append('status', values.status);
        if (values.price && values.price !== '') {
            formData.append('price', values.price);
        }

        // Chỉ upload nếu là File
        if (values.main_thumbnail instanceof File) {
            formData.append('main_thumbnail', values.main_thumbnail);
        }

        if (values.sub_thumbnail instanceof File) {
            formData.append('sub_thumbnail', values.sub_thumbnail);
        }

        if (values.banner instanceof File) {
            formData.append('banner', values.banner);
        }
        try {
            const promise = (async () => {
                if (template) {
                    await templateApiRequest.updateTemplate(Number(template.id), formData);
                } else {
                    await templateApiRequest.createTemplate(formData);
                }
                router.refresh();
                router.back();
            })();
            toast.promise(promise, {
                loading: 'Đang lưu',
                success: 'Tạo template thành công',
                error: 'Tạo template thất bại',
            });
        } catch (error) {
            console.error('Lỗi khi tạo/cập nhật template:', error);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className={cx('form-group')}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="flex-1">
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
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Trạng thái</FormLabel>
                                <FormControl>
                                    <Select {...field} value={field.value} onValueChange={field.onChange}>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Chọn trạng thái" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="active">Công khai</SelectItem>
                                                <SelectItem value="inactive">Không công khai</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Loại Template</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => {
                                            if (value === 'free') {
                                                setIsPaid(false);
                                                field.onChange('');
                                            } else {
                                                setIsPaid(true);
                                                field.onChange(''); // hoặc giá mặc định như '10000'
                                            }
                                        }}
                                        value={isPaid ? 'paid' : 'free'}
                                    >
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Chọn loại template" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="free">Miễn phí</SelectItem>
                                                <SelectItem value="paid">Có phí</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {isPaid && (
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Giá tiền (VNĐ)</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        type="number"
                                        min={0}
                                        onChange={(e) => field.onChange(e.target.value)}
                                        placeholder="Nhập giá tiền"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mô tả</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Description" {...field} className="h-40" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid grid-cols-2 gap-5 items-start">
                    <FormField
                        control={form.control}
                        name="main_thumbnail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ảnh chính</FormLabel>
                                <FormControl>
                                    {mainFile || form.watch('main_thumbnail') ? (
                                        <PreviewImage
                                            onDestroy={() => {
                                                field.onChange(null);
                                                setMainFile(null);
                                            }}
                                            src={mainFile || form.watch('main_thumbnail')}
                                            alt="Ảnh phụ"
                                            width={'100%'}
                                            height={300}
                                        />
                                    ) : (
                                        <UploadFile
                                            name={field.name}
                                            label="Upload ảnh chính"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    setMainFile(file);
                                                    field.onChange(file);
                                                }
                                            }}
                                        />
                                    )}
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="sub_thumbnail"
                        render={({ field }) => {
                            return (
                                <FormItem>
                                    <FormLabel>Ảnh phụ</FormLabel>
                                    <FormControl>
                                        {subFile || form.watch('sub_thumbnail') ? (
                                            <PreviewImage
                                                src={subFile || form.watch('sub_thumbnail')}
                                                alt="Ảnh phụ"
                                                width={'100%'}
                                                height={300}
                                                onDestroy={() => {
                                                    field.onChange(null);
                                                    setSubFile(null);
                                                }}
                                            />
                                        ) : (
                                            <UploadFile
                                                name={field.name}
                                                label="Upload ảnh phụ"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) {
                                                        setSubFile(file);
                                                        field.onChange(file);
                                                    }
                                                }}
                                            />
                                        )}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            );
                        }}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="banner"
                    render={({ field }) => {
                        return (
                            <FormItem>
                                <FormLabel>Banner</FormLabel>
                                <FormControl>
                                    {bannerFile || form.watch('banner') ? (
                                        <PreviewImage
                                            src={bannerFile || form.watch('banner')}
                                            alt="Ảnh banner"
                                            width={'100%'}
                                            height={300}
                                            onDestroy={() => {
                                                field.onChange(null);
                                                setBannerFile(null);
                                            }}
                                        />
                                    ) : (
                                        <UploadFile
                                            name={field.name}
                                            label="Upload banner"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    setBannerFile(file);
                                                    field.onChange(file);
                                                }
                                            }}
                                        />
                                    )}
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />

                <div className="flex justify-end">
                    <Button type="submit">Thêm Template</Button>
                </div>
            </form>
        </Form>
    );
}

export default TemplateForm;
