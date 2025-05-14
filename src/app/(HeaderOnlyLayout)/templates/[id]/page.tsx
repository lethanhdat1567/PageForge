import classNames from 'classnames/bind';
import styles from './TemplateDetail.module.scss';
import Info from '@/app/(HeaderOnlyLayout)/templates/[id]/_components/Info/Info';
import Review from '@/app/(HeaderOnlyLayout)/templates/[id]/_components/Review/Review';
import Recommend from '@/app/(HeaderOnlyLayout)/templates/[id]/_components/Recommend/Recommend';

const cx = classNames.bind(styles);

function TemplateDetail() {
    return (
        <div className={cx('wrap')}>
            <Info />
            <Review />
            <Recommend />
        </div>
    );
}

export default TemplateDetail;
