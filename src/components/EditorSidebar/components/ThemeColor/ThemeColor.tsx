import classNames from 'classnames/bind';
import styles from './ThemeColor.module.scss';
import { Separator } from '@/components/ui/separator';
import { ChevronRight } from 'lucide-react';

const cx = classNames.bind(styles);

function ThemeColor() {
    return (
        <div className={cx('wrap')}>
            <h2 className={cx('title')}>Cài đặt theme</h2>
            <Separator />
            <div className={cx('item')}>
                <p className={cx('item-title')}>Logo</p>
                <ChevronRight />
            </div>
            <Separator />
        </div>
    );
}

export default ThemeColor;
