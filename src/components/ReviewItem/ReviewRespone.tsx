/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import classNames from 'classnames/bind';
import styles from './ReviewItem.module.scss';
import { useState, useRef, useEffect } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/app/AppProvider';
import { useParams, useRouter } from 'next/navigation';
import reviewApiRequest from '@/HttpRequest/reviewRequest';
import { toast } from 'sonner';

const cx = classNames.bind(styles);

interface ReviewResponseProps {
    reviewId: string | number;
    mode?: 'reply' | 'edit';
    initialOpen?: boolean;
    initialValue?: string;
    onDone?: () => void; // gọi sau khi hoàn thành gửi hoặc cập nhật
}

export default function ReviewResponse({ reviewId, mode = 'reply', initialOpen = false, initialValue = '', onDone }: ReviewResponseProps) {
    const { user } = useAppContext();
    const params = useParams();
    const { id } = params;
    const router = useRouter();

    const [value, setValue] = useState(initialValue);
    const [isOpen, setIsOpen] = useState(initialOpen);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Auto resize
    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    }, [value, isOpen]);

    const handleSubmit = async () => {
        if (!value.trim()) return;

        setIsSubmitting(true);
        try {
            if (mode === 'edit') {
                await toast.promise(reviewApiRequest.update(Number(reviewId), { content: value }), {
                    loading: 'Đang cập nhật',
                    success: 'Đã cập nhật',
                    error: 'Lỗi cập nhật',
                });
            } else {
                const values = {
                    user_id: user?.id,
                    template_id: Number(id),
                    rating: 'good',
                    content: value,
                    parent_id: reviewId,
                };
                await toast.promise(reviewApiRequest.create(values as any), {
                    loading: 'Đang gửi',
                    success: 'Đã gửi phản hồi',
                    error: 'Gửi phản hồi thất bại',
                });
            }

            setValue('');
            setIsOpen(false);
            router.refresh();
            onDone?.();
        } catch (error) {
            console.error('Lỗi gửi phản hồi', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        setValue('');
        setIsOpen(false);
        onDone?.();
    };

    return (
        <div>
            {!isOpen && mode === 'reply' && (
                <span className={cx('respone-text')} onClick={() => setIsOpen(true)}>
                    Phản hồi
                </span>
            )}

            {isOpen && (
                <div className="space-y-2 mt-2">
                    <Textarea
                        ref={textareaRef}
                        rows={1}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder={mode === 'edit' ? 'Chỉnh sửa nội dung...' : 'Viết phản hồi của bạn...'}
                        className="resize-none overflow-hidden"
                        disabled={isSubmitting}
                    />
                    <div className="flex gap-2">
                        <Button onClick={handleSubmit} disabled={isSubmitting || !value.trim()}>
                            {isSubmitting ? 'Đang gửi...' : mode === 'edit' ? 'Cập nhật' : 'Gửi phản hồi'}
                        </Button>
                        <Button variant="outline" onClick={handleCancel} disabled={isSubmitting}>
                            Hủy
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
