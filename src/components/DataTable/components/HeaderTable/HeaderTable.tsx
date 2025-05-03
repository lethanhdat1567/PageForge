/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './HeaderTable.module.scss';
import TabsList from '@/components/DataTable/components/HeaderTable/components/TabsList/TabsList';
import { ColumnToggle } from '@/components/DataTable/components/ColumnToggle/ColumnToggle';
import AddBooking from '@/components/DataTable/components/AddBooking/AddBooking';
import DatePickerBtn from '@/components/DataTable/components/HeaderTable/components/DatePickerBtn/DatePickerBtn';

const cx = classNames.bind(styles);

function HeaderTable({ table }: { table: any }) {
    return (
        <div className={cx('wrap')}>
            <div className={cx('left')}>
                <TabsList />
            </div>
            <div className={cx('right')}>
                <DatePickerBtn />
                <ColumnToggle table={table} />
                <AddBooking />
            </div>
        </div>
    );
}

export default HeaderTable;
