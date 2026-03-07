import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import AnimatedSection from '../common/AnimatedSection';
import { inquiryAPI } from '../../services/api';
import { BUSINESS_INFO } from '../../utils/constants';
import { validateEmail, validatePhone } from '../../utils/helpers';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error('Please enter a valid email');
      return;
    }

    if (!validatePhone(formData.phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }

    setLoading(true);
    try {
      await inquiryAPI.create(formData);
      toast.success('Thank you! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white w-full">
      <div className="container-custom w-full">
        <AnimatedSection variant="fadeIn" className="text-center mb-12">
          <motion.span className="inline-block text-saffron font-semibold mb-2">
            Contact Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection variant="slideLeft">
            <div className="space-y-6">
              {[
                { icon: FaMapMarkerAlt, title: 'Address', value: BUSINESS_INFO.address },
                { icon: FaPhone, title: 'Phone', value: BUSINESS_INFO.phone },
                { icon: FaEnvelope, title: 'Email', value: BUSINESS_INFO.email },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 glass-card p-6"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <iframe
                  src={BUSINESS_INFO.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Location Map"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection variant="slideRight">
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none transition-all mb-4"
              />
              <motion.button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
