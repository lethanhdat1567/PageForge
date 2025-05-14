'use client';

import classNames from 'classnames/bind';
import styles from './HeaderPublicUser.module.scss';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import Logout from '@/components/HeaderUser/components/Logout/Logout';
import { Separator } from '@/components/ui/separator';
import { useAppContext } from '@/app/AppProvider';
import { resolveImgUrl } from '@/lib/utils';

const cx = classNames.bind(styles);

function HeaderPublicUser() {
    const { user } = useAppContext();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
                <Avatar className="rounded-sm w-10 h-10">
                    <AvatarImage src={resolveImgUrl(user?.avatar)} alt="@shadcn" className="rounded-none object-cover" />
                    <AvatarFallback className="rounded-none">CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={cx('menu-content')} side="bottom">
                <Link href={`/admin/store`}>
                    <DropdownMenuItem className={cx('menu-item')}>Quản lý theme</DropdownMenuItem>
                </Link>
                <DropdownMenuItem className={cx('menu-item')}>Cài đặt</DropdownMenuItem>
                <Separator />
                <Logout />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default HeaderPublicUser;
