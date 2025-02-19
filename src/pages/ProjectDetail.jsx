import { motion } from "framer-motion";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  HiOutlineArrowLeft,
  HiOutlineClock,
  HiOutlineHome,
  HiOutlineLightBulb,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  // Banco de dados simulado de projetos
  const projectsDatabase = {
    1: {
      title: "Residência Moderna",
      category: "Residencial",
      year: "2023",
      location: "São Paulo, SP",
      description:
        "Projeto de iluminação completo para uma residência contemporânea, focando em eficiência energética e conforto visual. Utilizamos tecnologia LED de última geração e sistema de automação integrado.",
      client: "Família Silva",
      duration: "3 meses",
      features: [
        "Iluminação LED em todos os ambientes",
        "Sistema de automação integrado",
        "Luz natural otimizada",
        "Eficiência energética",
      ],
      images: [
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2021/04/Slide157.jpeg?w=1200&ssl=1",
        // Adicione mais imagens específicas deste projeto
      ],
      stats: [
        { label: "Área Total", value: "350m²" },
        { label: "Ambientes", value: "12" },
        { label: "Pontos de Luz", value: "86" },
      ],
    },
    2: {
      title: "Centro Empresarial",
      category: "Comercial",
      year: "2024",
      location: "São Paulo, SP",
      description:
        "Projeto corporativo de grande escala com foco em produtividade e eficiência energética. Sistema de iluminação inteligente que se adapta às condições naturais.",
      client: "EDP Brasil",
      duration: "6 meses",
      features: [
        "Iluminação inteligente adaptativa",
        "Sensores de presença",
        "Integração com luz natural",
        "Sistema de gestão centralizado",
      ],
      images: [
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2024/08/EDP-Sede_Ana-Mello-9.jpg?resize=2048%2C1365&ssl=1",
        // Adicione mais imagens específicas deste projeto
      ],
      stats: [
        { label: "Área Total", value: "1.500m²" },
        { label: "Pavimentos", value: "8" },
        { label: "Pontos de Luz", value: "450" },
      ],
    },
    3: {
      title: "Restaurante Gourmet",
      category: "Comercial",
      year: "2024",
      location: "São Paulo, SP",
      description:
        "Iluminação cênica para criar uma atmosfera acolhedora e sofisticada. Projeto focado em realçar a arquitetura e criar diferentes ambientações ao longo do dia.",
      client: "Restaurante Le Petit",
      duration: "2 meses",
      features: [
        "Iluminação cênica programável",
        "Controle de temperatura de cor",
        "Destaque para elementos arquitetônicos",
        "Diferentes cenas pré-programadas",
      ],
      images: [
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2024/08/D759151-Edit.jpg?w=935&ssl=1",
        // Adicione mais imagens específicas deste projeto
      ],
      stats: [
        { label: "Área Total", value: "280m²" },
        { label: "Ambientes", value: "8" },
        { label: "Pontos de Luz", value: "124" },
      ],
    },
  };

  // Buscar projeto pelo ID
  const project = projectsDatabase[id];

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

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-yellow-400 text-gray-900 py-4 px-6 rounded-xl font-semibold
                hover:bg-yellow-300 transition-colors"
            >
              Solicitar Orçamento
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
