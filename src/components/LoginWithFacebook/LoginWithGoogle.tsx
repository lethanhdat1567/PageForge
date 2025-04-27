import classNames from "classnames/bind";
import styles from "./LoginWithGoogle.module.scss";

const cx = classNames.bind(styles);

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { imgs } from "../../../public/images";

function LoginWithFacebook() {
  return (
    <div className={cx("btn-wrap")}>
      <Image alt="google logo" width={30} height={30} src={imgs.facebook} />
      <span>Đăng nhập với Facebook</span>
      <ChevronRight className={cx("arrow-icon")} />
    </div>
  );
}

export default LoginWithFacebook;
