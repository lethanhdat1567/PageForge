import classNames from 'classnames/bind';
import styles from './MainTheme.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { formatDate, resolveImgUrl } from '@/lib/utils';
import { templateResType } from '@/schemaValidations/templates.schema';

const cx = classNames.bind(styles);

function MainTheme({ template }: { template: templateResType }) {
    return (
        <div className={cx('main-section')} key={template.id}>
            <div className={cx('banner')}>
                <Image alt="Template image" width={600} height={300} src={resolveImgUrl(template.banner as string)} />
            </div>
            <div className={cx('section-info-main')}>
                <div className={cx('main-info-wrap')}>
                    <Image alt="Template image" width={100} height={100} src={resolveImgUrl(template.main_thumbnail as string)} />
                    <div className={cx('main-section-info')}>
                        <div className={cx('main-title-wrap')}>
                            <h2 className={cx('main-title')}>{template.name}</h2>
                            <span className={cx('main-sub')}>Theme đang sử dụng</span>
                        </div>
                        <p className={cx('main-save-desc')}>Lưu lần cuối: {formatDate(template.updated_at as string)}</p>
                    </div>
                </div>
                <Link href={'/admin/editor'}>
                    <Button variant={'default'}>Tùy chỉnh</Button>
                </Link>
            </div>
        </div>
    );
}

export default MainTheme;
