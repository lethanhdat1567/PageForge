import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import FormContact from "@/app/(MainLayout)/(home)/_components/ContactUs/_components/FormContact/FormContact";
import Image from "next/image";
import { imgs } from "../../../../public/images";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("head")}>
        <h1 className={cx("title")} data-aos="fade-down">
          Liên hệ Đạt:
        </h1>
        <p className={cx("desc")} data-aos="fade-in">
          Nếu bạn có bất kỳ câu hỏi nào, muốn hợp tác hoặc cần hỗ trợ kỹ thuật,
          hãy liên hệ với mình qua email hoặc mạng xã hội bên dưới nhee.
        </p>
      </div>
      <div className={cx("contact-links")}></div>
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

export default Contact;
