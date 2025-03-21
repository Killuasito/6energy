import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Projetos", path: "/projetos" },
    { name: "Produtos", path: "/produtos" },
    { name: "Orçamento", path: "/orcamento" },
    { name: "Contato", path: "/contato" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out
        ${
          isScrolled
            ? "py-2 md:py-2 bg-gray-900/95 backdrop-blur-sm"
            : "py-3 md:py-3 bg-gray-900"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo - increased the size */}
          <Link
            to="/"
            onClick={handleNavClick}
            className={`transition-all duration-500 ease-in-out
              ${
                isScrolled && !isMobileMenuOpen
                  ? "md:w-0 md:opacity-0"
                  : "w-auto opacity-100"
              }`}
          >
            <img
              src="/images/logo.png"
              alt="6Energy"
              className="h-24 md:h-24" /* Increased from h-10 md:h-12 */
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "../6ENERGY.webp";
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden md:block transition-all duration-500 ease-in-out ${
              isScrolled ? "absolute left-1/2 -translate-x-1/2" : ""
            }`}
          >
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className="text-gray-100 hover:text-yellow-400 transition-all duration-300
                      text-sm uppercase tracking-wider font-medium py-2 relative group"
                  >
                    {item.name}
                    <span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 
                      transform scale-x-0 transition-transform duration-300 origin-left 
                      group-hover:scale-x-100"
                    />
                  </Link>
                </li>
              ))}
              {/* Theme Toggle Button */}
            </ul>
          </nav>

          {/* Mobile Menu Button - Improved with animation */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none bg-gray-800/50 rounded-full"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation - Completely redesigned */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-gray-800/95 backdrop-blur-md mt-2 rounded-xl overflow-hidden border border-gray-700/30"
            >
              <nav className="py-2">
                <ul className="divide-y divide-gray-700/30">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="relative"
                    >
                      {/* Active indicator bar */}
                      {location.pathname === item.path && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      <Link
                        to={item.path}
                        onClick={handleNavClick}
                        className={`flex items-center px-6 py-4 text-gray-100 hover:text-yellow-400 hover:bg-gray-700/30 transition-all
                          text-lg tracking-wide font-medium ${
                            location.pathname === item.path
                              ? "text-yellow-400"
                              : ""
                          }`}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
