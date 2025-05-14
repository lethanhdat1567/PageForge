/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { ColumnHeader } from '@/components/DataTable/components/ColumnHeader/ColumnHeader';
import FormInputTable from '@/components/DataTable/components/FormInputTable/FormInputTable';
import RowAction from '@/components/DataTable/components/RowAction/RowAction';
import StatusTable from '@/components/DataTable/components/StatusTable/StatusTable';
import { DragHandle } from '@/components/DataTable/components/Drag/Drag';
import Image from 'next/image';
import { templateResType } from '@/schemaValidations/templates.schema';
import NoteTable from '@/components/DataTable/components/NoteTable/NoteTable';
import { resolveImgUrl } from '@/lib/utils';

export const templateColumns = (httpRequest: () => Promise<void>): ColumnDef<templateResType>[] => [
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
        accessorKey: 'main_thumbnail',
        header: 'Ảnh chính',
        cell: ({ row }) => (
            <Image
                width={50}
                height={50}
                src={resolveImgUrl(row.original.main_thumbnail as any)}
                alt="Main Thumbnail"
                className="rounded object-cover w-[50px] h-[50px]"
            />
        ),
    },
    {
        accessorKey: 'sub_thumbnail',
        header: 'Ảnh phụ',
        cell: ({ row }) => (
            <Image
                width={50}
                height={50}
                src={resolveImgUrl(row.original.sub_thumbnail as any)}
                alt="Sub Thumbnail"
                className="rounded object-cover border w-[50px] h-[50px]"
            />
        ),
    },
    {
        accessorKey: 'name',
        header: ({ column }) => <ColumnHeader column={column} title="Tên template" />,
        cell: ({ row }) => <FormInputTable id={row.original.id} value={row.original.name} field="template" />,
    },
    {
        accessorKey: 'description',
        header: ({ column }) => <ColumnHeader column={column} title="Mô tả" />,
        cell: ({ row }) => <NoteTable title="Mô tả" noteValue={row.original.description} />,
    },
    {
        accessorKey: 'status',
        header: 'Trạng thái',
        cell: ({ row }) => (
            <StatusTable
                onChange={async () => {
                    await httpRequest();
                }}
                id={row.original.id}
                value={row.original.status}
                type="template"
            />
        ),
    },
    {
        id: 'actions',
        cell: ({ row }) => <RowAction id={row.original.id} field="template" />,
    },
];
