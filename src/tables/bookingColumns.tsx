'use client';

import React from 'react';
import { bookingResType } from '@/schemaValidations/table.schema';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnHeader } from '@/components/DataTable/components/ColumnHeader/ColumnHeader';
import FormInputTable from '@/components/DataTable/components/FormInputTable/FormInputTable';
import StatusTable from '@/components/DataTable/components/StatusTable/StatusTable';
import RowAction from '@/components/DataTable/components/RowAction/RowAction';
import NoteTable from '@/components/DataTable/components/NoteTable/NoteTable';
import { DragHandle } from '@/components/DataTable/components/Drag/Drag';
import BranchSelect from '@/components/DataTable/components/BranchSelect/BranchSelect';

export const bookingColumns: ColumnDef<bookingResType>[] = [
    {
        id: 'drag',
        header: () => null,
        cell: ({ row }) => <DragHandle id={row.original.id as number} />,
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
        accessorKey: 'username',
        header: ({ column }) => <ColumnHeader column={column} title="Tên khách hàng" />,
        cell: ({ row }) => <FormInputTable id={row.original.id as number} value={row.original.username} />,
    },
    {
        accessorKey: 'phoneNumber',
        header: 'Số điện thoại',
        cell: ({ row }) => <FormInputTable id={row.original.id as number} value={row.original.phoneNumber} />,
    },
    {
        accessorKey: 'bookingDate',
        header: ({ column }) => <ColumnHeader column={column} title="Ngày đặt" />,
        cell: ({ row }) => <FormInputTable id={row.original.id as number} value={row.original.bookingDate} />,
    },
    {
        accessorKey: 'bookingTime',
        header: ({ column }) => <ColumnHeader column={column} title="Thời gian" />,
        cell: ({ row }) => <FormInputTable id={row.original.id as number} value={row.original.bookingTime} />,
    },
    {
        accessorKey: 'members',
        header: ({ column }) => <ColumnHeader column={column} title="Số lượng" />,
        cell: ({ row }) => <FormInputTable id={row.original.id as number} value={row.original.members} />,
    },
    {
        accessorKey: 'branch',
        header: 'Chi nhánh',
        cell: ({ row }) => <BranchSelect />,
    },
    {
        accessorKey: 'status',
        header: 'Trạng thái',
        cell: ({ row }) => <StatusTable value={row.original.status} />,
    },
    {
        accessorKey: 'userNote',
        header: 'Khách',
        cell: ({ row }) => <NoteTable noteValue={row.original.userNote} />,
    },
    {
        accessorKey: 'adminNote',
        header: 'Admin',
        cell: ({ row }) => <NoteTable noteValue={row.original.adminNote} />,
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            return <RowAction id={row.original.id as number} />;
        },
    },
];
