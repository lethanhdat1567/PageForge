'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import classNames from 'classnames/bind';
import styles from './HeaderUser.module.scss';
import Logout from '@/components/HeaderUser/components/Logout/Logout';
import Link from 'next/link';
import { useAppContext } from '@/app/AppProvider';
import { resolveImgUrl } from '@/lib/utils';

const cx = classNames.bind(styles);

function HeaderUser() {
    const { user } = useAppContext();

    return (
        <div className={cx('header-user')}>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className={cx('wrap')}>
                        <Avatar className={cx('avatar')}>
                            <AvatarImage src={resolveImgUrl(user?.avatar)} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p className={cx('user-name')}>{user?.username}</p>
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent className={cx('menu-content')}>
                    <div className={cx('head-label')}>
                        <Avatar className={cx('head-avatar')}>
                            <AvatarImage src={resolveImgUrl(user?.avatar)} />
                        </Avatar>
                        <div className={cx('head-label-info')}>
                            <DropdownMenuLabel className={cx('label')}>{user?.username}</DropdownMenuLabel>
                            <DropdownMenuLabel className={cx('label')}>{user?.email}</DropdownMenuLabel>
                        </div>
                    </div>
                    <DropdownMenuSeparator />

                    <Link href={`/profile/${user?.id}`}>
                        <DropdownMenuItem className={cx('menu-item')}>Trang cá nhân</DropdownMenuItem>
                    </Link>

                    <DropdownMenuItem className={cx('menu-item')}>Cài đặt</DropdownMenuItem>
                    <Logout />
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default HeaderUser;
