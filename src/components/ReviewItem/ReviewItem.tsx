'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './ReviewItem.module.scss';
import { formatDate } from '@/lib/utils';
import ReviewIconRating from '@/components/ReviewIconRating/ReviewIconRating';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';
import reviewApiRequest from '@/HttpRequest/reviewRequest';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';
import ReviewResponse from '@/components/ReviewItem/ReviewRespone';
import ReviewReply from '@/components/ReviewItem/ReviewReply';

const cx = classNames.bind(styles);

function ReviewItem({ review }: { review: any }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const reviewUser = review?.user;
    const replies = review?.replies;

    console.log(replies.length > 0);

    const handleDestroy = () => {
        toast.promise(
            async () => {
                await reviewApiRequest.delete(review.id);
            },
            {
                loading: 'Đang xóa',
                success: 'Đã xóa',
                error: 'Lỗi không xác định',
            },
        );
        router.refresh();
    };

    const handleUpdate = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('update', review.id); // ghi đè nếu có
        router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
        <div className={cx('review-item')}>
            <div className={cx('review-item-info')}>
                <div className={cx('review-item-head')}>
                    <div className={cx('review-item-head-left')}>
                        <h3 className={cx('username')}>{reviewUser.username}</h3>
                        <ReviewIconRating rating={review?.rating} />
                    </div>
                    <div className={cx('right')}>
                        <p className={cx('timer')}>{formatDate(review.updated_at)}</p>
                        {/* Options */}
                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer">
                                <EllipsisVertical size={18} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onClick={handleUpdate}>Cập nhật</DropdownMenuItem>
                                <DropdownMenuItem variant="destructive" onClick={handleDestroy}>
                                    Xóa
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <p className={cx('review-item-desc')}>{review.content}</p>
            </div>
            {/* Response */}
            <ReviewResponse reviewId={review.id} />
            {replies.length > 0 &&
                replies.map((reply: any) => {
                    return <ReviewReply reply={reply} key={reply.id} />;
                })}
        </div>
    );
}

export default ReviewItem;
