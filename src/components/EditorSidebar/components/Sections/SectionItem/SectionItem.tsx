import classNames from 'classnames/bind';
import styles from './SectionItem.module.scss';
import { ChevronRight, Eye, FileText, Trash } from 'lucide-react';

const cx = classNames.bind(styles);

function SectionItem() {
    return (
        <div className={cx('wrap')}>
            <h3 className={cx('title')}>Header</h3>
            <div className={cx('item')}>
                <div className={cx('item-info')}>
                    <ChevronRight size={18} color="#7b7b7b" />
                    <FileText size={18} />
                    <p className={cx('item-title')}>Thanh điều hướng</p>
                </div>
                <div className={cx('utils')}>
                    <span className={cx('utils-icon')}>
                        <Trash size={18} color="red" />
                    </span>
                    <span className={cx('utils-icon')}>
                        <Eye size={18} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SectionItem;
