/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './Review.module.scss';
import ButtonReview from '@/app/(HeaderOnlyLayout)/templates/[id]/_components/Review/ButtonReview';
import { Meh, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import reviewApiRequest from '@/HttpRequest/reviewRequest';

const cx = classNames.bind(styles);

async function AnalyshReview({ id }: { id: string }) {
    const result = await reviewApiRequest.getAnalysh(Number(id));
    const analysh = (result.payload as any).data;

    const ratingPercent = (rating: number) => {
        return (rating / analysh.total) * 100;
    };

    return (
        <div className={cx('review-progress-wrap')}>
            <h2 className={cx('review-title')}>{analysh.total} đánh giá</h2>
            <div className={cx('progress-item-wrap')}>
                <div className={cx('progress-item')}>
                    <ThumbsUp color="green" />
                    <Progress value={ratingPercent(analysh.good)} />
                    <span className={cx('progress-item-total')}>{analysh.good}</span>
                </div>
                <div className={cx('progress-item')}>
                    <Meh color="#78726d" />
                    <Progress value={ratingPercent(analysh.neutral)} />
                    <span className={cx('progress-item-total')}>{analysh.neutral}</span>
                </div>
                <div className={cx('progress-item')}>
                    <ThumbsDown color="red" />
                    <Progress value={ratingPercent(analysh.bad)} />
                    <span className={cx('progress-item-total')}>{analysh.bad}</span>
                </div>
            </div>
            <ButtonReview />
        </div>
    );
}

export default AnalyshReview;
