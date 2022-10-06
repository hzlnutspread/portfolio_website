import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.JPG";
import web2 from "../public/web2.JPG";
import web3 from "../public/web3.JPG";
import web4 from "../public/web4.JPG";

import { useState } from "react";

import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Ken Smith Porfolio</title>
        <meta name="description" content="Generated by create-next-app"></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <main className="bg-white text-center font-burtons dark:bg-gray-900">
        {/* Nav bar + front page */}
        <section className="min-h-screen">
          {/* Nav bar */}
          <nav className="sticky top-0 z-50 mb-10 flex h-32 items-center justify-between bg-black bg-opacity-10 px-10 py-10 text-black dark:bg-white dark:bg-opacity-10 lg:px-20">
            <h1 className="font-burtons text-xl hover:cursor-pointer dark:text-white">
              CornOnTheCob
            </h1>
            <ul className="flex flex-row items-center">
              <li className="pr-2">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-xl dark:text-white"
                />
              </li>
              <li>
                <a
                  href="#"
                  className="ml-8 rounded-md bg-gradient-to-r from-purple-500 to-blue-600 px-4 py-2 text-black hover:inline-block hover:scale-125 dark:text-white"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Front page under the nav bar */}
          <section className="px-10 md:px-20 lg:px-40">
            <div className="p-8 text-center">
              <h2 className="py-2 text-5xl font-medium text-purple-500 dark:text-white md:text-6xl">
                Ken Smith
              </h2>
              <h3 className="py-2 text-2xl dark:text-gray-300 md:text-3xl">
                Developer and NFT enthusiast
              </h3>
              <p className="text-medium text-gray-8 mx-auto max-w-lg py-5 leading-6 text-gray-800 dark:text-gray-300 md:text-xl">
                Full-stack capabilities with an emphasis on back-end <br />
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

            <div className="relative mx-auto mt-20 h-80 w-80 overflow-hidden rounded-full bg-gradient-to-b from-purple-500 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="" />
            </div>
          </section>
        </section>

        {/* About me section + Card section */}
        <section className="px-10 pt-20 md:px-20 lg:px-40">
          {/* About me */}
          <div>
            <h3 className="py-1 text-3xl dark:text-white">
              Some stuff about me
            </h3>
            <p className="text-medium text-gray-8 py-5 leading-6 text-gray-800 dark:text-gray-300 md:text-xl">
              I am a <span className="text-purple-500">self taught </span>
              developer and began my journey in June of 2022 while working a
              full time job as a data analyst. I have a deep love and passion
              for coding and spend most of my free time honing my craft.
            </p>
            <p className="text-medium text-gray-8 pb-5 leading-6 text-gray-800 dark:text-gray-300 md:text-xl">
              Im from New Zealand and do Brazilian Jiu jitsu in my spare time. I
              am also heavily involved in the Futureverse NFT community.
            </p>
          </div>

          {/* Card section */}
          <div className="gap-10 dark:text-gray-300 lg:flex">
            <div className="my-10 rounded-xl p-10 text-center shadow-lg lg:flex-1">
              <Image src={design} width={100} height={100} alt="" />
              <h3 className="pt-8 pb-2 text-lg font-medium">
                Beautiful designs
              </h3>
              <p className="py-2 ">
                If you need front-end work, I can create aesthetic websites that
                encourage users to stay on your page and please their eyes
              </p>
              <h4 className="py-4 text-purple-600">Design tools I use</h4>
              <p className="text-gray-800 dark:text-gray-300">Photoshop</p>
              <p className="text-gray-800 dark:text-gray-300">Gimp</p>
              <p className="text-gray-800 dark:text-gray-300">Figma</p>
            </div>

            <div className="my-10 rounded-xl p-10 text-center shadow-lg lg:flex-1">
              <Image src={code} width={100} height={100} alt="" />
              <h3 className="pt-8 pb-2 text-lg font-medium">Reliable code</h3>
              <p className="py-2 ">
                I can write code that is of a high standard and is accessible
                for anyone to easily make changes to in the future
              </p>
              <h4 className="py-4 text-purple-600">Languages I use</h4>
              <p className="text-gray-800 dark:text-gray-300">Java</p>
              <p className="text-gray-800 dark:text-gray-300">Python</p>
              <p className="text-gray-800 dark:text-gray-300">Javascript</p>
            </div>

            <div className="my-10 rounded-xl p-10 text-center shadow-lg lg:flex-1">
              <Image src={consulting} width={100} height={100} alt="" />
              <h3 className="pt-8 pb-2 text-lg font-medium">
                Guaranteed follow-ups
              </h3>
              <p className="py-2 ">
                I will strive to make sure my product works and is maintained
                properly. If anything breaks, I will fix it immediately
              </p>
              <h4 className="py-4 text-purple-600">Availability</h4>
              <p className="text-gray-800 dark:text-gray-300">Weekdays</p>
              <p className="text-gray-800 dark:text-gray-300">Saturdays</p>
              <p className="text-gray-800 dark:text-gray-300">9am-5pm</p>
            </div>
          </div>
        </section>

        {/* Portfolio section */}
        <section className="px-10 py-20 md:px-20 lg:px-40">
          <div>
            <h3 className="py-1 text-3xl dark:text-white">Portfolio</h3>
            <p className="text-medium text-gray-8 py-5 leading-6 text-gray-800 dark:text-gray-300 md:text-xl">
              below you can find examples of my works and websites - Including
              the practice ones
            </p>
          </div>

          {/* portfolio examples */}
          <div className="flex flex-col justify-center gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="max-w-4xl flex-1 basis-1/3 overflow-hidden rounded-lg shadow-2xl">
              <a
                href="https://stupendous-bienenstitch-0c2c81.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={web1}
                  className=" object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </a>
            </div>
            <div className="max-w-4xl flex-1 basis-1/3 overflow-hidden rounded-lg shadow-2xl">
              <a
                href="https://beamish-heliotrope-d8d5f2.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={web4}
                  className=" object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </a>
            </div>
            <div className="max-w-4xl flex-1 basis-1/3 overflow-hidden rounded-lg shadow-2xl">
              <a
                href="https://euphonious-marshmallow-35fb74.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={web3}
                  className=" object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </a>
            </div>
            <div className="max-w-4xl flex-1 basis-1/3 overflow-hidden rounded-lg shadow-2xl">
              <a
                href="https://fabulous-druid-21158e.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={web2}
                  className=" object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </a>
            </div>

            <div className="max-w-4xl flex-1 basis-1/3 overflow-hidden rounded-lg shadow-2xl">
              <a
                href="https://fabulous-druid-21158e.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={web1}
                  className=" object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  alt=""
                />
              </a>
            </div>
          </div>
        </section>

        {/* Section to go to another page */}
        <section className="flex h-32 flex-col justify-center bg-black bg-opacity-10 px-10 py-10 text-black dark:bg-white dark:bg-opacity-10 dark:text-white lg:px-20">
          <h3 className="text-xl">
            Click{" "}
            <span className="text-purple-500">
              <Link href="/about">here</Link>
            </span>{" "}
            if youre interested in seeing my NFT collection!
          </h3>
        </section>
      </main>
    </div>
  );
}
