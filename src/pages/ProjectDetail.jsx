import { motion } from "framer-motion";
import { useState } from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import {
  HiOutlineArrowLeft,
  HiOutlineClock,
  HiOutlineHome,
  HiOutlineLightBulb,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import projectsData from "../data/projects.json";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  // Find the project by ID from our projects.json
  const project = projectsData.projects.find((p) => p.id === parseInt(id));

  // Redirecionar para a página de projetos se o ID não existir
  if (!project) {
    navigate("/projetos");
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[60vh] relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={project.images[selectedImage]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link
              to="/projetos"
              className="inline-flex items-center text-white hover:text-yellow-400 transition-colors mb-8"
            >
              <HiOutlineArrowLeft className="mr-2" /> Voltar para Projetos
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
              <span className="text-gray-300">{project.year}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2"
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Sobre o Projeto
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <HiOutlineLightBulb className="text-yellow-400 text-xl flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">
                Galeria
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-lg overflow-hidden ${
                      selectedImage === index ? "ring-2 ring-yellow-400" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Vista ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Project Stats */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-yellow-400 mb-6">
                Informações
              </h3>
              <div className="space-y-4">
                {project.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-400">{stat.label}</span>
                    <span className="text-white font-medium">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-yellow-400 mb-6">
                Detalhes
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <HiOutlineHome className="text-yellow-400" />
                  <div>
                    <p className="text-sm text-gray-400">Cliente</p>
                    <p className="text-white">{project.client}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <HiOutlineClock className="text-yellow-400" />
                  <div>
                    <p className="text-sm text-gray-400">Duração</p>
                    <p className="text-white">{project.duration}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA - Updated to use Link and navigate to orçamento page */}
            <RouterLink to="/orcamento">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 text-gray-900 py-4 px-6 rounded-xl font-semibold
                  hover:bg-yellow-300 transition-colors"
              >
                Solicitar Orçamento
              </motion.button>
            </RouterLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
