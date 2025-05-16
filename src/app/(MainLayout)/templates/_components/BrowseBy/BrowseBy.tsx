'use client';

import classNames from 'classnames/bind';
import styles from './BrowseBy.module.scss';
import { Checkbox } from '@/components/ui/checkbox';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const cx = classNames.bind(styles);

function BrowseBy() {
    const router = useRouter();

    const browseData = [
        {
            title: 'Sắp xếp',
            key: 'sort',
            data: [
                { id: 1, name: 'Mới nhất', value: 'newest' },
                { id: 2, name: 'Cũ nhất', value: 'oldest' },
                { id: 3, name: 'Đánh giá cao', value: 'top_rated' },
            ],
        },
        {
            title: 'Giá',
            key: 'price',
            data: [
                { id: 4, name: 'Có phí', value: 'paid' },
                { id: 5, name: 'Miễn phí', value: 'free' },
            ],
        },
    ];

    const [selectedOptions, setSelectedOptions] = useState<Record<string, number | null>>({});
    const [pendingParams, setPendingParams] = useState<URLSearchParams | null>(null);

    const handleSelect = (sectionKey: string, sectionTitle: string, itemId: number, value: string) => {
        setSelectedOptions((prev) => {
            const isSame = prev[sectionTitle] === itemId;
            const updated = {
                ...prev,
                [sectionTitle]: isSame ? null : itemId,
            };

            const newParams = new URLSearchParams(window.location.search);
            if (isSame) {
                newParams.delete(sectionKey);
            } else {
                newParams.set(sectionKey, value);
            }

            // Không gọi router.push trực tiếp ở đây
            setPendingParams(newParams);
            return updated;
        });
    };

    useEffect(() => {
        if (pendingParams) {
            router.push(`?${pendingParams.toString()}`);
            setPendingParams(null); // reset sau khi push
        }
    }, [pendingParams, router]);

    return (
        <div className="w-full">
            {browseData.map((section, index) => (
                <div key={index} className={cx('content-wrap')}>
                    <span className={cx('title')}>{section.title}</span>
                    <div className={cx('content')}>
                        {section.data.map((item) => (
                            <div className={cx('content-item')} key={item.id}>
                                <Checkbox
                                    id={`${section.title}-${item.id}`}
                                    className={cx('checkbox')}
                                    checked={selectedOptions[section.title] === item.id}
                                    onCheckedChange={() => handleSelect(section.key, section.title, item.id, item.value)}
                                />
                                <label htmlFor={`${section.title}-${item.id}`} className={cx('content-lable')}>
                                    {item.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BrowseBy;
