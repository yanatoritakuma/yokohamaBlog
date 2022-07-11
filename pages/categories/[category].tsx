import React, { memo } from "react";
import { css } from "@emotion/react";
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
                <h3>{v.title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Category;

const categoryBoxMain = css`
  margin: 0 auto;
  max-width: 1440px;

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
    display: block;
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
  border-radius: 10px;
  transition: 0.5s all;
  &:hover {
    transform: translateY(-4px);
    transition: 0.5s all;
    opacity: 0.6;
  }

  h3 {
    width: 100%;
    text-align: center;
  }
`;
