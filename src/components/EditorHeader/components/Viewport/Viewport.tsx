import classNames from 'classnames/bind';
import styles from './Viewport.module.scss';
import { Monitor, Smartphone, UnfoldHorizontal } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const cx = classNames.bind(styles);

function Viewport() {
    return (
        <div className={cx('viewport')}>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span className={cx('viewport-icon', 'active')}>
                            <Monitor size={18} />
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Màn hình máy tính</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span className={cx('viewport-icon')}>
                            <Smartphone size={18} />
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Màn hình điện thoại</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <span className={cx('viewport-icon')}>
                            <UnfoldHorizontal size={18} />
                        </span>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Toàn màn hình</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}

export default Viewport;
