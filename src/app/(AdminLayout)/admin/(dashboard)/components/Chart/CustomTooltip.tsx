/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './Chart.module.scss';
import { Calendar, Clock } from 'lucide-react';

const cx = classNames.bind(styles);

function CustomTooltip({ active, payload, title }: { title: string; active?: any; payload?: any }) {
    if (active && payload && payload.length) {
        const { time, reserved, user } = payload[0].payload;
        return (
            <div className={cx('tooltip-wrap')}>
                <div className={cx('tooltip-time')}>
                    <Clock size={16} />
                    <span className={cx('tooltip-time-title')}>Thời gian: {time}</span>
                </div>
                <div className={cx('tooltip-reserved')}>
                    <Calendar color="green" size={16} />
                    <span className={cx('tooltip-reserved-title')}>
                        {title}: {reserved || user}
                    </span>
                </div>
            </div>
        );
    }
    return null;
}

export default CustomTooltip;
