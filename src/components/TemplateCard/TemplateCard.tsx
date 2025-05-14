import classNames from 'classnames/bind';
import styles from './TemplateCard.module.scss';
import Image from 'next/image';
import { imgs } from '../../../public/images';
import { ThumbsUp } from 'lucide-react';

const cx = classNames.bind(styles);

function TemplateCard() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('banner')}>
                <Image className={cx('img', 'main')} src={imgs.HeroBanner} width={200} height={200} alt="Theme banner" />
                <Image className={cx('img', 'sub')} src={imgs.CTA} width={200} height={200} alt="Theme banner" />
            </div>
            <div className={cx('info')}>
                <h2 className={cx('title')}>Sympollll</h2>
                <p className={cx('desc')}>
                    Maranellos advanced filters and tabbed layouts expedite product discovery, aiding customers to swiftly locate desired
                    items.
                </p>
                <div className={cx('footer')}>
                    <div className={cx('review')}>
                        <ThumbsUp size={16} />
                        <span className={cx('sub-text')}>54</span>
                        <span className={cx('sub-text')}>(323)</span>
                    </div>
                    <p className={cx('price')}>Miễn phí</p>
                </div>
            </div>
        </div>
    );
}

export default TemplateCard;
