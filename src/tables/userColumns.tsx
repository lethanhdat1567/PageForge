'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '@/components/ui/checkbox';
import { DragHandle } from '@/components/DataTable/components/Drag/Drag';
import { UserResType } from '@/schemaValidations/user.schema';
import Image from 'next/image';
import { format } from 'date-fns';
import FormInputTable from '@/components/DataTable/components/FormInputTable/FormInputTable';
import { ColumnHeader } from '@/components/DataTable/components/ColumnHeader/ColumnHeader';

export const userColumns: ColumnDef<UserResType>[] = [
    {
        id: 'drag',
        header: () => null,
        cell: ({ row }) => <DragHandle id={row.original.id} />,
        enableSorting: false,
        enableHiding: false,
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
        header: ({ column }) => <ColumnHeader column={column} title="ID" />,
    },
    {
        accessorKey: 'username',
        header: ({ column }) => <ColumnHeader column={column} title="Tên người dùng" />,
        cell: ({ row }) => <FormInputTable id={row.original.id} value={row.original.username} />,
    },
    {
        accessorKey: 'avatar',
        header: 'Ảnh đại diện',
        cell: ({ row }) => <Image src={row.original.avatar} alt="Avatar" width={32} height={32} className="rounded-full object-cover" />,
    },
    {
        accessorKey: 'email',
        header: ({ column }) => <ColumnHeader column={column} title="Email" />,
        cell: ({ row }) => <FormInputTable id={row.original.id} value={row.original.email} />,
    },
    {
        accessorKey: 'createAt',
        header: ({ column }) => <ColumnHeader column={column} title="Ngày tạo" />,
        cell: ({ row }) => format(new Date(row.original.createAt), 'dd/MM/yyyy HH:mm'),
    },
    {
        accessorKey: 'updatedAt',
        header: ({ column }) => <ColumnHeader column={column} title="Cập nhật lần cuối" />,
        cell: ({ row }) => format(new Date(row.original.updatedAt), 'dd/MM/yyyy HH:mm'),
    },
];
