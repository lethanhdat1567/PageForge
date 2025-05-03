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

function StatusTable({ value }: { value: string }) {
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
                </Badge>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className={cx('menu-item', 'confirmed')}>Xác nhận</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className={cx('menu-item', 'pending')}>Đang chờ</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className={cx('menu-item', 'cancelled')}>Đã hủy</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default StatusTable;
