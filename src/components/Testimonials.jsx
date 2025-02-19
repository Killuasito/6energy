import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana Silva",
      role: "Arquiteta",
      content:
        "Excelente trabalho na iluminação do meu projeto residencial. A equipe foi muito profissional e atenciosa.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Carlos Santos",
      role: "Empresário",
      content:
        "Transformaram completamente o ambiente do meu restaurante. O resultado superou todas as expectativas.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 3,
      name: "Maria Oliveira",
      role: "Designer de Interiores",
      content:
        "Parceria de sucesso em todos os projetos. Qualidade e compromisso com resultados.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-20"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-300 text-lg">
            Feedback de quem já transformou seus espaços conosco
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-yellow-400 font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
