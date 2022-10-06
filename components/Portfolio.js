import Image from "next/image";
import web1 from "../public/web1.JPG";
import web2 from "../public/web2.JPG";
import web3 from "../public/web3.JPG";
import web4 from "../public/web4.JPG";

const Portfolio = () => {
  return (
    <section className="px-10 py-20 md:px-20 lg:px-40">
      <div>
        <h3 className="py-1 text-3xl dark:text-white">Portfolio</h3>
        <p className="text-medium text-gray-8 py-5 leading-6 text-gray-800 dark:text-gray-300 md:text-xl">
          below you can find examples of my works and websites - Including the
          practice ones
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
  );
};

export default Portfolio;
