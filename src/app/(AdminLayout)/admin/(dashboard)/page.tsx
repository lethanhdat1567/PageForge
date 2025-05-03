'use client';

import classNames from 'classnames/bind';
import styles from './DashBoard.module.scss';
import { cardDashboardData } from '@/lib/data';
import CardAnalysh from '@/app/(AdminLayout)/admin/(dashboard)/components/CardAnalysh/CardAnalysh';
import Chart from '@/app/(AdminLayout)/admin/(dashboard)/components/Chart/Chart';

import DashBoardTable from '@/app/(AdminLayout)/admin/(dashboard)/components/DashBoardTable/DashBoardTable';
import { DatePicker } from '@/components/DatePicker/DatePicker';

const cx = classNames.bind(styles);

function DashBoard() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('date-picker')}>
                <DatePicker />
            </div>
            <div className="grid grid-cols-4 gap-2">
                {cardDashboardData.map((item, index) => (
                    <CardAnalysh key={index} item={item} />
                ))}
            </div>
            <div className={cx('chart')}>
                <Chart />
            </div>
            <div className={cx('table')}>
                <DashBoardTable />
            </div>
        </div>
    );
}

export default DashBoard;
