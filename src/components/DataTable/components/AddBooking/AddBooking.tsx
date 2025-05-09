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
    const pathname = usePathname();

    if (pathname === '/admin/reservations') {
        return (
            <Link href="/admin/reservations/create">
                <Button variant="outline" size="sm" className="ml-auto hidden h-8 lg:flex">
                    <Plus className="mr-2 h-4 w-4" />
                    Thêm đặt bàn
                </Button>
            </Link>
        );
    }

    if (pathname === '/admin/tables') {
        return <TableDialog />;
    }

    if (pathname === '/panel/templates') {
        return (
            <Link href="/panel/templates/create">
                <Button variant="outline" size="sm" className="ml-auto hidden h-8 lg:flex">
                    <Plus className="mr-2 h-4 w-4" />
                    Tạo template
                </Button>
            </Link>
        );
    }

    return null;
}

export default AddBooking;
