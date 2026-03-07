import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { BUSINESS_INFO } from '../../utils/constants';
import { scrollToSection } from '../../utils/helpers';
import { LOGO_URL } from '../../utils/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg py-2 md:py-2.5'
          : 'bg-black/90 backdrop-blur-sm py-2.5 md:py-3'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 md:space-x-3 cursor-pointer relative"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={LOGO_URL}
              alt={BUSINESS_INFO.name}
              className="w-20 h-20 md:w-24 md:h-20 object-contain relative z-10"
              style={{ marginTop: '-8px', marginBottom: '-8px' }}
              onError={(e) => {
                // Fallback to letter logo if image fails to load
                e.target.outerHTML = '<div class="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center shadow-lg relative z-10" style="margin-top: -8px; margin-bottom: -8px;"><span class="text-white font-bold text-2xl md:text-3xl">A</span></div>';
              }}
            />
            <div>
              <h1 className="font-bold text-base md:text-xl text-white">
                {BUSINESS_INFO.name}
              </h1>
              <p className="text-xs text-white/80 hidden sm:block">
                {BUSINESS_INFO.tagline}
              </p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="font-medium transition-colors relative group text-white hover:text-gold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-saffron to-gold text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-glow transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone />
            <span>Call Now</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <FaTimes className="text-xl md:text-2xl text-white" />
            ) : (
              <FaBars className="text-xl md:text-2xl text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden mt-4 bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="py-2 md:py-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="block w-full text-left px-4 md:px-6 py-2 md:py-3 text-sm md:text-base text-gray-700 hover:bg-saffron/10 hover:text-saffron transition-colors font-medium"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center space-x-2 mx-4 md:mx-6 mt-3 md:mt-4 bg-gradient-to-r from-saffron to-gold text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold text-sm md:text-base"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <FaPhone />
                  <span>Call Now</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
