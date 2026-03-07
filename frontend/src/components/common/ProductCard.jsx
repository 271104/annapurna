import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { formatPrice, getImageUrl } from '../../utils/helpers';

const ProductCard = ({ product, onClick }) => {
  return (
    <motion.div
      className="product-card glass-card overflow-hidden cursor-pointer group"
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick && onClick(product)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50">
        <motion.img
          src={getImageUrl(product.image?.url || product.image)}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-active:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback placeholder */}
        <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-orange-100 to-amber-100">
          <div className="text-center">
            <div className="text-6xl mb-2">🍬</div>
            <p className="text-sm text-gray-600">{product.name}</p>
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
        
        {/* Featured Badge */}
        {product.isFeatured && (
          <motion.div
            className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Featured
          </motion.div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-saffron">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-saffron transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-sm ${
                  i < Math.floor(product.rating || 4.5)
                    ? 'text-gold'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            ({product.rating || 4.5})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-saffron">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-gray-500 ml-1">
              {product.unit || 'per kg'}
            </span>
          </div>

          <motion.button
            className="bg-saffron text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-saffron-dark transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
