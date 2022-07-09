import React, { memo } from "react";
import { css } from "@emotion/react";
import { client } from "../../libs/client";
import Link from "next/link";
import Image from "next/image";

export async function getStaticPaths() {
  return {
    paths: [{ params: { category: "eat" } }, { params: { category: "play" } }],
    fallback: false,
  };
}

export const getStaticProps = async (context: {
  params: { category: string };
}) => {
  const { category } = context.params;
  return {
    props: { category },
  };
};

type Props = {
  category: string;
};

// eslint-disable-next-line react/display-name
const Category = memo((category: Props) => {
  const categoryName = category.category;

  return (
    <section>
      <h2>CategoryPage</h2>
      <p>{categoryName}</p>
    </section>
  );
});

export default Category;
