import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Projects from "./Projects";
import projectsData from "../data/projects.json";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("todos");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([
    { id: "todos", name: "Todos" },
  ]);

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
            className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Nossos Projetos
          </motion.h1>

          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            {/* Search Input */}
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Buscar projetos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-100 
                  focus:outline-none focus:border-yellow-400 transition-colors"
              />
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
                      ? "bg-yellow-400 text-gray-900"
                      : "text-gray-300 hover:text-yellow-400 border border-yellow-400/30"
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
                    ? "bg-yellow-400 text-gray-900"
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
                    ? "bg-yellow-400 text-gray-900"
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
