import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/react";
import { client } from "../libs/client";
import { TContents, TBlog } from "../types/TypeBlog";
import { TopSlide } from "../components/TopSlide";
import { NewArticle } from "../components/NewArticle";
import titleImg from "../public/image/title.jpeg";
import Image from "next/image";

const Home = (blog: TContents) => {
  return (
    <>
      <Head>
        <title>yokohamaBlog</title>
        <meta name="description" content="yokohamaBlog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={main}>
        <h1>
          <Image src={titleImg} alt="タイトル" width={300} height={150} />
        </h1>
        <TopSlide blog={blog} />
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
