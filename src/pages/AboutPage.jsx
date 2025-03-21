import { motion } from "framer-motion";
import About from "./About";
import Stats from "../components/Stats";
import {
  HiOutlineLightBulb,
  HiOutlineUsers,
  HiOutlineCog,
  HiChartBar,
  HiDocumentText, // Changed from HiDocumentCheck
  HiGlobe, // Changed from HiGlobeAmericas
  HiOutlineGlobe, // Changed from HiGlobeEuropeAfrica
  HiOutlineChip, // Changed from HiCpuChip
} from "react-icons/hi";

// Define the TimelineItem component that was missing
const TimelineItem = ({ year, title, description, icon, inverted }) => {
  return (
    <div
      className={`flex justify-between items-center w-full mb-12 ${
        inverted ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-5/12"></div> {/* Empty space on one side */}
      <div className="relative flex items-center justify-center">
        <div className="h-12 w-12 rounded-full bg-gray-800 border-4 border-gray-700 flex items-center justify-center z-10">
          {icon}
        </div>
        <div
          className="absolute w-16 h-1 bg-gray-700"
          style={{
            left: inverted ? "100%" : "auto",
            right: inverted ? "auto" : "100%",
          }}
        ></div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: inverted ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-5/12 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
      >
        <div className="text-yellow-400 font-bold text-xl mb-1">{year}</div>
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </motion.div>
    </div>
  );
};

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

  // Update timeline data with unique descriptions for each year
  const timelineData = [
    {
      year: "2015",
      title: "Fundação da Empresa",
      description:
        "A 6Energy foi fundada com a missão de revolucionar o mercado de iluminação com soluções inovadoras e sustentáveis.",
      icon: <HiOutlineLightBulb className="text-yellow-400 w-6 h-6" />,
    },
    {
      year: "2017",
      title: "Expansão Nacional",
      description:
        "Ampliamos nossa atuação para todo o território nacional, estabelecendo parcerias estratégicas com distribuidores em várias regiões do Brasil.",
      icon: <HiChartBar className="text-yellow-400 w-6 h-6" />,
    },
    {
      year: "2019",
      title: "Certificação ISO",
      description:
        "Conquistamos a certificação ISO 9001, reafirmando nosso compromisso com a qualidade e excelência em todos os nossos produtos e processos.",
      icon: <HiDocumentText className="text-yellow-400 w-6 h-6" />,
    },
    {
      year: "2021",
      title: "Linha de Produtos Sustentáveis",
      description:
        "Lançamos nossa linha de produtos eco-friendly, utilizando materiais reciclados e componentes de baixo consumo energético, reforçando nosso compromisso com o meio ambiente.",
      icon: <HiGlobe className="text-yellow-400 w-6 h-6" />,
    },
    {
      year: "2023",
      title: "Internacionalização",
      description:
        "Iniciamos nossa expansão para o mercado internacional, exportando nossos produtos para países da América Latina e começando operações em Portugal.",
      icon: <HiOutlineGlobe className="text-yellow-400 w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Inovação Tecnológica",
      description:
        "Implementamos soluções de IoT em nossos produtos, permitindo controle avançado de iluminação via aplicativos e integração com sistemas de automação residencial e comercial.",
      icon: <HiOutlineChip className="text-yellow-400 w-6 h-6" />,
    },
  ];

  // Timeline component within the AboutPage
  const Timeline = () => (
    <div className="py-16 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
      {timelineData.map((item, index) => (
        <TimelineItem
          key={item.year}
          year={item.year}
          title={item.title}
          description={item.description}
          icon={item.icon}
          inverted={index % 2 !== 0}
        />
      ))}
    </div>
  );

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
            <Timeline />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
