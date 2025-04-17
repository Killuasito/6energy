import { motion } from "framer-motion";
import About from "./About";
import Stats from "../components/Stats";
import {
  HiOutlineLightBulb,
  HiOutlineUsers,
  HiOutlineCog,
  HiDocumentText, // Changed from HiDocumentCheck
  HiOutlineChip, // Changed from HiCpuChip
} from "react-icons/hi";

// Define the TimelineItem component with improved mobile styling
const TimelineItem = ({ year, title, description, icon, inverted }) => {
  return (
    <div
      className={`flex items-center w-full mb-12 flex-col md:flex-row ${
        inverted ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Empty space div - hidden on mobile */}
      <div className="hidden md:block w-5/12"></div>

      {/* Center connector - completely redesigned for mobile */}
      <div className="relative flex items-center justify-center">
        {/* Icon circle */}
        <div className="h-12 w-12 rounded-full bg-gray-800 border-4 border-gray-700 flex items-center justify-center z-10">
          {icon}
        </div>

        {/* Desktop horizontal connectors */}
        <div
          className="absolute w-16 h-1 bg-gray-700 hidden md:block"
          style={{
            left: inverted ? "100%" : "auto",
            right: inverted ? "auto" : "100%",
          }}
        ></div>

        {/* Mobile vertical connector - Now properly positioned */}
        <div
          className="absolute h-12 w-1 bg-gray-700 md:hidden"
          style={{
            bottom: "100%", // Connects to the element above
            display: "block", // Ensures visibility on mobile
          }}
        ></div>
      </div>

      {/* Content box - full width on mobile, repositioned */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full mt-4 md:mt-0 md:w-5/12 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
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

  // Update timeline data with focus on technological advances and unique models
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
      title: "Drivers de Alta Performance",
      description:
        "Implementação de drivers de última geração com tecnologia flicker-free, proporcionando iluminação estável e confortável para os olhos, com maior durabilidade e eficiência.",
      icon: <HiOutlineChip className="text-yellow-400 w-6 h-6" />,
    },
    {
      year: "2019",
      title: "Modelos Exclusivos",
      description:
        "Lançamento da nossa primeira linha de produtos com design diferenciado, combinando estética contemporânea com funcionalidade avançada para atender demandas específicas do mercado.",
      icon: <HiOutlineLightBulb className="text-yellow-400 w-6 h-6" />,
    },
    {
      year: "2021",
      title: "Sistemas Inteligentes",
      description:
        "Desenvolvimento de controladores e drivers com conectividade IoT, permitindo integração com sistemas de automação e controle via aplicativos móveis para personalização completa da iluminação.",
      icon: <HiOutlineChip className="text-yellow-400 w-6 h-6" />,
    },
    {
      year: "2022",
      title: "Linha Premium Arquitetural",
      description:
        "Introdução de modelos premium com perfis de alumínio de alta resistência e designs exclusivos para projetos arquitetônicos sofisticados, elevando o padrão estético dos ambientes.",
      icon: <HiDocumentText className="text-yellow-400 w-6 h-6" />,
    },
    {
      year: "2024",
      title: "Drivers de Corrente Constante",
      description:
        "Implantação de tecnologia de drivers com corrente constante e dimmerização precisa (0-10V, DALI, DMX), garantindo operação silenciosa e maior vida útil aos LEDs em toda nossa linha de produtos.",
      icon: <HiOutlineChip className="text-yellow-400 w-6 h-6" />,
    },
  ];

  // Timeline component within the AboutPage - improved for mobile
  const Timeline = () => (
    <div className="py-16 relative">
      {/* Vertical timeline line - adjusted to be visible on mobile */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700 top-0"></div>

      {/* First item gets special treatment for top connector */}
      <div className="mb-12">
        <TimelineItem
          key={timelineData[0].year}
          year={timelineData[0].year}
          title={timelineData[0].title}
          description={timelineData[0].description}
          icon={timelineData[0].icon}
          inverted={false}
        />
      </div>

      {/* Rest of the timeline items */}
      {timelineData.slice(1).map((item, index) => (
        <TimelineItem
          key={item.year}
          year={item.year}
          title={item.title}
          description={item.description}
          icon={item.icon}
          inverted={(index + 1) % 2 !== 0}
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
