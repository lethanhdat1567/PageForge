/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames/bind';
import styles from './ProfileForm.module.scss';
import { ChevronRight, Info, Store, TriangleAlert } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DialogSection from '@/app/(SingleLayout)/profile/components/DialogSection/DialogSection';
import { useCallback, useEffect, useState } from 'react';
import accountApiRequest from '@/HttpRequest/accountRequest';
import { resolveImgUrl } from '@/lib/utils';
import { toast } from 'sonner';

const cx = classNames.bind(styles);

type AccountType = {
    id: number;
    storename: string;
    email: string;
    username: string;
    role: number;
    avatar: string;
    created_at: string;
    updated_at: string;
};

function ProfileForm({ id }: { id: any }) {
    const [form, setForm] = useState<AccountType>();

    const httpRequest = useCallback(async () => {
        const result = await accountApiRequest.getById(id);

        setForm((result.payload as any).data);
    }, [id]);

    useEffect(() => {
        httpRequest();
    }, [id, httpRequest]);

    const handleSave = async (name: string, value: string | File) => {
        try {
            let data: FormData | Record<string, any>;

            if (value instanceof File) {
                data = new FormData();
                data.append(name, value);
            } else {
                data = { [name]: value };
            }

            toast.promise(
                accountApiRequest.update(id, data).then((res) => {
                    const updatedAccount = (res.payload as any).data as AccountType;
                    localStorage.setItem(
                        'user',
                        JSON.stringify({
                            id: updatedAccount.id,
                            role: updatedAccount.role,
                            email: updatedAccount.email,
                            avatar: updatedAccount.avatar,
                            username: updatedAccount.username,
                            storename: updatedAccount.storename,
                        }),
                    );

                    httpRequest();
                }),
                {
                    loading: 'Đang lưu',
                    success: 'Cập nhật thành công',
                    error: 'Lỗi không xác định',
                },
            );
        } catch (err) {
            console.error(err);
            toast.error('Lỗi không xác định');
        }
    };
    console.log(form?.storename ? true : false);

    return (
        <div className={cx('wrap')}>
            <h2 className={cx('title')}>Thông tin cá nhân</h2>
            <div className={cx('store-wrap')}>
                <div className={cx('desc-wrap')}>
                    <Store />
                    <p className={cx('desc')}>Quản lí cửa hàng trực tuyến</p>
                </div>
                {/* Input */}
                <div className={cx('content', 'store', { empty: !form?.storename })}>
                    <DialogSection name="storename" label="domain" value={form?.storename} type="input" onSave={handleSave}>
                        <div className={cx('item')}>
                            <div className={cx('item-info')}>
                                <label className={cx('label')}>* Tên domain của bạn</label>
                                <p className={cx('items-info-desc')}>
                                    {form?.storename ? form.storename : 'vui lòng điền tên domain của bạn'}
                                </p>
                            </div>
                            {form?.storename ? <ChevronRight /> : <TriangleAlert size={20} />}
                        </div>
                    </DialogSection>
                </div>
                {form?.storename && (
                    <p className={cx('sub-text')}>
                        Người dùng sẽ truy cập vào cửa hàng của bạn với domain: {form?.storename}.fageforge.com
                    </p>
                )}
            </div>
            <div className={cx('info-wrap')}>
                <div className={cx('desc-wrap')}>
                    <Info /> <p className={cx('desc')}>Quản lí thông tin các nhân của bạn</p>
                </div>
                <div className={cx('content')}>
                    {/* Input */}
                    <DialogSection name="username" label="tên người dùng" value={form?.username} type="input" onSave={handleSave}>
                        <div className={cx('item')}>
                            <div className={cx('item-info')}>
                                <label className={cx('label')}>Tên người dùng</label>
                                <p className={cx('items-info-desc')}>{form?.username}</p>
                            </div>
                            <ChevronRight />
                        </div>
                    </DialogSection>
                    {/* Avatar */}
                    <DialogSection name="avatar" label="ảnh đại diện" value={form?.avatar} type="avatar" onSave={handleSave}>
                        <div className={cx('item', 'avatar')}>
                            <div className={cx('item-info')}>
                                <label className={cx('label')}>Ảnh đại diện</label>
                                <Avatar className={cx('avatar')}>
                                    <AvatarImage src={resolveImgUrl(form?.avatar)} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <ChevronRight />
                        </div>
                    </DialogSection>
                </div>
            </div>
        </div>
    );
}

export default ProfileForm;
