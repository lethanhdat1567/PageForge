/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from "classnames/bind";
import styles from "./CardAnalysh.module.scss";
import DashBoardSection from "@/components/DashBoardSection/DashBoardSection";

const cx = classNames.bind(styles);

function CardAnalysh({ item }: { item: any }) {
  return (
    <DashBoardSection>
      <div className={cx("item")} style={{ color: item.color }}>
        <div className={cx("item-head")}>
          <item.icon size={20} />
          <span className={cx("item-title")}>{item.title}</span>
        </div>
        <p className={cx("item-info")}>{item.value}</p>
      </div>
    </DashBoardSection>
  );
}

export default CardAnalysh;
