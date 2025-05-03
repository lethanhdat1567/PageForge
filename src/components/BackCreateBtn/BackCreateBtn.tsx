'use client';

import classNames from 'classnames/bind';
import styles from './BackCreateBtn.module.scss';
import { ChevronLeft } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useRouter } from 'next/navigation';

const cx = classNames.bind(styles);

function BackCreateBtn() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button className={cx('exit-btn')} onClick={handleBack}>
                        <ChevronLeft />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Quay lại</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default BackCreateBtn;
