import React, { memo } from "react";
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { TContents } from "../../types/TypeBlog";
import noImage from "../../public/image/noimage.png";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

// eslint-disable-next-line react/display-name
export const TopSlide = memo(() => {
  const blogStore = useSelector((state: RootState) => state.blog);

  const trend = blogStore.blog?.blog.filter(
    (v) => v.category?.name === "トレンド"
  );

  return (
    <section css={mainBox}>
      <Swiper navigation={true} modules={[Navigation]}>
        {trend?.map((v) => (
          <SwiperSlide key={v.id}>
            <Link href={`/blog/${v.id}`}>
              {v.eyecatch !== undefined ? (
                <div css={slideImg}>
                  <h2>{v.title}</h2>
                  <Image
                    src={v.eyecatch?.url}
                    alt="アイキャッチ"
                    width={1440}
                    layout="fill"
                  />
                </div>
              ) : (
                <Image
                  src={noImage}
                  alt="画像なし"
                  width={1440}
                  layout="fill"
                />
              )}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

const mainBox = css`
  .swiper {
    width: 100%;
    height: 600px;

    img {
      cursor: pointer;
      transition: 0.5s all;
    }
  }

  @media screen and (max-width: 768px) {
    .swiper {
      height: 400px;
    }
  }
  @media screen and (max-width: 425px) {
    .swiper {
      height: 300px;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;

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
`;

const slideImg = css`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s all;
  &:hover {
    img {
      transform: scale(1.1, 1.1);
      transition: 0.5s all;
    }
  }

  h2 {
    position: absolute;
    z-index: 10;
    background-color: #fff;
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      font-size: 20px;
      width: 230px;
      height: 120px;
    }

    @media screen and (max-width: 420px) {
      font-size: 18px;
      width: 200px;
      height: 110px;
    }
  }
`;
