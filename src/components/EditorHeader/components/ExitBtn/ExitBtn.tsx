'use client';

import classNames from 'classnames/bind';
import styles from './ExitBtn.module.scss';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const cx = classNames.bind(styles);

function ExitBtn() {
    const router = useRouter();

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button className={cx('exit-btn')} onClick={() => router.back()}>
                        <LogOut className={cx('exit-btn-icon')} size={20} />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default ExitBtn;
