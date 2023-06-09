import Banner from "@/components/banner";
import AboutMe from "@/components/about";
import Projects from "@/components/projects";
import TechSkills from "@/components/techSkills";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";

import { useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);

  return (
    <div>
      <Banner ref={scrollRef} />
      <AboutMe />
      <Projects />
      <TechSkills />
      <Footer />
      <ToastContainer />
    </div>
  );
}
