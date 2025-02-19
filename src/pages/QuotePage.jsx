import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineClipboardList,
  HiPlus,
  HiMinus,
  HiTrash,
} from "react-icons/hi";

const QuotePage = () => {
  const [items, setItems] = useState([{ productId: "", quantity: 1 }]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "residencial",
    comments: "",
  });

  // Exemplo de produtos disponíveis
  const availableProducts = [
    { id: 1, name: "Luminária LED Moderna", price: "R$ 299,90" },
    { id: 2, name: "Spot Embutido Premium", price: "R$ 189,90" },
    { id: 3, name: "Fita LED Inteligente", price: "R$ 249,90" },
  ];

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
    console.log({ ...formData, items });
    // Implementar lógica de envio
  };

  return (
    <section className="py-32 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
              Solicitar Orçamento
            </h1>
            <p className="text-gray-300">
              Preencha o formulário abaixo para receber seu orçamento
              personalizado
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Informações Pessoais */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-semibold text-yellow-400 mb-4">
                Informações Pessoais
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Telefone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Empresa</label>
                  <input
                    type="text"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Produtos */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-semibold text-yellow-400 mb-4">
                Produtos Desejados
              </h2>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <select
                      className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
                      value={item.productId}
                      onChange={(e) =>
                        handleItemChange(index, "productId", e.target.value)
                      }
                    >
                      <option value="">Selecione um produto</option>
                      {availableProducts.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name} - {product.price}
                        </option>
                      ))}
                    </select>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="p-2 text-gray-400 hover:text-yellow-400"
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
                        className="w-16 bg-gray-700/50 border border-gray-600 rounded-lg px-2 py-1 text-white text-center"
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
                        className="p-2 text-gray-400 hover:text-yellow-400"
                        onClick={() =>
                          handleItemChange(index, "quantity", item.quantity + 1)
                        }
                      >
                        <HiPlus />
                      </button>
                    </div>
                    {items.length > 1 && (
                      <button
                        type="button"
                        className="p-2 text-gray-400 hover:text-red-400"
                        onClick={() => handleRemoveItem(index)}
                      >
                        <HiTrash />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddItem}
                  className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2"
                >
                  <HiPlus /> Adicionar outro produto
                </button>
              </div>
            </div>

            {/* Informações Adicionais */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-xl font-semibold text-yellow-400 mb-4">
                Informações Adicionais
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">
                    Tipo de Projeto
                  </label>
                  <select
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                  >
                    <option value="residencial">Residencial</option>
                    <option value="comercial">Comercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">
                    Comentários Adicionais
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-yellow-400"
                    value={formData.comments}
                    onChange={(e) =>
                      setFormData({ ...formData, comments: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300"
            >
              <HiOutlineClipboardList className="inline-block mr-2" />
              Solicitar Orçamento
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuotePage;
