import Banner from "@/components/banner";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";
import TechSkills from "@/components/techSkills";
import Footer from "@/components/footer";

import { ToastContainer } from "react-toastify";
import { useRef } from "react";
import Head from "next/head";

export default function Home() {
  const scrollRef = useRef(null);

  return (
    <div
      className="overflow-hidden
    "
    >
      <Head>
        <title>FabianGPR</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="shortcut icon"
          href="/icons/portfolio-icon.png
        "
        />
      </Head>
      <Banner ref={scrollRef} />
      <AboutMe />
      <Projects />
      <TechSkills />
      <Footer />
      <ToastContainer />
    </div>
  );
}
