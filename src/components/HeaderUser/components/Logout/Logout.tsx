'use client';

import classNames from 'classnames/bind';
import styles from './Logout.module.scss';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getToken, handleErrorApi } from '@/lib/utils';
import authApiRequest from '@/HttpRequest/authRequest';
import { toast } from 'sonner';

const cx = classNames.bind(styles);

function Logout() {
    const router = useRouter();
    const [refreshToken, setRefreshToken] = useState<string | null>();

    useEffect(() => {
        const tokens = getToken();
        setRefreshToken(tokens.refreshToken);
    }, []);

    const handleLogout = async () => {
        try {
            await authApiRequest.logoutFromNextClientToNextServer({ refreshToken });
            router.push('/');
            toast.success('Dang xuat thanh cong');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            handleErrorApi({ error });
        }
    };

    return (
        <DropdownMenuItem className={cx('menu-item', 'logout')} variant="destructive" onClick={handleLogout}>
            Logout
        </DropdownMenuItem>
    );
}

export default Logout;
