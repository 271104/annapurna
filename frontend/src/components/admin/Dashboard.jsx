import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaStar, FaEnvelope, FaEye } from 'react-icons/fa';
import { productAPI, testimonialAPI, inquiryAPI } from '../../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    testimonials: 0,
    inquiries: 0,
    newInquiries: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [products, testimonials, inquiries] = await Promise.all([
        productAPI.getAll(),
        testimonialAPI.getAll(),
        inquiryAPI.getAll(),
      ]);

      setStats({
        products: products.data.count,
        testimonials: testimonials.data.count,
        inquiries: inquiries.data.count,
        newInquiries: inquiries.data.data.filter((i) => i.status === 'new').length,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const statCards = [
    { icon: FaBox, label: 'Total Products', value: stats.products, color: 'from-blue-500 to-blue-600' },
    { icon: FaStar, label: 'Testimonials', value: stats.testimonials, color: 'from-yellow-500 to-yellow-600' },
    { icon: FaEnvelope, label: 'Total Inquiries', value: stats.inquiries, color: 'from-green-500 to-green-600' },
    { icon: FaEye, label: 'New Inquiries', value: stats.newInquiries, color: 'from-red-500 to-red-600' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-br ${card.color} text-white p-6 rounded-2xl shadow-lg`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <card.icon className="text-4xl mb-4 opacity-80" />
            <h3 className="text-3xl font-bold mb-2">{card.value}</h3>
            <p className="text-sm opacity-90">{card.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to Admin Panel</h2>
        <p className="text-gray-600">
          Manage your products, testimonials, and customer inquiries from this dashboard.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
