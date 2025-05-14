import classNames from 'classnames/bind';
import styles from './Review.module.scss';
import { Meh, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import ButtonReview from '@/app/(HeaderOnlyLayout)/templates/[id]/_components/Review/ButtonReview';

const cx = classNames.bind(styles);

function Review() {
    return (
        <div className={cx('wrap')}>
            <div className="container px-26">
                <h2 className={cx('title')}>Review</h2>
                <div className={cx('content')}>
                    {/* <div className={cx('empty-wrap')}>
                        <p className={cx('review-title')}>Chưa có nhận xét nào</p>
                        <p className={cx('empty-desc')}>Bạn đã sử dụng theme này? Cho chúng tôi biết cảm nhận của bạn</p>
                    </div>
                    <Button variants="outline" className={cx('review-btn')}>
                        Viết đánh giá
                    </Button>
                 */}
                    <div className="grid grid-cols-[26%_68%] gap-20">
                        <div className={cx('review-progress-wrap')}>
                            <h2 className={cx('review-title')}>21 đánh giá</h2>
                            <div className={cx('progress-item-wrap')}>
                                <div className={cx('progress-item')}>
                                    <ThumbsUp color="green" />
                                    <Progress />
                                    <span className={cx('progress-item-total')}>21</span>
                                </div>
                                <div className={cx('progress-item')}>
                                    <Meh color="#78726d" />
                                    <Progress />
                                    <span className={cx('progress-item-total')}>21</span>
                                </div>
                                <div className={cx('progress-item')}>
                                    <ThumbsDown color="red" />
                                    <Progress />
                                    <span className={cx('progress-item-total')}>21</span>
                                </div>
                            </div>
                            <ButtonReview />
                        </div>
                        <div className={cx('review-item-wrap')}>
                            {/* Review Item */}
                            <div className={cx('review-item')}>
                                <div className={cx('review-item-info')}>
                                    <div className={cx('review-item-head')}>
                                        <div className={cx('review-item-head-left')}>
                                            <h3 className={cx('username')}>Dat Le Thanh</h3>
                                            <ThumbsUp color="green" />
                                        </div>
                                        <p className={cx('timer')}>7 days ago</p>
                                    </div>
                                    <p className={cx('review-item-desc')}>
                                        This theme is excellent! The number of section options and customizations this theme provides is way
                                        more and better than any other themes that I have tried. The support team has also been super duper
                                        helpful. They are prompt to reply and assisted me with any customizations (within reason) that I
                                        need. I look forward to using this and their other themes in our other stores.
                                    </p>
                                </div>
                                <div className={cx('review-item-response')}>
                                    <div className={cx('review-item-response-head')}>
                                        <h3 className={cx('username')}>Dat Le Thanh</h3>
                                        <p className={cx('timer')}>7 days ago</p>
                                    </div>
                                    <p className={cx('review-item-desc')}>
                                        Thank you! Were always here if you have any questions or need further assistance.
                                    </p>
                                </div>
                            </div>
                            <div className={cx('review-item')}>
                                <div className={cx('review-item-info')}>
                                    <div className={cx('review-item-head')}>
                                        <div className={cx('review-item-head-left')}>
                                            <h3 className={cx('username')}>Dat Le Thanh</h3>
                                            <ThumbsUp color="green" />
                                        </div>
                                        <p className={cx('timer')}>7 days ago</p>
                                    </div>
                                    <p className={cx('review-item-desc')}>
                                        This theme is excellent! The number of section options and customizations this theme provides is way
                                        more and better than any other themes that I have tried. The support team has also been super duper
                                        helpful. They are prompt to reply and assisted me with any customizations (within reason) that I
                                        need. I look forward to using this and their other themes in our other stores.
                                    </p>
                                </div>
                                <div className={cx('review-item-response')}>
                                    <div className={cx('review-item-response-head')}>
                                        <h3 className={cx('username')}>Dat Le Thanh</h3>
                                        <p className={cx('timer')}>7 days ago</p>
                                    </div>
                                    <p className={cx('review-item-desc')}>
                                        Thank you! Were always here if you have any questions or need further assistance.
                                    </p>
                                </div>
                            </div>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>
                                            1
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>
                                            2
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>
                                            3
                                        </PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
