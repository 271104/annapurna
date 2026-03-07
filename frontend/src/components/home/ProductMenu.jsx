import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import ProductCard from '../common/ProductCard';
import Modal from '../common/Modal';
import { productAPI } from '../../services/api';
import { CATEGORIES, SAMPLE_PRODUCTS } from '../../utils/constants';
import { formatPrice } from '../../utils/helpers';
import toast from 'react-hot-toast';

const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((p) => p.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  const fetchProducts = async () => {
    try {
      const response = await productAPI.getAll();
      if (response.data.data.length > 0) {
        setProducts(response.data.data);
        setFilteredProducts(response.data.data);
      } else {
        // Use sample data if no products in database
        setProducts(SAMPLE_PRODUCTS);
        setFilteredProducts(SAMPLE_PRODUCTS);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      // Fallback to sample data
      setProducts(SAMPLE_PRODUCTS);
      setFilteredProducts(SAMPLE_PRODUCTS);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="menu" className="section-padding pattern-bg overflow-hidden w-full">
      <div className="container-custom w-full">
        <AnimatedSection variant="fadeIn" className="text-center mb-8 md:mb-12">
          <motion.span className="inline-block text-saffron font-semibold mb-2 text-sm md:text-base">
            Our Menu
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 px-4">
            Delicious <span className="gradient-text">Sweet Collection</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-6 md:px-4">
            Explore our wide range of traditional and modern Indian sweets, all made fresh daily
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection variant="slideUp" className="mb-8 md:mb-12 overflow-x-auto">
          <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-3 px-4 pb-2 md:pb-0 min-w-max md:min-w-0">
            {CATEGORIES.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-saffron to-gold text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-12 h-12 border-4 border-saffron border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id || product.name}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </motion.div>
        )}

        {filteredProducts.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found in this category</p>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        size="lg"
      >
        {selectedProduct && (
          <div className="p-4 md:p-6">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <img
                src={selectedProduct.image?.url || selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 md:h-96 object-cover rounded-xl md:rounded-2xl"
              />
              <div>
                <span className="inline-block bg-saffron/10 text-saffron px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-3">
                  {selectedProduct.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedProduct.name}</h3>
                <p className="text-gray-600 mb-6 text-sm md:text-base">{selectedProduct.description}</p>
                <div className="mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-saffron">
                    {formatPrice(selectedProduct.price)}
                  </span>
                  <span className="text-gray-500 ml-2 text-sm md:text-base">{selectedProduct.unit}</span>
                </div>
                <motion.button
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    toast.success('Please call us to place your order!');
                  }}
                >
                  Order Now
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ProductMenu;
