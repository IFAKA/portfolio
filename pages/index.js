import Contact from "@components/ui/Contact";
import About from "@components/ui/About";
import Experience from "@components/ui/Experience";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FAKA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <About />
      <Experience />
      <Contact />
    </>
  );
}
