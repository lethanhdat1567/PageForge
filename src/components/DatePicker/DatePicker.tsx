'use client';

import classNames from 'classnames/bind';
import styles from './DatePicker.module.scss';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useState } from 'react';

const cx = classNames.bind(styles);

export function DatePicker() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className={cx('content')}>
                    <h2 className={cx('title')}>Ngày thống kê</h2>
                    <Button
                        variant={'outline'}
                        className={cn('w-[240px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
                    >
                        <CalendarIcon />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
        </Popover>
    );
}
