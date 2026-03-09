import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { FaWhatsapp, FaPhone, FaGift, FaRing, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { BUSINESS_INFO } from '../../utils/constants';
import { getWhatsAppLink } from '../../utils/helpers';

const BulkOrders = () => {
  const occasions = [
    {
      icon: FaRing,
      title: 'Weddings',
      description: 'Complete wedding sweet packages',
      minOrder: '50kg+',
      popular: true,
    },
    {
      icon: FaCalendarAlt,
      title: 'Festivals',
      description: 'Diwali, Holi, Ganesh Chaturthi specials',
      minOrder: '10kg+',
      popular: true,
    },
    {
      icon: FaGift,
      title: 'Corporate Gifts',
      description: 'Premium gift boxes for employees',
      minOrder: '25 boxes+',
      popular: false,
    },
    {
      icon: FaUsers,
      title: 'Family Functions',
      description: 'Birthdays, anniversaries, pujas',
      minOrder: '5kg+',
      popular: false,
    },
  ];

  const benefits = [
    '✅ Special Bulk Pricing - Save up to 15%',
    '✅ Free Home Delivery in Solapur',
    '✅ Customized Packaging Available',
    '✅ Advance Booking Accepted',
    '✅ Quality Guarantee on Large Orders',
    '✅ Dedicated Support for Wedding Orders',
  ];

  const whatsappMessage = `नमस्कार! मला bulk order साठी माहिती हवी आहे.\n\nOccasion: \nQuantity: \nDate: \n\nकृपया तपशील द्या.`;

  return (
    <section className="section-padding bg-gradient-to-br from-saffron/5 via-gold/5 to-orange-50 overflow-hidden w-full">
      <div className="container-custom w-full">
        {/* Header */}
        <AnimatedSection variant="fadeIn" className="text-center mb-12 md:mb-16">
          <motion.div
            className="inline-block bg-gradient-to-r from-saffron to-gold text-white px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 shadow-lg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-bold text-sm md:text-base">🎊 Special Bulk Orders</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 px-4">
            Weddings, Festivals & <span className="gradient-text">Celebrations</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-6 md:px-4">
            लग्न, सण, कार्यक्रम - आम्ही तुमच्या प्रत्येक खास प्रसंगाला गोड करतो। 20+ years of experience in handling large orders with perfection.
          </p>
        </AnimatedSection>

        {/* Occasions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {occasions.map((occasion, index) => (
            <AnimatedSection key={index} variant="scaleIn">
              <motion.div
                className="glass-card p-4 md:p-6 text-center hover-lift relative overflow-hidden"
                whileHover={{ y: -8 }}
              >
                {occasion.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-saffron to-gold text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                <motion.div
                  className="w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <occasion.icon className="text-white text-xl md:text-3xl" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-2">{occasion.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm mb-3">{occasion.description}</p>
                <div className="bg-saffron/10 px-3 py-1.5 rounded-full inline-block">
                  <span className="text-saffron font-semibold text-xs md:text-sm">
                    Min: {occasion.minOrder}
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <AnimatedSection variant="slideLeft">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                🎁 Bulk Order Benefits
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-green-500 text-lg md:text-xl flex-shrink-0">✓</span>
                    <p className="text-gray-700 text-sm md:text-base">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-saffron/10 to-gold/10 rounded-xl border-2 border-saffron/20">
                <p className="text-gray-800 font-semibold mb-2 text-sm md:text-base">
                  💡 Pro Tip for Wedding Orders:
                </p>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  Book at least 15 days in advance for weddings. We'll help you plan the perfect sweet menu based on guest count and budget. Free tasting available for orders above 100kg!
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="slideRight">
            <div className="glass-card p-6 md:p-8 text-center">
              <div className="mb-6">
                <span className="text-6xl md:text-7xl">📞</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Order?
              </h3>
              <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
                आमच्याशी बोला आणि तुमच्या गरजेनुसार योग्य package निवडा। Our team will guide you through the entire process.
              </p>

              <div className="space-y-4">
                <motion.a
                  href={getWhatsAppLink(BUSINESS_INFO.whatsapp, whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg transition-all w-full text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp className="text-xl md:text-2xl" />
                  <span>WhatsApp for Bulk Orders</span>
                </motion.a>

                <motion.a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center space-x-3 bg-gradient-to-r from-saffron to-gold text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg transition-all w-full text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPhone className="text-lg md:text-xl" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </motion.a>
              </div>

              <p className="text-gray-600 text-xs md:text-sm mt-4 md:mt-6">
                ⏰ Available: 8 AM - 10 PM Daily
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Trust Section */}
        <AnimatedSection variant="fadeIn">
          <div className="bg-gradient-to-r from-saffron to-gold p-6 md:p-8 rounded-2xl md:rounded-3xl text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              500+ Weddings Successfully Catered
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              From intimate family functions to grand weddings with 1000+ guests, we've been part of countless celebrations across Solapur. Your special day deserves the best - and that's our promise.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BulkOrders;
