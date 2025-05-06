'use client';

import classNames from 'classnames/bind';
import styles from './PrivateSideBar.module.scss';
import { adminPanelSidebar, adminSidebar } from '@/lib/data';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import CloseSideBar from '@/components/PrivateSideBar/CloseSideBar';
import { useState } from 'react';
import { Menu } from 'lucide-react';

const cx = classNames.bind(styles);

function PrivateSideBar() {
    const [activeSidebar, setActiveSidebar] = useState(true);
    const pathname = usePathname();

    const currentSidebar = pathname.includes('/admin') ? adminSidebar : pathname.includes('/panel') ? adminPanelSidebar : [];

    return (
        <>
            <button className={cx('show-sidebar-btn', { active: !activeSidebar })} onClick={() => setActiveSidebar(true)}>
                <Menu />
            </button>
            <div className={cx('wrap', { active: activeSidebar })}>
                <CloseSideBar onClick={() => setActiveSidebar(false)} />
                <ul className={cx('list')}>
                    {currentSidebar.map((item, index) => (
                        <Link href={item.path} key={index}>
                            <li className={cx('item', { active: pathname === item.path })}>
                                <item.icon size={18} />
                                <span className={cx('label')}>{item.label}</span>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default PrivateSideBar;
