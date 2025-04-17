import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineStar,
} from "react-icons/hi";

const Stats = () => {
  const stats = [
    {
      icon: <HiOutlineLightBulb className="w-8 h-8" />,
      value: "100+",
      label: "Projetos Realizados",
    },
    {
      icon: <HiOutlineUserGroup className="w-8 h-8" />,
      value: "100+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: <HiOutlineStar className="w-8 h-8" />,
      value: "10",
      label: "Anos de Experiência",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-20"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-orange-500 mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
