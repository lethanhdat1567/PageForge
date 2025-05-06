import classNames from 'classnames/bind';
import styles from './Editor.module.scss';
import EditorHeader from '@/components/EditorHeader/EditorHeader';
import EditorSidebar from '@/components/EditorSidebar/EditorSidebar';

const cx = classNames.bind(styles);

function Editor() {
    return (
        <div className={cx('wrap')}>
            <EditorHeader />
            <div className="grid grid-cols-[26%_84%]">
                <EditorSidebar />
                <div>Content</div>
            </div>
        </div>
    );
}

export default Editor;
