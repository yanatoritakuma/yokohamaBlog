import Head from "next/head";
import { useEffect } from "react";
import { css } from "@emotion/react";
import { client } from "../libs/client";
import { TContents } from "../types/TypeBlog";
import { TopSlide } from "../components/templates/TopSlide";
import { NewArticle } from "../components/templates/NewArticle";
import titleImg from "../public/image/title.jpeg";
import Image from "next/image";
import { SpecialFeature } from "../components/templates/SpecialFeature";
import { useDispatch } from "react-redux";
import { setBlog } from "../provider/blogSlice";

const Home = (blog: TContents) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBlog(blog));
  }, [blog]);

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
        <TopSlide />
        <NewArticle />
        <SpecialFeature />
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
