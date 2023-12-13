"use client";

import { useEffect } from "react";
import Hero from "@components/Hero";
import About from "@components/About";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default Home;
