import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import stockImage1 from "../../../data/images/stock-image-1.jpg";
import stockImage2 from "../../../data/images/stock-image-2.jpg";
import stockImage3 from "../../../data/images/stock-image-3.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from "@/components/molecules/Slide/Slide";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <Slide
          src={stockImage3.src}
          height={stockImage3.height}
          width={stockImage3.width}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          src={stockImage1.src}
          height={stockImage1.height}
          width={stockImage1.width}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          src={stockImage2.src}
          height={stockImage2.height}
          width={stockImage2.width}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
