'use client';

import classNames from 'classnames/bind';
import styles from './Testimonials.module.scss';
import Label from '@/components/Label/Labe';
import CarouselTestimonials from '@/app/(MainLayout)/(home)/_components/Testimonials/_components/CarouselTestimonials/CarouselTestimonials';
import { useInView } from 'react-intersection-observer';

const cx = classNames.bind(styles);

function Testimonials() {
    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    return (
        <div className={cx('wrap')} ref={ref}>
            <div className={cx('header', `fade fade-left ${inView ? 'in-view' : ''}`)}>
                <Label>Testimonials</Label>
                <p className={cx('header-desc')}>
                    Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                </p>
            </div>
            <div className={cx('body')}>
                <CarouselTestimonials />
            </div>
        </div>
    );
}

export default Testimonials;
