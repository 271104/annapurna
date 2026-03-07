# Annapurna Sweet Shop - MERN Website

A production-ready website for a traditional Indian sweet shop.

## 🚀 Quick Start

### 1. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### 2. Add Your Images

**Copy your images to:** `frontend/public/images/`

**Required images:**
- `logo.jpg` (or `logo.png`) - Your business logo
- `shop-front.jpg` - Your shop photo

**Optional images:**
- `gallery-1.jpg`, `gallery-2.jpg`, etc. - Gallery photos

**How to add images:**
1. Open File Explorer
2. Navigate to: `frontend/public/images/`
3. Copy your images into this folder
4. Rename them to match the names above

### 3. Start Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 4. Create Admin Account

**Open browser and visit:**
```
http://localhost:5000/api/auth/setup
```

### 5. Access Website

**Public Website:**
```
http://localhost:5173
```

**Admin Panel:**
```
http://localhost:5173/admin/login

Email: admin@annapurnasweets.com
Password: Admin@123
```

---

## 📁 Project Structure

```
annapurna-sweet-shop/
├── backend/              # Express API
│   ├── models/          # Database schemas
│   ├── controllers/     # Business logic
│   ├── routes/          # API endpoints
│   └── .env            # Configuration
│
├── frontend/            # React app
│   ├── public/
│   │   └── images/     # ← PUT YOUR IMAGES HERE
│   │       ├── logo.jpg
│   │       ├── shop-front.jpg
│   │       └── gallery-1.jpg
│   └── src/
│       ├── components/  # React components
│       └── pages/       # Page components
│
└── README.md           # This file
```

---

## 🖼️ Adding Your Images

### Step-by-Step:

1. **Find the images folder:**
   - Path: `frontend/public/images/`
   - Open in File Explorer

2. **Copy your images:**
   - Drag and drop your images into this folder
   - Or right-click → Copy → Paste

3. **Rename your images:**
   - Logo → `logo.jpg` (or `logo.png`)
   - Shop photo → `shop-front.jpg`
   - Gallery photos → `gallery-1.jpg`, `gallery-2.jpg`, etc.

4. **Refresh browser:**
   - Press `Ctrl+R` or `F5`
   - Your images will appear!

### Image Requirements:

**Formats:** .jpg, .png, .webp, .gif

**Recommended sizes:**
- Logo: 200x200px
- Shop Front: 1920x1080px
- Gallery: 800x800px

**File names:** Use lowercase and hyphens
- ✅ `logo.jpg`, `shop-front.jpg`
- ❌ `Logo.JPG`, `Shop Front.jpg`

---

## ⚙️ Configuration

### Backend (.env)

Update `backend/.env` with your settings:

```env
# MongoDB (optional for testing)
MONGO_URI=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_secret_key

# Admin Credentials
ADMIN_EMAIL=admin@annapurnasweets.com
ADMIN_PASSWORD=Admin@123
```

### Frontend (.env)

Update `frontend/.env` with your business info:

```env
VITE_BUSINESS_NAME=Annapurna Sweet Shop
VITE_BUSINESS_PHONE=+91 98765 43210
VITE_BUSINESS_EMAIL=info@annapurnasweets.com
VITE_BUSINESS_ADDRESS=Your Address Here
VITE_WHATSAPP_NUMBER=919876543210
```

---

## 🎨 Customization

### Change Colors

Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  primary: {
    DEFAULT: '#FF9933', // Change this
  },
}
```

### Change Business Info

Edit `frontend/src/utils/constants.js`:

```javascript
export const BUSINESS_INFO = {
  name: 'Your Business Name',
  phone: '+91 XXXXXXXXXX',
  // ... other settings
};
```

---

## 🚀 Deployment

### Backend (Render)
1. Create account on render.com
2. Connect GitHub repository
3. Deploy backend
4. Add environment variables

### Frontend (Vercel)
1. Create account on vercel.com
2. Import GitHub repository
3. Deploy frontend
4. Add environment variables

### Database (MongoDB Atlas)
1. Create account on mongodb.com
2. Create cluster (free tier)
3. Get connection string
4. Update backend .env

---

## 📦 Features

### Public Website
- Animated hero section
- Product menu with filtering
- Image gallery
- Customer testimonials
- Contact form
- WhatsApp button

### Admin Panel
- Secure login
- Product management (CRUD)
- Testimonial management
- Customer inquiry tracking
- Dashboard with statistics

---

## 🆘 Troubleshooting

### Images Not Showing?

**Check:**
1. Images are in `frontend/public/images/` folder
2. File names are correct (logo.jpg, shop-front.jpg)
3. File names are lowercase
4. Browser cache cleared (Ctrl+Shift+R)

### Backend Won't Start?

**Check:**
1. Port 5000 is free
2. Dependencies installed (`npm install`)
3. MongoDB connection (optional for testing)

### Frontend Won't Start?

**Check:**
1. Port 5173 is free
2. Dependencies installed (`npm install`)
3. Backend is running

---

## 📝 Tech Stack

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcrypt Password Hashing

**Frontend:**
- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- GSAP (advanced animations)
- React Router

---

## 📄 License

This project is proprietary software. All rights reserved.

---

## 🎉 You're Ready!

1. Add your images to `frontend/public/images/`
2. Start both servers
3. Visit http://localhost:5173
4. Enjoy your website! 🚀
