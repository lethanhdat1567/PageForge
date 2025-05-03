import classNames from 'classnames/bind';
import stlyes from './StatusTable.module.scss';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2Icon, Hourglass, SquareX } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const cx = classNames.bind(stlyes);

function StatusTable({ value, type = 'booking' }: { value: string; type?: 'booking' | 'table' }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Badge variant="outline" className={cx('badge', { [value]: value })}>
                    {value === 'confirmed' && <CheckCircle2Icon />}
                    {value === 'pending' && <Hourglass />}
                    {value === 'cancelled' && <SquareX />}
                    {value === 'confirmed' && 'Xác nhận'}
                    {value === 'pending' && 'Đang chờ'}
                    {value === 'cancelled' && 'Đã hủy'}
                    {/* Table */}
                    {value === 'available' && 'Có sẵn'}
                    {value === 'is_use' && 'Đang sử dụng'}
                    {value === 'maintain' && 'Đang bảo trì'}
                </Badge>
            </DropdownMenuTrigger>
            {type === 'booking' && (
                <DropdownMenuContent>
                    <DropdownMenuItem className={cx('menu-item', 'confirmed')}>Xác nhận</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={cx('menu-item', 'pending')}>Đang chờ</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={cx('menu-item', 'cancelled')}>Đã hủy</DropdownMenuItem>
                </DropdownMenuContent>
            )}
            {type === 'table' && (
                <DropdownMenuContent>
                    <DropdownMenuItem className={cx('menu-item', 'confirmed')}>Có sẵn</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={cx('menu-item', 'pending')}>Đang sử dụng</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={cx('menu-item', 'cancelled')}>Bảo trì</DropdownMenuItem>
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    );
}

export default StatusTable;
