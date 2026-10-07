import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";

function Home() {
  return (
    <>
      <Head>
        <title>My Cloud</title>
        <meta name="kavinn" content="Home page of MyCloud" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div className="main-container">
        <Dashboard />
      </div>
    </>
  );
}

export default Home;
