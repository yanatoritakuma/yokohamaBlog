import React, { memo } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import { TContents } from "../../types/TypeBlog";
import eatImg from "../../public/image/eat.jpeg";
import { LinkButton } from "../atoms/LinkButton";

// eslint-disable-next-line react/display-name
export const SpecialFeature = memo(() => {
  console.log("SpecialFeature");

  return (
    <section>
      <h2>SpecialFeature</h2>
      <Image src={eatImg} alt="eat" width={500} height={300} />
    </section>
  );
});
