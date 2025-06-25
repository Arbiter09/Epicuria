import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8">
              <img
                className="w-full h-full object-contain"
                src={LOGO_URL}
                alt="Epicuria"
              />
            </div>
            <span className="text-xl font-light text-gray-900 tracking-wider group-hover:text-gray-600 transition-colors">
              EPICURIA
            </span>
          </Link>

          {/* Navigation Section */}
          <nav className="flex items-center space-x-12">
            {/* Online Status - Minimal */}
            <div className="flex items-center">
              <div
                className={`w-2 h-2 rounded-full ${
                  onlineStatus ? "bg-green-400" : "bg-red-400"
                }`}
              ></div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/grocery"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
              >
                Grocery
              </Link>
            </div>

            {/* Cart - Minimal */}
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              🛒
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
