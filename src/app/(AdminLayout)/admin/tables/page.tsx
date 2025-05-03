import classNames from 'classnames/bind';
import styles from './Tables.module.scss';
import DataTable from '@/components/DataTable/DataTable';
import { tableColumns } from '@/tables/tablesColumns';
import { tableMockData } from '@/lib/data';

const cx = classNames.bind(styles);

function Tables() {
    return (
        <div className={cx('wrap')}>
            <h1 className={cx('title')}>Tables</h1>
            <div className={cx('body')}>
                <DataTable columns={tableColumns} data={tableMockData} />
            </div>
        </div>
    );
}

export default Tables;
