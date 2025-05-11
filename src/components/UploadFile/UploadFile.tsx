import classNames from 'classnames/bind';
import styles from './UploadFile.module.scss';
import { Upload } from 'lucide-react';

const cx = classNames.bind(styles);

type UploadFileProps = {
    name: string;
    label: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UploadFile: React.FC<UploadFileProps> = ({ name, label, onChange }) => {
    return (
        <label className={cx('upload-wrap')} htmlFor={name}>
            <Upload size={16} />
            <span className={cx('upload-text')}>{label}</span>
            <input id={name} type="file" accept="image/*" className={cx('input-upload')} onChange={onChange} />
        </label>
    );
};

export default UploadFile;
