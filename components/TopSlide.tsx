import React from "react";
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { TContents } from "../types/TypeBlog";

type Props = {
  blog: TContents;
};

export const TopSlide = (props: Props) => {
  const { blog } = props;
  const trend = blog.blog.filter((v) => v.category?.name === "トレンド");
  return (
    <section css={mainBox}>
      <Swiper navigation={true} modules={[Navigation]}>
        {trend.map((v) => (
          <SwiperSlide key={v.id}>
            <Link href={`/blog/${v.id}`}>
              <Image
                src={v.eyecatch.url}
                alt="アイキャッチ"
                width={1440}
                layout="fill"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const mainBox = css`
  .swiper {
    width: 100%;
    height: 600px;

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
`;
