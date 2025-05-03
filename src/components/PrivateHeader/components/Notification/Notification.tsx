import classNames from 'classnames/bind';
import styles from './Notification.module.scss';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Bell } from 'lucide-react';

const cx = classNames.bind(styles);

function NotificationDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className={cx('wrapper')}>
                    <button className={cx('icon-button')}>
                        <Bell size={20} />
                    </button>
                    <span className={cx('badge')}>3</span>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={cx('dropdownContent')}>
                <DropdownMenuLabel>Thông báo</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className={cx('notificationItem')}>Thông báo 1: Đơn hàng mới</DropdownMenuItem>
                <DropdownMenuItem className={cx('notificationItem')}>Thông báo 2: Cập nhật hệ thống</DropdownMenuItem>
                <DropdownMenuItem className={cx('notificationItem')}>Thông báo 3: Có tin nhắn mới</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default NotificationDropdown;
