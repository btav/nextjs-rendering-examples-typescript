import React from "react";
import mysql from "mysql2/promise";
import { Post } from "@/components/Post";
import { Posts } from "@/types/Posts";

function SSG({ posts }: Posts) {
  return (
    <main className="flex flex-col items-center h-screen">
      <h1 className="text-4xl font-bold pt-8">⚡️ Static site generation</h1>
      <div className="my-4">
        {posts.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            imageUrl={post.imageUrl}
            content={post.content}
          />
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const connection = await mysql.createConnection(
    process.env.DATABASE_URL || ""
  );

  const [rows] = await connection.execute(
    "SELECT title, content, imageUrl FROM posts"
  );

  connection.end();

  return {
    props: { posts: rows },
  };
}

export default SSG;
