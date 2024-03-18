import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../images/report1.jpg";
import img2 from "../images/sms1.jpg";
import img3 from "../images/templates.jpg";
import img4 from "../images/hd.jpeg";
import App from "../App";
import { useTranslation } from "react-i18next";
import "../i18n"

const ImageSlider = () => {
  const { t } = useTranslation('Different'); 

  const images = [
    {
      src: img1,
      head: t('title1'),
      caption:
        t('caption1'),
    },
    {
      src: img2,
      head: t('title2'),
      caption:
      t('caption2'),
    },
    {
      src: img3,
      head: t('title3'),
      caption:
      t('caption3'),
    },
    {
      src: img4,
      head: t('title4'),
      caption:
      t('caption4'),
    },
  ];

  const settings = {
    dots: true,
    autoplay: true,
    autoplayspeed: 1,
    pauseOnHover: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
    <>
    <div className=" p-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <>
            <div className="md:flex bg-gradient-to-r from-stone-300 xs:h-auto md:h-[500px] to-stone-300 via-stone-300 bg-opacity-50 sm:rounded-[60px]">
              <div className="md:w-full p-10 text-black bg-gradient-to-r from-stone-300 to-stone-300 via-stone-300 bg-opacity-50 sm:rounded-[60px]">
                <h2 className="lg:text-6xl md:text-4xl xs:text-2xl mt-10 font-bold mb-10">{image.head}</h2>
                <p className="lg:text-2xl md:text-xl xs:text-lg">{image.caption}</p>
              </div>
              <div className="w-full md:w-full h-[300px] md:h-full overflow-hidden round md:rounded-e-[60px]   bg-stone-300 mt-5 md:mt-0 relative">
                <img
                  src={image.src}
                  alt=""
                  className="w-full h-full "
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-300 to-transparent via-transparent bg-opacity-50 border-none "></div>
              </div>
            </div>
          </>
        ))}
      </Slider>
    </div>
    
    </>
  );
};

export default ImageSlider;
