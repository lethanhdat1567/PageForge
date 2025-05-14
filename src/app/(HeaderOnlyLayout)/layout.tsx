import classNames from 'classnames/bind';
import styles from './HeaderOnlyLayout.module.scss';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { Poppins } from 'next/font/google';

const cx = classNames.bind(styles);

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
});

export default function HeaderOnlyLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={cx(`${cx('wrap')} ${poppins.className}`)}>
            <div className="container px-16">
                <Header />
            </div>
            <div>{children}</div>
            <Footer />
        </div>
    );
}
