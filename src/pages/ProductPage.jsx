import { useState } from "react";
import { motion } from "framer-motion";
import { HiMagnifyingGlass, HiAdjustmentsHorizontal } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Luminárias",
    "Spots",
    "Pendentes",
    "LED",
    "Decorativos",
    "Externos",
  ];

  const products = [
    {
      id: 1,
      name: "Luminária LED Moderna",
      category: "Luminárias",
      price: "R$ 299,90",
      image:
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2025/01/6N102951-EBB40-logo-scaled.webp",
      description: "Design contemporâneo com tecnologia LED avançada",
      specs: ["12W", "Bivolt", "3000K", "IP20"],
      inStock: true,
    },
    {
      id: 2,
      name: "Spot Embutido Premium",
      category: "Spots",
      price: "R$ 189,90",
      image:
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2024/04/FOTO_SPOT_POINT-PRETO.png",
      description: "Acabamento refinado para ambientes sofisticados",
      specs: ["7W", "Bivolt", "4000K", "IP20"],
      inStock: true,
    },
    {
      id: 3,
      name: "Fita LED Inteligente",
      category: "LED",
      price: "R$ 249,90",
      image:
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2024/04/FOTO-IRON-5035-PRETO-1.png",
      description: "Controle por aplicativo, milhões de cores",
      specs: ["14W/m", "12V", "RGB+W", "IP65"],
      inStock: true,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Todos" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
            Nossos Produtos
          </h1>
          <p className="text-gray-300">
            Explore nossa coleção completa de produtos
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <HiMagnifyingGlass
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:border-yellow-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-gray-900"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-800 rounded-lg overflow-hidden group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.inStock ? (
                  <span className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-xs font-medium rounded-full">
                    Em estoque
                  </span>
                ) : (
                  <span className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-xs font-medium rounded-full">
                    Indisponível
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="text-sm text-yellow-400 mb-1">
                  {product.category}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-white">
                    {product.price}
                  </span>
                  <Link
                    to={`/produtos/${product.id}`}
                    className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-medium 
                      hover:bg-yellow-300 transition-colors"
                  >
                    Detalhes
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
