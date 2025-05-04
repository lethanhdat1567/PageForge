import classNames from 'classnames/bind';
import styles from './DialogSection.module.scss';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Plus } from 'lucide-react';
import { Label } from '@/components/ui/label';

const cx = classNames.bind(styles);

type Props = {
    name: string;
    label: string;
    type: 'input' | 'avatar' | 'password';
    value: string;
    children: React.ReactNode;
};

function DialogSection({ children, name, value, label, type }: Props) {
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
                        <Input id={name} value={value} className="col-span-3" />
                    </div>
                )}
                {type === 'avatar' && (
                    <div className={cx('dialog-form-wrap')}>
                        <Avatar className={cx('avatar-dialog')}>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Button className={cx('dialog-avatar-btn')} variant={'outline'}>
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
                    <Button type="submit" className="w-full">
                        Cập nhật
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default DialogSection;
