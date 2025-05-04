'use client';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from '@/components/Logo/Logo';
import { navbarData } from '@/lib/data';
import Link from 'next/link';
import SignInButton from '@/components/SignInButton/SignInButton';
import SliceSession from '@/components/SliceSession/SliceSession';
import { useEffect, useState } from 'react';
import LogoutButton from '@/components/LogoutButton/LogoutButton';

const cx = classNames.bind(styles);

function Header() {
    const [token, setToken] = useState();

    useEffect(() => {
        setToken(JSON.parse(localStorage.getItem('tokens') as string));
    }, []);

    return (
        <header className={cx('wrap')}>
            <Logo />
            <nav className={cx('nav')}>
                {navbarData.map((item) => (
                    <Link href={item.path} key={item.name} className={cx('nav-item')}>
                        {item.name}
                    </Link>
                ))}
            </nav>
            {token ? (
                <LogoutButton />
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
