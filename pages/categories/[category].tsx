import React, { memo } from "react";
import { css } from "@emotion/react";
import { client } from "../../libs/client";
import Link from "next/link";
import Image from "next/image";
import noImage from "../../public/image/noimage.png";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

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
  const blogStore = useSelector((state: RootState) => state.blog);
  const categoryBlog = blogStore.blog?.blog.filter(
    (v) => v.category?.name === categoryName
  );

  return (
    <section css={categoryBoxMain}>
      <h2>{categoryName}Page</h2>
      <div css={categoryBoxMainIn}>
        {categoryBlog?.map((v) => (
          <div key={v.id} css={categoryBox}>
            <Link href={`/blog/${v.id}`}>
              <div>
                {v.eyecatch !== undefined ? (
                  <Image
                    src={v.eyecatch.url}
                    alt="アイキャッチ"
                    width={500}
                    height={300}
                  />
                ) : (
                  <Image
                    src={noImage}
                    alt="画像なし"
                    width={500}
                    height={300}
                  />
                )}
              </div>
            </Link>
            <p>{v.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Category;

const categoryBoxMain = css`
  h2 {
    text-align: center;
    color: #f7c164;
  }
`;

const categoryBoxMainIn = css`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const categoryBox = css`
  margin: 10px auto;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 96%;
  overflow: hidden;
  border: 1px solid #aaa;
  box-shadow: 4px 4px 10px #aaa;

  img {
    transition: 0.5s all;
    &:hover {
      transform: scale(1.1, 1.1);
      transition: 0.5s all;
    }
  }

  p {
    width: 100%;
    text-align: center;
  }
`;
