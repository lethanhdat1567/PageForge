import classNames from 'classnames/bind';
import styles from './MainLayout.module.scss';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const cx = classNames.bind(styles);

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={cx('wrap')}>
            <div className="container px-16">
                <Header />
            </div>
            <div className="container px-16">{children}</div>
            <Footer />
        </div>
    );
}
