import classNames from "classnames/bind";
import styles from "./ContactUs.module.scss";
import Label from "@/components/Label/Labe";
import FormContact from "@/app/(MainLayout)/(home)/_components/ContactUs/_components/FormContact/FormContact";
import Image from "next/image";
import { imgs } from "../../../../../../public/images";

const cx = classNames.bind(styles);

function ContactUs() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("header")}>
        <Label>Contact Us</Label>
        <p className={cx("header-desc")}>
          Connect with Us:
          <br /> Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className={cx("body")}>
        <FormContact />
        <Image
          alt="Contact banner"
          width={690}
          height={648}
          src={imgs.ContactBanner}
          className={cx("banner")}
        />
      </div>
    </div>
  );
}

export default ContactUs;
