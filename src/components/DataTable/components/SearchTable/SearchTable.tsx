import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

function SearchTable<TData>({ table }: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center py-4">
      <Input
        placeholder="Filter emails..."
        value={(table.getColumn("username")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("username")?.setFilterValue(event.target.value)
        }
        className="max-w-sm"
      />
    </div>
  );
}

export default SearchTable;
