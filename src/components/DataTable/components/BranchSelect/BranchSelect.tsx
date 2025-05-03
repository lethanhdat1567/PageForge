import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function BranchSelect() {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Chọn chi nhánh" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="q1">Chi nhánh Quận 1</SelectItem>
                <SelectItem value="q3">Chi nhánh Quận 3</SelectItem>
                <SelectItem value="bt">Chi nhánh Bình Thạnh</SelectItem>
                <SelectItem value="td">Chi nhánh Thủ Đức</SelectItem>
                <SelectItem value="gv">Chi nhánh Gò Vấp</SelectItem>
            </SelectContent>
        </Select>
    );
}

export default BranchSelect;
