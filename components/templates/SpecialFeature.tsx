import React, { memo } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import eatImg from "../../public/image/eat.jpeg";
import playImg from "../../public/image/play.jpeg";

// eslint-disable-next-line react/display-name
export const SpecialFeature = memo(() => {
  console.log("SpecialFeature");

  return (
    <section css={featureBox}>
      <h2>SpecialFeature</h2>
      <div css={imgLinkBox}>
        <div className="imgBox">
          <Link href="/">
            <div className="imgBoxIn">
              <Image src={eatImg} alt="eat" width={900} height={500} />
              <span className="imgString">Eat</span>
            </div>
          </Link>
        </div>
        <div className="imgBox">
          <Link href="/">
            <div className="imgBoxIn">
              <Image src={playImg} alt="eat" width={900} height={500} />
              <span className="imgString">Play</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
});

const featureBox = css`
  margin: 50px 0;
  h2 {
    text-align: center;
  }
`;

const imgLinkBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .imgBox {
    display: block;
    width: 48%;
    height: auto;
    cursor: pointer;
  }

  .imgBoxIn {
    position: relative;

    .imgString {
      position: absolute;
      top: 10px;
      left: 15px;
      background-color: #93dffb;
      color: #fff;
      width: 70px;
      height: 73px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
