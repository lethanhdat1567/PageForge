'use client';

import classNames from 'classnames/bind';
import styles from './SelectPage.module.scss';

import * as React from 'react';
import { Check, ChevronRight, Home, Phone, CalendarClock } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const frameworks = [
    {
        value: 'homepage',
        label: 'Trang chủ',
        icon: Home,
    },
    {
        value: 'contact',
        label: 'Trang liên hệ',
        icon: Phone,
    },
    {
        value: 'booking',
        label: 'Trang đặt bàn',
        icon: CalendarClock,
    },
];

const cx = classNames.bind(styles);

export function SelectPage() {
    const [open, setOpen] = React.useState(false);
    const [activePage, setActivePage] = React.useState(frameworks[0]);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <div className={cx('page-select')}>
                    <activePage.icon size={22} />
                    <p className={cx('page-select-title')}>{activePage.label}</p>
                    <ChevronRight size={18} />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <Command>
                    <CommandInput placeholder="Tìm trang..." />
                    <CommandList>
                        <CommandEmpty>Không tìm thấy trang nào.</CommandEmpty>
                        <CommandGroup>
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={() => {
                                        setActivePage(framework);
                                        setOpen(false);
                                    }}
                                >
                                    <framework.icon className="mr-2 h-4 w-4" />
                                    <span className="flex-1">{framework.label}</span>
                                    <Check className={cn('h-4 w-4', activePage.value === framework.value ? 'opacity-100' : 'opacity-0')} />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
