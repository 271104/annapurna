import express from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getCategories,
} from '../controllers/productController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload, handleMulterError } from '../middleware/uploadMiddleware.js';
import { validateProduct, handleValidationErrors } from '../utils/validators.js';

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/categories/list', getCategories);
router.get('/:id', getProduct);

// Protected routes (Admin only)
router.post(
  '/',
  protect,
  upload.single('image'),
  handleMulterError,
  validateProduct,
  handleValidationErrors,
  createProduct
);

router.put(
  '/:id',
  protect,
  upload.single('image'),
  handleMulterError,
  updateProduct
);

router.delete('/:id', protect, deleteProduct);

export default router;
