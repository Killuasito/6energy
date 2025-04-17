import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Projects from "./Projects";
import projectsData from "../data/projects.json";
import { HiSearch, HiX } from "react-icons/hi";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("todos");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [categories, setCategories] = useState([
    { id: "todos", name: "Todos" },
  ]);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Generate search suggestions
  useEffect(() => {
    if (searchTerm.length > 1) {
      const query = searchTerm.toLowerCase();
      const projectSuggestions = projectsData.projects
        .filter(
          (project) =>
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.client?.toLowerCase().includes(query) ||
            project.category.toLowerCase().includes(query)
        )
        .map((project) => ({
          id: project.id,
          title: project.title,
          category: project.category,
        }));

      setSuggestions(projectSuggestions.slice(0, 5));
      setShowSuggestions(projectSuggestions.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  // Generate categories dynamically from the projects data
  useEffect(() => {
    const uniqueCategories = [
      ...new Set(projectsData.projects.map((p) => p.category)),
    ];
    const allCategories = [
      { id: "todos", name: "Todos" },
      ...uniqueCategories.map((cat) => ({
        id: cat.toLowerCase(),
        name: cat,
      })),
    ];
    setCategories(allCategories);
  }, []);

  const handleSuggestionClick = (project) => {
    navigate(`/projetos/${project.id}`);
    setSearchTerm("");
    setShowSuggestions(false);
  };

  const handleSearchClear = () => {
    setSearchTerm("");
    setShowSuggestions(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <motion.section
        className="pt-32 pb-16 bg-gray-900 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <motion.h1
            className="text-5xl font-bold text-center bg-clip-text text-orange-500 mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Nossos Projetos
          </motion.h1>

          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            {/* Search Input with Suggestions */}
            <div ref={searchRef} className="w-full md:w-auto relative">
              <div className="relative">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar projetos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-10 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 
                    focus:outline-none focus:border-orange-500 transition-colors"
                />
                {searchTerm && (
                  <button
                    onClick={handleSearchClear}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <HiX />
                  </button>
                )}
              </div>

              {/* Search suggestions dropdown */}
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg z-10"
                  >
                    <ul>
                      {suggestions.map((suggestion) => (
                        <li key={suggestion.id}>
                          <button
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full text-left px-4 py-3 hover:bg-gray-700 text-white"
                          >
                            <div className="font-medium">
                              {suggestion.title}
                            </div>
                            <div className="text-xs text-gray-400">
                              {suggestion.category}
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    filter === category.id
                      ? "bg-orange-400/20 text-orange-500"
                      : "text-gray-300 hover:text-orange-500 border border-yellow-400/30"
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-4 bg-gray-800/50 p-2 rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded flex items-center gap-2 ${
                  viewMode === "grid"
                    ? "bg-orange-500 text-gray-900"
                    : "text-gray-300"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                <span className="hidden md:inline">Grid</span>
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded flex items-center gap-2 ${
                  viewMode === "list"
                    ? "bg-orange-500 text-gray-900"
                    : "text-gray-300"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <span className="hidden md:inline">Lista</span>
              </button>
            </div>
          </div>
        </div>
      </motion.section>
      <div className="bg-gray-900">
        <Projects filter={filter} viewMode={viewMode} searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default ProjectsPage;
