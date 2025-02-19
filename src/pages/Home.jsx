import { motion } from "framer-motion";
import { HiLightBulb, HiSparkles, HiWrenchScrewdriver } from "react-icons/hi2";
import { useState, useEffect } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Adicionar efeito de luz dinâmica
  const lightStyle = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 188, 0, 0.10), transparent 80%)`,
  };

  // Adicionar animações para os textos
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen relative bg-gray-900 overflow-hidden">
      {/* Efeito de luz que segue o mouse */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={lightStyle}
      />

      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-20"></div>

      {/* Círculos decorativos animados */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 pt-56 pb-20 relative z-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Snake animation line with slower speed */}
          <div className="relative h-1 mb-8 w-full mx-auto overflow-hidden">
            <motion.div
              animate={{
                x: ["-100%", "100%"],
                scaleX: [1, 0.7, 1],
              }}
              transition={{
                duration: 3.5, // Increased from 2 to 3.5
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            />
            <motion.div
              animate={{
                x: ["-100%", "100%"],
                scaleX: [1, 0.7, 1],
              }}
              transition={{
                duration: 10, // Increased from 2 to 3.5
                repeat: Infinity,
                ease: "easeInOut",
                delay: 10, // Adjusted delay to half of duration for smoother transition
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            />
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent 
            bg-gradient-to-r from-amber-500 to-amber-300 relative"
          >
            Transforme Seus Espaços com Iluminação Moderna
            {/* Decorative elements */}
            <span className="absolute -top-4 -right-4 text-yellow-400/20 text-7xl">
              ✧
            </span>
            <span className="absolute -bottom-4 -left-4 text-yellow-400/20 text-7xl">
              ✦
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Soluções de iluminação inovadoras que combinam design contemporâneo
            com eficiência energética para criar ambientes únicos.
          </p>

          {/* Animated buttons */}
          <div className="flex gap-4 justify-center mt-12">
            <motion.a
              href="#produtos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-amber-400 text-gray-900 rounded-full 
                font-semibold hover:bg-amber-300 transition-all duration-300 
                relative group overflow-hidden"
            >
              <span className="relative z-10">Explorar Produtos</span>
              <div
                className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 
                transition-transform duration-300 origin-left"
              />
            </motion.a>

            <motion.a
              href="#contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-amber-400 text-amber-400 
                rounded-full font-semibold hover:bg-yellow-400/10 
                transition-all duration-300"
            >
              Fale Conosco
            </motion.a>
          </div>
        </motion.div>

        {/* Features section with enhanced animations */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Design Exclusivo",
              description: "Peças únicas que transformam ambientes",
              icon: <HiSparkles className="mx-auto text-amber-400" size={40} />,
            },
            {
              title: "Economia de Energia",
              description: "Soluções eficientes e sustentáveis",
              icon: (
                <HiLightBulb className="mx-auto text-amber-400" size={40} />
              ),
            },
            {
              title: "Instalação Profissional",
              description: "Equipe especializada à sua disposição",
              icon: (
                <HiWrenchScrewdriver
                  className="mx-auto text-amber-400"
                  size={40}
                />
              ),
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center
                border border-gray-700/50 hover:border-amber-400/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-4xl mb-4 block"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-amber-400 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-amber-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
