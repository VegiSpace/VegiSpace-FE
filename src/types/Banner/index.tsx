interface MainBannerProps {
  title: string;
  bannerImage: BannerImageProps;
}

interface BannerImageProps {
  src: string;
  subSrc: string;
  alt: string;
}
export type { MainBannerProps };
