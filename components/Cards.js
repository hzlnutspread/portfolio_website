import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

const Cards = () => {
  return (
    <div className="gap-10 dark:text-gray-300 lg:flex">
      <div className="my-10 rounded-xl bg-gray-200 p-10 text-center shadow-lg dark:bg-gray-800 dark:shadow-white/30 lg:flex-1">
        <Image src={design} width={100} height={100} alt="" />
        <h3 className="pt-8 pb-2 text-lg font-medium">Beautiful designs</h3>
        <p className="py-2 ">
          If you need front-end work, I can create aesthetic websites that
          encourage users to stay on your page and please their eyes
        </p>
        <h4 className="py-4 text-purple-600">Design tools I use</h4>
        <p className="text-gray-800 dark:text-gray-300">Photoshop</p>
        <p className="text-gray-800 dark:text-gray-300">Gimp</p>
        <p className="text-gray-800 dark:text-gray-300">Figma</p>
      </div>

      <div className="my-10 rounded-xl bg-gray-200 p-10 text-center shadow-lg dark:bg-gray-800 dark:shadow-white/30 lg:flex-1">
        <Image src={code} width={100} height={100} alt="" />
        <h3 className="pt-8 pb-2 text-lg font-medium">Reliable code</h3>
        <p className="py-2 ">
          I can write code that is of a high standard and is accessible for
          anyone to easily make changes to in the future
        </p>
        <h4 className="py-4 text-purple-600">Languages I use</h4>
        <p className="text-gray-800 dark:text-gray-300">Java</p>
        <p className="text-gray-800 dark:text-gray-300">Python</p>
        <p className="text-gray-800 dark:text-gray-300">Javascript</p>
      </div>

      <div className="my-10 rounded-xl bg-gray-200 p-10 text-center shadow-lg dark:bg-gray-800 dark:shadow-white/30 lg:flex-1">
        <Image src={consulting} width={100} height={100} alt="" />
        <h3 className="pt-8 pb-2 text-lg font-medium">Guaranteed follow-ups</h3>
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
  );
};

export default Cards;
