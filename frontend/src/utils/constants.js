export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const BUSINESS_INFO = {
  name: import.meta.env.VITE_BUSINESS_NAME || "Devasi's Annapurna",
  phone: import.meta.env.VITE_BUSINESS_PHONE || '094210 08444',
  email: import.meta.env.VITE_BUSINESS_EMAIL || 'info@devasiannapurna.com',
  address: import.meta.env.VITE_BUSINESS_ADDRESS || "ITI Chowk, Shop no. 6, Vijapur Rd, Medical Society, Ashok Nagar, Solapur, Maharashtra 413004",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || '919421008444',
  mapsEmbed: import.meta.env.VITE_GOOGLE_MAPS_EMBED || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.2535991095683!2d75.90219437522549!3d17.638143995532808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da06bd91d5c1%3A0x24fa4613f5b2d9d!2sDevasi.s%20Annapurna%20misthan%20bhandar!5e0!3m2!1sen!2sin!4v1772861870338!5m2!1sen!2sin',
  hours: 'Open Daily • 8 AM - 10:30 PM',
  tagline: 'सोलापूरची आवडती मिठाई दुकान - 20+ Years of Pure Sweetness',
  description: 'Best sweet shop in Solapur since 2004. Traditional Indian sweets, mithai, and namkeen made fresh daily with pure ingredients. Trusted by 50,000+ families for weddings, festivals & celebrations.',
  city: 'Solapur',
  state: 'Maharashtra',
  established: '2004',
};

export const CATEGORIES = [
  'All',
  'Traditional Sweets',
  'Dry Fruits Sweets',
  'Milk Based Sweets',
  'Festival Specials',
  'Sugar Free',
  'Namkeen',
  'Gift Boxes',
];

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/annapurnasweets',
  instagram: 'https://instagram.com/annapurnasweets',
  twitter: 'https://twitter.com/annapurnasweets',
};

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

export const SAMPLE_PRODUCTS = [
  {
    name: 'Kaju Katli',
    description: 'Premium cashew fudge with silver leaf, a royal delicacy',
    category: 'Dry Fruits Sweets',
    price: 850,
    unit: 'per kg',
    image: '/images/Kaju katli.png',
    rating: 4.8,
    isFeatured: true,
  },
  {
    name: 'Rasgulle',
    description: 'Spongy cottage cheese balls in light sugar syrup',
    category: 'Milk Based Sweets',
    price: 400,
    unit: 'per kg',
    image: '/images/Rasgulle.png',
    rating: 4.9,
    isFeatured: true,
  },
  {
    name: 'Ras Malai',
    description: 'Soft paneer patties soaked in sweetened, thickened milk',
    category: 'Milk Based Sweets',
    price: 500,
    unit: 'per kg',
    image: '/images/Ras Malai.png',
    rating: 4.7,
    isFeatured: true,
  },
  {
    name: 'Ghewar',
    description: 'Traditional Rajasthani sweet with honeycomb texture',
    category: 'Festival Specials',
    price: 600,
    unit: 'per kg',
    image: '/images/ghewar.png',
    rating: 4.6,
  },
  {
    name: 'Modak',
    description: 'Sweet dumplings filled with coconut and jaggery',
    category: 'Festival Specials',
    price: 450,
    unit: 'per kg',
    image: '/images/Modak.png',
    rating: 4.5,
  },
  {
    name: 'Sweet Ladu',
    description: 'Traditional round sweets made with gram flour and ghee',
    category: 'Traditional Sweets',
    price: 400,
    unit: 'per kg',
    image: '/images/sweet ladu.png',
    rating: 4.7,
  },
  {
    name: 'Shabu Vada',
    description: 'Crispy fried sweet balls soaked in sugar syrup',
    category: 'Traditional Sweets',
    price: 350,
    unit: 'per kg',
    image: '/images/Shabu Vada.png',
    rating: 4.4,
  },
];

export const SAMPLE_TESTIMONIALS = [
  {
    customerName: 'Priya Sharma',
    rating: 5,
    review: 'The best sweets in town! Fresh, authentic, and absolutely delicious. The Kaju Katli is my favorite!',
    location: 'Bangalore',
  },
  {
    customerName: 'Rajesh Kumar',
    rating: 5,
    review: 'Ordered for Diwali and everyone loved it. Quality is top-notch and packaging is beautiful.',
    location: 'Mumbai',
  },
  {
    customerName: 'Anita Desai',
    rating: 5,
    review: 'Reminds me of my childhood! Traditional taste with premium quality. Highly recommended!',
    location: 'Delhi',
  },
];
