"use client";

import classNames from "classnames/bind";
import styles from "./PrivateSideBar.module.scss";
import { adminSidebar } from "@/lib/data";
import { usePathname } from "next/navigation";

const cx = classNames.bind(styles);

function PrivateSideBar() {
  const pathname = usePathname();

  return (
    <div className={cx("wrap")}>
      <ul className={cx("list")}>
        {adminSidebar.map((item) => (
          <li
            key={item.label}
            className={cx("item", { active: pathname === item.path })}
          >
            <item.icon size={18} />
            <span className={cx("label")}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrivateSideBar;
