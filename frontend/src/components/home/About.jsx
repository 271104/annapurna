import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaAward, FaHeart, FaLeaf, FaStar } from 'react-icons/fa';
import { ABOUT_IMAGE_URL } from '../../utils/images';

const About = () => {
  const features = [
    {
      icon: FaAward,
      title: 'Premium Quality',
      description: 'Only the finest ingredients in every sweet',
    },
    {
      icon: FaHeart,
      title: 'Made with Love',
      description: 'Traditional recipes, authentic taste',
    },
    {
      icon: FaLeaf,
      title: '100% Pure',
      description: 'No artificial colors or preservatives',
    },
    {
      icon: FaStar,
      title: 'Customer Favorite',
      description: 'Trusted by thousands of happy customers',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom px-4 sm:px-6">
        <AnimatedSection variant="fadeIn" className="text-center mb-12 md:mb-16">
          <motion.span
            className="inline-block text-saffron font-semibold mb-2 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Tradition Meets <span className="gradient-text">Excellence</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            At Devasi's Annapurna, we believe in preserving the authentic taste of traditional Indian sweets while maintaining the highest standards of quality and hygiene.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <AnimatedSection variant="slideLeft">
            <div className="relative px-4 md:px-0">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
                <img
                  src={ABOUT_IMAGE_URL}
                  alt="Devasi's Annapurna"
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-contain"
                  onError={(e) => {
                    e.target.style.objectFit = 'cover';
                  }}
                />
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-saffron text-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-2xl md:text-4xl font-bold">100%</p>
                <p className="text-xs md:text-sm">Pure & Fresh</p>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight">
            <div className="px-4 md:px-0">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">Our Story</h3>
              <p className="text-gray-600 mb-3 md:mb-4 leading-relaxed text-sm sm:text-base">
                Devasi's Annapurna brings you the finest traditional Indian sweets and mithai. We are committed to delivering authentic taste, premium quality, and exceptional freshness in every product.
              </p>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm sm:text-base">
                We use only the finest ingredients and traditional recipes to create sweets that bring joy to your celebrations. From festivals to special occasions, we're here to make your moments sweeter.
              </p>
              <motion.button
                onClick={() => window.location.href = '#menu'}
                className="btn-primary w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4 md:px-0">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              variant="scaleIn"
              className="glass-card p-4 md:p-6 text-center hover-lift"
            >
              <motion.div
                className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4"
                whileHover={{ rotate: 360 }}
                whileTap={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="text-white text-lg md:text-2xl" />
              </motion.div>
              <h4 className="font-bold text-sm md:text-lg mb-1 md:mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
