import classNames from 'classnames/bind';
import styles from './DatePickerBtn.module.scss';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';
import { format } from 'date-fns';

import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DatePickerBtn() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className={cx('wrap')}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="ml-auto hidden h-8 lg:flex">
                        <Clock />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
            </Popover>
        </div>
    );
}

export default DatePickerBtn;
