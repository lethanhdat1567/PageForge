import classNames from 'classnames/bind';
import styles from './FormSection.module.scss';

const cx = classNames.bind(styles);

function FormSection({ children }: { children: React.ReactNode }) {
    return <div className={cx('wrap')}>{children}</div>;
}

export default FormSection;
