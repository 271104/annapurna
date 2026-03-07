import Admin from '../models/Admin.js';
import generateToken, { setTokenCookie } from '../utils/generateToken.js';

// @desc    Login admin
// @route   POST /api/auth/login
// @access  Public
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password',
      });
    }

    // Check for admin
    const admin = await Admin.findOne({ email }).select('+password');

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Check if admin is active
    if (!admin.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated. Contact administrator.',
      });
    }

    // Check password
    const isPasswordMatch = await admin.matchPassword(password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials',
      });
    }

    // Update last login
    admin.lastLogin = Date.now();
    await admin.save();

    // Generate token
    const token = generateToken(admin._id);

    // Set cookie (optional)
    setTokenCookie(res, token);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        admin: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        },
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get current admin profile
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id);

    res.status(200).json({
      success: true,
      data: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        lastLogin: admin.lastLogin,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Logout admin
// @route   POST /api/auth/logout
// @access  Private
export const logoutAdmin = async (req, res) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: 'Logged out successfully',
  });
};

// @desc    Create first admin (run once)
// @route   POST /api/auth/setup
// @access  Public (should be protected in production)
export const setupAdmin = async (req, res) => {
  try {
    // Check if admin already exists
    const adminExists = await Admin.findOne({});

    if (adminExists) {
      return res.status(400).json({
        success: false,
        message: 'Admin already exists',
      });
    }

    // Create admin
    const admin = await Admin.create({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL || 'admin@annapurnasweets.com',
      password: process.env.ADMIN_PASSWORD || 'Admin@123',
      role: 'superadmin',
    });

    res.status(201).json({
      success: true,
      message: 'Admin created successfully',
      data: {
        email: admin.email,
        message: 'Please change the password after first login',
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
