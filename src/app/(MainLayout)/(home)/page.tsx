import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Hero from "@/app/(MainLayout)/(home)/_components/Hero/Hero";
import Service from "@/app/(MainLayout)/(home)/_components/Service/Service";
import CTA from "@/app/(MainLayout)/(home)/_components/CTA/CTA";
import Testimonials from "@/app/(MainLayout)/(home)/_components/Testimonials/Testimonials";
import ContactUs from "@/app/(MainLayout)/(home)/_components/ContactUs/ContactUs";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrap")}>
      <Hero />
      <Service />
      <CTA />
      <Testimonials />
      <ContactUs />
    </div>
  );
}

export default Home;
