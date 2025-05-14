/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Trash } from 'lucide-react';
import { useState } from 'react';

type Props = {
    table: any;
    onDestroySelected: any;
};

function BulkDestroyBtn({ table, onDestroySelected }: Props) {
    const selectedRows = table.getSelectedRowModel().rows;
    const [showDialog, setShowDialog] = useState(false);

    const handleShowDialog = () => {
        if (selectedRows.length > 0) {
            setShowDialog(true);
        } else {
            setShowDialog(false);
        }
    };

    return (
        <AlertDialog open={showDialog}>
            <Button variant={'destructive'} onClick={handleShowDialog} disabled={selectedRows.length === 0}>
                <Trash />
            </Button>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => onDestroySelected(selectedRows, setShowDialog)}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default BulkDestroyBtn;
