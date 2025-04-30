import classNames from "classnames/bind";
import styles from "./BtnAddBooking.module.scss";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const cx = classNames.bind(styles);

function BtnAddBooking() {
  return (
    <Button variant="default">
      <Plus />
      Thêm bàn
    </Button>
  );
}

export default BtnAddBooking;
