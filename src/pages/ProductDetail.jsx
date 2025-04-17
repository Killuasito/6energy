import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineShoppingCart,
  HiStar,
  HiOutlineStar,
  HiArrowLeft,
  HiOutlineDownload,
  HiOutlineDocumentText,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { Link, useParams, useNavigate } from "react-router-dom";
import productsData from "../data/products.json";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    const fetchProduct = async () => {
      try {
        setLoading(true);

        // Find the product in the JSON data
        const foundProduct = productsData.featuredProducts.find(
          (item) => item.id === parseInt(id)
        );

        if (foundProduct) {
          // Process images correctly
          let productImages = [];

          // If images array exists and has items, use it
          if (foundProduct.images && foundProduct.images.length > 0) {
            productImages = foundProduct.images;
          }
          // Otherwise use the single image
          else if (foundProduct.image) {
            productImages = [foundProduct.image];
          }
          // Fallback
          else {
            productImages = ["https://via.placeholder.com/400?text=No+Image"];
          }

          // Generate file names for downloads based on product name
          const fileBaseName = foundProduct.name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Remove accents
            .replace(/\s+/g, "-") // Replace spaces with hyphens
            .replace(/[^a-z0-9-]/g, ""); // Remove special characters

          // Enhance the product with additional details
          const enhancedProduct = {
            ...foundProduct,
            rating: foundProduct.rating || 4.7,
            reviewCount: foundProduct.reviewCount || 100,
            longDescription:
              foundProduct.longDescription || foundProduct.description,
            images: productImages,
            specs: foundProduct.specs || [
              { name: "Potência", value: "12W" },
              { name: "Voltagem", value: "Bivolt" },
              { name: "Temperatura de Cor", value: "3000K" },
              { name: "Proteção", value: "IP20" },
              { name: "Vida Útil", value: "25.000 horas" },
              { name: "Garantia", value: "2 anos" },
            ],
            features: foundProduct.features || [
              "Controle de intensidade",
              "Instalação simplificada",
              "Baixo consumo de energia",
              "Material anti-corrosão",
              "Distribuição uniforme de luz",
            ],
            downloads: [
              {
                name: "Arquivo LDT",
                description: "Dados fotométricos para projetos luminotécnicos",
                icon: <HiOutlineDocumentReport className="w-5 h-5" />,
                url: `#`,
                fileName: `${foundProduct.name}.LDT`,
                downloadHandler: true,
              },
              {
                name: "Ficha Técnica",
                description: "Especificações completas do produto",
                icon: <HiOutlineDocumentText className="w-5 h-5" />,
                url: `#`,
                fileName: `${foundProduct.name} - Ficha Técnica.pdf`,
                downloadHandler: true,
              },
            ],
          };
          setProduct(enhancedProduct);
          console.log("Product images:", productImages); // Debugging
        } else {
          // Product not found
          navigate("/produtos");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        navigate("/produtos");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const handleDownload = (fileName, e) => {
    e.preventDefault();
    // Create a blank text file with the proper name
    const fileExtension = fileName.split(".").pop().toLowerCase();

    // Create different content based on file type
    let content = "";
    let mimeType = "";

    if (fileExtension === "ldt") {
      content = `This is a sample LDT file for ${product.name}.\nIn a real application, this would contain photometric data.`;
      mimeType = "text/plain";
    } else if (fileExtension === "pdf") {
      content = `This is a sample PDF content for ${product.name}.\nIn a real application, this would be a binary PDF file.`;
      mimeType = "text/plain"; // In real app, would be application/pdf
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);

    // Create a temporary link and click it
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the URL object
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

  if (loading) {
    return (
      <section className="py-32 bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin h-12 w-12 border-4 border-yellow-400 border-t-transparent rounded-full mb-4"></div>
          <p className="text-gray-300">Carregando produto...</p>
        </div>
      </section>
    );
  }

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
          {/* Galeria de Imagens - Modified to have rounded corners and remove background */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="rounded-xl overflow-hidden flex justify-center items-center">
              {product && product.images && product.images.length > 0 ? (
                <div className="flex justify-center items-center p-4">
                  <img
                    src={product.images[selectedImage]}
                    alt={product.name}
                    className="max-w-full max-h-[400px] object-contain rounded-xl"
                    onError={(e) => {
                      console.error("Image failed to load:", e.target.src);
                      e.target.src =
                        "https://via.placeholder.com/400?text=Error+Loading+Image";
                    }}
                  />
                </div>
              ) : (
                <div className="w-full h-64 flex items-center justify-center text-gray-500 rounded-xl">
                  Imagem não disponível
                </div>
              )}
            </div>
            {product && product.images && product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-yellow-400"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - vista ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/100?text=Error";
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
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

            {/* Downloads Section */}
            {product.downloads && product.downloads.length > 0 && (
              <div className="py-6 border-y border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Arquivos para Download
                </h3>
                <div className="space-y-3">
                  {product.downloads.map((download, index) => (
                    <motion.a
                      key={index}
                      href={download.url}
                      onClick={(e) =>
                        download.downloadHandler &&
                        handleDownload(download.fileName, e)
                      }
                      className="flex items-center p-3 bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50 rounded-lg group transition-all duration-300"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center mr-3 group-hover:bg-yellow-400/30 transition-colors">
                        {download.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-medium">
                          {download.name}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {download.description}
                        </p>
                      </div>
                      <HiOutlineDownload className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-all transform group-hover:translate-y-0.5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-6">
              <span className="text-3xl font-bold text-white">
                {product.price}
              </span>
              <Link
                to="/orcamento"
                state={{ selectedProduct: product.id }} // Pass the product ID as state
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
