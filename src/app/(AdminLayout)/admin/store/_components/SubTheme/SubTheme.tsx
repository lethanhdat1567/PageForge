/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './SubTheme.module.scss';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { formatDate, resolveImgUrl } from '@/lib/utils';
import { templateResType } from '@/schemaValidations/templates.schema';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { EllipsisVertical } from 'lucide-react';

const cx = classNames.bind(styles);

function SubTheme({ template, onPublish, onDestroy }: { template: templateResType; onPublish: any; onDestroy: any }) {
    return (
        <div className={cx('sub-item')} key={template.id}>
            <div className={cx('section-info-main')}>
                <div className={cx('main-info-wrap')}>
                    <Image alt="Template image" width={100} height={100} src={resolveImgUrl(template.main_thumbnail as string)} />
                    <div className={cx('main-section-info')}>
                        <div className={cx('main-title-wrap')}>
                            <h2 className={cx('main-title')}>{template.name}</h2>
                        </div>
                        <p className={cx('main-save-desc')}>Lưu lần cuối: {formatDate(template.updated_at as string)}</p>
                    </div>
                </div>
                <div className={cx('utils')}>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={'outline'}>
                                <EllipsisVertical />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>Xem trước</DropdownMenuItem>
                            <DropdownMenuItem variant="destructive" onClick={onDestroy}>
                                Xóa theme
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant={'outline'} onClick={onPublish}>
                        Publish theme
                    </Button>
                    <Button variant={'default'}>Tùy chỉnh</Button>
                </div>
            </div>
        </div>
    );
}

export default SubTheme;
