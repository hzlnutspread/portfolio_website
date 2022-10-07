import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ currMode, setMode }) => {
  return (
    <nav className="sticky top-0 z-50 mb-10 flex h-32 items-center justify-between bg-black bg-opacity-10 px-10 py-10 text-black dark:bg-white dark:bg-opacity-10 lg:px-20">
      <h1 className="font-roboto text-xl font-bold hover:cursor-pointer dark:text-white">
        CornOnTheCob
      </h1>
      <ul className="flex flex-row items-center">
        <li className="pr-2 transition duration-300 ease-in-out hover:scale-150">
          <BsFillMoonStarsFill
            onClick={() => {
              if (currMode === false) {
                console.log("toggled dark mode On");
              } else {
                console.log("toggled dark mode off");
              }
              setMode(!currMode);
            }}
            className="cursor-pointer text-xl dark:text-white"
          />
        </li>
        <li className="ml-8	">
          <button className="rounded-md bg-gradient-to-r from-purple-400 to-blue-500 px-4 py-2 text-black transition duration-300 ease-in-out hover:scale-110 dark:text-white">
            <a href="#">Resume</a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
