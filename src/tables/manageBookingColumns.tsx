'use client';

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnHeader } from '@/components/DataTable/components/ColumnHeader/ColumnHeader';
import FormInputTable from '@/components/DataTable/components/FormInputTable/FormInputTable';
import RowAction from '@/components/DataTable/components/RowAction/RowAction';
import { DragHandle } from '@/components/DataTable/components/Drag/Drag';
import { BookingType } from '@/lib/type';

export const manageBookingColumns: ColumnDef<BookingType>[] = [
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
        header: ({ column }) => <ColumnHeader column={column} title="Người đặt bàn" />,
        cell: ({ row }) => <FormInputTable id={row.original.id as number} value={row.original.username} />,
    },
    {
        accessorKey: 'customer',
        header: 'Tên khách hàng',
        cell: ({ row }) => <FormInputTable id={row.original.id as number} value={row.original.customer} />,
    },
    {
        accessorKey: 'customerPhone',
        header: 'Số điện thoại khách hàng',
        cell: ({ row }) => <FormInputTable id={row.original.id as number} value={row.original.customerPhone} />,
    },
    {
        accessorKey: 'members',
        header: ({ column }) => <ColumnHeader column={column} title="Số người" />,
        cell: ({ row }) => <FormInputTable id={row.original.id as number} value={row.original.members} />,
    },
    {
        accessorKey: 'bookingDate',
        header: ({ column }) => <ColumnHeader column={column} title="Ngày đặt" />,
        cell: ({ row }) => <FormInputTable id={row.original.id as number} value={row.original.bookingDate} />,
    },
    {
        id: 'actions',
        header: 'Hành động',
        cell: ({ row }) => {
            return <RowAction id={row.original.id as number} />;
        },
    },
];
