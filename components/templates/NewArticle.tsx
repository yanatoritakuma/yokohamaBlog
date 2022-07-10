import React, { memo } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import noImage from "../../public/image/noimage.png";
import { LinkButton } from "../atoms/LinkButton";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

// eslint-disable-next-line react/display-name
export const NewArticle = memo(() => {
  const blogStore = useSelector((state: RootState) => state.blog);
  const newArticle = blogStore.blog?.blog.slice(0, 6);

  return (
    <section css={newArticleMainBox}>
      <h2>newTopics</h2>
      <div css={newArticleMainBoxIn}>
        {newArticle?.map((v) => (
          <div key={v.id} css={newArticleBox}>
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
      <div css={btnBox}>
        <Link href="BlogTop">
          <div>
            <LinkButton hoverLabel="click me!">More</LinkButton>
          </div>
        </Link>
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

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  h2 {
    text-align: center;
  }
`;

const newArticleBox = css`
  margin: 10px auto;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 96%;
  overflow: hidden;

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

const btnBox = css`
  margin: 30px 0;
  text-align: center;
`;
