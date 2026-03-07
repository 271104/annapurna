import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide product name'],
      trim: true,
      maxlength: [100, 'Product name cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    category: {
      type: String,
      required: [true, 'Please provide product category'],
      enum: [
        'Traditional Sweets',
        'Dry Fruits Sweets',
        'Milk Based Sweets',
        'Festival Specials',
        'Sugar Free',
        'Namkeen',
        'Gift Boxes',
      ],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      min: [0, 'Price cannot be negative'],
    },
    unit: {
      type: String,
      default: 'per kg',
      enum: ['per kg', 'per piece', 'per box', 'per 250g', 'per 500g'],
    },
    image: {
      url: {
        type: String,
        required: [true, 'Please provide product image'],
      },
      publicId: {
        type: String,
      },
    },
    ingredients: {
      type: [String],
      default: [],
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    shelfLife: {
      type: String,
      default: '7 days',
    },
    weight: {
      type: String,
      default: '1 kg',
    },
    rating: {
      type: Number,
      default: 4.5,
      min: 0,
      max: 5,
    },
    orderCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Index for search optimization
productSchema.index({ name: 'text', description: 'text' });
productSchema.index({ category: 1, isFeatured: -1 });

const Product = mongoose.model('Product', productSchema);

export default Product;
