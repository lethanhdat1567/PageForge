import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Logo from "@/components/Logo/Logo";
import { navbarData } from "@/lib/data";
import Link from "next/link";
import Button from "@/components/Button/Button";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrap")}>
      <Logo />
      <nav className={cx("nav")}>
        {navbarData.map((item) => (
          <Link href={item.path} key={item.name} className={cx("nav-item")}>
            {item.name}
          </Link>
        ))}
      </nav>
      <Button variants="outline" className={cx("btn")}>
        Start building
      </Button>
    </header>
  );
}

export default Header;
