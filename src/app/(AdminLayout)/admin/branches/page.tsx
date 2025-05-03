import classNames from 'classnames/bind';
import styles from './Branches.module.scss';
import DataTable from '@/components/DataTable/DataTable';
import { branchColumns } from '@/tables/branchColumns';
import { mockBranches } from '@/lib/data';

const cx = classNames.bind(styles);

function Branches() {
    return (
        <div className={cx('wrap')}>
            <h1 className={cx('title')}>Chi nhánh</h1>
            <div className={cx('body')}>
                <DataTable columns={branchColumns} data={mockBranches} />
            </div>
        </div>
    );
}

export default Branches;
