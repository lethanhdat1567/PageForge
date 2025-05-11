/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './FormTemplate.module.scss';
import BackCreateBtn from '@/components/BackCreateBtn/BackCreateBtn';
import FormSection from '@/components/FormSection/FormSection';
import TemplateForm from '@/app/(AdminLayout)/panel/templates/_components/TemplateForm/TemplateForm';
import templateApiRequest from '@/HttpRequest/templateRequest';
import { cookies } from 'next/headers';

const cx = classNames.bind(styles);

type Props = {
    params: Promise<{ id: string }>;
};

async function UpdateTemplate(props: Props) {
    const cookiesStore = await cookies();
    const sessionToken = cookiesStore.get('sessionToken')?.value;
    const params = await props.params;

    const result = await templateApiRequest.getById(Number(params.id), sessionToken);

    return (
        <div className={cx('wrap')}>
            <div className={cx('head')}>
                <BackCreateBtn />
                <h1 className={cx('title')}>Cập nhật template</h1>
            </div>
            <FormSection>
                <TemplateForm template={(result.payload as any).data} />
            </FormSection>
        </div>
    );
}

export default UpdateTemplate;
