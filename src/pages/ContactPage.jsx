import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlinePaperAirplane,
} from "react-icons/hi";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  // Contact cards data
  const contactInfo = [
    {
      icon: <HiOutlinePhone className="w-6 h-6" />,
      title: "Telefone",
      content: "(11) 5199 9251",
      color: "blue",
      action: "tel:+551151999251",
      actionText: "Ligar agora",
    },
    {
      icon: <HiOutlineMail className="w-6 h-6" />,
      title: "Email",
      content: "juan.alvarez@6energy.com.br",
      color: "red",
      action: "mailto:juan.alvarez@6energy.com.br",
      actionText: "Enviar email",
    },
    {
      icon: <HiOutlineLocationMarker className="w-6 h-6" />,
      title: "Endereço",
      content:
        "Alameda Pd Miguel - Jardim V Grande, Vargem Grande Paulista - SP, 06673-785",
      color: "green",
      action:
        "https://www.google.com/maps/place/6+Energy+Industria+e+Comercio/@-23.6109839,-46.9904015,16.71z/data=!4m6!3m5!1s0x94ce530f1b1d4929:0x550de4a2746f07be!8m2!3d-23.610245!4d-46.99188!16s%2Fg%2F11g_zf7kdf?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D",
      actionText: "Ver no mapa",
    },
  ];

  // Gradient classes for cards
  const gradients = {
    blue: "from-blue-400/20 to-blue-600/20 border-blue-500/20 hover:border-blue-500/40",
    red: "from-red-400/20 to-red-600/20 border-red-500/20 hover:border-red-500/40",
    green:
      "from-green-400/20 to-green-600/20 border-green-500/20 hover:border-green-500/40",
    yellow:
      "from-yellow-400/20 to-yellow-600/20 border-yellow-500/20 hover:border-yellow-500/40",
    purple:
      "from-purple-400/20 to-purple-600/20 border-purple-500/20 hover:border-purple-500/40",
  };

  // Icon background classes
  const iconBgs = {
    blue: "bg-blue-500/20 text-blue-400",
    red: "bg-red-500/20 text-red-400",
    green: "bg-green-500/20 text-green-400",
    yellow: "bg-yellow-500/20 text-yellow-400",
    purple: "bg-purple-500/20 text-purple-400",
  };

  return (
    <section className="py-32 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
              Entre em Contato
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto">
              Estamos disponíveis para responder suas dúvidas, ouvir seus
              comentários e atender às suas necessidades de iluminação.
            </p>
          </div>

          {/* Contact Cards - Changed to 3 cards layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${
                  gradients[item.color]
                } rounded-xl p-6 border backdrop-blur-sm shadow-lg flex flex-col items-center text-center group relative overflow-hidden`}
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-full ${
                    iconBgs[item.color]
                  } flex items-center justify-center mb-4 z-10`}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">{item.content}</p>
                {item.subContent && (
                  <p className="text-gray-400 text-sm">{item.subContent}</p>
                )}

                {/* Action button */}
                {item.action && (
                  <a
                    href={item.action}
                    target={item.action.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="mt-auto py-2 px-4 rounded-full bg-gray-800/50 hover:bg-gray-800 text-gray-300 transition-colors duration-300 text-sm flex items-center justify-center gap-2"
                  >
                    {item.actionText}
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full h-96 bg-gray-800 rounded-xl overflow-hidden border border-gray-700/50 shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.798020606889!2d-47.02950492335279!3d-23.6033452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfab28fb4fef1f%3A0xdc3afcfb326bbf49!2sAlameda%20Padre%20Miguel%20-%20Jardim%20Vargem%20Grande%2C%20Vargem%20Grande%20Paulista%20-%20SP%2C%2006730-000!5e0!3m2!1sen!2sbr!4v1704308706625!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da 6Energy"
              ></iframe>
            </motion.div>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/30 shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
                Envie-nos uma mensagem
              </h2>

              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                  Sua mensagem foi enviada com sucesso! Entraremos em contato em
                  breve.
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                  Ocorreu um erro ao enviar sua mensagem. Por favor, tente
                  novamente.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-gray-900"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <HiOutlinePaperAirplane className="w-5 h-5 rotate-90" />
                      <span>Enviar mensagem</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">
              Siga-nos nas Redes Sociais
            </h3>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.facebook.com/6energy.iluminacao"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gray-800/70 hover:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaFacebook className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <p className="mt-2 text-gray-400 group-hover:text-blue-400 transition-colors duration-300 text-sm">
                  Facebook
                </p>
              </a>

              <a
                href="https://www.instagram.com/6energy.iluminacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gray-800/70 hover:bg-pink-900/30 w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaInstagram className="w-8 h-8 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" />
                </div>
                <p className="mt-2 text-gray-400 group-hover:text-pink-400 transition-colors duration-300 text-sm">
                  Instagram
                </p>
              </a>

              <a
                href="https://br.linkedin.com/company/6-energy-iluminina%C3%A7%C3%A3o?trk=ppro_cprof"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gray-800/70 hover:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300">
                  <FaLinkedin className="w-8 h-8 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </div>
                <p className="mt-2 text-gray-400 group-hover:text-blue-400 transition-colors duration-300 text-sm">
                  LinkedIn
                </p>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
