import { FiArrowUp } from "react-icons/fi";

const ToTopOfPageButton = () => {
  return (
    <button
      className="m-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-blue-500 transition duration-200 ease-in-out hover:scale-[1.2] md:absolute md:right-16 lg:right-20"
      onClick={() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }}
    >
      <FiArrowUp className="h-5 w-5" />
    </button>
  );
};

export default ToTopOfPageButton;
