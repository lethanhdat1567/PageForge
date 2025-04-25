import classNames from "classnames/bind";
import styles from "./CTA.module.scss";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { imgs } from "../../../../../../public/images";

const cx = classNames.bind(styles);

function CTA() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("info")}>
        <h2 className={cx("title")}>Let’s make things happen</h2>
        <p className={cx("desc")}>
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button className={cx("btn")} variants="secondary">
          Get your free proposal
        </Button>
      </div>
      <div className={cx("banner")}>
        <Image alt="CTA" src={imgs.CTA} width={350} height={390} />
      </div>
    </div>
  );
}

export default CTA;
