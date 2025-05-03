/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './PrivateSideBar.module.scss';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ChevronsLeft } from 'lucide-react';

const cx = classNames.bind(styles);

function CloseSideBar({ onClick }: { onClick: any }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className={cx('tooltip-trigger')} onClick={onClick}>
                    <ChevronsLeft size={20} />
                </TooltipTrigger>
                <TooltipContent>
                    <p>Đóng menu</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default CloseSideBar;
