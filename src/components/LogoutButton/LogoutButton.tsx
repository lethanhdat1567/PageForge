"use client";

import classNames from "classnames/bind";
import styles from "./LogoutButton.module.scss";
import authApiRequest from "@/HttpRequest/authRequest";
import { getToken, handleErrorApi } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function LogoutButton() {
  const router = useRouter();
  const [refreshToken, setRefreshToken] = useState<string | null>();

  useEffect(() => {
    const tokens = getToken();
    setRefreshToken(tokens.refreshToken);
  }, []);

  const handleLogout = async () => {
    try {
      await authApiRequest.logoutFromNextClientToNextServer({ refreshToken });
      router.push("/login");
      toast.success("Dang xuat thanh cong");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      handleErrorApi({ error });
    }
  };

  return (
    <div className={cx("list-item")} onClick={handleLogout}>
      <LogOut color="oklch(.704 .191 22.216)" />
      <p className={cx("list-item-text")}>Logout</p>
    </div>
  );
}

export default LogoutButton;
