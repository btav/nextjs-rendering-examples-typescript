import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>React Ottawa Examples</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="flex flex-col items-center h-screen">
          <h1 className="text-4xl font-bold pt-8">
            Ways of rendering components examples
          </h1>
          <ul className="list-disc">
            <li className="py-1">
              <Link href="/csr">👩‍💻 Client-side rendering</Link>
            </li>
            <li className="py-1">
              <Link href="/ssg">⚡️ Static site generation</Link>
            </li>
            <li className="py-1">
              <Link href="/ssr">🤖 Server-side rendering</Link>
            </li>
            <li className="py-1">
              <Link href="/ssg">⚡️ Incremental server-side rendering</Link>
            </li>
            <li className="py-1">
              <Link href="/server-component">🤖 Server component</Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
