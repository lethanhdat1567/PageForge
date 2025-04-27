import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Hero from "@/app/(MainLayout)/(home)/_components/Hero/Hero";
import CTA from "@/app/(MainLayout)/(home)/_components/CTA/CTA";
import Testimonials from "@/app/(MainLayout)/(home)/_components/Testimonials/Testimonials";
import HowItWork from "@/app/(MainLayout)/(home)/_components/HowItWork/HowItWork";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrap")}>
      <Hero />
      <HowItWork />
      <CTA />
      <Testimonials />
    </div>
  );
}

export default Home;
