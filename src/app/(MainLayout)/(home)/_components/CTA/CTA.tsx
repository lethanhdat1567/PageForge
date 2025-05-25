'use client';

import classNames from 'classnames/bind';
import styles from './CTA.module.scss';
import Button from '@/components/Button/Button';
import Image from 'next/image';
import { imgs } from '../../../../../../public/images';
import { useInView } from 'react-intersection-observer';

const cx = classNames.bind(styles);

function CTA() {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div className={cx('wrap', `fade fade-up ${inView ? 'in-view' : ''}`)} ref={ref}>
            <div className={cx('info')}>
                <h2 className={cx('title', `fade fade-left delay-1 ${inView ? 'in-view' : ''}`)}>Let’s make things happen</h2>
                <p className={cx('desc', `fade fade-left delay-2 ${inView ? 'in-view' : ''}`)}>
                    Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                </p>
                <Button className={cx('btn')} variants="secondary">
                    Get your free proposal
                </Button>
            </div>
            <div className={cx('banner', `fade fade-right delay-1 ${inView ? 'in-view' : ''}`)}>
                <Image alt="CTA" src={imgs.CTA} width={350} height={390} />
            </div>
        </div>
    );
}

export default CTA;
