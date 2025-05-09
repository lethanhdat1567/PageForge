'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { usePathname } from 'next/navigation';

export type TabItem = {
    value: string;
    label: string;
};

const tabMap: Record<string, TabItem[]> = {
    '/admin/reservations': [
        { value: 'all', label: 'Tất cả' },
        { value: 'confirmed', label: 'Xác nhận' },
        { value: 'pending', label: 'Đang chờ' },
        { value: 'cancel', label: 'Đã hủy' },
    ],
    '/admin/tables': [
        { value: 'all', label: 'Có sẵn' },
        { value: 'confirmed', label: 'Đang sử dụng' },
        { value: 'pending', label: 'Đang bảo trì' },
    ],
    '/panel/templates': [
        { value: 'all', label: 'Tất cả' },
        { value: 'public', label: 'Công khai' },
        { value: 'private', label: 'Không công khai' },
    ],
};

type TabsListProps = {
    value?: string;
    onChange?: (value: string) => void;
};

function TabsList({ value, onChange }: TabsListProps) {
    const pathname = usePathname();

    // Tìm key phù hợp nhất (có thể là path đầy đủ hoặc prefix)
    const matchedKey = Object.keys(tabMap).find((key) => pathname.startsWith(key));
    const tabs = matchedKey ? tabMap[matchedKey] : [];

    if (!tabs.length) return null;

    return (
        <ToggleGroup
            type="single"
            value={value}
            defaultValue={value || tabs[0].value}
            onValueChange={(val) => onChange?.(val)}
            className="inline-flex items-center gap-2 rounded-xl bg-[#e7e7e7] p-1"
        >
            {tabs.map((tab) => (
                <ToggleGroupItem
                    key={tab.value}
                    value={tab.value}
                    className="px-3 py-1.5 text-sm font-medium rounded-md data-[state=on]:bg-white data-[state=on]:text-black"
                >
                    {tab.label}
                </ToggleGroupItem>
            ))}
        </ToggleGroup>
    );
}

export default TabsList;
