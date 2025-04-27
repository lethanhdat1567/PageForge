import classNames from "classnames/bind";
import styles from "./CarouselTestimonials.module.scss";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useState } from "react";
import CarouselTestimonialsItem from "@/app/(MainLayout)/(home)/_components/Testimonials/_components/CarouselTestimonials/CarouselTestimonialsItem";
import { StarPagination } from "../../../../../../../../public/icons/icons";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const cx = classNames.bind(styles);

function CarouselTestimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const selected = api.selectedScrollSnap();
      setCurrent(selected);
    };

    api.on("select", onSelect);

    // Lấy luôn index hiện tại khi vừa mount
    onSelect();

    // Cleanup event listener (best practice)
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      setApi={setApi}
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
