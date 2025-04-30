import classNames from "classnames/bind";
import styles from "./AdminLayout.module.scss";
import PrivateSideBar from "@/components/PrivateSideBar/PrivateSideBar";
import { Poppins } from "next/font/google";
import PrivateHeader from "@/components/PrivateHeader/PrivateHeader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const cx = classNames.bind(styles);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={poppins.variable}>
      <PrivateHeader />
      <div className={cx("wrap")}>
        <PrivateSideBar />
        <div className={cx("body")}>
          <div className="container px-20">{children}</div>
        </div>
      </div>
    </div>
  );
}
