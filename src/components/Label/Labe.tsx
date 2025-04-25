import classNames from "classnames/bind";
import styles from "./Label.module.scss";

const cx = classNames.bind(styles);

function Label({
  children,
  classname,
}: {
  children: React.ReactNode | string;
  classname?: string;
}) {
  return <h2 className={cx("wrap", classname)}>{children}</h2>;
}

export default Label;
