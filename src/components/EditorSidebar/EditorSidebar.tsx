'use client';

import classNames from 'classnames/bind';
import styles from './EditorSidebar.module.scss';
import { ListCollapse, PaintbrushVertical } from 'lucide-react';
import { TooltipCustom } from '@/components/TooltipCustom/TooltipCustom';
import Sections from '@/components/EditorSidebar/components/Sections/Sections';
import ThemeColor from '@/components/EditorSidebar/components/ThemeColor/ThemeColor';
import { useState } from 'react';

const cx = classNames.bind(styles);

function EditorSidebar() {
    const [activeContent, setActiveContent] = useState(0);

    return (
        <div className={cx('wrap')}>
            <div className="grid grid-cols-[16%_84%]">
                <div className={cx('content-btn-wrap')}>
                    <TooltipCustom content="Khối nội dung">
                        <button className={cx('content-btn', { active: activeContent === 0 })} onClick={() => setActiveContent(0)}>
                            <ListCollapse size={22} />
                        </button>
                    </TooltipCustom>
                    <TooltipCustom content="Điều chỉnh màu sắc">
                        <button className={cx('content-btn', { active: activeContent === 1 })} onClick={() => setActiveContent(1)}>
                            <PaintbrushVertical size={22} />
                        </button>
                    </TooltipCustom>
                </div>
                <div>
                    {activeContent === 0 && <Sections />}
                    {activeContent === 1 && <ThemeColor />}
                </div>
            </div>
        </div>
    );
}

export default EditorSidebar;
