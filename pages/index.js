import Head from "next/head";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import FrontPage from "../components/FrontPage";
import AboutMe from "../components/AboutMe";
import Cards from "../components/Cards";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ken Smith Porfolio</title>
        <meta name="description" content="My Website Portfolio"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <main className="bg-white dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar currMode={darkMode} setMode={setDarkMode} />
          <FrontPage />
        </section>

        <section className="px-10 pt-20 md:px-20 lg:px-40">
          <AboutMe />
          <Cards />
        </section>

        <Portfolio />

        <Footer />
      </main>
    </div>
  );
}
