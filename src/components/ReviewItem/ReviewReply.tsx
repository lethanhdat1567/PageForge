'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './ReviewItem.module.scss';
import { formatDate } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { EllipsisVertical, ShieldCheck } from 'lucide-react';
import ReviewResponse from '@/components/ReviewItem/ReviewRespone';
import { toast } from 'sonner';
import reviewApiRequest from '@/HttpRequest/reviewRequest';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ReviewReply({ reply }: { reply: any }) {
    const [isEditing, setIsEditing] = useState(false);
    const router = useRouter();

    const handleDestroy = () => {
        toast.promise(
            async () => {
                await reviewApiRequest.delete(reply.id);
            },
            {
                loading: 'Đang xóa',
                success: 'Đã xóa',
                error: 'Lỗi không xác định',
            },
        );
        router.refresh();
    };

    return (
        <div className={cx('review-item-response')} key={reply.id}>
            <div className={cx('review-item-response-head')}>
                <div className={cx('right')}>
                    <h3 className={cx('username')}>{reply?.user?.username}</h3>
                    <ShieldCheck color="green" />
                </div>
                <div className={cx('left')}>
                    <p className={cx('timer')}>{formatDate(reply.updated_at)}</p>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="cursor-pointer">
                            <EllipsisVertical size={18} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => setIsEditing(true)}>Cập nhật</DropdownMenuItem>
                            <DropdownMenuItem variant="destructive" onClick={handleDestroy}>
                                Xóa
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
            <p className={cx('review-item-desc')}>{reply?.content}</p>
            {isEditing && (
                <ReviewResponse
                    reviewId={reply.id}
                    initialOpen={true}
                    initialValue={reply.content}
                    mode="edit"
                    onDone={() => setIsEditing(false)}
                />
            )}
        </div>
    );
}

export default ReviewReply;
