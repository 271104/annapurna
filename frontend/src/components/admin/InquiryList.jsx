import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaTrash } from 'react-icons/fa';
import { inquiryAPI } from '../../services/api';
import { formatDate } from '../../utils/helpers';
import toast from 'react-hot-toast';

const InquiryList = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await inquiryAPI.getAll();
      setInquiries(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch inquiries');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure?')) return;

    try {
      await inquiryAPI.delete(id);
      toast.success('Inquiry deleted');
      fetchInquiries();
    } catch (error) {
      toast.error('Failed to delete');
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      new: 'bg-blue-100 text-blue-800',
      read: 'bg-yellow-100 text-yellow-800',
      replied: 'bg-green-100 text-green-800',
      closed: 'bg-gray-100 text-gray-800',
    };
    return colors[status] || colors.new;
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Customer Inquiries</h1>

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <motion.div
              key={inquiry._id}
              className="bg-white rounded-2xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">{inquiry.name}</h3>
                  <p className="text-sm text-gray-600">{formatDate(inquiry.createdAt)}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(inquiry.status)}`}>
                  {inquiry.status}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaEnvelope />
                  <span>{inquiry.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <FaPhone />
                  <span>{inquiry.phone}</span>
                </div>
              </div>

              <div className="mb-4">
                <p className="font-semibold mb-1">Subject: {inquiry.subject}</p>
                <p className="text-gray-600">{inquiry.message}</p>
              </div>

              <button
                onClick={() => handleDelete(inquiry._id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2"
              >
                <FaTrash />
                <span>Delete</span>
              </button>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InquiryList;
