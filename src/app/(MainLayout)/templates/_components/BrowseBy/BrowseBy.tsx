import classNames from 'classnames/bind';
import styles from './BrowseBy.module.scss';
import { Checkbox } from '@/components/ui/checkbox';

const cx = classNames.bind(styles);

function BrowseBy() {
    const browseData = [
        {
            title: 'Sắp xếp',
            data: [
                {
                    id: 1,
                    name: 'Mới nhất',
                },
                {
                    id: 2,
                    name: 'Phổ biến nhất',
                },
                {
                    id: 3,
                    name: 'Đánh giá cao',
                },
            ],
        },
        {
            title: 'Giá',
            data: [
                {
                    id: 1,
                    name: 'Có phí',
                },
                {
                    id: 2,
                    name: 'Miễn phí',
                },
            ],
        },
    ];

    return (
        <div className="w-full">
            {browseData.map((item, index) => (
                <div key={index} className={cx('content-wrap')}>
                    <span className={cx('title')}>{item.title}</span>
                    <div className={cx('content')}>
                        {item.data.map((content) => (
                            <div className={cx('content-item')} key={content.id}>
                                <Checkbox id={`${content.id}`} className={cx('checkbox')} />
                                <label htmlFor={`${content.id}`} className={cx('content-lable')}>
                                    {content.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BrowseBy;
