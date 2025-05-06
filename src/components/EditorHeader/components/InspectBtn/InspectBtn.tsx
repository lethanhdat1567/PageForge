import classNames from 'classnames/bind';
import styles from './InspectBtn.module.scss';
import { SquareDashedMousePointer } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const cx = classNames.bind(styles);

function InspectBtn() {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <button className={cx('inspect-btn')}>
                        <SquareDashedMousePointer size={22} />
                    </button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>DevTools </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}

export default InspectBtn;
