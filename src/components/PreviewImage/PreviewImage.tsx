/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './PreviewImage.module.scss';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { resolveImgUrl } from '@/lib/utils';

const cx = classNames.bind(styles);

function PreviewImage({
    src,
    alt,
    width,
    height,
    onDestroy,
}: {
    src: File | string | undefined;
    alt: string;
    width: any;
    height: any;
    onDestroy: any;
}) {
    const handleUrl = () => {
        if (src instanceof File) {
            return URL.createObjectURL(src);
        } else {
            return src ? resolveImgUrl(src) : '';
        }
    };

    return (
        <div style={{ width, height }} className={cx('wrap')}>
            <Image className={cx('preview-image')} src={handleUrl()} alt={alt} height={100} width={100} />
            <Button variant={'destructive'} className={cx('delete-btn')} onClick={onDestroy}>
                Xóa
            </Button>
        </div>
    );
}

export default PreviewImage;
