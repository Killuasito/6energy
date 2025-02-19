import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
            ? "py-4 bg-gray-900/90 backdrop-blur-sm"
            : "py-4 bg-gray-900"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
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
            <h1 className="text-4xl font-bold whitespace-nowrap">
              <span className="text-white">6</span>
              <span className="text-yellow-400 mx-2">Energy</span>
            </h1>
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
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={handleNavClick}
                    className="block text-gray-100 hover:text-yellow-400 transition-colors
                      text-sm uppercase tracking-wider font-medium py-2"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
