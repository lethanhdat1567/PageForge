import classNames from 'classnames/bind';
import styles from './Store.module.scss';
import { EllipsisVertical, Eye } from 'lucide-react';
import Image from 'next/image';
import { imgs } from '../../../../../public/images';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';

const cx = classNames.bind(styles);

function Store() {
    return (
        <div className={cx('wrap')}>
            <div className={cx('head')}>
                <h1 className={cx('title')}>Giao diện trực tuyến</h1>
                <button className={cx('view-store')}>
                    <Eye size={20} /> View your store
                </button>
            </div>
            <div className={cx('body')}>
                {/* Main */}
                <div className={cx('main-section')}>
                    <div className={cx('banner')}>
                        <Image alt="Template image" width={600} height={300} src={imgs.HeroBanner} />
                    </div>
                    <div className={cx('section-info-main')}>
                        <div className={cx('main-info-wrap')}>
                            <Image alt="Template image" width={100} height={100} src={imgs.HeroBanner} />
                            <div className={cx('main-section-info')}>
                                <div className={cx('main-title-wrap')}>
                                    <h2 className={cx('main-title')}>theme-export-markezan-com-broadcast-06mar2025</h2>
                                    <span className={cx('main-sub')}>Theme đang sử dụng</span>
                                </div>
                                <p className={cx('main-save-desc')}>Lưu lần cuối: Apr 25 at 4:06 pm GMT+2</p>
                            </div>
                        </div>
                        <Link href={'/admin/editor'}>
                            <Button variant={'default'}>Tùy chỉnh</Button>
                        </Link>
                    </div>
                </div>
                {/* Sub section */}
                <div className={cx('sub-section')}>
                    <h3 className={cx('sub-title')}>Kho themes</h3>
                    <p className={cx('sub-desc')}>
                        Các giao diện này chỉ hiển thị với bạn. Bạn có thể chuyển sang giao diện khác bằng cách xuất bản nó lên cửa hàng của
                        mình.
                    </p>
                    {/* Item */}
                    <div className={cx('sub-item')}>
                        <div className={cx('section-info-main')}>
                            <div className={cx('main-info-wrap')}>
                                <Image alt="Template image" width={100} height={100} src={imgs.HeroBanner} />
                                <div className={cx('main-section-info')}>
                                    <div className={cx('main-title-wrap')}>
                                        <h2 className={cx('main-title')}>theme-export-markezan-com-broadcast-06mar2025</h2>
                                    </div>
                                    <p className={cx('main-save-desc')}>Lưu lần cuối: Apr 25 at 4:06 pm GMT+2</p>
                                </div>
                            </div>
                            <div className={cx('utils')}>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant={'outline'}>
                                            <EllipsisVertical />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Xem trước</DropdownMenuItem>
                                        <DropdownMenuItem variant="destructive">Xóa theme</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button variant={'outline'}>Publish theme</Button>
                                <Button variant={'default'}>Tùy chỉnh</Button>
                            </div>
                        </div>
                    </div>
                    {/* Item */}
                    <div className={cx('sub-item')}>
                        <div className={cx('section-info-main')}>
                            <div className={cx('main-info-wrap')}>
                                <Image alt="Template image" width={100} height={100} src={imgs.HeroBanner} />
                                <div className={cx('main-section-info')}>
                                    <div className={cx('main-title-wrap')}>
                                        <h2 className={cx('main-title')}>theme-export-markezan-com-broadcast-06mar2025</h2>
                                    </div>
                                    <p className={cx('main-save-desc')}>Lưu lần cuối: Apr 25 at 4:06 pm GMT+2</p>
                                </div>
                            </div>
                            <div className={cx('utils')}>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant={'outline'}>
                                            <EllipsisVertical />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Xem trước</DropdownMenuItem>
                                        <DropdownMenuItem variant="destructive">Xóa theme</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button variant={'outline'}>Publish theme</Button>
                                <Button variant={'default'}>Tùy chỉnh</Button>
                            </div>
                        </div>
                    </div>
                    {/* Item */}
                    <div className={cx('sub-item')}>
                        <div className={cx('section-info-main')}>
                            <div className={cx('main-info-wrap')}>
                                <Image alt="Template image" width={100} height={100} src={imgs.HeroBanner} />
                                <div className={cx('main-section-info')}>
                                    <div className={cx('main-title-wrap')}>
                                        <h2 className={cx('main-title')}>theme-export-markezan-com-broadcast-06mar2025</h2>
                                    </div>
                                    <p className={cx('main-save-desc')}>Lưu lần cuối: Apr 25 at 4:06 pm GMT+2</p>
                                </div>
                            </div>
                            <div className={cx('utils')}>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant={'outline'}>
                                            <EllipsisVertical />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Xem trước</DropdownMenuItem>
                                        <DropdownMenuItem variant="destructive">Xóa theme</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button variant={'outline'}>Publish theme</Button>
                                <Button variant={'default'}>Tùy chỉnh</Button>
                            </div>
                        </div>
                    </div>
                    {/* Item */}
                    <div className={cx('sub-item')}>
                        <div className={cx('section-info-main')}>
                            <div className={cx('main-info-wrap')}>
                                <Image alt="Template image" width={100} height={100} src={imgs.HeroBanner} />
                                <div className={cx('main-section-info')}>
                                    <div className={cx('main-title-wrap')}>
                                        <h2 className={cx('main-title')}>theme-export-markezan-com-broadcast-06mar2025</h2>
                                    </div>
                                    <p className={cx('main-save-desc')}>Lưu lần cuối: Apr 25 at 4:06 pm GMT+2</p>
                                </div>
                            </div>
                            <div className={cx('utils')}>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant={'outline'}>
                                            <EllipsisVertical />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Xem trước</DropdownMenuItem>
                                        <DropdownMenuItem variant="destructive">Xóa theme</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button variant={'outline'}>Publish theme</Button>
                                <Button variant={'default'}>Tùy chỉnh</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Store;
