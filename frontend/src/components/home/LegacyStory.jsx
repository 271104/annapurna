import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaHeart, FaUsers, FaAward, FaClock } from 'react-icons/fa';

const LegacyStory = () => {
  const milestones = [
    {
      icon: FaClock,
      number: '20+',
      label: 'Years of Trust',
      description: 'Serving Solapur since 2004',
    },
    {
      icon: FaUsers,
      number: '50,000+',
      label: 'Happy Families',
      description: 'Part of your celebrations',
    },
    {
      icon: FaHeart,
      number: '100%',
      label: 'Pure Ingredients',
      description: 'No compromise on quality',
    },
    {
      icon: FaAward,
      number: '3',
      label: 'Generations',
      description: 'Family recipes preserved',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-amber-50 via-orange-50 to-cream overflow-hidden w-full">
      <div className="container-custom w-full">
        {/* Legacy Story Header */}
        <AnimatedSection variant="fadeIn" className="text-center mb-12 md:mb-16">
          <motion.div
            className="inline-block bg-saffron/10 px-4 py-2 rounded-full mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-saffron font-semibold text-sm md:text-base">
              🏆 20+ Years of Legacy
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-4">
            A <span className="gradient-text">Sweet Journey</span> Since 2004
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-6 md:px-4">
            सोलापूर की मिठास, हमारी पहचान। What started as a small sweet shop in Solapur has become a trusted name in thousands of homes. For over two decades, we've been part of your festivals, weddings, and precious family moments.
          </p>
        </AnimatedSection>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <AnimatedSection variant="slideLeft">
            <div className="glass-card p-6 md:p-8 space-y-4 md:space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl md:text-2xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">The Beginning (2004)</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Started by the Devasi family with a simple dream - to bring authentic, pure mithai to every home in Solapur. Our first shop at ITI Chowk became a neighborhood favorite within months.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl md:text-2xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">Building Trust</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Word spread through families. "Devasi's cha mithai khara aahe" (Devasi's sweets are truly authentic) became our reputation. We never compromised on ingredients, even when costs rose.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl md:text-2xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">Today & Tomorrow</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Now serving 50,000+ families across Solapur. From small pujas to grand weddings, we're honored to be part of your celebrations. Our promise remains unchanged - pure, fresh, authentic.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight">
            <div className="relative">
              <motion.div
                className="glass-card p-6 md:p-8 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-6">
                  <span className="text-5xl md:text-6xl">🙏</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  आपका विश्वास, हमारी ताकत
                </h3>
                <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
                  Your trust is our strength. Every sweet we make carries the blessings of thousands of families who've trusted us for over 20 years.
                </p>
                <div className="bg-gradient-to-r from-saffron/10 to-gold/10 p-4 md:p-6 rounded-xl">
                  <p className="text-gray-800 font-medium italic text-sm md:text-base">
                    "We don't just sell sweets. We preserve traditions, create memories, and spread happiness - one mithai at a time."
                  </p>
                  <p className="text-saffron font-bold mt-3 text-sm md:text-base">- Devasi Family</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {milestones.map((milestone, index) => (
            <AnimatedSection key={index} variant="scaleIn">
              <motion.div
                className="glass-card p-4 md:p-6 text-center hover-lift"
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <milestone.icon className="text-white text-lg md:text-2xl" />
                </motion.div>
                <h3 className="text-2xl md:text-4xl font-bold gradient-text mb-1 md:mb-2">
                  {milestone.number}
                </h3>
                <h4 className="font-bold text-sm md:text-base mb-1">{milestone.label}</h4>
                <p className="text-gray-600 text-xs md:text-sm">{milestone.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegacyStory;
