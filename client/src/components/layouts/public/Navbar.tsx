import Logo from "@/components/logo/Logo";
// import useCount from "@/hooks/useCount";
import { useCount } from "@/contexts/CountContext";

const Navbar = () => {
  const { count, increment } = useCount();

  return (
    <nav className="bg-white dark:bg-gray-900 border-gray-200">
      <div className="flex flex-wrap justify-between items-center mx-auto p-4 max-w-7xl">
        <a href="/" className="flex items-center">
          <span className="self-center font-semibold dark:text-white text-2xl whitespace-nowrap">
            <Logo /> {count}
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            onClick={increment}
            type="button"
            className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 mr-3 md:mr-0 px-4 py-2 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-white text-sm text-center"
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
