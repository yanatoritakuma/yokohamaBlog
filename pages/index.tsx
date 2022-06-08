import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/react";
import { client } from "../libs/client";
import { TContents, TBlog } from "../types/TypeBlog";
import { TopSlide } from "../components/TopSlide";
import { NewArticle } from "../components/NewArticle";

const Home = (blog: TContents) => {
  return (
    <>
      <Head>
        <title>yokohamaBlog</title>
        <meta name="description" content="yokohamaBlog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={main}>
        <h1>横浜ブログ</h1>
        <TopSlide blog={blog} />
        <div css={articleBox}>
          {blog.blog.map((blog: TBlog) => (
            <div key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </div>
          ))}
        </div>
        <div css={BlogBox}>
          <Link href="/BlogTop">BlogTop</Link>
        </div>
        <NewArticle blog={blog} />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default Home;

const main = css`
  margin: 0 auto;
  max-width: 1440px;

  h1 {
    text-align: center;
  }
`;

const articleBox = css`
  margin: 0 auto;
  width: 30%;
  text-align: center;
`;

const BlogBox = css`
  margin: 20px 0;
  text-align: center;

  a {
    font-size: 24px;
    text-decoration: none;
    color: #333;
  }
`;
