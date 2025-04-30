import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import classNames from "classnames/bind";
import styles from "./HeaderUser.module.scss";

const cx = classNames.bind(styles);

function HeaderUser() {
  return (
    <div className={cx("header-user")}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className={cx("wrap")}>
            <Avatar className={cx("avatar")}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className={cx("user-name")}>Le Thanh Dat</p>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className={cx("menu-content")}>
          <div className={cx("head-label")}>
            <Avatar className={cx("head-avatar")}>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div className={cx("head-label-info")}>
              <DropdownMenuLabel className={cx("label")}>
                Le Thanh Dat
              </DropdownMenuLabel>
              <DropdownMenuLabel className={cx("label")}>
                lethanhdat1567@gmail.com
              </DropdownMenuLabel>
            </div>
          </div>
          <DropdownMenuSeparator />

          <DropdownMenuItem className={cx("menu-item")}>
            Profile
          </DropdownMenuItem>

          <DropdownMenuItem className={cx("menu-item")}>
            Settings
          </DropdownMenuItem>

          <DropdownMenuItem className={cx("menu-item")}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default HeaderUser;
