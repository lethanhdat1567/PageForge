import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

function TabsList() {
    return (
        <ToggleGroup type="single" defaultValue="outline" className="inline-flex items-center gap-4 rounded-xl bg-[#e7e7e7] p-1">
            <ToggleGroupItem
                value="all"
                className="px-3 py-1.5 text-sm font-medium rounded-md data-[state=on]:bg-white data-[state=on]:text-black"
            >
                Tất cả
            </ToggleGroupItem>
            <ToggleGroupItem
                value="confirmed"
                className="px-3 py-1.5 text-sm font-medium rounded-md data-[state=on]:bg-white data-[state=on]:text-black"
            >
                Xác nhận
            </ToggleGroupItem>
            <ToggleGroupItem
                value="pending"
                className="px-3 py-1.5 text-sm font-medium rounded-md data-[state=on]:bg-white data-[state=on]:text-black"
            >
                Đang chờ
            </ToggleGroupItem>
            <ToggleGroupItem
                value="cancel"
                className="px-3 py-1.5 text-sm font-medium rounded-md data-[state=on]:bg-white data-[state=on]:text-black"
            >
                Đã hủy
            </ToggleGroupItem>
        </ToggleGroup>
    );
}

export default TabsList;
