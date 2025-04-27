"use client";

import classNames from "classnames/bind";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { imgs } from "../../../../../../public/images";
import Button from "@/components/Button/Button";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import AOS from "aos";

const cx = classNames.bind(styles);

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Thời gian chạy animation (ms)
      once: true, // Chạy 1 lần khi scroll tới
    });
  }, []);

  return (
    <div className={cx("wrap")}>
      <div className="grid grid-cols-2 gap-4">
        <div className={cx("info")} data-aos="fade-right">
          <h1 className={cx("title")}>
            Navigating the digital landscape for success
          </h1>
          <p className={cx("desc")}>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button variants="secondary" className={cx("btn")}>
            Start building with us
          </Button>
        </div>
        <Tilt>
          <div className={cx("banner")} data-aos="fade-left">
            <Image
              alt="PageForge Banner"
              src={imgs.HeroBanner}
              className={cx("image")}
            />
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Hero;
