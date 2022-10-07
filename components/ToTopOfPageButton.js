import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ToTopOfPageButton = () => {
  return (
    <button
      className="m-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-blue-500 md:absolute md:right-16 lg:right-20"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <BsFillArrowUpCircleFill className="h-full w-full transition duration-200 ease-in-out hover:scale-[1.2]" />
    </button>
  );
};

export default ToTopOfPageButton;
