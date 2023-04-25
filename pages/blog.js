import { getSession } from "next-auth/react";
import React from "react";

const Blog = ({ data }) => {
  return <h2>Blog {data}</h2>;
};

export default Blog;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: session ? "Personalized posts" : "Free posts",
      session,
    },
  };
};
