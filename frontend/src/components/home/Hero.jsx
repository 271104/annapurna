import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaArrowRight } from 'react-icons/fa';
import { scrollToSection } from '../../utils/helpers';
import { HERO_IMAGE_URL } from '../../utils/images';

const Hero = () => {
  const titleRef = useRef(null);
  const floatingRef = useRef([]);

  useEffect(() => {
    // Letter-by-letter animation
    const letters = titleRef.current.querySelectorAll('.letter');
    gsap.fromTo(
      letters,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: 'back.out(1.7)',
      }
    );

    // Floating sweets animation
    floatingRef.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: -30,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }
    });
  }, []);

  const title = "Devasi's Annapurna";
  const words = title.split(' ');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream via-orange-50 to-amber-50 pt-32 pb-12 md:pt-24 md:pb-16 w-full"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pattern-bg opacity-30" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            ref={(el) => (floatingRef.current[i] = el)}
            className="absolute w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-saffron/20 to-gold/20 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:col-span-2 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg mb-4 md:mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-gray-700">
                Fresh & Premium Quality
              </span>
            </motion.div>

            {/* Animated Title */}
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2 lg:px-0"
            >
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-2 md:mr-4">
                  {word.split('').map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className="letter inline-block gradient-text"
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed px-2 lg:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Premium Traditional Indian Sweets & Mithai. 
              Fresh, Authentic & Delicious. Made with Love & Pure Ingredients.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start px-2 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <motion.button
                onClick={() => scrollToSection('menu')}
                className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Explore Menu</span>
                <FaArrowRight />
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-3 md:gap-6 mt-8 md:mt-12 px-2 lg:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {[
                { number: '100%', label: 'Pure & Fresh' },
                { number: '50+', label: 'Sweet Varieties' },
                { number: '5★', label: 'Customer Rating' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">
                    {stat.number}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            className="relative order-1 lg:order-2 lg:col-span-3 w-full px-2 sm:px-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full">
              {/* Main Image */}
              <motion.div
                className="relative z-10 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl w-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <img
                  src={HERO_IMAGE_URL}
                  alt="Devasi's Annapurna"
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover bg-gradient-to-br from-gray-900 to-gray-800"
                  onError={(e) => {
                    e.target.style.objectFit = 'contain';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-3 -right-3 md:-top-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-gold rounded-full blur-3xl opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 w-24 h-24 md:w-40 md:h-40 bg-saffron rounded-full blur-3xl opacity-50"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-saffron rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 md:w-1.5 md:h-3 bg-saffron rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
