'use client';

import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import Logo from '@/components/Logo/Logo';
import { Shield, User, X } from 'lucide-react';
import ProfileForm from '@/app/(SingleLayout)/profile/components/ProfileForm/ProfileForm';
import { useState } from 'react';
import SercurityForm from '@/app/(SingleLayout)/profile/components/SercurityForm/SercurityForm';
import Link from 'next/link';

const cx = classNames.bind(styles);

function Profile() {
    const [activeSection, setActiveSection] = useState(0);

    return (
        <div className={cx('wrap')}>
            <div className="container px-44 py-6">
                <div className="grid grid-cols-[40%_60%]">
                    {/* Sidebar */}
                    <div className={cx('sidebar')}>
                        <Logo />
                        <h1 className={cx('title')}>Cài đặt tài khoản</h1>
                        <p className={cx('desc')}>
                            Quản lý cài đặt tài khoản của bạn như thông tin cá nhân, cài đặt bảo mật, quản lý thông báo, v.v.
                        </p>
                        <nav className={cx('navbar')}>
                            <div className={cx('nav-item', { active: activeSection === 0 })} onClick={() => setActiveSection(0)}>
                                <User size={28} />
                                <p className={cx('nav-item-desc')}>Thông tin cá nhân</p>
                            </div>
                            <div className={cx('nav-item', { active: activeSection === 1 })} onClick={() => setActiveSection(1)}>
                                <Shield size={28} />
                                <p className={cx('nav-item-desc')}>Mật khẩu và bảo mật</p>
                            </div>
                        </nav>
                    </div>
                    {/* Content */}
                    <div className={cx('content')}>
                        {activeSection === 0 && <ProfileForm />}
                        {activeSection === 1 && <SercurityForm />}
                    </div>
                </div>
            </div>
            <Link href={'/'} className={cx('back-btn')}>
                <X size={26} />
            </Link>
        </div>
    );
}

export default Profile;
