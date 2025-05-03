/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './NoteTable.module.scss';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const cx = classNames.bind(styles);

function NoteTable({ noteValue }: { noteValue: string | undefined }) {
    return (
        <Dialog>
            <DialogTrigger className={cx('dialog-content')}>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className={cx('note-title')}>Ghi chú</span>
                        </TooltipTrigger>
                        <TooltipContent>{noteValue}</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Ghi chú</DialogTitle>
                    <DialogDescription>
                        <Textarea defaultValue={noteValue} className={cx('text-area')} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default NoteTable;
