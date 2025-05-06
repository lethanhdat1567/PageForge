import classNames from 'classnames/bind';
import styles from './Users.module.scss';
import DataTable from '@/components/DataTable/DataTable';
import { mockUsers } from '@/lib/data';
import { userColumns } from '@/tables/userColumns';

const cx = classNames.bind(styles);

function Users() {
    return (
        <div className={cx('wrap')}>
            <h1 className={cx('title')}>Quản lí người dùng</h1>
            <div className={cx('body')}>
                <DataTable data={mockUsers} columns={userColumns} />
            </div>
        </div>
    );
}

export default Users;
