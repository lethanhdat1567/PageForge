import classNames from 'classnames/bind';
import styles from './Templates.module.scss';
import DataTable from '@/components/DataTable/DataTable';
import { mockTemplates } from '@/lib/data';
import { templateColumns } from '@/tables/templateColumns';

const cx = classNames.bind(styles);

function Templates() {
    return (
        <div className={cx('wrap')}>
            <h1 className={cx('title')}>Quản lý giao diện</h1>
            <div className={cx('body')}>
                <DataTable data={mockTemplates} columns={templateColumns} />
            </div>
        </div>
    );
}

export default Templates;
