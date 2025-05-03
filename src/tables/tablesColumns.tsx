'use client';

import React from 'react';
import { tableResType } from '@/schemaValidations/table.schema';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnHeader } from '@/components/DataTable/components/ColumnHeader/ColumnHeader';
import FormInputTable from '@/components/DataTable/components/FormInputTable/FormInputTable';
import RowAction from '@/components/DataTable/components/RowAction/RowAction';
import StatusTable from '@/components/DataTable/components/StatusTable/StatusTable';
import { DragHandle } from '@/components/DataTable/components/Drag/Drag';

export const tableColumns: ColumnDef<tableResType>[] = [
    {
        id: 'drag',
        header: () => null,
        cell: ({ row }) => <DragHandle id={row.original.id} />,
    },
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
        accessorKey: 'position',
        header: ({ column }) => <ColumnHeader column={column} title="Vị trí" />,
        cell: ({ row }) => <FormInputTable id={row.original.id} value={row.original.location} />,
    },
    {
        accessorKey: 'capacity',
        header: ({ column }) => <ColumnHeader column={column} title="Số lượng" />,
        cell: ({ row }) => <FormInputTable id={row.original.id} value={row.original.capacity} />,
    },
    {
        accessorKey: 'status',
        header: 'Trạng thái',
        cell: ({ row }) => <StatusTable value={row.original.status} type="table" />,
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            return <RowAction id={row.original.id} />;
        },
    },
];
