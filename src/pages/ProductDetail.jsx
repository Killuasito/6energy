import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineShoppingCart,
  HiStar,
  HiOutlineStar,
  HiArrowLeft,
} from "react-icons/hi";
import { Link, useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  // Banco de dados de produtos com IDs como strings
  const productsDatabase = {
    1: {
      name: "Luminária LED Moderna",
      price: "R$ 299,90",
      category: "Luminárias",
      rating: 4.8,
      reviewCount: 124,
      description:
        "Design contemporâneo com tecnologia LED avançada para iluminação eficiente e elegante.",
      longDescription:
        "Esta luminária combina tecnologia de ponta com design sofisticado. Perfeita para ambientes modernos, oferece iluminação ajustável e economia de energia excepcional.",
      images: [
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2025/01/6N102951-EBB40-logo-scaled.webp",
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2024/04/FOTO_SPOT_POINT-PRETO.png",
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2024/04/FOTO-IRON-5035-PRETO-1.png",
      ],
      specs: [
        { name: "Potência", value: "12W" },
        { name: "Voltagem", value: "Bivolt" },
        { name: "Temperatura de Cor", value: "3000K" },
        { name: "Proteção", value: "IP20" },
        { name: "Vida Útil", value: "25.000 horas" },
        { name: "Garantia", value: "2 anos" },
      ],
      features: [
        "Controle de intensidade",
        "Instalação simplificada",
        "Baixo consumo de energia",
        "Material anti-corrosão",
        "Distribuição uniforme de luz",
      ],
    },
    2: {
      name: "Spot Embutido Premium",
      price: "R$ 189,90",
      category: "Spots",
      rating: 4.6,
      reviewCount: 89,
      description: "Acabamento refinado para ambientes sofisticados",
      longDescription:
        "Spot embutido com tecnologia LED integrada, ideal para criar pontos de luz direcionados. Design discreto que se integra perfeitamente a qualquer ambiente.",
      images: [
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2024/04/FOTO_SPOT_POINT-PRETO.png",
        // Adicione mais imagens
      ],
      specs: [
        { name: "Potência", value: "7W" },
        { name: "Voltagem", value: "Bivolt" },
        { name: "Temperatura de Cor", value: "4000K" },
        { name: "Proteção", value: "IP20" },
        { name: "Vida Útil", value: "20.000 horas" },
        { name: "Garantia", value: "2 anos" },
      ],
      features: [
        "Facho direcionável",
        "Instalação embutida",
        "Alta eficiência luminosa",
        "Acabamento premium",
        "Design minimalista",
      ],
    },
    3: {
      name: "Fita LED Inteligente",
      price: "R$ 249,90",
      category: "LED",
      rating: 4.9,
      reviewCount: 156,
      description: "Controle por aplicativo, milhões de cores",
      longDescription:
        "Fita LED RGB+W com controle via smartphone. Crie ambientes personalizados com milhões de cores e automações inteligentes.",
      images: [
        "https://i0.wp.com/www.6energy.com.br/wp-content/uploads/2024/04/FOTO-IRON-5035-PRETO-1.png",
        // Adicione mais imagens
      ],
      specs: [
        { name: "Potência", value: "14W/m" },
        { name: "Voltagem", value: "12V" },
        { name: "Cores", value: "RGB+W" },
        { name: "Proteção", value: "IP65" },
        { name: "Vida Útil", value: "30.000 horas" },
        { name: "Conectividade", value: "WiFi/Bluetooth" },
      ],
      features: [
        "Controle via aplicativo",
        "16 milhões de cores",
        "Resistente à água",
        "Automações programáveis",
        "Música sincronizada",
      ],
    },
  };

  // Buscar produto pelo ID
  const product = productsDatabase[id];

  // Redirecionar para a página de produtos se o ID não existir
  if (!product) {
    navigate("/produtos");
    return null;
  }

  return (
    <section className="py-32 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Navegação */}
        <Link
          to="/produtos"
          className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8 group"
        >
          <HiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Voltar para Produtos
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Galeria de Imagens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-800">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? "border-yellow-400"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Informações do Produto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <span className="text-yellow-400 text-sm font-medium">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold text-white mt-1">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) =>
                  i < Math.floor(product.rating) ? (
                    <HiStar key={i} className="text-yellow-400 w-5 h-5" />
                  ) : (
                    <HiOutlineStar
                      key={i}
                      className="text-yellow-400 w-5 h-5"
                    />
                  )
                )}
              </div>
              <span className="text-gray-400">
                ({product.reviewCount} avaliações)
              </span>
            </div>

            <p className="text-gray-300 text-lg">{product.longDescription}</p>

            <div className="py-6 border-y border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">
                Especificações
              </h3>
              <dl className="grid grid-cols-2 gap-4">
                {product.specs.map((spec) => (
                  <div key={spec.name}>
                    <dt className="text-gray-400">{spec.name}</dt>
                    <dd className="text-white font-medium">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Características
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-6">
              <span className="text-3xl font-bold text-white">
                {product.price}
              </span>
              <Link
                to="/orcamento"
                className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold 
                  flex items-center space-x-2 hover:bg-yellow-300 transition-colors"
              >
                <HiOutlineShoppingCart className="w-5 h-5" />
                <span>Solicitar Orçamento</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
