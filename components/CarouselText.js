import Image from "next/image";
import web1 from "../public/web1.JPG";
import web2 from "../public/web2.JPG";
import web3 from "../public/web3.JPG";
import web4 from "../public/web4.JPG";
import web5 from "../public/web5.JPG";
import github from "../public/github.JPG";

const CarouselText = () => {
  return (
    <div className="mt-6 rounded-xl bg-gray-200 px-10 shadow-xl dark:bg-gray-800 dark:shadow-white/30">
      <section className="image-section relative flex min-h-[55vh] overflow-hidden">
        <div className="second-loop-container flex w-full flex-row items-center justify-center">
          <div
            id="images-wrapper"
            className="absolute flex flex-row gap-8 pr-8"
          >
            <a href="https://websitepractice1.netlify.app/" target="_blank" rel="noreferrer">
              <div className="image-container flex h-[400px] w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border-4 border-double border-black transition duration-150 hover:scale-110 dark:border-purple-600">
                <Image
                  width={400}
                  height={400}
                  src={web1}
                  alt=""
                  className="image-class min-h-[100%] min-w-[100%]  object-cover"
                />
              </div>
            </a>
            <a href="https://websitepractice2.netlify.app/" target="_blank" rel="noreferrer">
              <div className="image-container flex h-[400px] w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border-4 border-double border-black transition duration-150 hover:scale-110 dark:border-purple-600">
                <Image
                  width={400}
                  height={400}
                  src={web2}
                  alt=""
                  className="image-class min-h-[100%] min-w-[100%]  object-cover"
                />
              </div>
            </a>
            <a href="https://websitepractice3.netlify.app/" target="_blank" rel="noreferrer">
              <div className="image-container flex h-[400px] w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border-4 border-double border-black transition duration-150 hover:scale-110 dark:border-purple-600">
                <Image
                  width={400}
                  height={400}
                  src={web3}
                  alt=""
                  className="image-class min-h-[100%] min-w-[100%]  object-cover"
                />
              </div>
            </a>
          </div>

          <div
            id="images-wrapper"
            className="absolute flex flex-row gap-8 pr-8"
          >
            <a href="https://websitepractice4.netlify.app/" target="_blank" rel="noreferrer">
              <div className="image-container flex h-[400px] w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border-4 border-double border-black transition duration-150 hover:scale-110 dark:border-purple-600">
                <Image
                  width={400}
                  height={400}
                  src={web4}
                  alt=""
                  className="image-class min-h-[100%] min-w-[100%]  object-cover"
                />
              </div>
            </a>
            <a
              href="https://cornonthecobcollection.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="image-container flex h-[400px] w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border-4 border-double border-black transition duration-150 hover:scale-110 dark:border-purple-600">
                <Image
                  width={400}
                  height={400}
                  src={web5}
                  alt=""
                  className="image-class min-h-[100%] min-w-[100%]  object-cover"
                />
              </div>
            </a>
            <a
              href="https://github.com/hzlnutspread?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <div className="image-container flex h-[400px] w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-lg border-4 border-double border-black transition duration-150 hover:scale-110 dark:border-purple-600">
                <Image
                  width={400}
                  height={400}
                  src={github}
                  alt=""
                  className="image-class min-h-[100%] min-w-[100%]  object-cover"
                />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselText;
