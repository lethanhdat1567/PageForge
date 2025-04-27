import classnames from "classnames/bind";
import styles from "./Login.module.scss";
import Link from "next/link";
import LoginWithGoogle from "@/components/LoginWithGoogle/LoginWithGoogle";
import FormLogin from "@/app/(AuthLayout)/login/formLogin";

const cx = classnames.bind(styles);

function Login() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("body")}>
        <h1 className={cx("title")}>Đăng nhập vào Vibes</h1>
        <div>
          <FormLogin />
          <Link href={"/"} className={cx("forgot-text")}>
            Quên mật khẩu?
          </Link>
          <Link href={"/register"} className={cx("forgot-text")}>
            Bạn chưa có tài khoản?
          </Link>
          <LoginWithGoogle />
        </div>
      </div>
    </div>
  );
}

export default Login;
