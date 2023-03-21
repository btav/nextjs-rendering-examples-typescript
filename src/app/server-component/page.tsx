import React from "react";
import mysql, { RowDataPacket } from "mysql2/promise";
import { Post } from "@/components/Post";

export default async function Page() {
  const connection = await mysql.createConnection(
    process.env.DATABASE_URL || ""
  );

  const [rows] = await connection.query<RowDataPacket[]>(
    "SELECT title, content, imageUrl FROM posts"
  );

  const posts = [...rows];

  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          imageUrl={post.imageUrl}
          content={post.content}
        />
      ))}
    </>
  );
}
