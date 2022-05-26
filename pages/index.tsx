import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>yokohamaBlog</title>
        <meta name="description" content="yokohamaBlog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>横浜ブログ</h1>
        <Link href="/BlogTop">BlogTop</Link>
      </main>
    </>
  );
};

export default Home;
