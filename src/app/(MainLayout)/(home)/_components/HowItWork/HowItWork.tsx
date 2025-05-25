'use client';

import classNames from 'classnames/bind';
import styles from './HowItWork.module.scss';
import { howItWorkData } from '@/lib/data';
import Label from '@/components/Label/Labe';
import { useInView } from 'react-intersection-observer';

const cx = classNames.bind(styles);

function HowItWork() {
    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    return (
        <div className={cx('wrap')} ref={ref}>
            <div className={cx('header', `fade fade-left ${inView ? 'in-view' : ''}`)}>
                <Label>How It Work</Label>
                <p className={cx('header-desc')}>
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services
                    include:
                </p>
            </div>
            <div className={cx('body', `fade fade-up ${inView ? 'in-view' : ''}`)}>
                <div className="grid grid-cols-3 gap-6">
                    {howItWorkData.map((item) => (
                        <div className={cx('item')} key={item.title}>
                            <span className={cx('item-icon-wrap')}>
                                <item.icon className={cx('item-icon')} />
                            </span>
                            <h2 className={cx('item-title')}>{item.title}</h2>
                            <p className={cx('item-desc')}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HowItWork;
