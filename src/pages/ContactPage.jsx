import { motion } from "framer-motion";
import Contact from "./Contact";
import { HiOutlinePhone, HiOutlineMail, HiOutlineClock } from "react-icons/hi";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <HiOutlinePhone className="w-6 h-6" />,
      title: "Telefone",
      details: ["(11) 99999-9999", "(11) 98888-8888"],
    },
    {
      icon: <HiOutlineMail className="w-6 h-6" />,
      title: "Email",
      details: ["contato@6energy.com", "suporte@6energy.com"],
    },
    {
      icon: <HiOutlineClock className="w-6 h-6" />,
      title: "Horário de Atendimento",
      details: ["Segunda - Sexta: 9h às 18h", "Sábado: 9h às 13h"],
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
            Entre em Contato
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 p-6 rounded-xl text-center backdrop-blur-sm"
              >
                <div className="text-yellow-400 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-300 mb-2">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <div className="bg-gray-900">
        <Contact />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="h-[400px] bg-gray-900 relative"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1598900319443!2d-46.6565124!3d-23.5617873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQyLjQiUyA0NsKwMzknMjMuNCJX!5e0!3m2!1spt-BR!2sbr!4v1625761234567!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="filter grayscale"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactPage;
