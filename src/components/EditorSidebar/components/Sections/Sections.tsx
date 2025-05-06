import classNames from 'classnames/bind';
import styles from './Sections.module.scss';
import { Separator } from '@/components/ui/separator';
import SectionItem from '@/components/EditorSidebar/components/Sections/SectionItem/SectionItem';

const cx = classNames.bind(styles);

function Sections() {
    return (
        <div className={cx('wrap')}>
            <h2 className={cx('title')}>Trang chủ</h2>
            <Separator />
            <div className={cx('content')}>
                <SectionItem />
                <Separator />
                <SectionItem />
                <Separator />
                <SectionItem />
                <Separator />
                <SectionItem />
            </div>
        </div>
    );
}

export default Sections;
