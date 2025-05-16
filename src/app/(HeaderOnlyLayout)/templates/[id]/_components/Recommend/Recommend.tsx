import classNames from 'classnames/bind';
import styles from './Recommend.module.scss';
import TemplateCard from '@/components/TemplateCard/TemplateCard';

const cx = classNames.bind(styles);

function Recommend() {
    return (
        <div className={cx('wrap')}>
            <div className="container px-26">
                <h2 className={cx('title')}>Những theme khác bạn có thể thích</h2>
                <div className="grid grid-cols-3 gap-10">
                    {/* <TemplateCard />
                    <TemplateCard />
                    <TemplateCard /> */}
                </div>
            </div>
        </div>
    );
}

export default Recommend;
