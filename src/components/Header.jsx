import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import productsData from "../data/products.json";
import projectsData from "../data/projects.json";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

  useEffect(() => {
    if (searchQuery.length > 1) {
      const query = searchQuery.toLowerCase();
      const productSuggestions = productsData.featuredProducts
        .filter(
          (product) =>
            product.name.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        )
        .map((product) => ({
          id: product.id,
          title: product.name,
          type: "product",
        }));

      const projectSuggestions = projectsData.projects
        .filter(
          (project) =>
            project.title.toLowerCase().includes(query) ||
            project.client?.toLowerCase().includes(query)
        )
        .map((project) => ({
          id: project.id,
          title: project.title,
          type: "project",
        }));

      setSuggestions(
        [...productSuggestions, ...projectSuggestions].slice(0, 6)
      );
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery("");
    setShowSuggestions(false);
    setShowSearch(false); // Fixed: missing closing parenthesis

    if (suggestion.type === "product") {
      navigate(`/produtos/${suggestion.id}`);
    } else {
      navigate(`/projetos/${suggestion.id}`);
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();

      let exactProductMatch = productsData.featuredProducts.find(
        (product) => product.name.toLowerCase() === query
      );

      if (!exactProductMatch) {
        exactProductMatch = productsData.featuredProducts.find((product) =>
          product.name.toLowerCase().includes(query)
        );
      }

      if (exactProductMatch) {
        navigate(`/produtos/${exactProductMatch.id}`);
      } else {
        const foundInProducts = productsData.featuredProducts.some(
          (product) =>
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );

        const foundInProjects = projectsData.projects.some(
          (project) =>
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.client?.toLowerCase().includes(query)
        );

        if (foundInProjects && !foundInProducts) {
          navigate(`/projetos?search=${encodeURIComponent(searchQuery)}`);
        } else {
          navigate(`/produtos?search=${encodeURIComponent(searchQuery)}`);
        }
      }

      setSearchQuery("");
      setShowSearch(false);
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
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
              className="h-24 md:h-24"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "../6ENERGY.webp";
              }}
            />
          </Link>

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

          <div className="flex items-center space-x-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowSearch(!showSearch)}
              className="hidden md:block text-white p-2 focus:outline-none rounded-full hover:bg-gray-800/50"
              aria-label="Search"
            >
              <HiSearch
                size={20}
                className="text-gray-300 hover:text-yellow-400"
              />
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 focus:outline-none bg-gray-800/50 rounded-full"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {showSearch && (
            <motion.form
              ref={searchRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSearch}
              className="mt-2 relative hidden md:block"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar no site..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 pr-10 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-400"
                >
                  <HiSearch size={20} />
                </button>
              </div>

              <AnimatePresence>
                {showSuggestions && suggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg z-50"
                  >
                    <ul>
                      {suggestions.map((suggestion) => (
                        <li key={`${suggestion.type}-${suggestion.id}`}>
                          <button
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full text-left px-4 py-2 hover:bg-gray-700 text-white flex items-center"
                          >
                            <HiSearch
                              className="mr-2 text-gray-400"
                              size={16}
                            />
                            <span className="flex-grow">
                              {suggestion.title}
                            </span>
                            <span className="text-xs text-gray-400 capitalize">
                              {suggestion.type}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-100 hover:text-yellow-400"
                onClick={() => setShowSearch(false)}
              >
                Fechar
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-gray-800/95 backdrop-blur-md mt-2 rounded-xl overflow-hidden border border-gray-700/30"
            >
              <form
                ref={searchRef}
                onSubmit={handleSearch}
                className="px-4 py-3 border-b border-gray-700/30 relative"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar no site..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-700/60 border border-gray-600 rounded-lg py-2 px-4 pr-10 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-400"
                  >
                    <HiSearch size={20} />
                  </button>
                </div>

                <AnimatePresence>
                  {showSuggestions && suggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-4 right-4 mt-1 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg z-50"
                    >
                      <ul>
                        {suggestions.map((suggestion) => (
                          <li key={`${suggestion.type}-${suggestion.id}`}>
                            <button
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="w-full text-left px-4 py-2 hover:bg-gray-700 text-white flex items-center"
                            >
                              <HiSearch
                                className="mr-2 text-gray-400"
                                size={16}
                              />
                              <span className="flex-grow">
                                {suggestion.title}
                              </span>
                              <span className="text-xs text-gray-400 capitalize">
                                {suggestion.type}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>

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
