import classNames from 'classnames/bind';
import styles from './FilterPrice.module.scss';

const cx = classNames.bind(styles);

function FilterPrice({ value }: { value: string | undefined }) {
    return <p className={cx('wrap')}>{value ? value : 'Miễn phí'}</p>;
}

export default FilterPrice;
