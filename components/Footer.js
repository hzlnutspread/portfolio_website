import Link from "next/link";
import ToTopOfPageButton from "./ToTopOfPageButton";

const Footer = () => {
  return (
    <>
      <section className=" h-42 relative flex flex-col items-center justify-center bg-black bg-opacity-10 p-6 text-center text-black dark:bg-white dark:bg-opacity-10 dark:text-white md:flex-row md:p-10 lg:px-20">
        <h3 className="text-md md:text-xl">
          <p>
            Click{" "}
            <span className="font-bold text-purple-500">
              <Link href="https://cornonthecobcollection.netlify.app/">
                here
              </Link>
            </span>{" "}
            if you would like to check out my NFT collection
          </p>
        </h3>
        <ToTopOfPageButton />
      </section>
    </>
  );
};

export default Footer;
