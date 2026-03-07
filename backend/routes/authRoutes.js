import express from 'express';
import {
  loginAdmin,
  getMe,
  logoutAdmin,
  setupAdmin,
} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', loginAdmin);
router.get('/me', protect, getMe);
router.post('/logout', protect, logoutAdmin);
router.post('/setup', setupAdmin); // Run once to create first admin

export default router;
