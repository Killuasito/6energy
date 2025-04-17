import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  HiOutlineClipboardList,
  HiPlus,
  HiMinus,
  HiTrash,
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineOfficeBuilding,
  HiOutlineDocumentText,
  HiOutlineLightBulb,
  HiOutlineCheck,
} from "react-icons/hi";
import productsData from "../data/products.json";

const QuotePage = () => {
  const location = useLocation();
  const preselectedProductId = location.state?.selectedProduct || "";

  // Initialize with preselected product if available
  const [items, setItems] = useState([
    {
      productId: preselectedProductId ? String(preselectedProductId) : "",
      quantity: 1,
    },
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "residencial",
    comments: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use products from the products.json file without generating fake prices
  const availableProducts = productsData.featuredProducts.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    image: product.image,
  }));

  const handleAddItem = () => {
    setItems([...items, { productId: "", quantity: 1 }]);
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulando um envio para API
    setTimeout(() => {
      console.log({ ...formData, items });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const projectTypes = [
    { value: "residencial", label: "Residencial" },
    { value: "comercial", label: "Comercial" },
    { value: "industrial", label: "Industrial" },
    { value: "governamental", label: "Governamental" },
    { value: "hospitalar", label: "Hospitalar" },
    { value: "educacional", label: "Educacional" },
  ];

  // If navigating away after form submission, clear the state
  useEffect(() => {
    return () => {
      // This runs when component unmounts
      if (history.state) {
        window.history.replaceState({}, document.title);
      }
    };
  }, []);

  // Optional: Scroll to products section if a product was preselected
  useEffect(() => {
    if (preselectedProductId) {
      // Find the products section
      const productsSection = document.querySelector(
        '[data-section="products"]'
      );
      if (productsSection) {
        setTimeout(() => {
          productsSection.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 500);
      }
    }
  }, [preselectedProductId]);

  if (isSubmitted) {
    return (
      <section className="py-32 bg-gray-900 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-center"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <HiOutlineCheck className="text-green-500 w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Orçamento Solicitado com Sucesso!
            </h2>
            <p className="text-gray-300 mb-8">
              Obrigado pelo seu interesse! Recebemos sua solicitação de
              orçamento e entraremos em contato em breve através dos dados
              fornecidos.
            </p>
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-all"
              >
                Novo Orçamento
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => (window.location.href = "/")}
                className="px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-medium hover:bg-yellow-300 transition-all"
              >
                Voltar ao Início
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400/20 mb-4">
              <HiOutlineClipboardList className="w-8 h-8 text-yellow-400" />
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
              Solicitar Orçamento
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Preencha o formulário abaixo para receber seu orçamento
              personalizado. Nossa equipe entrará em contato com você em até 24
              horas úteis.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Informações Pessoais */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 space-y-4 shadow-lg border border-gray-700/50"
            >
              <h2 className="text-xl font-semibold text-yellow-400 flex items-center gap-2 mb-4">
                <HiOutlineUser className="w-5 h-5" />
                Informações Pessoais
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiOutlineUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-10 px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Seu nome completo"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiOutlineMail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      required
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-10 px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Telefone *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiOutlinePhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      required
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-10 px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      value={formData.phone}
                      onChange={(e) => {
                        // Apply phone mask (xx) xxxxx-xxxx
                        const value = e.target.value.replace(/\D/g, "");
                        let formattedPhone = "";

                        if (value.length <= 2) {
                          formattedPhone = value;
                        } else if (value.length <= 7) {
                          formattedPhone = `(${value.slice(
                            0,
                            2
                          )}) ${value.slice(2)}`;
                        } else {
                          formattedPhone = `(${value.slice(
                            0,
                            2
                          )}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
                        }

                        setFormData({ ...formData, phone: formattedPhone });
                      }}
                      placeholder="(xx) xxxxx-xxxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Empresa{" "}
                    <span className="text-gray-500 font-normal">
                      (opcional)
                    </span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <HiOutlineOfficeBuilding className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-10 px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Produtos */}
            <motion.div
              data-section="products"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50"
            >
              <h2 className="text-xl font-semibold text-yellow-400 flex items-center gap-2 mb-4">
                <HiOutlineLightBulb className="w-5 h-5" />
                Produtos Desejados
              </h2>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={index}
                    className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-lg bg-gray-700/30 border border-gray-700/50"
                  >
                    <div className="flex-1">
                      <label className="block text-gray-300 mb-1 text-sm">
                        Produto
                      </label>
                      <div className="relative">
                        <select
                          className="w-full bg-gray-700/80 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 appearance-none cursor-pointer shadow-inner"
                          value={item.productId}
                          onChange={(e) =>
                            handleItemChange(index, "productId", e.target.value)
                          }
                          style={{
                            backgroundImage: "none",
                            WebkitAppearance: "none",
                          }}
                        >
                          <option
                            value=""
                            className="py-3 px-4 bg-gray-800 hover:bg-gray-700"
                          >
                            Selecione um produto
                          </option>
                          {availableProducts.map((product) => (
                            <option
                              key={product.id}
                              value={product.id}
                              className="py-3 px-4 bg-gray-800 hover:bg-gray-700 border-b border-gray-700 last:border-0"
                            >
                              {product.name} - {product.category}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-400">
                          <svg
                            className="w-5 h-5 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Product preview when selected */}
                    {item.productId && (
                      <div className="w-20 h-20 hidden md:flex items-center justify-center rounded-lg bg-gray-800/70 border border-gray-700/30 overflow-hidden">
                        <img
                          src={
                            availableProducts.find(
                              (p) => p.id === Number(item.productId)
                            )?.image
                          }
                          alt="Produto"
                          className="max-w-full max-h-full object-contain p-1"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-gray-300 mb-1 text-sm">
                        Quantidade
                      </label>
                      <div className="flex items-center gap-2 bg-gray-700/80 border border-gray-600 rounded-lg shadow-inner">
                        <button
                          type="button"
                          className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-gray-600/50 rounded-l-lg transition-colors flex items-center justify-center w-8 h-10"
                          onClick={() =>
                            handleItemChange(
                              index,
                              "quantity",
                              Math.max(1, item.quantity - 1)
                            )
                          }
                        >
                          <HiMinus />
                        </button>
                        <input
                          type="number"
                          min="1"
                          className="w-12 bg-transparent border-0 text-white text-center focus:outline-none focus:ring-0"
                          value={item.quantity}
                          onChange={(e) =>
                            handleItemChange(
                              index,
                              "quantity",
                              parseInt(e.target.value) || 1
                            )
                          }
                        />
                        <button
                          type="button"
                          className="p-2 text-gray-400 hover:text-yellow-400 hover:bg-gray-600/50 rounded-r-lg transition-colors flex items-center justify-center w-8 h-10"
                          onClick={() =>
                            handleItemChange(
                              index,
                              "quantity",
                              item.quantity + 1
                            )
                          }
                        >
                          <HiPlus />
                        </button>
                      </div>
                    </div>
                    {items.length > 1 && (
                      <button
                        type="button"
                        className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-full transition-colors self-center mt-2 md:mt-0"
                        onClick={() => handleRemoveItem(index)}
                        aria-label="Remover item"
                      >
                        <HiTrash className="w-5 h-5" />
                      </button>
                    )}
                  </motion.div>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleAddItem}
                  className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2 py-2 px-4 rounded-lg border border-yellow-400/30 hover:border-yellow-400 bg-yellow-400/5 hover:bg-yellow-400/10 transition-all duration-200"
                >
                  <HiPlus /> Adicionar outro produto
                </motion.button>
              </div>
            </motion.div>

            {/* Informações Adicionais */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50"
            >
              <h2 className="text-xl font-semibold text-yellow-400 flex items-center gap-2 mb-4">
                <HiOutlineDocumentText className="w-5 h-5" />
                Informações Adicionais
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Tipo de Projeto
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-gray-700/80 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 appearance-none shadow-inner"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                      style={{
                        backgroundImage: "none",
                        WebkitAppearance: "none",
                      }}
                    >
                      {projectTypes.map((type) => (
                        <option
                          key={type.value}
                          value={type.value}
                          className="py-3 px-4 bg-gray-800 hover:bg-gray-700 border-b border-gray-700 last:border-0"
                        >
                          {type.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-400">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Comentários Adicionais{" "}
                    <span className="text-gray-500 font-normal">
                      (opcional)
                    </span>
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                    value={formData.comments}
                    onChange={(e) =>
                      setFormData({ ...formData, comments: e.target.value })
                    }
                    placeholder="Descreva detalhes específicos do seu projeto ou necessidades especiais..."
                  ></textarea>
                </div>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center gap-2
                ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
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
                  <HiOutlineClipboardList className="text-xl" />
                  <span>Solicitar Orçamento</span>
                </>
              )}
            </motion.button>

            <p className="text-center text-gray-400 text-sm">
              Ao enviar este formulário, você concorda com nossa{" "}
              <a href="#" className="text-yellow-400 hover:underline">
                Política de Privacidade
              </a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuotePage;
