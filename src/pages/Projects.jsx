import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectsData from "../data/projects.json";

const Projects = ({ filter = "todos", viewMode = "grid", searchTerm = "" }) => {
  const navigate = useNavigate();
  const { projects } = projectsData;

  // Filter projects based on category and search term with null checks
  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      filter === "todos" ||
      project.category.toLowerCase() === filter.toLowerCase();

    const matchesSearch = searchTerm
      ? project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesFilter && matchesSearch;
  });

  const handleViewProject = (projectId) => {
    navigate(`/projetos/${projectId}`);
  };

  const containerVariants = {
    grid: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    list: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: (viewMode) => ({
      opacity: 0,
      scale: viewMode === "grid" ? 0.8 : 1,
      x: viewMode === "grid" ? 0 : -20,
      y: viewMode === "grid" ? 20 : 0,
    }),
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: (viewMode) => ({
      opacity: 0,
      scale: viewMode === "grid" ? 0.8 : 1,
      x: viewMode === "grid" ? 0 : 20,
      y: viewMode === "grid" ? -20 : 0,
      transition: {
        duration: 0.3,
      },
    }),
  };

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-20"></div>

      <div className="container mx-auto px-4 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-3 gap-8"
                : "space-y-6"
            }
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={viewMode}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => handleViewProject(project.id)}
                className={`cursor-pointer rounded-xl overflow-hidden
                  ${
                    viewMode === "grid"
                      ? "relative"
                      : "bg-gray-800/50 hover:bg-gray-800 transition-colors"
                  }`}
              >
                {viewMode === "grid" ? (
                  // Grid view layout
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    />
                    {/* Semi-transparent overlay always visible */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>

                    {/* Content always visible at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-400 text-gray-900 rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-3">
                        {project.shortDescription ||
                          project.description.substring(0, 80) + "..."}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-400 text-sm font-medium">
                          {project.stats[0].value}
                        </span>
                        <button className="text-white hover:text-yellow-400 transition-colors">
                          Ver projeto →
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  // List view layout
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-64 h-48">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-400 text-gray-900 rounded-full mb-2">
                            {project.category}
                          </span>
                          <h3 className="text-xl font-bold text-white">
                            {project.title}
                          </h3>
                        </div>
                        <span className="text-gray-400">{project.year}</span>
                      </div>
                      <p className="text-gray-300 mb-4">
                        {project.shortDescription ||
                          project.description.substring(0, 100) + "..."}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-400 text-sm font-medium">
                          {project.stats[0].value}
                        </span>
                        <button className="text-white hover:text-yellow-400 transition-colors">
                          Ver projeto →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Nenhum projeto encontrado.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
