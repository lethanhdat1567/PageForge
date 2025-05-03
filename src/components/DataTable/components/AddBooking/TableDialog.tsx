'use client';

import FormBranch from '@/components/FormBranch/FormBranch';
import FormTable from '@/components/FormTable/FormTable';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import { usePathname } from 'next/navigation';

function TableDialog() {
    const pathname = usePathname();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto hidden h-8 lg:flex">
                    <Plus />
                    {pathname === '/admin/tables' ? 'Thêm bàn' : 'Thêm chi nhánh'}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{pathname === '/admin/tables' ? 'Thêm bàn' : 'Thêm chi nhánh'}</DialogTitle>
                </DialogHeader>
                {pathname === '/admin/tables' && <FormTable />}
                {pathname === '/admin/branches' && <FormBranch />}
            </DialogContent>
        </Dialog>
    );
}

export default TableDialog;
