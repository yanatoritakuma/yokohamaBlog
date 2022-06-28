import React, { memo } from "react";
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { TContents } from "../types/TypeBlog";
import noImage from "../public/image/noimage.png";

type Props = {
  blog: TContents;
};

// eslint-disable-next-line react/display-name
export const TopSlide = memo((props: Props) => {
  const { blog } = props;
  console.log("blog", blog);
  const trend = blog.blog.filter((v) => v.category?.name === "トレンド");
  return (
    <section css={mainBox}>
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
      >
        {trend.map((v) => (
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

    h2 {
      cursor: pointer;
    }

    img {
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
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

  h2 {
    position: absolute;
    z-index: 10;
    background-color: #fff;
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
