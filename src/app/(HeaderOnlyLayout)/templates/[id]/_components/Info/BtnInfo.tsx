/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import classNames from 'classnames/bind';
import styles from './Info.module.scss';
import Link from 'next/link';
import { templateResType } from '@/schemaValidations/templates.schema';
import { toast } from 'sonner';
import { useAppContext } from '@/app/AppProvider';
import userTemplateApiRequest from '@/HttpRequest/userTemplateRequest';
import { useCallback, useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function BtnInfo({ template }: { template: templateResType }) {
    const { user } = useAppContext();
    const [savedTemplateId, setSavedTemplateId] = useState(null);

    const httpRequest = useCallback(async () => {
        if (user) {
            const result = await userTemplateApiRequest.getById(user.id);
            const templates = (result.payload as any).data as any[];

            const matched = templates.find((item) => item.template.id === template.id);

            if (matched) {
                setSavedTemplateId(matched.id);
            } else {
                setSavedTemplateId(null);
            }
        }
    }, [template.id, user]);

    useEffect(() => {
        httpRequest();
    }, [httpRequest]);

    const handleSaveTheme = async () => {
        toast.promise(
            async () => {
                await userTemplateApiRequest.create({ userId: Number(user?.id), templateId: Number(template.id), status: 'inactive' });
                httpRequest();
            },
            {
                loading: 'Đang lưu',
                success: 'Đã lưu',
                error: 'Có lỗi xảy ra',
            },
        );
    };

    const handleDestroy = async () => {
        toast.promise(
            async () => {
                await userTemplateApiRequest.destroy(Number(savedTemplateId));
                httpRequest();
            },
            {
                loading: 'Đang xóa',
                success: 'Đã xóa khỏi store',
                error: 'Có lỗi xảy ra',
            },
        );
    };

    return (
        <div className={cx('info-btns')}>
            {savedTemplateId ? (
                <button className={cx('info-btn', 'primary')} onClick={handleDestroy}>
                    Xóa theme (Theme đã được lưu)
                </button>
            ) : (
                <button className={cx('info-btn', 'primary')} onClick={handleSaveTheme}>
                    Lưu theme
                </button>
            )}
            <Link href={`/${template.name}`} className={cx('info-btn', 'outline')}>
                Xem demo store
            </Link>
        </div>
    );
}

export default BtnInfo;
