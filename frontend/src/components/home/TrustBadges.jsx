import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaShieldAlt, FaCertificate, FaLeaf, FaAward, FaCheckCircle, FaHeart } from 'react-icons/fa';

const TrustBadges = () => {
  const badges = [
    {
      icon: FaShieldAlt,
      title: 'FSSAI Certified',
      description: 'Licensed & Approved',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FaLeaf,
      title: '100% Pure',
      description: 'No Artificial Colors',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: FaCertificate,
      title: 'ISO Certified',
      description: 'Quality Standards',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaAward,
      title: '20+ Years',
      description: 'Trusted Legacy',
      color: 'from-saffron to-gold',
    },
    {
      icon: FaCheckCircle,
      title: 'Daily Fresh',
      description: 'Made Every Morning',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: FaHeart,
      title: '50,000+',
      description: 'Happy Families',
      color: 'from-red-500 to-pink-500',
    },
  ];

  const certifications = [
    {
      title: 'Food Safety',
      points: [
        'FSSAI Licensed Kitchen',
        'Regular Quality Audits',
        'Hygienic Preparation',
        'Temperature Controlled Storage',
      ],
    },
    {
      title: 'Quality Promise',
      points: [
        'Premium Ingredients Only',
        'No Preservatives',
        'No Artificial Flavors',
        'Fresh Daily Guarantee',
      ],
    },
    {
      title: 'Customer Care',
      points: [
        '100% Satisfaction Guarantee',
        'Easy Returns/Refunds',
        'Responsive Support',
        'Transparent Pricing',
      ],
    },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden w-full">
      <div className="container-custom w-full">
        {/* Header */}
        <AnimatedSection variant="fadeIn" className="text-center mb-12 md:mb-16">
          <motion.span
            className="inline-block text-saffron font-semibold mb-2 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            🏆 Trust & Quality
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-4">
            Why <span className="gradient-text">Solapur Trusts</span> Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-6 md:px-4">
            विश्वास हा आमचा पाया आहे। Certified, tested, and trusted by thousands of families for over two decades.
          </p>
        </AnimatedSection>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12 md:mb-16">
          {badges.map((badge, index) => (
            <AnimatedSection key={index} variant="scaleIn">
              <motion.div
                className="glass-card p-4 md:p-6 text-center hover-lift"
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <motion.div
                  className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${badge.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <badge.icon className="text-white text-lg md:text-2xl" />
                </motion.div>
                <h4 className="font-bold text-xs md:text-sm mb-1">{badge.title}</h4>
                <p className="text-gray-600 text-xs leading-tight">{badge.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications Detail */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} variant="slideUp">
              <motion.div
                className="glass-card p-6 md:p-8 h-full"
                whileHover={{ y: -8 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-800">
                  {cert.title}
                </h3>
                <ul className="space-y-3">
                  {cert.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-green-500 text-lg flex-shrink-0">✓</span>
                      <span className="text-gray-700 text-sm md:text-base">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Social Proof Banner */}
        <AnimatedSection variant="fadeIn">
          <div className="bg-gradient-to-r from-saffron/10 via-gold/10 to-orange-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 border-saffron/20">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
              <motion.div whileHover={{ scale: 1.05 }}>
                <h3 className="text-3xl md:text-5xl font-bold gradient-text mb-2">
                  4.9★
                </h3>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Average Rating
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  From 2,500+ Reviews
                </p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <h3 className="text-3xl md:text-5xl font-bold gradient-text mb-2">
                  100%
                </h3>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Quality Guarantee
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  Money Back Promise
                </p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <h3 className="text-3xl md:text-5xl font-bold gradient-text mb-2">
                  24/7
                </h3>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  Customer Support
                </p>
                <p className="text-gray-600 text-xs md:text-sm">
                  Always Here to Help
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Final Trust Statement */}
        <AnimatedSection variant="fadeIn" className="mt-12 md:mt-16">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              className="inline-block bg-white p-6 md:p-8 rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4">
                "आमचा व्यवसाय विश्वासावर बांधलेला आहे। प्रत्येक मिठाई आम्ही आमच्या कुटुंबासाठी बनवतो त्याच प्रेमाने बनवतो।"
              </p>
              <p className="text-saffron font-bold text-sm md:text-base">
                - Devasi's Annapurna Family
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-gray-600 text-xs md:text-sm">
                  Serving Solapur with Pride Since 2004
                </p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TrustBadges;
