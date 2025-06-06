import classNames from 'classnames/bind';
import styles from './SearchTable.module.scss';
import { Input } from '@/components/ui/input';
import { Table } from '@tanstack/react-table';

const cx = classNames.bind(styles);

interface DataTablePaginationProps<TData> {
    table: Table<TData>;
    field: string;
}

function SearchTable<TData>({ table, field }: DataTablePaginationProps<TData>) {
    return (
        <div className="flex items-center py-4 flex-1">
            <Input
                placeholder="Filter emails..."
                value={(table.getColumn(field)?.getFilterValue() as string) ?? ''}
                onChange={(event) => table.getColumn(field)?.setFilterValue(event.target.value)}
                className={cx('input')}
            />
        </div>
    );
}

export default SearchTable;
