import Head from "next/head";
import Link from "next/link";
import { css } from "@emotion/react";
import { client } from "../libs/client";
import { TContents, TBlog } from "../types/TypeBlog";
import { TopSlide } from "../components/templates/TopSlide";
import { NewArticle } from "../components/templates/NewArticle";
import titleImg from "../public/image/title.jpeg";
import Image from "next/image";

const Home = (blog: TContents) => {
  return (
    <>
      <Head>
        <title>はまっぷ</title>
        <meta name="description" content="yokohamaBlog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main css={main}>
        <h1>
          <Image src={titleImg} alt="タイトル" width={300} height={150} />
        </h1>
        <TopSlide blog={blog} />
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

    @media screen and (max-width: 768px) {
      margin: 0 auto;
      width: 200px;
    }

    @media screen and (max-width: 420px) {
      width: 150px;
    }
  }
`;
