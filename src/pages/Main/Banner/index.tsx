import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import useBannerSwiper from "../@hooks/useBannerSwiper";
import { MainBanner1, MainBanner2, MainBanner3, MainBanner4 } from "assets";
import { MainBannerProps } from "types";
import Slide from "./Slide";
import * as St from "./style";

const Banners: MainBannerProps[] = [
  {
    bannerImage: { src: MainBanner1, subSrc: MainBanner1, alt: "banner 1" },
    title: "banner 1",
  },
  {
    bannerImage: { src: MainBanner2, subSrc: MainBanner2, alt: "banner 2" },
    title: "banner 2",
  },
  {
    bannerImage: { src: MainBanner3, subSrc: MainBanner3, alt: "banner 3" },
    title: "banner 3",
  },
  {
    bannerImage: { src: MainBanner4, subSrc: MainBanner4, alt: "banner 5" },
    title: "banner 4",
  },
];

const Banner = () => {
  const { swiperSetting, currentSlide } = useBannerSwiper();

  return (
    <St.BannerSlider>
      <Swiper {...swiperSetting}>
        {Banners.map((banner: MainBannerProps, idx: number) => (
          <SwiperSlide key={idx}>
            <Slide {...banner} />
          </SwiperSlide>
        ))}
      </Swiper>
      <St.PagingWrapper>
        {Banners.map((banner: MainBannerProps, idx: number) => (
          <St.PagingButton key={idx} isselected={currentSlide === idx} />
        ))}
      </St.PagingWrapper>
    </St.BannerSlider>
  );
};

export default Banner;
