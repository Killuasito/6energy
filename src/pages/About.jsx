import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="sobre"
      className="py-32 bg-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-20"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            Nossa História
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Há mais de uma década, temos o privilégio de iluminar sonhos e
                transformar espaços. Nossa jornada começou com uma visão
                simples: trazer luz e inovação para cada ambiente.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Trabalhamos com as melhores marcas e tecnologias, garantindo que
                cada projeto seja único e perfeitamente adequado às necessidades
                de nossos clientes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-yellow-400">
                  Nossa Missão
                </h3>
                <p className="text-gray-300">
                  Proporcionar soluções de iluminação que transformem ambientes
                  e melhorem a qualidade de vida das pessoas.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    10+
                  </div>
                  <div className="text-sm text-gray-400">
                    Anos de Experiência
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-400">
                    Projetos Realizados
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
