/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import templateApiRequest from '@/HttpRequest/templateRequest';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

function RowAction({ id, field }: { id: any; field: 'template' }) {
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDestroy = async () => {
        try {
            if (field === 'template') {
                await templateApiRequest.deleteTemplate(id);
            }
            setShowDropdown(false);
            router.refresh();
            toast.success(`Xóa ${field} thành công`);
        } catch (error) {
            console.log(error);
            toast.error('Xóa không thành công');
        }
    };

    return (
        <>
            <DropdownMenu open={showDropdown} modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0" onClick={() => setShowDropdown(true)}>
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem variant="default">Cập nhật</DropdownMenuItem>
                    <AlertDialog>
                        <AlertDialogTrigger className="w-full">
                            <DropdownMenuItem variant="destructive">Xóa</DropdownMenuItem>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your account and remove your data from our
                                    servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel onClick={() => setShowDropdown(false)}>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={handleDestroy}>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}

export default RowAction;
