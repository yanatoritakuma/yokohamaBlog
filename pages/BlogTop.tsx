import React, { useState } from "react";
// import { css } from "@emotion/react";
import { client } from "../libs/client";
import Link from "next/link";
import { TContents } from "../types/TypeBlog";

const BlogTop = (blog: TContents) => {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {blog.blog.map((blog: any) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">HOME</Link>
    </div>
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

export default BlogTop;
