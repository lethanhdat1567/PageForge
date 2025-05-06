import classNames from 'classnames/bind';
import styles from './Bookings.module.scss';
import DataTable from '@/components/DataTable/DataTable';
import { mockBookings } from '@/lib/data';
import { manageBookingColumns } from '@/tables/manageBookingColumns';

const cx = classNames.bind(styles);

function Bookings() {
    return (
        <div className={cx('wrap')}>
            <h1 className={cx('title')}>Quản lí đặt bàn</h1>
            <div className={cx('body')}>
                <DataTable data={mockBookings} columns={manageBookingColumns} />
            </div>
        </div>
    );
}

export default Bookings;
