import Image from "next/image";
import img1 from "../public/unsplash_1.jpg";
import img2 from "../public/unsplash_2.jpg";
import img3 from "../public/unsplash_3.jpg";
import img4 from "../public/unsplash_4.jpg";
import img5 from "../public/unsplash_5.jpg";
import img6 from "../public/unsplash_6.jpg";
import img7 from "../public/unsplash_7.jpg";
import img8 from "../public/unsplash_8.jpg";
import img9 from "../public/unsplash_9.jpg";
import img10 from "../public/unsplash_10.jpg";

const CarouselText = () => {
  return (
    <div className="mt-6 rounded-xl bg-gray-200 px-10 shadow-xl dark:bg-gray-800 dark:shadow-white/30">
      <section className="image-section relative flex min-h-[65vh] overflow-hidden">
        <div className="second-loop-container flex w-full flex-row items-center justify-center">
          <div
            id="images-wrapper"
            className="absolute flex flex-row gap-8 pr-8"
          >
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src={img1}
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src={img2}
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src={img3}
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src={img4}
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src={img5}
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
          </div>
          <div
            id="images-wrapper"
            className="absolute flex flex-row gap-8 pr-8"
          >
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src={img6}
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src={img7}
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src={img8}
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src={img9}
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src={img10}
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarouselText;
