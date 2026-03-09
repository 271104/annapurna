import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaHeart, FaHome, FaHandHoldingHeart, FaStar } from 'react-icons/fa';

const FamilyConnection = () => {
  const values = [
    {
      icon: FaHeart,
      title: 'Made with Love',
      description: 'Every sweet is crafted like we're making it for our own family',
    },
    {
      icon: FaHome,
      title: 'Family Recipes',
      description: 'Traditional recipes passed down through three generations',
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Personal Care',
      description: 'We know our customers by name, not just order numbers',
    },
    {
      icon: FaStar,
      title: 'Quality Promise',
      description: 'If we wouldn't serve it to our family, we won't serve it to yours',
    },
  ];

  return (
    <section className="section-padding bg-white overflow-hidden w-full">
      <div className="container-custom w-full">
        <AnimatedSection variant="fadeIn" className="text-center mb-12 md:mb-16">
          <motion.span
            className="inline-block text-saffron font-semibold mb-2 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            ❤️ Our Promise
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-4">
            From Our <span className="gradient-text">Family</span> to Yours
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-6 md:px-4">
            आपका परिवार, हमारा परिवार। When you buy from Devasi's Annapurna, you're not just a customer - you become part of our extended family.
          </p>
        </AnimatedSection>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <AnimatedSection variant="slideLeft">
            <div className="relative">
              <div className="glass-card p-6 md:p-8">
                <div className="mb-6">
                  <span className="text-6xl md:text-7xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                  Why Families Trust Us for 20+ Years
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm md:text-base">
                      <strong>Same Quality, Always:</strong> Whether you order 1kg or 100kg, the taste and freshness remain identical. No shortcuts, no compromises.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm md:text-base">
                      <strong>We Remember You:</strong> Regular customers are greeted by name. We remember your preferences, your favorite sweets, even your family occasions.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm md:text-base">
                      <strong>Fresh Daily:</strong> We make sweets fresh every morning. What doesn't sell by evening, we don't sell the next day. Period.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700 text-sm md:text-base">
                      <strong>Honest Pricing:</strong> No hidden charges. No festival price hikes. Fair prices, always. That's our family's word.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight">
            <div className="space-y-4 md:space-y-6">
              <motion.div
                className="bg-gradient-to-br from-saffron/10 to-gold/10 p-6 md:p-8 rounded-2xl border-2 border-saffron/20"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
                  💬 What Our Family Members Say
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 italic text-sm md:text-base mb-2">
                      "20 वर्षांपासून आमच्या प्रत्येक सणाचा भाग. आता तर आमच्या मुलांनाही देवासी चीच मिठाई आवडते!"
                    </p>
                    <p className="text-saffron font-semibold text-sm">- Patil Family, Solapur</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl">
                    <p className="text-gray-700 italic text-sm md:text-base mb-2">
                      "My daughter's wedding had 500 guests. Devasi's handled everything perfectly. Quality was outstanding, and they treated us like family."
                    </p>
                    <p className="text-saffron font-semibold text-sm">- Sharma Family, Solapur</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="glass-card p-6 md:p-8 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-800">
                  🎯 Our Family Promise
                </h4>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  "We treat every order like it's for our own family's celebration. Your happiness is our success. Your trust is our treasure."
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-saffron font-bold text-sm md:text-base">- Devasi's Annapurna Family</p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => (
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
                  <value.icon className="text-white text-lg md:text-2xl" />
                </motion.div>
                <h4 className="font-bold text-sm md:text-base mb-2">{value.title}</h4>
                <p className="text-gray-600 text-xs md:text-sm leading-tight">{value.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyConnection;
