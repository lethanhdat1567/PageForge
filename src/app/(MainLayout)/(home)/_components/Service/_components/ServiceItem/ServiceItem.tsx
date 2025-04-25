import classNames from "classnames/bind";
import styles from "./ServiceItem.module.scss";
import Label from "@/components/Label/Labe";
import Link from "@/components/Link/Link";
import Image from "next/image";
import { ServiceType } from "@/lib/type";

const cx = classNames.bind(styles);

function ServiceItem({ item }: { item: ServiceType }) {
  return (
    <div className={cx("wrap", item.variant)}>
      <div className={cx("info-wrap")}>
        <div className={cx("info")}>
          <div className={cx("info-labels")}>
            <Label classname={cx("label")}>{item.title}</Label>
            <br />
            <Label classname={cx("sub-label")}>{item.subTitle}</Label>
          </div>
          <Link variant={item.linkVariant} path="/">
            Learn more
          </Link>
        </div>
        <Image
          src={item.image}
          alt="Service image"
          quality={100}
          width={200}
          height={140}
        />
      </div>
    </div>
  );
}

export default ServiceItem;
