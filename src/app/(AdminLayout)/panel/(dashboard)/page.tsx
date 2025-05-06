'use client';

import classNames from 'classnames/bind';
import styles from './DashBoard.module.scss';
import { cardPanelDashboardData } from '@/lib/data';
import CardAnalysh from '@/app/(AdminLayout)/admin/(dashboard)/components/CardAnalysh/CardAnalysh';

import { DatePicker } from '@/components/DatePicker/DatePicker';
import Chart from '@/app/(AdminLayout)/panel/(dashboard)/components/Chart/Chart';

const cx = classNames.bind(styles);

function DashBoard() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('date-picker')}>
                <DatePicker />
            </div>
            <div className="grid grid-cols-3 gap-2">
                {cardPanelDashboardData.map((item, index) => (
                    <CardAnalysh key={index} item={item} />
                ))}
            </div>
            <div className={cx('chart')}>
                <Chart />
            </div>
        </div>
    );
}

export default DashBoard;
