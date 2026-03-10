import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Admin from '../models/Admin.js';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env vars from backend directory
dotenv.config({ path: join(__dirname, '../.env') });

const resetAdmin = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    
    if (!mongoUri) {
      throw new Error('MONGO_URI not found in .env file');
    }

    // Connect to MongoDB
    await mongoose.connect(mongoUri);
    console.log('✅ MongoDB Connected');

    // Delete existing admin
    const deleted = await Admin.deleteMany({});
    console.log(`🗑️  Deleted ${deleted.deletedCount} existing admin(s)`);

    // Create new admin
    const admin = await Admin.create({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL || 'admin@annapurnasweets.com',
      password: process.env.ADMIN_PASSWORD || 'Admin@123',
      role: 'superadmin',
      isActive: true,
    });

    console.log('\n✅ Admin created successfully!');
    console.log('📧 Email:', admin.email);
    console.log('🔑 Password:', process.env.ADMIN_PASSWORD || 'Admin@123');
    console.log('\n🎉 You can now login to the admin panel!');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

resetAdmin();
