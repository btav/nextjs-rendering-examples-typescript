import React from "react";
import Image from "next/image";

interface PostProps {
  title: string;
  content: string;
  imageUrl: string;
}

export function Post({ title, content, imageUrl }: PostProps) {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-4xl mb-5">
      <a href="#">
        <Image
          width={1200}
          height={800}
          className="rounded-t-lg"
          src={imageUrl}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {title}
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3">{content}</p>
        <a
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          href="#"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
