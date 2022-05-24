import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { client } from "../libs/client";

const Home: NextPage = (blog: any) => {
  console.log(blog);
  return (
    <>
      <Head>
        <title>yokohamaBlog</title>
        <meta name="description" content="yokohamaBlog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>横浜ブログ</h1>
        {/* <ul>
          {blog.map((blog: any) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul> */}
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
