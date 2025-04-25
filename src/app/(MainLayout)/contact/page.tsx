import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import FormContact from "@/app/(MainLayout)/(home)/_components/ContactUs/_components/FormContact/FormContact";

const cx = classNames.bind(styles);

function Contact() {
  return (
    <div>
      <h1 className={cx("title")}>Liên hệ Đạt:</h1>
      <p className={cx("desc")}>
        Nếu bạn có bất kỳ câu hỏi nào, muốn hợp tác hoặc cần hỗ trợ kỹ thuật,
        hãy liên hệ với mình qua email hoặc mạng xã hội bên dưới nhé.
      </p>
      <div className={cx("contact-links")}></div>
      <div className={cx("wrap")}>
        <FormContact />
      </div>
    </div>
  );
}

export default Contact;
