import classNames from 'classnames/bind';
import styles from './StatusTable.module.scss';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2Icon, Hourglass, SquareX, Eye, EyeOff } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import templateApiRequest from '@/HttpRequest/templateRequest';
import { toast } from 'sonner';

const cx = classNames.bind(styles);

type StatusType = 'booking' | 'table' | 'template';

interface StatusTableProps {
    id: number | undefined;
    value: string;
    type?: StatusType;
    onChange?: () => void;
}

function StatusTable({ id, value, type, onChange }: StatusTableProps) {
    const handleSelect = async (newValue: string) => {
        try {
            if (type === 'template') {
                await templateApiRequest.updateFieldTemplate(id, { status: newValue });
                toast.success(`Cập nhật ${type} thành công`);
                onChange?.();
            }
        } catch (error) {
            console.log(error);
            toast.error('Cập nhật thất bại');
        }
    };

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

            <DropdownMenuContent>
                {type === 'booking' && (
                    <>
                        <DropdownMenuItem onClick={() => handleSelect('confirmed')} className={cx('menu-item', 'confirmed')}>
                            Xác nhận
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleSelect('pending')} className={cx('menu-item', 'pending')}>
                            Đang chờ
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleSelect('cancelled')} className={cx('menu-item', 'cancelled')}>
                            Đã hủy
                        </DropdownMenuItem>
                    </>
                )}

                {type === 'table' && (
                    <>
                        <DropdownMenuItem onClick={() => handleSelect('available')} className={cx('menu-item', 'available')}>
                            Có sẵn
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleSelect('is_use')} className={cx('menu-item', 'is_use')}>
                            Đang sử dụng
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleSelect('maintain')} className={cx('menu-item', 'maintain')}>
                            Bảo trì
                        </DropdownMenuItem>
                    </>
                )}

                {type === 'template' && (
                    <>
                        <DropdownMenuItem onClick={() => handleSelect('active')} className={cx('menu-item', 'active')}>
                            Công khai
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => handleSelect('inactive')} className={cx('menu-item', 'inactive')}>
                            Không công khai
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default StatusTable;
