import classNames from 'classnames/bind';
import styles from './EditorHeader.module.scss';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ExitBtn from '@/components/EditorHeader/components/ExitBtn/ExitBtn';
import { SelectPage } from '@/components/EditorHeader/components/SelectPage/SelectPage';
import InspectBtn from '@/components/EditorHeader/components/InspectBtn/InspectBtn';
import Viewport from '@/components/EditorHeader/components/Viewport/Viewport';

const cx = classNames.bind(styles);

function EditorHeader() {
    return (
        <div className={cx('wrap')}>
            <div className="container px-8">
                <div className={cx('body')}>
                    <div className={cx('left')}>
                        <ExitBtn />
                        <Button>
                            <Eye /> Xem cửa hàng
                        </Button>
                    </div>
                    <SelectPage />
                    <div className={cx('right')}>
                        <InspectBtn />
                        <Viewport />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditorHeader;
