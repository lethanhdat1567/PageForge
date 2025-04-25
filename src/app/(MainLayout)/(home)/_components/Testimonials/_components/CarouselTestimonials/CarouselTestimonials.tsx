import classNames from "classnames/bind";
import styles from "./CarouselTestimonials.module.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import CarouselTestimonialsItem from "@/app/(MainLayout)/(home)/_components/Testimonials/_components/CarouselTestimonials/CarouselTestimonialsItem";
import { StarPagination } from "../../../../../../../../public/icons/icons";

const cx = classNames.bind(styles);

function CarouselTestimonials() {
  const [current, setCurrent] = useState(0);

  const handlePrevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  const handleNextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const handleSlideChange = (index: number) => {
    setCurrent(index);
  };

  return (
    <Carousel
      opts={{
        align: "center",
        loop: false,
      }}
      handleNextSlide={handleNextSlide}
      handlePrevSlide={handlePrevSlide}
      className="w-full max-w-6xl mx-auto overflow-hidden h-[400px]"
    >
      <CarouselContent className="-ml-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CarouselItem key={i} className="pl-4 basis-[66.6667%]">
            <CarouselTestimonialsItem />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className={cx("footer-wrap")}>
        <CarouselPrevious
          className={cx("btn-prev", { disable: current === 0 })}
        />

        <div className={cx("pagination")}>
          {Array.from({ length: 4 }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleSlideChange(i)}
              className={cx("pagina-btn", { active: current === i })}
            >
              {StarPagination}
            </button>
          ))}
        </div>

        <CarouselNext className={cx("btn-next", { disable: current === 4 })} />
      </div>
    </Carousel>
  );
}

export default CarouselTestimonials;
