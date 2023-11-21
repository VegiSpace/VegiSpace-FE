import { useState } from "react";
import Swiper from "swiper";
import { SwiperProps } from "swiper/react";

const useBannerSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperSetting: SwiperProps = {
    slidesPerView: 1,
    loop: true,
    onSlideChange: (swiper: Swiper) => setCurrentSlide(swiper.realIndex),
  };

  return { swiperSetting, currentSlide };
};

export default useBannerSwiper;
