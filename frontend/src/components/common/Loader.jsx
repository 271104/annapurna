import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="flex flex-col items-center">
        <motion.div
          className="relative w-24 h-24"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-saffron border-t-transparent"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        <motion.div
          className="mt-6 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-saffron rounded-full"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.15,
              }}
            />
          ))}
        </motion.div>

        <motion.p
          className="mt-4 text-saffron font-semibold text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Loading Sweetness...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
