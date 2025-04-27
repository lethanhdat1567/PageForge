import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import Link from "next/link";
import LoginWithGoogle from "@/components/LoginWithGoogle/LoginWithGoogle";
import FormRegister from "@/app/(AuthLayout)/(auth)/register/FormRegister";

const cx = classNames.bind(styles);

function Register() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("body")}>
        <h1 className={cx("title")}>Đăng kí để tham gia Vibes</h1>
        <div>
          <FormRegister />
          <Link href={"/login"} className={cx("forgot-text")}>
            Bạn đã có tài khoản?
          </Link>
          <LoginWithGoogle />
        </div>
      </div>
    </div>
  );
}

export default Register;
