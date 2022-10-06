import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex h-32 flex-col justify-center bg-black bg-opacity-10 px-10 py-10 text-black dark:bg-white dark:bg-opacity-10 dark:text-white lg:px-20">
      <h3 className="text-xl">
        Click{" "}
        <span className="text-purple-500">
          <Link href="/about">here</Link>
        </span>{" "}
        if youre interested in seeing my NFT collection!
      </h3>
    </section>
  );
};

export default Footer;
