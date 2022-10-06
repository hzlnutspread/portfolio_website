import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ currMode, setMode }) => {
  return (
    <nav className="sticky top-0 z-50 mb-10 flex h-32 items-center justify-between bg-black bg-opacity-10 px-10 py-10 text-black dark:bg-white dark:bg-opacity-10 lg:px-20">
      <h1 className="font-burtons text-xl hover:cursor-pointer dark:text-white">
        CornOnTheCob
      </h1>
      <ul className="flex flex-row items-center">
        <li className="pr-2">
          <BsFillMoonStarsFill
            onClick={() => {
              console.log(currMode);
              setMode(!currMode);
              console.log(currMode);
            }}
            className="cursor-pointer text-xl dark:text-white"
          />
        </li>
        <li>
          <a
            href="#"
            className="ml-8 rounded-md bg-gradient-to-r from-purple-500 to-blue-600 px-4 py-2 text-black hover:inline-block hover:scale-125 dark:text-white"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
