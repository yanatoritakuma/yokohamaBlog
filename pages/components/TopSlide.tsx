import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { css } from "@emotion/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export const TopSlide = () => {
  return (
    <section css={mainBox}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <span className="swiperImg">testImage1</span>
          {/* <Image
            className="swiperImg"
            src="https://images.microcms-assets.io/assets/74c74656d94948558faa781854aab672/2ceadf63158a4854a579ba1338d2693d/minatomirai.jpeg"
            alt=""
            width={300}
            height={600}
          /> */}
        </SwiperSlide>
        <SwiperSlide>
          <span className="swiperImg">testImage2</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="swiperImg">testImage3</span>
        </SwiperSlide>
        <SwiperSlide>
          <span className="swiperImg">testImage4</span>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

const mainBox = css`
  .swiper {
    width: 100%;
    height: 600px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiperImg {
    background-color: red;
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
