import { motion } from "framer-motion";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

const Contact = () => {
  return (
    <section
      id="contato"
      className="py-32 bg-gray-900 relative overflow-hidden"
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
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent 
            bg-gradient-to-r from-yellow-400 to-yellow-200"
          >
            Fale Conosco
          </h2>
          <p className="text-gray-300 text-lg text-center mb-12 max-w-2xl mx-auto">
            Estamos prontos para ajudar você a encontrar a solução perfeita para
            seu projeto de iluminação.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6 text-gray-300">
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400">
                    <HiOutlineLocationMarker size={24} />
                  </span>
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-gray-400">Rua da Luz, 123 - Centro</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400">
                    <HiOutlinePhone size={24} />
                  </span>
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-gray-400">(11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-yellow-400">
                    <HiOutlineMail size={24} />
                  </span>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-gray-400">contato@luminaria.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-yellow-400 font-medium mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-100 
                    p-3 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-yellow-400 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-100 
                    p-3 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-yellow-400 font-medium mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-100 
                    p-3 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold
                  hover:bg-yellow-300 transform hover:scale-105 transition-all duration-300"
              >
                Enviar Mensagem
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
