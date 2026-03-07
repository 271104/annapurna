# 🚀 Simple Vercel Deployment Guide - Devasi's Annapurna

## Deploy Everything on Vercel (Easiest & Fastest!)

Since this is a marketing website, we'll deploy both frontend and backend on Vercel for simplicity.

**Time Required**: 30 minutes
**Cost**: Free

---

## 📋 What You Need:

1. **MongoDB Atlas Account** (Free) - Database
2. **Vercel Account** (Free) - Hosting
3. **GitHub Account** (Free) - Code repository

---

## Step 1: Setup MongoDB Atlas (10 minutes)

### 1.1 Create Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free
3. Create a new project: "Annapurna"

### 1.2 Create Database
1. Click "Build a Database"
2. Choose **FREE** tier (M0)
3. Select region closest to India (Mumbai/Singapore)
4. Cluster name: "Annapurna"
5. Click "Create"

### 1.3 Configure Access
1. **Database Access**:
   - Click "Database Access" in left menu
   - Add new user: `annapurna_admin`
   - Password: Generate secure password (save it!)
   - Role: "Atlas admin"

2. **Network Access**:
   - Click "Network Access"
   - Add IP Address: `0.0.0.0/0` (Allow from anywhere)
   - Confirm

### 1.4 Get Connection String
1. Click "Database" → "Connect"
2. Choose "Connect your application"
3. Copy connection string:
   ```
   mongodb+srv://annapurna_admin:<password>@annapurna.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
4. Replace `<password>` with your actual password
5. Add database name: `mongodb+srv://annapurna_admin:password@annapurna.xxxxx.mongodb.net/annapurna?retryWrites=true&w=majority`

---

## Step 2: Prepare Backend for Vercel (5 minutes)

### 2.1 Create `vercel.json` in backend folder

Create `backend/vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server.js"
    },
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### 2.2 Update Backend Package.json

Ensure `backend/package.json` has:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "engines": {
    "node": "18.x"
  }
}
```

---

## Step 3: Push to GitHub (5 minutes)

### 3.1 Initialize Git (if not done)
```bash
git init
git add .
git commit -m "Ready for Vercel deployment"
```

### 3.2 Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name: `annapurna-website`
4. Public or Private (your choice)
5. Don't initialize with README
6. Create repository

### 3.3 Push Code
```bash
git remote add origin https://github.com/yourusername/annapurna-website.git
git branch -M main
git push -u origin main
```

---

## Step 4: Deploy Backend on Vercel (5 minutes)

### 4.1 Import Backend Project
1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New" → "Project"
4. Import your repository
5. Click "Import"

### 4.2 Configure Backend
- **Project Name**: `annapurna-backend`
- **Framework Preset**: Other
- **Root Directory**: `backend`
- **Build Command**: Leave empty
- **Output Directory**: Leave empty
- **Install Command**: `npm install`

### 4.3 Add Environment Variables
Click "Environment Variables" and add:

```
NODE_ENV=production
MONGODB_URI=mongodb+srv://annapurna_admin:password@annapurna.xxxxx.mongodb.net/annapurna?retryWrites=true&w=majority
JWT_SECRET=your_random_secret_key_here_make_it_long_and_secure_123456789
PORT=5000
```

**Generate JWT Secret**:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 4.4 Deploy
1. Click "Deploy"
2. Wait 2-3 minutes
3. Copy your backend URL: `https://annapurna-backend.vercel.app`
4. Test: Visit `https://annapurna-backend.vercel.app/api/products`

---

## Step 5: Deploy Frontend on Vercel (5 minutes)

### 5.1 Update Frontend Environment
Update `frontend/.env.production`:
```env
VITE_API_URL=https://annapurna-backend.vercel.app/api
VITE_BUSINESS_NAME=Devasi's Annapurna
VITE_BUSINESS_PHONE=094210 08444
VITE_BUSINESS_EMAIL=info@devasiannapurna.com
VITE_BUSINESS_ADDRESS=ITI Chowk, Shop no. 6, Vijapur Rd, Medical Society, Ashok Nagar, Solapur, Maharashtra 413004
VITE_WHATSAPP_NUMBER=919421008444
VITE_GOOGLE_MAPS_EMBED=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.2535991095683!2d75.90219437522549!3d17.638143995532808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da06bd91d5c1%3A0x24fa4613f5b2d9d!2sDevasi.s%20Annapurna%20misthan%20bhandar!5e0!3m2!1sen!2sin!4v1772861870338!5m2!1sen!2sin
```

### 5.2 Import Frontend Project
1. In Vercel, click "Add New" → "Project"
2. Select same repository
3. Click "Import"

### 5.3 Configure Frontend
- **Project Name**: `annapurna-frontend` (or `devasi-annapurna`)
- **Framework Preset**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 5.4 Add Environment Variables
Copy all variables from `frontend/.env.production` and add them in Vercel.

### 5.5 Deploy
1. Click "Deploy"
2. Wait 2-3 minutes
3. Copy your frontend URL: `https://devasi-annapurna.vercel.app`

