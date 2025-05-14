'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

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
        { value: 'active', label: 'Công khai' },
        { value: 'inactive', label: 'Không công khai' },
    ],
};

type TabsListProps = {
    value?: string;
};

function TabsList({ value }: TabsListProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const matchedKey = Object.keys(tabMap).find((key) => pathname.startsWith(key));
    const tabs = matchedKey ? tabMap[matchedKey] : [];

    // Lấy giá trị của 'status' từ query string
    const statusParam = searchParams.get('status') || value || tabs[0]?.value;

    if (!tabs.length) return null;

    const handleChangeStatus = async (value: string) => {
        if (value !== 'all') {
            router.push(`${matchedKey}?status=${value}`);
        } else {
            router.push(`${matchedKey}`);
        }
    };

    return (
        <ToggleGroup
            type="single"
            value={statusParam}
            onValueChange={(value) => handleChangeStatus(value)}
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
