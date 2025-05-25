'use client';

import classNames from 'classnames/bind';
import styles from './Hero.module.scss';
import Image from 'next/image';
import { imgs } from '../../../../../../public/images';
import Button from '@/components/Button/Button';
import Tilt from 'react-parallax-tilt';
import { useInView } from 'react-intersection-observer';

const cx = classNames.bind(styles);

function Hero() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    return (
        <div className={cx('wrap')} ref={ref}>
            <div className="grid grid-cols-2 gap-4">
                <div className={cx('info', `fade fade-left ${inView ? 'in-view' : ''}`)}>
                    <h1 className={cx('title')}>Navigating the digital landscape for success</h1>
                    <p className={cx('desc')}>
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO,
                        PPC, social media marketing, and content creation.
                    </p>
                    <Button variants="secondary" className={cx('btn')}>
                        Start building with us
                    </Button>
                </div>
                <Tilt>
                    <div className={cx('banner', `fade fade-right ${inView ? 'in-view' : ''}`)}>
                        <Image alt="PageForge Banner" src={imgs.HeroBanner} className={cx('image')} />
                    </div>
                </Tilt>
            </div>
        </div>
    );
}

export default Hero;
