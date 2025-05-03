'use client';

import classNames from 'classnames/bind';
import styles from './AddBooking.module.scss';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import TableDialog from '@/components/DataTable/components/AddBooking/TableDialog';

const cx = classNames.bind(styles);

function AddBooking() {
    const pathname = usePathname(); // Lấy path hiện tại bằng usePathname từ next/navigation

    const redirectPath = ['/admin/reservations'];

    return redirectPath.includes(pathname) ? (
        <Link href={`${pathname}/create`}>
            <Button variant="outline" size="sm" className="ml-auto hidden h-8 lg:flex">
                <Plus />
                Thêm bàn
            </Button>
        </Link>
    ) : (
        <TableDialog />
    );
}

export default AddBooking;
