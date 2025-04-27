/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import classNames from "classnames/bind";
import styles from "./LoginWithGoogle.module.scss";
import { signInWithPopup } from "firebase/auth";

const cx = classNames.bind(styles);

import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { imgs } from "../../../public/images";
import { auth, provider } from "@/firebase/config";
import authApiRequest from "@/HttpRequest/authRequest";
import { registerResType } from "@/schemaValidations/authe.schema";
import { useAppContext } from "@/app/AppProvider";
import { useRouter } from "next/navigation";

function LoginWithGoogle() {
  const router = useRouter();
  const { setUser } = useAppContext();

  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const requestData = {
        googleId: user.uid,
        username: user.displayName || "",
        email: user.email || "",
        avatar: user.photoURL || "",
        password: null,
      };
      // Gửi thông tin lên BE để login hoặc create user
      const res = await authApiRequest.loginSocial(requestData);
      await authApiRequest.auth({ data: res.payload as registerResType });
      setUser((res.payload as any).data.account);
      router.push("/");
    } catch (error) {
      console.error("Lỗi đăng nhập với Google:", error);
    }
  };

  return (
    <div>
      <div className={cx("separate")}>
        <span className={cx("separate-text")}>Hoặc</span>
      </div>
      <div className={cx("btn-wrap")} onClick={handleLoginWithGoogle}>
        <Image alt="google logo" width={30} height={30} src={imgs.google} />
        <span>Đăng nhập với Google</span>
        <ChevronRight className={cx("arrow-icon")} />
      </div>
    </div>
  );
}

export default LoginWithGoogle;
