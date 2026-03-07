import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaTrash, FaStar } from 'react-icons/fa';
import { testimonialAPI } from '../../services/api';
import toast from 'react-hot-toast';

const TestimonialManager = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await testimonialAPI.getAll();
      setTestimonials(response.data.data);
    } catch (error) {
      toast.error('Failed to fetch testimonials');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure?')) return;

    try {
      await testimonialAPI.delete(id);
      toast.success('Testimonial deleted');
      fetchTestimonials();
    } catch (error) {
      toast.error('Failed to delete');
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <motion.button
          className="btn-primary flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <FaPlus />
          <span>Add Testimonial</span>
        </motion.button>
      </div>

      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial._id}
              className="bg-white rounded-2xl shadow-lg p-6"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center text-white font-bold mr-3">
                  {testimonial.customerName.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.customerName}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < testimonial.rating ? 'text-gold' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.review}</p>
              <button
                onClick={() => handleDelete(testimonial._id)}
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

export default TestimonialManager;
