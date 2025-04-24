import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  HiOutlineLightBulb,
  HiOutlineCurrencyDollar,
  HiOutlineInformationCircle,
  HiOutlineBriefcase,
  HiOutlineShoppingBag,
  HiOutlineMail,
} from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Quote CTA Banner */}
        <div className="mb-12 p-8 bg-gradient-to-r from-gray-800 to-gray-800/70 rounded-xl text-center lg:text-left lg:flex items-center justify-between shadow-lg border border-gray-700/30">
          <div className="lg:max-w-xl">
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center mr-3">
                <HiOutlineLightBulb className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Pronto para transformar seu espaço?
              </h3>
            </div>
            <p className="text-gray-300 mb-6 lg:mb-0 lg:pr-4">
              Solicite um orçamento personalizado para seu projeto de iluminação
              e descubra como podemos trazer mais eficiência e beleza para seu
              ambiente.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/orcamento"
              className="inline-flex items-center px-8 py-3 bg-orange-500 text-gray-900 rounded-lg font-semibold hover:bg-orange-300 transition-all duration-300 shadow-lg"
            >
              <HiOutlineCurrencyDollar className="mr-2 text-xl" />
              Solicitar Orçamento
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img
                src="/images/logo.png"
                alt="6Energy"
                className="h-24"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "../6ENERGY.webp";
                }}
              />
            </Link>
            <p className="text-gray-400">
              Soluções inovadoras em iluminação para transformar seus espaços
              com tecnologia e design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 group">
                <HiOutlineInformationCircle className="text-gray-400 w-5 h-5 group-hover:text-orange-500 transition-colors" />
                <Link
                  to="/sobre"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li className="flex items-center gap-2 group">
                <HiOutlineBriefcase className="text-gray-400 w-5 h-5 group-hover:text-orange-500 transition-colors" />
                <Link
                  to="/projetos"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li className="flex items-center gap-2 group">
                <HiOutlineShoppingBag className="text-gray-400 w-5 h-5 group-hover:text-orange-500 transition-colors" />
                <Link
                  to="/produtos"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li className="flex items-center gap-2 group">
                <HiOutlineMail className="text-gray-400 w-5 h-5 group-hover:text-orange-500 transition-colors" />
                <Link
                  to="/contato"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Contato
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                Alameda Pd Miguel - Jardim V Grande, Vargem Grande Paulista -
                SP, 06673-785
              </li>
              <li>(11) 5199 9251</li>
              <li>juan.alvarez@6energy.com.br</li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com/6energy.iluminacao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/6energy.iluminacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="https://br.linkedin.com/company/6-energy-iluminina%C3%A7%C3%A3o?trk=ppro_cprof"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            © {currentYear} tififerreira@gmail.com. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
