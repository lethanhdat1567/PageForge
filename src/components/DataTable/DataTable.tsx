/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import * as React from 'react';
import classNames from 'classnames/bind';
import styles from './DataTable.module.scss';
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    VisibilityState,
} from '@tanstack/react-table';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DataTablePagination } from '@/components/DataTablePagination/DataTablePagination';
import HeaderTable from '@/components/DataTable/components/HeaderTable/HeaderTable';
import SearchTable from '@/components/DataTable/components/SearchTable/SearchTable';
import { DndContext, closestCenter, DragEndEvent, useSensors, useSensor, MouseSensor, TouchSensor, KeyboardSensor } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { DraggableRow } from '@/components/DataTable/components/Drag/Drag';
import BulkDestroyBtn from '@/components/DataTable/components/HeaderTable/components/BulkDestroyBtn/BulkDestroyBtn';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    showFilter?: boolean;
    showFooter?: boolean;
    searchField: string;
    onDestroySelected?: any;
}

const cx = classNames.bind(styles);

function DataTable<TData, TValue>({
    columns,
    data,
    showFilter = true,
    showFooter = true,
    searchField,
    onDestroySelected,
}: DataTableProps<TData, TValue>) {
    // ---------------- State ----------------
    const [tableData, setTableData] = React.useState(data);
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});
    const sortableId = React.useId();
    const sensors = useSensors(useSensor(MouseSensor, {}), useSensor(TouchSensor, {}), useSensor(KeyboardSensor, {}));
    //  ---------------- Table state ----------------
    const table = useReactTable({
        data: tableData,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    // Drag handler
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!active || !over || active.id === over.id) return;

        setTableData((prevData) => {
            const oldIndex = prevData.findIndex((item: any) => item.id === active.id);
            const newIndex = prevData.findIndex((item: any) => item.id === over.id);

            if (oldIndex === -1 || newIndex === -1) return prevData;

            return arrayMove(prevData, oldIndex, newIndex);
        });
    }

    return (
        <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            id={sortableId}
        >
            <div>
                {showFilter && <HeaderTable table={table} />}
                <div className={cx('header-wrap')}>
                    <BulkDestroyBtn table={table} onDestroySelected={onDestroySelected} />
                    <SearchTable table={table} field={searchField} />
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                <SortableContext
                                    items={table.getRowModel().rows.map((row) => (row.original as any).id)}
                                    strategy={verticalListSortingStrategy}
                                >
                                    {table.getRowModel().rows.map((row) => (
                                        <DraggableRow key={row.id} row={row} />
                                    ))}
                                </SortableContext>
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                {showFooter && (
                    <div className={cx('pagination')}>
                        <DataTablePagination table={table} />
                    </div>
                )}
            </div>
        </DndContext>
    );
}

export default DataTable;
