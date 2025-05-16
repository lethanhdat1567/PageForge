import classNames from 'classnames/bind';
import styles from './TemplateCard.module.scss';
import Image from 'next/image';
import { ThumbsUp } from 'lucide-react';
import { templateResType } from '@/schemaValidations/templates.schema';
import { resolveImgUrl } from '@/lib/utils';
import Link from 'next/link';

const cx = classNames.bind(styles);

function TemplateCard({ data }: { data: templateResType }) {
    return (
        <Link href={`/templates/${data.id}`}>
            <div className={cx('wrap')}>
                <div className={cx('banner')}>
                    <Image
                        className={cx('img', 'main')}
                        src={resolveImgUrl(data.main_thumbnail as string)}
                        width={600}
                        height={600}
                        alt="Theme banner"
                    />
                    <Image
                        className={cx('img', 'sub')}
                        src={resolveImgUrl(data.sub_thumbnail as string)}
                        width={600}
                        height={600}
                        alt="Theme banner"
                    />
                </div>
                <div className={cx('info')}>
                    <h2 className={cx('title')}>{data.name}</h2>
                    <p className={cx('desc')}>{data.description}</p>
                    <div className={cx('footer')}>
                        <div className={cx('review')}>
                            <ThumbsUp size={16} />
                            <span className={cx('sub-text')}>54</span>
                            <span className={cx('sub-text')}>(323)</span>
                        </div>
                        <p className={cx('price')}>Miễn phí</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default TemplateCard;
