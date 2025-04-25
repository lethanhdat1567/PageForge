"use client";

import classNames from "classnames/bind";
import styles from "./Testimonials.module.scss";
import Label from "@/components/Label/Labe";
import CarouselTestimonials from "@/app/(MainLayout)/(home)/_components/Testimonials/_components/CarouselTestimonials/CarouselTestimonials";

const cx = classNames.bind(styles);

function Testimonials() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("header")}>
        <Label>Testimonials</Label>
        <p className={cx("header-desc")}>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>
      <div className={cx("body")}>
        <CarouselTestimonials />
      </div>
    </div>
  );
}

export default Testimonials;
