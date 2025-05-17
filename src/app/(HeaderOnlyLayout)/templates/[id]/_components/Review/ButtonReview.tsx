/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import classNames from 'classnames/bind';
import styles from './Review.module.scss';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import CustomeButton from '@/components/Button/Button';
import { Meh, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { useEffect, useState } from 'react';
import { useAppContext } from '@/app/AppProvider';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import reviewApiRequest from '@/HttpRequest/reviewRequest';

const cx = classNames.bind(styles);

const statusData = [
    {
        id: 1,
        label: 'Rất thích',
        value: 'good',
        icon: ThumbsUp,
    },
    {
        id: 2,
        label: 'Bình thường',
        value: 'neutral',
        icon: Meh,
    },
    {
        id: 3,
        label: 'Không hài lòng',
        value: 'bad',
        icon: ThumbsDown,
    },
];

function ButtonReview() {
    const router = useRouter();
    const params = useParams();
    const { id } = params;
    const { user } = useAppContext();
    const searchParams = useSearchParams();
    const isUpdate = searchParams.get('update');

    // State
    const [status, setStatus] = useState<'good' | 'neutral' | 'bad'>('good');
    const [input, setInput] = useState('');
    const [open, setOpen] = useState(false);

    const HttpRequest = async (id: number) => {
        try {
            const result = await reviewApiRequest.getById(id);
            const review = (result.payload as any).data;
            setStatus(review.rating);
            setInput(review.content);
        } catch (error) {
            console.log(error);

            toast.error('Có lỗi xảy ra');
        }
    };

    useEffect(() => {
        if (isUpdate) {
            setOpen(true);
            HttpRequest(Number(isUpdate));
        }
    }, [isUpdate]);

    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen);

        if (!isOpen) {
            const params = new URLSearchParams(window.location.search);
            params.delete('update');

            const newPath = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
            window.history.replaceState({}, '', newPath);
        }
    };

    const handleSubmit = async () => {
        const values = {
            user_id: user?.id,
            template_id: Number(id),
            rating: status,
            content: input,
            parent_id: null,
        };

        try {
            const isUpdate = searchParams.get('update');

            if (isUpdate) {
                await toast.promise(reviewApiRequest.update(Number(isUpdate), values as any), {
                    loading: 'Đang lưu',
                    success: 'Bình luận thành công',
                    error: 'Lưu bình luận thất bại',
                });

                // Xóa query 'update' đúng chuẩn Next.js
                const params = new URLSearchParams(window.location.search);
                params.delete('update');
                const newPath = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;

                router.replace(newPath, { scroll: false }); // sử dụng Next.js router
            } else {
                await toast.promise(reviewApiRequest.create(values as any), {
                    loading: 'Đang lưu',
                    success: 'Bình luận thành công',
                    error: 'Lưu bình luận thất bại',
                });
            }

            setOpen(false);
            router.refresh(); // chỉ cần refresh một lần ở ngoài
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <CustomeButton variants="outline" className={cx('review-btn')}>
                    Viết đánh giá
                </CustomeButton>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Viết đánh giá</DialogTitle>
                    <DialogDescription>
                        Hãy cho chúng tôi biết cảm nhận của bạn về sản phẩm, những nhận xét của bạn sẽ giúp chúng tôi cải thiện rất nhiều.
                    </DialogDescription>
                </DialogHeader>
                <div className={cx('modal-content')}>
                    <div className={cx('feeling')}>
                        <h3 className={cx('modal-title')}>Bạn cảm thấy như thế nào về theme này</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {statusData.map((item) => (
                                <div
                                    className={cx('feeling-item', { [item.value]: item.value }, { active: status === item.value })}
                                    key={item.id}
                                    onClick={() => setStatus(item.value as any)}
                                >
                                    <item.icon />
                                    <span className={cx('feeling-sub-text')}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('comment')}>
                        <h3 className={cx('modal-title')}>Nêu lên cảm nghĩ của bạn về theme này</h3>
                        <Textarea className={cx('text-area')} value={input} onChange={(e) => setInput(e.target.value)} />
                    </div>
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit}>Đóng góp</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ButtonReview;
