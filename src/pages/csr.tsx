import React, { useEffect, useState } from "react";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { Post } from "@/components/Post";

interface IPost {
  title: string;
  content: string;
  imageUrl: string;
}

function CSR() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = async () => {
    try {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setPosts(data.posts);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const renderContent = () => {
    if (posts.length === 0) {
      return <LoadingIndicator />;
    }
    return posts.map((post, index) => (
      <Post
        key={index}
        title={post.title}
        imageUrl={post.imageUrl}
        content={post.content}
      />
    ));
  };

  return (
    <main className="flex flex-col items-center h-screen">
      <h1 className="text-4xl font-bold pt-8">👩‍💻 Client-side rendering</h1>
      <div className="my-4">{renderContent()}</div>
    </main>
  );
}

export default CSR;
