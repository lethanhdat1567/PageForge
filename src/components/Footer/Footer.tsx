import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import Logo from "@/components/Logo/Logo";
import { contactInfoData, footerIcons, navbarData } from "@/lib/data";
import Label from "@/components/Label/Labe";
import { Input } from "@/components/ui/input";
import Button from "@/components/Button/Button";
import Link from "next/link";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx("wrap")}>
      <div className={cx("head")}>
        <Logo color="light" />
        <ul className={cx("list")}>
          {navbarData.map((nav) => (
            <li className={cx("link-item")} key={nav.name}>
              {nav.name}
            </li>
          ))}
        </ul>
        <ul className={cx("icons")}>
          {footerIcons.map((icon, index) => (
            <li key={index}>{icon.icon}</li>
          ))}
        </ul>
      </div>
      <div className={cx("body")}>
        <div className="grid grid-cols-[40%_60%] space-x-32">
          <div className={cx("info")}>
            <Label classname={cx("label")}>Contact Us:</Label>
            <ul className={cx("list-contact")}>
              {contactInfoData.map((contactData, index) => (
                <li key={index} className={cx("list-contact-item")}>
                  {contactData}
                </li>
              ))}
            </ul>
          </div>
          <div className={cx("form")}>
            <div className="w-full grid grid-cols-2 gap-6">
              <Input className={cx("form-input")} placeholder="Email" />
              <Button className={cx("btn")}>Subscribe to news</Button>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("footer")}>
        <p className={cx("footer-desc")}>
          © 2023 Positivus. All Rights Reserved.
        </p>
        <Link href={"/"} className={cx("sub-link")}>
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
