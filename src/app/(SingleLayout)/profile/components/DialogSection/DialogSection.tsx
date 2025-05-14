/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './DialogSection.module.scss';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import { resolveImgUrl } from '@/lib/utils';

const cx = classNames.bind(styles);

type Props = {
    name: string;
    label: string;
    type: 'input' | 'avatar' | 'password';
    value: string | undefined;
    children: React.ReactNode;
    onSave: (name: string, value: string) => void;
};

function DialogSection({ children, name, value, label, type, onSave }: Props) {
    const [inputValue, setInputValue] = useState<string | File | undefined>(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSave = () => {
        onSave(name, inputValue as string);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Cập nhật {label}</DialogTitle>
                    <DialogDescription>Thay đổi {label} ở đây, bấm cập nhật nếu bạn hoàn tất.</DialogDescription>
                </DialogHeader>

                {type === 'input' && (
                    <div className={cx('dialog-form-wrap')}>
                        <Input id={name} value={inputValue as string} className="col-span-3" onChange={handleChangeInput} />
                    </div>
                )}
                {type === 'avatar' && (
                    <div className={cx('dialog-form-wrap')}>
                        <Avatar className={cx('avatar-dialog')}>
                            <AvatarImage
                                src={
                                    inputValue instanceof File
                                        ? URL.createObjectURL(inputValue)
                                        : resolveImgUrl(inputValue) || 'https://github.com/shadcn.png'
                                }
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Input
                            id="avatar-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    setInputValue(file);
                                }
                            }}
                        />
                        <Button
                            className={cx('dialog-avatar-btn')}
                            variant={'outline'}
                            onClick={() => document.getElementById('avatar-upload')?.click()}
                        >
                            <Plus /> Tải ảnh mới lên
                        </Button>
                    </div>
                )}
                {type === 'password' && (
                    <div className={cx('dialog-form-wrap')}>
                        <div className="grid grid-cols-1 items-center gap-2">
                            <Label htmlFor="name" className="text-right">
                                Mật khẩu mới
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" type={type} />
                        </div>
                        <div className="grid grid-cols-1 items-center gap-2 mt-3">
                            <Label htmlFor="name" className="text-right">
                                Nhập lại mật khẩu mới
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" type={type} />
                        </div>
                    </div>
                )}
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="submit" className="w-full" onClick={handleSave}>
                            Cập nhật
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default DialogSection;
