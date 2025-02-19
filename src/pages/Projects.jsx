import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Residência Moderna",
      category: "Residencial",
      description: "Iluminação completa para casa contemporânea.",
      image:
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2021/04/Slide157.jpeg?w=1200&ssl=1",
      stats: "12 ambientes",
    },
    {
      id: 2,
      title: "Centro Empresarial",
      category: "Comercial",
      description: "Projeto corporativo com foco em produtividade.",
      image:
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2024/08/EDP-Sede_Ana-Mello-9.jpg?resize=2048%2C1365&ssl=1",
      stats: "1.500m²",
    },
    {
      id: 3,
      title: "Restaurante Gourmet",
      category: "Comercial",
      description: "Ambiente acolhedor com iluminação cênica.",
      image:
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2024/08/D759151-Edit.jpg?w=935&ssl=1",
      stats: "8 ambientes",
    },
  ];

  const handleViewProject = (projectId) => {
    navigate(`/projetos/${projectId}`);
  };

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-20"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            Projetos Realizados
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Excelência em iluminação para diversos ambientes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-yellow-400 text-gray-900 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 text-sm font-medium">
                      {project.stats}
                    </span>
                    <button
                      onClick={() => handleViewProject(project.id)}
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-yellow-400"
                    >
                      Ver projeto →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
