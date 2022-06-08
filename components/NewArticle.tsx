import React, { memo } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import { TContents } from "../types/TypeBlog";
import noImage from "../public/image/noimage.png";

type Props = {
  blog: TContents;
};

// eslint-disable-next-line react/display-name
export const NewArticle = memo((props: Props) => {
  const { blog } = props;
  const newArticle = blog.blog.slice(0, 6);

  return (
    <section css={newArticleMainBox}>
      <h2>新着記事</h2>
      <div css={newArticleMainBoxIn}>
        {newArticle.map((v) => (
          <div key={v.id} css={newArticleBox}>
            <p>{v.title}</p>
            <Link href={`/blog/${v.id}`}>
              {v.eyecatch !== undefined ? (
                <Image
                  src={v.eyecatch.url}
                  alt="アイキャッチ"
                  width={300}
                  height={200}
                  // layout="fill"
                />
              ) : (
                <Image
                  src={noImage}
                  alt="画像なし"
                  width={300}
                  height={200}
                  // layout="fill"
                />
              )}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
});

const newArticleMainBox = css`
  h2 {
    text-align: center;
  }
`;

const newArticleMainBoxIn = css`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  h2 {
    text-align: center;
  }
`;

const newArticleBox = css`
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #aaa;
  cursor: pointer;

  p {
    width: 100%;
    text-align: center;
  }
`;
