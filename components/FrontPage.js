import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import deved from "../public/dev-ed-wave.png";
import Image from "next/image";

const FrontPage = () => {
  return (
    <section className="px-10 md:px-20 lg:px-40">
      <div className="p-6 text-center">
        <h2 className="py-2 text-5xl font-medium text-black dark:text-white md:text-6xl">
          Ken Smith
        </h2>
        <h3 className="py-2 text-2xl dark:text-gray-300 md:text-3xl">
          Developer and NFT enthusiast
        </h3>
        <p className="text-medium text-gray-8 mx-auto max-w-lg py-5 leading-6 text-gray-800 dark:text-gray-300 md:text-xl">
          Full-stack capabilities with an emphasis on front-end <br />
          Java + Python + Javascript
        </p>
      </div>

      <div className="flex justify-center gap-16 py-3 text-5xl text-gray-600 dark:text-gray-300 md:text-6xl">
        <a
          href="https://github.com/hzlnutspread"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ken-smith-62a69924b/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>

      <div className="relative mx-auto mt-10 h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-purple-500 md:h-96 md:w-96">
        <Image src={deved} layout="fill" objectFit="cover" alt="" />
      </div>
    </section>
  );
};

export default FrontPage;
