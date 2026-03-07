import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: [true, 'Please provide customer name'],
      trim: true,
      maxlength: [50, 'Name cannot exceed 50 characters'],
    },
    customerImage: {
      type: String,
      default: 'https://ui-avatars.com/api/?name=Customer&background=FF6B35&color=fff',
    },
    rating: {
      type: Number,
      required: [true, 'Please provide rating'],
      min: 1,
      max: 5,
      default: 5,
    },
    review: {
      type: String,
      required: [true, 'Please provide review text'],
      maxlength: [300, 'Review cannot exceed 300 characters'],
    },
    location: {
      type: String,
      default: 'India',
    },
    isApproved: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    productPurchased: {
      type: String,
      default: 'Mixed Sweets',
    },
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
