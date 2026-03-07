import express from 'express';
import {
  getInquiries,
  getInquiry,
  createInquiry,
  updateInquiry,
  deleteInquiry,
  getInquiryStats,
} from '../controllers/inquiryController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validateInquiry, handleValidationErrors } from '../utils/validators.js';

const router = express.Router();

// Public route
router.post('/', validateInquiry, handleValidationErrors, createInquiry);

// Protected routes (Admin only)
router.get('/', protect, getInquiries);
router.get('/stats/summary', protect, getInquiryStats);
router.get('/:id', protect, getInquiry);
router.put('/:id', protect, updateInquiry);
router.delete('/:id', protect, deleteInquiry);

export default router;
