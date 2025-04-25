import classNames from "classnames/bind";
import styles from "./CarouselTestimonials.module.scss";

const cx = classNames.bind(styles);

function CarouselTestimonialsItem() {
  return (
    <div className={cx("item")}>
      <div className={cx("item-content")}>
        <div className={cx("item-feedback")}>
          We have been working with Positivus for the past year and have seen a
          significant increase in website traffic and leads as a result of their
          efforts. The team is professional, responsive, and truly cares about
          the success of our business. We highly recommend Positivus to any
          company looking to grow their online presence.
        </div>
        <div className={cx("arrow")}></div>
      </div>
      <div className={cx("item-info")}>
        <h3 className={cx("item-title")}>John Smith</h3>
        <p className={cx("item-desc")}>Marketing Director at XYZ Corp</p>
      </div>
    </div>
  );
}

export default CarouselTestimonialsItem;
