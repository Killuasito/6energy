import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <h1 className="text-3xl font-bold whitespace-nowrap">
                <span className="text-white">6</span>
                <span className="text-yellow-400 mx-1">Energy</span>
              </h1>
            </Link>
            <p className="text-gray-400">
              Soluções inovadoras em iluminação para transformar seus espaços
              com tecnologia e design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/sobre"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/projetos"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="/produtos"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Contato
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Rua da Luz, 123 - Centro</li>
              <li>São Paulo, SP - 01234-567</li>
              <li>(11) 99999-9999</li>
              <li>contato@6energy.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} 6Energy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
