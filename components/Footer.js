import Link from "next/link";
import ToTopOfPageButton from "./ToTopOfPageButton";

const Footer = () => {
  return (
    <>
      <section className=" h-42 relative flex flex-col items-center justify-center bg-black bg-opacity-10 p-6 text-center text-black dark:bg-white dark:bg-opacity-10 dark:text-white md:flex-row md:p-10 lg:px-20">
        <h3 className="text-md md:text-xl">
          Click{" "}
          <span className="text-purple-500 ">
            <Link href="/about">here</Link>
          </span>{" "}
          if youre interested in seeing my NFT collection!
        </h3>
        <ToTopOfPageButton />
      </section>
    </>
  );
};

export default Footer;
