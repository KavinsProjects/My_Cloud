import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

function Home() {
  const [asset, setAssest] = useState([]);
  console.log(asset);

  const getData = async function () {
    try {
      const data = await fetch("/api/assets");
      const media = await data.json();
      setAssest(media);
    } catch (error) {
      console.log(`${error}`);
    }
  };

  useEffect(() => {
    getData;
  }, []);

  const onHandleNewUpload = (asset) => {
    setAssest((prev) => [asset, ...prev]);
  };
  return (
    <>
      <Head>
        <title>My Cloud</title>
        <meta name="kavinn" content="Home page of MyCloud" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <div className="main-container">
        <Sidebar onHandleNewUpload={onHandleNewUpload} />
        <Dashboard />
      </div>
    </>
  );
}

export default Home;
