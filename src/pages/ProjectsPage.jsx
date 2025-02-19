import { motion } from "framer-motion";
import { useState } from "react";
import Projects from "./Projects";

const ProjectsPage = () => {
  const [filter, setFilter] = useState("todos");
  const [viewMode, setViewMode] = useState("grid");

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "residencial", name: "Residencial" },
    { id: "comercial", name: "Comercial" },
    { id: "industrial", name: "Industrial" },
  ];

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
                className={`p-2 rounded ${
                  viewMode === "grid"
                    ? "bg-yellow-400 text-gray-900"
                    : "text-gray-300"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${
                  viewMode === "list"
                    ? "bg-yellow-400 text-gray-900"
                    : "text-gray-300"
                }`}
              >
                Lista
              </button>
            </div>
          </div>
        </div>
      </motion.section>
      <div className="bg-gray-900">
        {" "}
        {/* Added wrapper with background */}
        <Projects filter={filter} viewMode={viewMode} />
      </div>
    </div>
  );
};

export default ProjectsPage;
