import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", url: "#", icon: <FaInstagram size={20} /> },
    { name: "Facebook", url: "#", icon: <FaFacebook size={20} /> },
    { name: "WhatsApp", url: "#", icon: <FaWhatsapp size={20} /> },
    { name: "LinkedIn", url: "#", icon: <FaLinkedin size={20} /> },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-8 py-12 border-b border-gray-800">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-yellow-400">Luminária</span>
              <span className="mx-1">&</span>
              <span className="text-yellow-400">Iluminação</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Transformando ambientes através da iluminação perfeita desde 2013.
            </p>
          </div>

          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-gray-400">
              {["Home", "Sobre Nós", "Projetos", "Produtos", "Contato"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-yellow-400 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="text-yellow-400" size={20} />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineMail className="text-yellow-400" size={20} />
                contato@luminaria.com
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineLocationMarker
                  className="text-yellow-400"
                  size={20}
                />
                Rua da Luz, 123 - Centro
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-yellow-400 font-semibold mb-4">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center
                    hover:bg-yellow-400 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className="group-hover:scale-125 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Luminária & Iluminação. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
