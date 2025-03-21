import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HiOutlineFilter,
  HiSearch,
  HiOutlineX,
  HiChevronDown,
  HiOutlineTag,
  HiOutlineLightBulb,
  HiOutlineSortAscending,
  HiOutlineSortDescending,
  HiOutlineHome,
  HiOutlineCube,
  HiOutlineViewGrid,
  HiOutlineOfficeBuilding,
  HiOutlineBeaker,
  HiOutlineSun,
  HiOutlineSparkles,
} from "react-icons/hi";
import productsData from "../data/products.json";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [sortOption, setSortOption] = useState("featured");
  const [sortVisible, setSortVisible] = useState(false);

  // Use specific categories instead of extracting from products
  const categories = [
    "perfil",
    "comercial",
    "industrial",
    "externa",
    "decorativa",
  ];

  // Sort options
  const sortOptions = [
    { value: "featured", label: "Destaque" },
    { value: "price-asc", label: "Preço: Menor para Maior" },
    { value: "price-desc", label: "Preço: Maior para Menor" },
    { value: "name-asc", label: "Nome: A-Z" },
    { value: "name-desc", label: "Nome: Z-A" },
  ];

  useEffect(() => {
    // Fetch products from JSON data
    const fetchProducts = () => {
      setLoading(true);
      try {
        // Get products from JSON
        const fetchedProducts = productsData.featuredProducts;
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search and category
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    // Apply sorting
    switch (sortOption) {
      case "price-asc":
        result.sort(
          (a, b) =>
            parseFloat(a.price?.replace(/[^\d.,]/g, "")) -
            parseFloat(b.price?.replace(/[^\d.,]/g, ""))
        );
        break;
      case "price-desc":
        result.sort(
          (a, b) =>
            parseFloat(b.price?.replace(/[^\d.,]/g, "")) -
            parseFloat(a.price?.replace(/[^\d.,]/g, ""))
        );
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Keep original order for featured products
        break;
    }

    setFilteredProducts(result);
  }, [products, searchQuery, selectedCategory, sortOption]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
    if (window.innerWidth < 768) {
      setFiltersVisible(false);
    }
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSortOption("featured");
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <section className="py-32 bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center">
                <HiOutlineLightBulb className="w-8 h-8 text-yellow-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
              Nossos Produtos
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore nossa linha completa de produtos de iluminação de alta
              qualidade. Desde luminárias modernas até soluções inteligentes
              para qualquer ambiente.
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative flex-grow">
                <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
                  placeholder="Buscar produtos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setSearchQuery("")}
                  >
                    <HiOutlineX />
                  </button>
                )}
              </div>

              <div className="relative md:hidden">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-gray-700"
                  onClick={toggleFilters}
                >
                  <HiOutlineFilter />
                  <span>Filtros</span>
                </button>
              </div>

              <div className="relative">
                <button
                  className="flex items-center justify-between gap-2 min-w-[180px] px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-gray-700"
                  onClick={() => setSortVisible(!sortVisible)}
                >
                  <div className="flex items-center gap-2">
                    {sortOption.includes("asc") ? (
                      <HiOutlineSortAscending className="text-gray-400" />
                    ) : sortOption.includes("desc") ? (
                      <HiOutlineSortDescending className="text-gray-400" />
                    ) : (
                      <HiOutlineViewGrid className="text-gray-400" />
                    )}
                    <span>
                      {
                        sortOptions.find((opt) => opt.value === sortOption)
                          ?.label
                      }
                    </span>
                  </div>
                  <HiChevronDown
                    className={`transition-transform ${
                      sortVisible ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {sortVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute z-10 mt-2 w-full bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-xl"
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-700 ${
                          sortOption === option.value
                            ? "bg-gray-700 text-yellow-400"
                            : "text-white"
                        } flex items-center gap-2`}
                        onClick={() => {
                          setSortOption(option.value);
                          setSortVisible(false);
                        }}
                      >
                        {option.value === "featured" && <HiOutlineViewGrid />}
                        {option.value === "price-asc" && (
                          <HiOutlineSortAscending />
                        )}
                        {option.value === "price-desc" && (
                          <HiOutlineSortDescending />
                        )}
                        {option.value === "name-asc" && (
                          <HiOutlineSortAscending />
                        )}
                        {option.value === "name-desc" && (
                          <HiOutlineSortDescending />
                        )}
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              {(searchQuery ||
                selectedCategory ||
                sortOption !== "featured") && (
                <button
                  className="text-gray-300 hover:text-yellow-400 text-sm flex items-center gap-1"
                  onClick={handleClearFilters}
                >
                  <HiOutlineX className="w-4 h-4" />
                  Limpar filtros
                </button>
              )}
            </div>
          </div>

          {/* Filter sidebar and products grid */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Category filters - Mobile - Fixed positioning adjusted to avoid header overlap */}
            <motion.div
              className={`md:hidden fixed inset-0 z-40 bg-gray-900/80 backdrop-blur-sm overflow-hidden transition-opacity ${
                filtersVisible ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setFiltersVisible(false)}
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: filtersVisible ? 0 : "-100%" }}
                transition={{ type: "tween" }}
                className="absolute left-0 top-0 bottom-0 pt-28 w-3/4 max-w-xs bg-gray-800 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-5">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <HiOutlineFilter className="text-yellow-400" />
                      Filtros
                    </h3>
                    <button
                      className="text-gray-400 hover:text-white"
                      onClick={() => setFiltersVisible(false)}
                    >
                      <HiOutlineX className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-yellow-400 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                      <HiOutlineTag className="w-4 h-4" />
                      Categorias
                    </h4>
                    <ul className="space-y-2">
                      {categories.map((category) => (
                        <li key={category}>
                          <button
                            className={`w-full text-left py-2 px-3 rounded-lg transition-colors ${
                              selectedCategory === category
                                ? "bg-yellow-400/20 text-yellow-400"
                                : "text-gray-300 hover:bg-gray-700/50"
                            } flex items-center gap-2`}
                            onClick={() => handleCategoryClick(category)}
                          >
                            {getCategoryIcon(category)}
                            {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Category filters - Desktop (reduced width) */}
            <div className="hidden md:block w-48 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/30 h-fit sticky top-32">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <HiOutlineFilter className="text-yellow-400" />
                Filtros
              </h3>
              <div>
                <h4 className="text-yellow-400 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <HiOutlineTag className="w-3.5 h-3.5" />
                  Categorias
                </h4>
                <ul className="space-y-1.5">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        className={`w-full text-left py-1.5 px-2.5 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-yellow-400/20 text-yellow-400"
                            : "text-gray-300 hover:bg-gray-700/50"
                        } flex items-center text-sm gap-2`}
                        onClick={() => handleCategoryClick(category)}
                      >
                        {getCategoryIcon(category)}
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-grow">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="inline-block animate-spin h-8 w-8 border-4 border-yellow-400 border-t-transparent rounded-full"></div>
                </div>
              ) : filteredProducts.length === 0 ? (
                <div className="bg-gray-800/50 rounded-xl p-8 text-center">
                  <h3 className="text-xl text-white mb-2">
                    Nenhum produto encontrado
                  </h3>
                  <p className="text-gray-400">
                    Tente ajustar seus filtros ou termos de busca.
                  </p>
                  <button
                    className="mt-4 text-yellow-400 hover:underline flex items-center gap-1.5 mx-auto"
                    onClick={handleClearFilters}
                  >
                    <HiOutlineX className="w-4 h-4" />
                    Limpar todos os filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      whileHover={{ y: -5 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-colors group"
                    >
                      <Link to={`/produtos/${product.id}`} className="block">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-4">
                          <div className="mb-2">
                            <span className="inline-block px-2 py-0.5 rounded-full bg-gray-700/60 text-yellow-400 text-xs font-medium">
                              {product.category}
                            </span>
                          </div>
                          <div className="flex justify-between items-start">
                            <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors line-clamp-1">
                              {product.name}
                            </h3>
                            {product.price && (
                              <span className="text-yellow-400 font-medium text-sm">
                                {product.price}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to get category icons
function getCategoryIcon(category) {
  switch (category.toLowerCase()) {
    case "perfil":
      return <HiOutlineCube className="w-4 h-4" />;
    case "comercial":
      return <HiOutlineOfficeBuilding className="w-4 h-4" />;
    case "industrial":
      return <HiOutlineBeaker className="w-4 h-4" />;
    case "externa":
      return <HiOutlineSun className="w-4 h-4" />;
    case "decorativa":
      return <HiOutlineSparkles className="w-4 h-4" />;
    default:
      return <HiOutlineTag className="w-4 h-4" />;
  }
}

export default ProductPage;
