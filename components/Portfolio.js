import Image from "next/image";
import web1 from "../public/web1.JPG";
import web2 from "../public/web2.JPG";
import web3 from "../public/web3.JPG";
import web4 from "../public/web4.JPG";
import CarouselText from "./CarouselText";
import Script from "next/script";

const Portfolio = () => {
  return (
    <section className="px-10 py-20 md:px-20 lg:px-40">
      <div className="text-center">
        <h3 className="py-1 text-3xl dark:text-white">Portfolio</h3>
        <p className="text-medium text-gray-8 py-5 leading-6 text-gray-800 dark:text-gray-300 md:text-xl">
          Below you can find links to my work and websites
        </p>
      </div>

      <CarouselText />
      <Script src="/carouselScript.js"></Script>
    </section>
  );
};

export default Portfolio;
