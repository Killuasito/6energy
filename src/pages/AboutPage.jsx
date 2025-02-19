import { motion } from "framer-motion";
import About from "./About";
import Stats from "../components/Stats";
import {
  HiOutlineLightBulb,
  HiOutlineUsers,
  HiOutlineCog,
} from "react-icons/hi";

const AboutPage = () => {
  const values = [
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      title: "Inovação",
      description: "Sempre buscando as mais recentes tecnologias em iluminação",
    },
    {
      icon: <HiOutlineUsers className="w-8 h-8" />,
      title: "Compromisso",
      description: "Dedicação total à satisfação de nossos clientes",
    },
    {
      icon: <HiOutlineCog className="w-8 h-8" />,
      title: "Excelência",
      description: "Qualidade superior em cada projeto que realizamos",
    },
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
            className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sobre Nós
          </motion.h1>

          {/* Valores da empresa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm text-center"
              >
                <div className="text-yellow-400 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <div className="bg-gray-900">
        <About />
        <Stats />
      </div>

      {/* Timeline section */}
      <motion.section className="py-24 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-16">
            Nossa História
          </h2>
          <div className="max-w-3xl mx-auto">
            {[2013, 2016, 2019, 2023].map((year, index) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 mb-12"
              >
                <div className="w-32 text-right">
                  <span className="text-2xl font-bold text-yellow-400">
                    {year}
                  </span>
                </div>
                <div className="flex-1 bg-gray-900/50 p-6 rounded-xl">
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
