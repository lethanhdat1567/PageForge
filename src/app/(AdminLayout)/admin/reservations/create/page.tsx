import classNames from 'classnames/bind';
import styles from './CreateBooking.module.scss';
import BackCreateBtn from '@/components/BackCreateBtn/BackCreateBtn';
import BookingForm from '@/app/(AdminLayout)/admin/reservations/create/components/BookingForm/BookingForm';

const cx = classNames.bind(styles);

function CreateBooking() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('head')}>
                <BackCreateBtn />
                <h1 className={cx('title')}>Thêm người đặt bàn</h1>
            </div>
            <div className={cx('form')}>
                <BookingForm />
            </div>
        </div>
    );
}

export default CreateBooking;
