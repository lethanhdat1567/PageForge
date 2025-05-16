/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './Info.module.scss';
import Image from 'next/image';
import templateApiRequest from '@/HttpRequest/templateRequest';
import { templateResType } from '@/schemaValidations/templates.schema';
import { formatDate, resolveImgUrl } from '@/lib/utils';
import BtnInfo from '@/app/(HeaderOnlyLayout)/templates/[id]/_components/Info/BtnInfo';

const cx = classNames.bind(styles);

async function Info({ id }: { id: string }) {
    const template = ((await templateApiRequest.getById(id)).payload as any).data as templateResType;

    return (
        <div className={cx('head-info')}>
            <div className="container px-28">
                <div className="grid grid-cols-[30%_70%] gap-10">
                    <div className={cx('info-wrap')}>
                        <div className={cx('info')}>
                            <h1 className={cx('info-title')}>{template.name}</h1>
                            <p className={cx('info-price')}>Miễn phí</p>
                            <p className={cx('info-desc')}>{template.description}</p>
                        </div>
                        <BtnInfo template={template} />
                        <span className={cx('info-timer')}>Last updated {formatDate(template.updated_at as string)}</span>
                    </div>
                    <div className={cx('banner-wrap')}>
                        <div className={cx('banner')}>
                            <Image
                                src={resolveImgUrl(template.main_thumbnail as string)}
                                width={1000}
                                height={1000}
                                alt="Theme"
                                className={cx('banner-img')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
