import classNames from "classnames/bind";
import styles from "./PrivateHeader.module.scss";
import Logo from "@/components/Logo/Logo";
import { Bell } from "lucide-react";
import HeaderUser from "@/components/HeaderUser/HeaderUser";

const cx = classNames.bind(styles);

function PrivateHeader() {
  return (
    <header className={cx("wrap")}>
      <div className="container px-10">
        <div className={cx("content")}>
          <Logo color="light" size="small" />
          <div className={cx("info")}>
            <Bell />
            <HeaderUser />
          </div>
        </div>
      </div>
    </header>
  );
}

export default PrivateHeader;
