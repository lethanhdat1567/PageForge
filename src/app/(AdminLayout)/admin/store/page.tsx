/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import classNames from 'classnames/bind';
import styles from './Store.module.scss';
import { Eye, SquareArrowOutUpRight } from 'lucide-react';

import Link from 'next/link';
import userTemplateApiRequest from '@/HttpRequest/userTemplateRequest';
import { useAppContext } from '@/app/AppProvider';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';
import MainTheme from '@/app/(AdminLayout)/admin/store/_components/MainTheme/MainTheme';
import SubTheme from '@/app/(AdminLayout)/admin/store/_components/SubTheme/SubTheme';

const cx = classNames.bind(styles);

function Store() {
    const { user } = useAppContext();
    const [templates, setTemplates] = useState<any[]>([]);

    const httpRequest = useCallback(async () => {
        if (user) {
            const result = await userTemplateApiRequest.getById(user?.id);
            setTemplates((result.payload as any).data);
        }
    }, [user]);

    useEffect(() => {
        httpRequest();
    }, [httpRequest]);

    const handlePublichTheme = async (template_id: any) => {
        toast.promise(
            async () => {
                await userTemplateApiRequest.updatePublish(user?.id, template_id);
                httpRequest();
            },
            {
                loading: 'Đang lưu',
                success: 'Đã lưu thành công',
                error: 'Có lỗi xảy ra',
            },
        );
    };

    const handleDestroy = async (id: any) => {
        toast.promise(
            async () => {
                await userTemplateApiRequest.destroy(id);
                httpRequest();
            },
            {
                loading: 'Đang lưu',
                success: 'Đã lưu thành công',
                error: 'Có lỗi xảy ra',
            },
        );
    };

    return (
        <div className={cx('wrap')}>
            <div className={cx('head')}>
                <h1 className={cx('title')}>Giao diện trực tuyến</h1>
                <div className={cx('btn-wrap')}>
                    <Link href={'/templates'}>
                        <button className={cx('view-template')}>
                            <SquareArrowOutUpRight size={16} /> Ghé thăm kho giao diện
                        </button>
                    </Link>
                    <button className={cx('view-store')}>
                        <Eye size={20} /> View your store
                    </button>
                </div>
            </div>
            <div className={cx('body')}>
                {/* Main */}
                {templates.map((templateData) => {
                    const template = templateData.template;

                    return templateData.status === 'active' && <MainTheme template={template} />;
                })}

                {/* Sub section */}
                <div className={cx('sub-section')}>
                    <h3 className={cx('sub-title')}>Kho themes</h3>
                    <p className={cx('sub-desc')}>
                        Các giao diện này chỉ hiển thị với bạn. Bạn có thể chuyển sang giao diện khác bằng cách xuất bản nó lên cửa hàng của
                        mình.
                    </p>
                    {/* Item */}
                    {templates.map((templateData) => {
                        const template = templateData.template;
                        return (
                            templateData.status === 'inactive' && (
                                <SubTheme
                                    template={template}
                                    onPublish={() => handlePublichTheme(template.id)}
                                    onDestroy={() => handleDestroy(templateData.id)}
                                />
                            )
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Store;
