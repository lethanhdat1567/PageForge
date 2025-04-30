import classNames from "classnames/bind";
import styles from "./DashBoardSection.module.scss";

const cx = classNames.bind(styles);

function DashBoardSection({ children }: { children: React.ReactNode }) {
  return <div className={cx("wrap")}>{children}</div>;
}

export default DashBoardSection;
