import { ModeToggle } from "./Mode-toggle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-opacity-70 bg-white dark:bg-black text-black dark:text-white shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/" className="hover:text-gray-600 dark:hover:text-gray-300">
            ClimateAction
          </a>
        </div>

        {/* Right Side: Mode Toggle and Buttons */}
        <div className="flex items-center space-x-4">
          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-lg">
            <li>
              <a href="/" className="hover:text-gray-600 dark:hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">
                About
              </a>
            </li>
          </ul>

          <ModeToggle />
          <Button variant="outline" className="px-4 py-2">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button variant="default" className="px-4 py-2">
            <Link to="/register">Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;