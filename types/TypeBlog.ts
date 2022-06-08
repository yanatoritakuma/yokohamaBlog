export type TBlog = {
  category: {
    createdAt: string;
    id: string;
    name: string;
    publishedAt: string;
    revisedAt: string;
    updatedAt: string;
  };
  content: string;
  createdAt: string;
  eyecatch?: {
    height: number;
    url: string;
    width: number;
  };
  id: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  updatedAt: string;
};

export type TContents = {
  blog: TBlog[];
};

export type TArticle = {
  blog: {
    category: null | string;
    content: string;
    createdAt: string;
    eyecatch?: {
      height: number;
      url: string;
      width: number;
    };
    id: string;
    publishedAt: string;
    revisedAt: string;
    title: string;
    updatedAt: string;
  };
};
