/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './Templates.module.scss';
import DataTable from '@/components/DataTable/DataTable';
import { templateColumns } from '@/tables/templateColumns';
import templateApiRequest from '@/HttpRequest/templateRequest';
import { cookies } from 'next/headers';

const cx = classNames.bind(styles);

async function Templates() {
    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get('sessionToken')?.value;

    const templatesData = ((await templateApiRequest.getAll(accessToken))?.payload as any).data;
    console.log(templatesData);

    return (
        <div className={cx('wrap')}>
            <h1 className={cx('title')}>Quản lý giao diện</h1>
            <div className={cx('body')}>
                <DataTable data={templatesData} columns={templateColumns} searchField="name" />
            </div>
        </div>
    );
}

export default Templates;
