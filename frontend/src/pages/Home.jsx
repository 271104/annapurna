import { Suspense, lazy } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppButton from '../components/layout/WhatsAppButton';
import Hero from '../components/home/Hero';
import Loader from '../components/common/Loader';

// Lazy load components for better performance
const About = lazy(() => import('../components/home/About'));
const ProductMenu = lazy(() => import('../components/home/ProductMenu'));
const Gallery = lazy(() => import('../components/home/Gallery'));
const Testimonials = lazy(() => import('../components/home/Testimonials'));
const Contact = lazy(() => import('../components/home/Contact'));

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<Loader />}>
        <About />
        <ProductMenu />
        <Gallery />
        <Testimonials />
        <Contact />
      </Suspense>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
