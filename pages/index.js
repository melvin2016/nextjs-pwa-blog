import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div style={{ textAlign: "center" }}>
          <h1>This is a Progressive web application - Nextjs</h1>
          <p>
            <a href="https://melvingeorge.me/blog/nextjs-pwa">
              read more about on how to setup here
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
