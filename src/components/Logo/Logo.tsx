import classNames from "classnames/bind";
import styles from "./Logo.module.scss";
import Image from "next/image";
import { imgs } from "../../../public/images";

const cx = classNames.bind(styles);

function Logo({ color = "dark" }: { color: "dark" | "light" }) {
  return (
    <div className={cx("wrap")}>
      <Image
        width={36}
        height={36}
        alt="Logo"
        src={color === "dark" ? imgs.Logo : imgs.LogoLight}
      />
      <h1 className={cx("title")}>PageForge</h1>
    </div>
  );
}

export default Logo;
