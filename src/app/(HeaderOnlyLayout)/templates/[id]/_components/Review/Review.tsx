/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './Review.module.scss';

import AnalyshReview from '@/app/(HeaderOnlyLayout)/templates/[id]/_components/Review/AnalyshReview';
import reviewApiRequest from '@/HttpRequest/reviewRequest';
import ReviewsContent from '@/app/(HeaderOnlyLayout)/templates/[id]/_components/Review/ReviewsContent';

const cx = classNames.bind(styles);

async function Review({ id }: { id: string }) {
    const requestPayload = await reviewApiRequest.getByTemplateId(Number(id));
    const templates = (requestPayload.payload as any).data;

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
                        <AnalyshReview id={id} />
                        <ReviewsContent templates={templates} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