---

## Step 6: Update Backend CORS (2 minutes)

### 6.1 Add CORS Environment Variable
1. Go to Vercel Dashboard
2. Select backend project
3. Settings → Environment Variables
4. Add new variable:
   ```
   CORS_ORIGIN=https://devasi-annapurna.vercel.app
   ```
5. Redeploy backend (Deployments → Click "..." → Redeploy)

---

## Step 7: Create Admin Account (3 minutes)

### 7.1 Using PowerShell
```powershell
$body = @{
    username = "admin"
    email = "admin@devasiannapurna.com"
    password = "Admin@123456"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://annapurna-backend.vercel.app/api/auth/register" -Method Post -Body $body -ContentType "application/json"
```

### 7.2 Using Browser (Thunder Client/Postman)
**POST** `https://annapurna-backend.vercel.app/api/auth/register`

**Body (JSON)**:
```json
{
  "username": "admin",
  "email": "admin@devasiannapurna.com",
  "password": "Admin@123456"
}
```

### 7.3 Save Credentials
```
Admin Login URL: https://devasi-annapurna.vercel.app/admin/login
Username: admin
Password: Admin@123456
```

---

## ✅ Deployment Complete!

### Your Live URLs:
- **Website**: https://devasi-annapurna.vercel.app
- **Admin Panel**: https://devasi-annapurna.vercel.app/admin/login
- **Backend API**: https://annapurna-backend.vercel.app/api

---

## 🧪 Testing Checklist

### Frontend Tests
- [ ] Visit homepage - should load with all images
- [ ] Click products - should show details
- [ ] View gallery - images should display
- [ ] Submit contact form - should work
- [ ] Click WhatsApp button - should open WhatsApp
- [ ] Test on mobile - should be responsive

### Backend Tests
- [ ] Visit `https://annapurna-backend.vercel.app/api/products`
- [ ] Should return empty array `[]` or sample products

### Admin Panel Tests
- [ ] Visit admin login page
- [ ] Login with admin credentials
- [ ] Dashboard should load
- [ ] Try adding a product
- [ ] Try editing a product
- [ ] View inquiries section

---

## 🔄 How to Update

### Update Frontend
```bash
cd frontend
# Make your changes
git add .
git commit -m "Update frontend"
git push origin main
# Vercel auto-deploys in 2 minutes
```

### Update Backend
```bash
cd backend
# Make your changes
git add .
git commit -m "Update backend"
git push origin main
# Vercel auto-deploys in 2 minutes
```

---

## 🎯 Custom Domain (Optional)

### Add Your Own Domain

1. **Buy Domain** (₹500-1000/year):
   - Namecheap, GoDaddy, or Google Domains
   - Recommended: `devasiannapurna.com`

2. **Add to Vercel**:
   - Go to frontend project → Settings → Domains
   - Add your domain
   - Follow DNS instructions

3. **Update Backend CORS**:
   - Add your custom domain to `CORS_ORIGIN`
   - Redeploy backend

---

## 💰 Costs

### Free Tier (Perfect for Marketing Site):
- **MongoDB Atlas**: Free (512MB)
- **Vercel**: Free (100GB bandwidth/month)
- **Total**: ₹0/month

### Limits:
- Bandwidth: 100GB/month (enough for 10,000+ visitors)
- Serverless Functions: 100GB-hours
- Build Time: 6000 minutes/month

**This is more than enough for a marketing website!**

---

## 📊 Performance

### Expected Results:
- **Load Time**: < 2 seconds
- **Mobile Score**: 90+
- **Desktop Score**: 95+
- **Uptime**: 99.9%

### Vercel Benefits:
- ✅ Global CDN (fast worldwide)
- ✅ Automatic HTTPS
- ✅ Auto-scaling
- ✅ Zero configuration
- ✅ Instant deployments
- ✅ Preview deployments for each commit

---

## 🐛 Troubleshooting

### Issue: Backend API not responding
**Solution**: Vercel serverless functions have cold start (2-3 seconds on first request)

### Issue: Images not loading
**Solution**: Ensure all images are in `frontend/public/images/` and committed to Git

### Issue: CORS error
**Solution**: Check `CORS_ORIGIN` in backend matches frontend URL exactly

### Issue: Database connection error
**Solution**: Verify MongoDB connection string and IP whitelist (0.0.0.0/0)

---

## 📱 Share Your Website

### QR Code
1. Go to [QR Code Generator](https://www.qr-code-generator.com/)
2. Enter your website URL
3. Download QR code
4. Print on business cards, menu, shop

### Social Media
- Facebook Business Page
- Instagram Bio
- WhatsApp Status
- Google Business Profile

---

## 🎉 Success!

Your website is now live and accessible worldwide!

**Next Steps:**
1. Test all features
2. Share with business owner
3. Add to Google Business
4. Share on social media
5. Monitor analytics

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **MongoDB Docs**: https://docs.mongodb.com
- **Vercel Community**: https://github.com/vercel/vercel/discussions

---

**Congratulations! Your website is live! 🎊**
