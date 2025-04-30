import classNames from 'classnames/bind';
import stlyes from './StatusTable.module.scss';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2Icon, Hourglass, SquareX } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const cx = classNames.bind(stlyes);

function StatusTable({ value }: { value: string | undefined }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Badge
                    variant="outline"
                    className={cx(
                        'cursor-pointer flex gap-1 px-1.5 [&_svg]:size-3',
                        value === 'Confirmed' && 'border-green-500 text-green-600 dark:border-green-400 dark:text-green-400',
                        value === 'Pending' && 'border-yellow-500 text-yellow-600 dark:border-yellow-400 dark:text-yellow-400',
                        value === 'Cancelled' && 'border-red-500 text-red-600 dark:border-red-400 dark:text-red-400',
                    )}
                >
                    {value === 'Confirmed' && <CheckCircle2Icon />}
                    {value === 'Pending' && <Hourglass />}
                    {value === 'Cancelled' && <SquareX />}
                    {value}
                </Badge>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Trạng thái</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem className="text-green-600 hover:bg-green-200 dark:hover:bg-green-300/50 hover:transition-all hover:duration-200 rounded-md">
                    Confirmed
                </DropdownMenuItem>

                <DropdownMenuItem className="text-yellow-600 hover:bg-yellow-200 dark:hover:bg-yellow-300/50 hover:transition-all hover:duration-200 rounded-md">
                    Pending
                </DropdownMenuItem>

                <DropdownMenuItem className="text-red-600 hover:bg-red-200 dark:hover:bg-red-300/50 hover:transition-all hover:duration-200 rounded-md">
                    Cancelled
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default StatusTable;
