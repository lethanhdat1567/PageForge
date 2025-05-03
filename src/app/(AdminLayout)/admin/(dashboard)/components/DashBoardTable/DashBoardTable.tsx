import classNames from 'classnames/bind';
import styles from './DashBoardTable.module.scss';
import DataTable from '@/components/DataTable/DataTable';
import { bookingColumns } from '@/tables/bookingColumns';
import { mockPendingBookings } from '@/lib/rows';

const cx = classNames.bind(styles);

function DashBoardTable() {
    return (
        <div className={cx('wrap')}>
            <h2 className={cx('title')}>Danh sách chờ bàn hôm nay</h2>
            <DataTable data={mockPendingBookings} columns={bookingColumns} showFilter={false} showFooter={false} />
        </div>
    );
}

export default DashBoardTable;
