import classNames from 'classnames/bind';
import styles from './Review.module.scss';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import CustomeButton from '@/components/Button/Button';
import { Meh, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const cx = classNames.bind(styles);

function ButtonReview() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <CustomeButton variants="outline" className={cx('review-btn')}>
                    Viết đánh giá
                </CustomeButton>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Write a review</DialogTitle>
                    <DialogDescription>
                        Please make sure you contact the theme author before posting a negative review so they can try to resolve your
                        issue.
                    </DialogDescription>
                </DialogHeader>
                <div className={cx('modal-content')}>
                    <div className={cx('feeling')}>
                        <h3 className={cx('modal-title')}>How does this theme make you feel?</h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div className={cx('feeling-item', 'good')}>
                                <ThumbsUp />
                                <span className={cx('feeling-sub-text')}>I love it!</span>
                            </div>
                            <div className={cx('feeling-item', 'neutral')}>
                                <Meh />
                                <span className={cx('feeling-sub-text')}>Neutral</span>
                            </div>
                            <div className={cx('feeling-item', 'bad')}>
                                <ThumbsDown />
                                <span className={cx('feeling-sub-text')}>I'm not happy</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('comment')}>
                        <h3 className={cx('modal-title')}>How does this theme make you feel?</h3>
                        <Textarea className={cx('text-area')} />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default ButtonReview;
