import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productsData from "../data/products.json";

const Products = () => {
  const { featuredProducts } = productsData;

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
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-orange-500">
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
              <div className="p-3">
                {" "}
                {/* Further reduced padding */}
                <span className="text-orange-500 text-[10px]">
                  {" "}
                  {/* Further reduced font size */}
                  {product.category}
                </span>
                <h3 className="text-base font-bold text-white mt-1.5">
                  {" "}
                  {/* Further reduced font size */}
                  {product.name}
                </h3>
                <p className="text-gray-400 text-xs mt-1.5">
                  {" "}
                  {/* Further reduced font size */}
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-2">
                  {" "}
                  {/* Further adjusted margin */}
                  <span className="text-lg font-bold text-white">
                    {" "}
                    {/* Further reduced font size */}
                    {product.price}
                  </span>
                  <Link
                    to="/produtos"
                    className="bg-orange-500 text-gray-900 px-2.5 py-1 rounded-lg font-medium hover:bg-yellow-300 transition-colors"
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
            className="inline-flex items-center px-8 py-3 bg-orange-500 text-gray-900 rounded-full font-semibold 
              hover:bg-orange-00 transition-colors"
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
