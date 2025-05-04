import classNames from 'classnames/bind';
import styles from './ProfileForm.module.scss';
import { ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DialogSection from '@/app/(SingleLayout)/profile/components/DialogSection/DialogSection';

const cx = classNames.bind(styles);

function ProfileForm() {
    return (
        <div className={cx('wrap')}>
            <h2 className={cx('title')}>Thông tin cá nhân</h2>
            <p className={cx('desc')}>Quản lí thông tin các nhân của bạn</p>
            <div className={cx('content')}>
                {/* Input */}
                <DialogSection name="username" label="tên người dùng" value="Le Thanh Dat" type="input">
                    <div className={cx('item')}>
                        <div className={cx('item-info')}>
                            <label className={cx('label')}>Tên người dùng</label>
                            <p className={cx('items-info-desc')}>Le Thanh Dat</p>
                        </div>
                        <ChevronRight />
                    </div>
                </DialogSection>
                {/* Avatar */}
                <DialogSection name="avatar" label="ảnh đại diện" value="" type="avatar">
                    <div className={cx('item', 'avatar')}>
                        <div className={cx('item-info')}>
                            <label className={cx('label')}>Ảnh đại diện</label>
                            <Avatar className={cx('avatar')}>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <ChevronRight />
                    </div>
                </DialogSection>
            </div>
        </div>
    );
}

export default ProfileForm;
