import classNames from 'classnames/bind';
import styles from './SercutiryForm.module.scss';
import { ChevronRight } from 'lucide-react';
import DialogSection from '@/app/(SingleLayout)/profile/components/DialogSection/DialogSection';

const cx = classNames.bind(styles);

function SercurityForm() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('wrap')}>
                <h2 className={cx('title')}>Thông tin cá nhân</h2>
                <p className={cx('desc')}>Quản lí thông tin các nhân của bạn</p>
                <div className={cx('content')}>
                    {/* Input */}
                    <DialogSection name="password" label="mật khẩu" value="dsadasd" type="password">
                        <div className={cx('item')}>
                            <div className={cx('item-info')}>
                                <label className={cx('label')}>Mật khẩu</label>
                                <p className={cx('items-info-desc')}>đổi mật khẩu</p>
                            </div>
                            <ChevronRight />
                        </div>
                    </DialogSection>
                </div>
            </div>
        </div>
    );
}

export default SercurityForm;
