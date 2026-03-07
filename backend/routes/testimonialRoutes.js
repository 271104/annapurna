import express from 'express';
import {
  getTestimonials,
  getTestimonial,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from '../controllers/testimonialController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validateTestimonial, handleValidationErrors } from '../utils/validators.js';

const router = express.Router();

// Public routes
router.get('/', getTestimonials);
router.get('/:id', getTestimonial);

// Protected routes (Admin only)
router.post(
  '/',
  protect,
  validateTestimonial,
  handleValidationErrors,
  createTestimonial
);

router.put('/:id', protect, updateTestimonial);
router.delete('/:id', protect, deleteTestimonial);

export default router;
