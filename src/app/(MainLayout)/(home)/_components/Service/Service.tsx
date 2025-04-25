import classNames from "classnames/bind";
import styles from "./Servive.module.scss";
import Label from "@/components/Label/Labe";
import ServiceItem from "@/app/(MainLayout)/(home)/_components/Service/_components/ServiceItem/ServiceItem";
import { serviceData } from "@/lib/data";

const cx = classNames.bind(styles);

function Service() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("header")}>
        <Label>Services</Label>
        <p className={cx("header-desc")}>
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className={cx("body")}>
        <div className="grid grid-cols-2 gap-6">
          {serviceData.map((item, index) => (
            <ServiceItem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
