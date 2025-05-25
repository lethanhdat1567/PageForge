'use client';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '@/components/Logo/Logo';
import { navbarData } from '@/lib/data';
import Link from 'next/link';
import SignInButton from '@/components/SignInButton/SignInButton';
import SliceSession from '@/components/SliceSession/SliceSession';
import { useAppContext } from '@/app/AppProvider';
import HeaderPublicUser from '@/components/HeaderPublicUser/HeaderPublicUser';
import { useInView } from 'react-intersection-observer';
import { usePathname } from 'next/navigation';

const cx = classNames.bind(styles);

function Header() {
    const pathname = usePathname();
    const { user } = useAppContext();
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <header className={cx('wrap', `fade fade-up ${inView ? 'in-view' : ''}`)} ref={ref}>
            <Logo />
            <nav className={cx('nav')}>
                {navbarData.map((item) => (
                    <Link href={item.path} key={item.name} className={cx('nav-item', { active: pathname === item.path })}>
                        {item.name}
                    </Link>
                ))}
            </nav>
            {user ? (
                <HeaderPublicUser />
            ) : (
                <Link href={'/register'}>
                    <SignInButton />
                </Link>
            )}
            <SliceSession />
        </header>
    );
}

export default Header;
