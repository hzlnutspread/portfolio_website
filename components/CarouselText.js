import Image from "next/image";

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
                src="/unsplash_1.jpg"
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src="/unsplash_2.jpg"
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src="/unsplash_3.jpg"
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src="/unsplash_4.jpg"
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src="/unsplash_5.jpg"
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
                src="/unsplash_6.jpg"
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src="/unsplash_7.jpg"
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src="/unsplash_8.jpg"
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src="/unsplash_9.jpg"
                alt=""
                className="image-class min-h-[100%] min-w-[100%] object-cover"
              />
            </div>
            <div className="image-container flex h-[440px] w-[300px] items-center justify-center overflow-hidden">
              <Image
                width={300}
                height={440}
                src="/unsplash_10.jpg"
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
