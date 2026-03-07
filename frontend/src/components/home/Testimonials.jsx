import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import AnimatedSection from '../common/AnimatedSection';
import { testimonialAPI } from '../../services/api';
import { SAMPLE_TESTIMONIALS } from '../../utils/constants';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await testimonialAPI.getAll({ approved: true });
      if (response.data.data.length > 0) {
        setTestimonials(response.data.data.slice(0, 6));
      } else {
        setTestimonials(SAMPLE_TESTIMONIALS);
      }
    } catch (error) {
      setTestimonials(SAMPLE_TESTIMONIALS);
    }
  };

  return (
    <section id="testimonials" className="section-padding pattern-bg">
      <div className="container-custom">
        <AnimatedSection variant="fadeIn" className="text-center mb-12">
          <motion.span className="inline-block text-saffron font-semibold mb-2">
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} variant="slideUp">
              <motion.div
                className="glass-card p-6 hover-lift"
                whileHover={{ y: -8 }}
              >
                <FaQuoteLeft className="text-saffron text-3xl mb-4 opacity-50" />
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {testimonial.review}
                </p>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < testimonial.rating ? 'text-gold' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.customerName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.customerName}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
