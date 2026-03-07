import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-orange-50 to-amber-50 pattern-bg">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <motion.button
          onClick={() => navigate('/')}
          className="btn-primary flex items-center space-x-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaHome />
          <span>Go Home</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFound;
