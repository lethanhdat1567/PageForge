import classNames from 'classnames/bind';
import styles from './Reservation.module.scss';
import DataTable from '@/components/DataTable/DataTable';
import { bookingColumns } from '@/tables/bookingColumns';
import mockBookings from '@/lib/rows';

const cx = classNames.bind(styles);

function Reservation() {
    return (
        <div className={cx('wrap')}>
            <h1 className={cx('title')}>Danh sách đặt bàn</h1>
            <div className={cx('body')}>
                <DataTable columns={bookingColumns} data={mockBookings} />
            </div>
        </div>
    );
}

export default Reservation;
