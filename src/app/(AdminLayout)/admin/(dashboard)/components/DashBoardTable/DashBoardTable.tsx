import classNames from "classnames/bind";
import styles from "./DashBoardTable.module.scss";
import DataTable from "@/components/DataTable/DataTable";
import { bookingMockData } from "@/lib/rows";
import { bookingColumns } from "@/tables/bookingColumns";

const cx = classNames.bind(styles);

function DashBoardTable() {
  return <DataTable data={bookingMockData} columns={bookingColumns} />;
}

export default DashBoardTable;
