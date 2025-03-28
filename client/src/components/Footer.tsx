import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-gray-200 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Logo */}
          <div className="text-lg font-bold mb-4 md:mb-0">
            ClimateAction
          </div>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-sm">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-gray-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="ghost" className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.89a4.28 4.28 0 001.32 5.71 4.27 4.27 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.59 8.59 0 012 19.54a12.1 12.1 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0024 4.56a8.59 8.59 0 01-2.54.7z" />
              </svg>
            </Button>
            <Button variant="ghost" className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.94v-6.33h-2.47v-2.61h2.47v-1.99c0-2.44 1.49-3.78 3.67-3.78 1.05 0 1.95.08 2.21.11v2.56h-1.52c-1.19 0-1.42.57-1.42 1.4v1.84h2.84l-.37 2.61h-2.47v6.33c4.59-.88 8.19-4.53 8.19-8.94 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </Button>
          </div>
        </div>
        <div className="text-center text-sm mt-6">
          © 2025 ClimateAction. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;