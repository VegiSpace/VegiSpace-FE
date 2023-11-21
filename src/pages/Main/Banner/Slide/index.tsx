import { MainBannerProps } from "types";
import * as St from "./style";

const Slide = (props: MainBannerProps) => {
  const { bannerImage } = props;

  return (
    <St.SlideContainer>
      <picture>
        <source srcSet={bannerImage.src} type="image/webp" />
        <St.ImageWrapper
          src={bannerImage.subSrc}
          alt={bannerImage.alt}
          loading="lazy"
        />
      </picture>
    </St.SlideContainer>
  );
};

export default Slide;
