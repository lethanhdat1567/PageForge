import classNames from "classnames/bind";
import styles from "./LoginWithGoogle.module.scss";

const cx = classNames.bind(styles);

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { imgs } from "../../../public/images";

function LoginWithGoogle() {
  return (
    <div>
      <div className={cx("separate")}>
        <span className={cx("separate-text")}>Hoặc</span>
      </div>
      <div className={cx("btn-wrap")}>
        <Image alt="google logo" width={30} height={30} src={imgs.google} />
        <span>Đăng nhập với Google</span>
        <ChevronRight className={cx("arrow-icon")} />
      </div>
    </div>
  );
}

export default LoginWithGoogle;
