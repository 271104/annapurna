import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';
import { GALLERY_IMAGES } from '../../utils/images';

const Gallery = () => {
  const images = GALLERY_IMAGES;

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom px-4 sm:px-6">
        <AnimatedSection variant="fadeIn" className="text-center mb-8 md:mb-12">
          <motion.span className="inline-block text-saffron font-semibold mb-2 text-sm md:text-base">
            Gallery
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Sweet <span className="gradient-text">Moments</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A glimpse of our delicious creations and happy customers
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((image, index) => (
            <AnimatedSection key={index} variant="scaleIn">
              <motion.div
                className="gallery-item relative overflow-hidden rounded-xl md:rounded-2xl aspect-square group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
