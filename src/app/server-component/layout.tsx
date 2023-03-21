import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col items-center h-screen">
      <h1 className="text-4xl font-bold pt-8">🤖 Server component</h1>
      <div className="my-4">{children}</div>
    </main>
  );
}
