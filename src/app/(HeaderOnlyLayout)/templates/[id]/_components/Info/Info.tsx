import classNames from 'classnames/bind';
import styles from './Info.module.scss';
import Image from 'next/image';
import { imgs } from '../../../../../../../public/images';

const cx = classNames.bind(styles);

function Info() {
    return (
        <div className={cx('head-info')}>
            <div className="container px-28">
                <div className="grid grid-cols-[30%_70%] gap-10">
                    <div className={cx('info-wrap')}>
                        <div className={cx('info')}>
                            <h1 className={cx('info-title')}>Sampo</h1>
                            <p className={cx('info-price')}>Miễn phí</p>
                            <p className={cx('info-desc')}>Sampo – The Shopify Theme That Turns Clicks Into Conversions and Sales</p>
                        </div>
                        <div className={cx('info-btns')}>
                            <button className={cx('info-btn', 'primary')}>Lưu theme</button>
                            <button className={cx('info-btn', 'outline')}>Xem demo store</button>
                        </div>
                        <span className={cx('info-timer')}>Last updated May 12, 2025</span>
                    </div>
                    <div className={cx('banner-wrap')}>
                        <div className={cx('banner')}>
                            <Image src={imgs.HeroBanner} width={100} height={100} alt="Theme" className={cx('banner-img')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
