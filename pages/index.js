import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hack Store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
    </>
  );
}
