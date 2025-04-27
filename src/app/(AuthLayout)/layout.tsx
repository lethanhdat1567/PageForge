import classNames from "classnames/bind";
import styles from "./AuthLayout.module.scss";
import Logo from "@/components/Logo/Logo";

const cx = classNames.bind(styles);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cx("wrap")}>
      <Logo />
      {children}
    </div>
  );
}
