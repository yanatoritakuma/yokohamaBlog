import React, { useState } from "react";
import { css } from "@emotion/react";
import { client } from "../../libs/client";
import Link from "next/link";
import { TArticle } from "../../types/TypeBlog";

const BlogID = (blog: TArticle) => {
  const article = blog.blog;

  return (
    <main css={mainBox}>
      <h1>{article.title}</h1>
      <p>{article.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${article.content}`,
        }}
      />
      <Link href="/">HOME</Link>
    </main>
  );
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export default BlogID;

const mainBox = css`
  img {
    width: 80%;
  }
`;
