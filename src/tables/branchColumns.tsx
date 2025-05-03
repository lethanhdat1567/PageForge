'use client';

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnHeader } from '@/components/DataTable/components/ColumnHeader/ColumnHeader';
import FormInputTable from '@/components/DataTable/components/FormInputTable/FormInputTable';
import RowAction from '@/components/DataTable/components/RowAction/RowAction';
import { DragHandle } from '@/components/DataTable/components/Drag/Drag';
import { branchResType } from '@/schemaValidations/branch.schema';

export const branchColumns: ColumnDef<branchResType>[] = [
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
        accessorKey: 'branch_name',
        header: ({ column }) => <ColumnHeader column={column} title="Tên chi nhánh" />,
        cell: ({ row }) => <FormInputTable id={row.original.id} value={row.original.branch_name} />,
    },
    {
        accessorKey: 'num_of_table',
        header: ({ column }) => <ColumnHeader column={column} title="Số lượng bàn" />,
        cell: ({ row }) => <FormInputTable id={row.original.id} value={row.original.num_of_table} />,
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            return <RowAction id={row.original.id} />;
        },
    },
];
