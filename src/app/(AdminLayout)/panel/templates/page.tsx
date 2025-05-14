'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './Templates.module.scss';
import DataTable from '@/components/DataTable/DataTable';
import { templateColumns } from '@/tables/templateColumns';
import templateApiRequest from '@/HttpRequest/templateRequest';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';

const cx = classNames.bind(styles);

function Templates() {
    const [templatesData, setTemplatesData] = useState([]);
    const searchParams = useSearchParams();

    const httpRequest = useCallback(async () => {
        const statusParam = searchParams.get('status') || '';
        const templatesData = ((await templateApiRequest.getAll({ status: statusParam, search: '' }))?.payload as any).data;
        setTemplatesData(templatesData);
    }, [searchParams]);

    useEffect(() => {
        httpRequest();
    }, [searchParams, httpRequest]);

    const handleDestroy = async (rows: any[], setShowDialog: any) => {
        if (rows.length > 0) {
            toast.promise(
                (async () => {
                    const templateIds = rows.map((item) => item.original.id);
                    await templateApiRequest.bulkDeleteTemplate(templateIds);
                    setShowDialog(false);
                    await httpRequest();
                })(),
                {
                    loading: 'Đang lưu',
                    success: 'Xóa thành công',
                    error: 'Lỗi không xác định',
                },
            );
        }
    };

    return (
        <div className={cx('wrap')}>
            <h1 className={cx('title')}>Quản lý giao diện</h1>
            <div className={cx('body')}>
                <DataTable
                    key={JSON.stringify(templatesData)}
                    onDestroySelected={handleDestroy}
                    data={templatesData}
                    columns={templateColumns(httpRequest)}
                    searchField="name"
                />
            </div>
        </div>
    );
}

export default Templates;
