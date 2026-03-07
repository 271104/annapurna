import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaBox, FaStar, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { BUSINESS_INFO } from '../../utils/constants';

const Sidebar = () => {
  const { logout, admin } = useAuth();

  const menuItems = [
    { path: '/admin', icon: FaHome, label: 'Dashboard' },
    { path: '/admin/products', icon: FaBox, label: 'Products' },
    { path: '/admin/testimonials', icon: FaStar, label: 'Testimonials' },
    { path: '/admin/inquiries', icon: FaEnvelope, label: 'Inquiries' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 shadow-2xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold gradient-text">{BUSINESS_INFO.name}</h2>
        <p className="text-sm text-gray-400 mt-1">Admin Panel</p>
      </div>

      <div className="mb-8 p-4 bg-white/5 rounded-lg">
        <p className="text-sm text-gray-400">Logged in as</p>
        <p className="font-semibold">{admin?.name}</p>
        <p className="text-xs text-gray-400">{admin?.email}</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/admin'}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-saffron text-white'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <item.icon />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <motion.button
        onClick={logout}
        className="absolute bottom-6 left-6 right-6 flex items-center justify-center space-x-2 px-4 py-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </motion.button>
    </div>
  );
};

export default Sidebar;
