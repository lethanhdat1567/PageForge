import classNames from 'classnames/bind';
import styles from './NoteTable.module.scss';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const cx = classNames.bind(styles);

function NoteTable({ noteValue, title = 'Ghi chú' }: { noteValue: string | undefined; title?: string }) {
    return (
        <Dialog>
            <DialogTrigger className={cx('dialog-content')}>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className={cx('note-title')}>{title}</span>
                        </TooltipTrigger>
                        <TooltipContent>{noteValue}</TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        <Textarea defaultValue={noteValue} className={cx('text-area')} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default NoteTable;
