import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Products = () => {
  // Amostra de produtos para a página inicial
  const featuredProducts = [
    {
      id: 1,
      name: "Luminária LED Moderna",
      category: "Luminárias",
      price: "R$ 299,90",
      image:
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2025/01/6N102951-EBB40-logo-scaled.webp",
      description: "Design contemporâneo com tecnologia LED avançada",
    },
    {
      id: 2,
      name: "Spot Embutido Premium",
      category: "Spots",
      price: "R$ 189,90",
      image:
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2024/04/FOTO_SPOT_POINT-PRETO.png",
      description: "Acabamento refinado para ambientes sofisticados",
    },
    {
      id: 3,
      name: "Fita LED Inteligente",
      category: "LED",
      price: "R$ 249,90",
      image:
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2024/04/FOTO-IRON-5035-PRETO-1.png",
      description: "Controle por aplicativo, milhões de cores",
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
            Produtos em Destaque
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Conheça algumas de nossas soluções em iluminação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg overflow-hidden group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-yellow-400 text-sm">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2">
                  {product.name}
                </h3>
                <p className="text-gray-400 mt-2">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-white">
                    {product.price}
                  </span>
                  <Link
                    to="/produtos"
                    className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors"
                  >
                    Ver mais
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            to="/produtos"
            className="inline-flex items-center px-8 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold 
              hover:bg-yellow-300 transition-colors"
          >
            Ver todos os produtos
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
