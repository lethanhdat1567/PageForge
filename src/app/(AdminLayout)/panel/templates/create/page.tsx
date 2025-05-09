import classNames from 'classnames/bind';
import styles from './FormTemplate.module.scss';
import BackCreateBtn from '@/components/BackCreateBtn/BackCreateBtn';
import TemplateForm from '@/app/(AdminLayout)/panel/templates/create/components/TemplateForm/TemplateForm';

const cx = classNames.bind(styles);

function CreateTemplate() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('head')}>
                <BackCreateBtn />
                <h1 className={cx('title')}>Thêm template</h1>
            </div>
            <div className={cx('form')}>
                <TemplateForm />
            </div>
        </div>
    );
}

export default CreateTemplate;
