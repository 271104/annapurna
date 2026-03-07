import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { BUSINESS_INFO } from '../../utils/constants';
import { getWhatsAppLink } from '../../utils/helpers';

const WhatsAppButton = () => {
  const message = `Hello! I'm interested in ordering sweets from ${BUSINESS_INFO.name}`;

  return (
    <motion.a
      href={getWhatsAppLink(BUSINESS_INFO.whatsapp, message)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 active:bg-green-700 transition-colors group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <FaWhatsapp className="text-white text-2xl md:text-3xl relative z-10" />
      
      {/* Tooltip - Hidden on mobile, shown on desktop */}
      <motion.div
        className="hidden lg:block absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        initial={{ x: 10 }}
        whileHover={{ x: 0 }}
      >
        <span className="text-sm font-medium">Chat with us on WhatsApp</span>
        <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900" />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
