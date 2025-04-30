import React from 'react';
import { bookingResType } from '@/schemaValidations/table.schema';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnHeader } from '@/components/DataTable/components/ColumnHeader/ColumnHeader';
import FormInputTable from '@/components/DataTable/components/FormInputTable/FormInputTable';
import StatusTable from '@/components/DataTable/components/StatusTable/StatusTable';
import RowAction from '@/components/DataTable/components/RowAction/RowAction';
import { Notebook } from 'lucide-react';

export const bookingColumns: ColumnDef<bookingResType>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label="Select row" />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'username',
        header: ({ column }) => <ColumnHeader column={column} title="Tên khách hàng" />,
        cell: ({ row }) => <FormInputTable id={row.original.id} value={row.original.username} />,
    },
    {
        accessorKey: 'phoneNumber',
        header: ({ column }) => <ColumnHeader column={column} title="Số điện thoại" />,
    },
    {
        accessorKey: 'bookingDate',
        header: 'Ngày đặt',
    },
    {
        accessorKey: 'bookingTime',
        header: 'Thời gian',
    },
    {
        accessorKey: 'members',
        header: 'Số lượng',
    },
    {
        accessorKey: 'status',
        header: 'Trạng thái',
        cell: ({ row }) => <StatusTable value={row.original.status} />,
    },
    {
        accessorKey: 'userNote',
        header: 'Ghi chú khách',
        cell: ({ row }) => <Notebook />,
    },
    {
        accessorKey: 'adminNote',
        header: 'Ghi chú admin',
        cell: ({ row }) => <Notebook />,
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            return <RowAction id={row.original.id} />;
        },
    },
];
