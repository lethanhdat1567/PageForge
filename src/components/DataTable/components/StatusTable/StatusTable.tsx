import classNames from 'classnames/bind';
import stlyes from './StatusTable.module.scss';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2Icon, Hourglass, SquareX, Eye, EyeOff } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const cx = classNames.bind(stlyes);

function StatusTable({ value, type = 'booking' }: { value: string; type?: 'booking' | 'table' | 'template' }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Badge variant="outline" className={cx('badge', { [value]: value })}>
                    {/* Booking */}
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

                    {/* Template */}
                    {value === 'active' && <Eye className="mr-1" />}
                    {value === 'active' && 'Công khai'}
                    {value === 'inactive' && <EyeOff className="mr-1" />}
                    {value === 'inactive' && 'Không công khai'}
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
                    <DropdownMenuItem className={cx('menu-item', 'available')}>Có sẵn</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={cx('menu-item', 'is_use')}>Đang sử dụng</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={cx('menu-item', 'maintain')}>Bảo trì</DropdownMenuItem>
                </DropdownMenuContent>
            )}

            {type === 'template' && (
                <DropdownMenuContent>
                    <DropdownMenuItem className={cx('menu-item', 'active')}>Công khai</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={cx('menu-item', 'inactive')}>Không công khai</DropdownMenuItem>
                </DropdownMenuContent>
            )}
        </DropdownMenu>
    );
}

export default StatusTable;
