'use client';

import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import FormContact from '@/app/(MainLayout)/(home)/_components/ContactUs/_components/FormContact/FormContact';
import Image from 'next/image';
import { imgs } from '../../../../public/images';
import { useInView } from 'react-intersection-observer';

const cx = classNames.bind(styles);

function Contact() {
    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    return (
        <div className="container px-16">
            <div className={cx('wrap')} ref={ref}>
                <div className={cx('head')}>
                    <h1 className={cx('title', `fade fade-up ${inView ? 'in-view' : ''}`)}>Liên hệ Đạt:</h1>
                    <p className={cx('desc', `fade fade-up delay-1 ${inView ? 'in-view' : ''}`)}>
                        Nếu bạn có bất kỳ câu hỏi nào, muốn hợp tác hoặc cần hỗ trợ kỹ thuật, hãy liên hệ với mình qua email hoặc mạng xã
                        hội bên dưới nhee.
                    </p>
                </div>
                <div className={cx('contact-links')}></div>
                <div className={cx('body', `fade fade-up ${inView ? 'in-view' : ''}`)}>
                    <FormContact />
                    <Image alt="Contact banner" width={690} height={648} src={imgs.ContactBanner} className={cx('banner')} />
                </div>
            </div>
        </div>
    );
}

export default Contact;
