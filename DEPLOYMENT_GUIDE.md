# 🚀 Deployment Guide - Devasi's Annapurna Website

## Overview
This guide will help you deploy your website to production using free hosting services.

**Recommended Stack:**
- **Frontend**: Vercel (Free, Fast, Easy)
- **Backend**: Render (Free tier available)
- **Database**: MongoDB Atlas (Free tier)

---

## 📋 Pre-Deployment Checklist

### 1. Update Environment Variables

#### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key_change_this
CORS_ORIGIN=https://your-frontend-domain.vercel.app
```

#### Frontend (.env)
```env
VITE_API_URL=https://your-backend-domain.onrender.com/api
VITE_BUSINESS_NAME=Devasi's Annapurna
VITE_BUSINESS_PHONE=094210 08444
VITE_BUSINESS_EMAIL=info@devasiannapurna.com
VITE_BUSINESS_ADDRESS=ITI Chowk, Shop no. 6, Vijapur Rd, Medical Society, Ashok Nagar, Solapur, Maharashtra 413004
VITE_WHATSAPP_NUMBER=919421008444
VITE_GOOGLE_MAPS_EMBED=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.2535991095683!2d75.90219437522549!3d17.638143995532808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da06bd91d5c1%3A0x24fa4613f5b2d9d!2sDevasi.s%20Annapurna%20misthan%20bhandar!5e0!3m2!1sen!2sin!4v1772861870338!5m2!1sen!2sin
```

---

## 🗄️ Step 1: Deploy Database (MongoDB Atlas)

### 1.1 Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free account
3. Create a new cluster (Free M0 tier)

### 1.2 Configure Database
1. Click "Connect" on your cluster
2. Add your IP address (or allow access from anywhere: `0.0.0.0/0`)
3. Create database user with username and password
4. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/annapurna`

### 1.3 Update Backend .env
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/annapurna?retryWrites=true&w=majority
```

---

## 🔧 Step 2: Deploy Backend (Render)

### 2.1 Prepare Backend for Deployment

1. **Create `render.yaml` in backend folder:**
```yaml
services:
  - type: web
    name: annapurna-backend
    env: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: MONGODB_URI
        sync: false
      - key: JWT_SECRET
        sync: false
      - key: CORS_ORIGIN
        sync: false
```

2. **Update `backend/package.json` scripts:**
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

### 2.2 Deploy to Render

1. Go to [Render](https://render.com)
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: annapurna-backend
   - **Root Directory**: backend
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

6. Add Environment Variables:
   - `NODE_ENV` = production
   - `MONGODB_URI` = (your MongoDB connection string)
   - `JWT_SECRET` = (generate a strong secret)
   - `CORS_ORIGIN` = (your frontend URL - add later)
   - `PORT` = 5000

7. Click "Create Web Service"
8. Wait for deployment (5-10 minutes)
9. Copy your backend URL: `https://annapurna-backend.onrender.com`

### 2.3 Test Backend
Visit: `https://your-backend-url.onrender.com/api/products`

---

## 🎨 Step 3: Deploy Frontend (Vercel)

### 3.1 Prepare Frontend for Deployment

1. **Update `frontend/.env.production`:**
```env
VITE_API_URL=https://your-backend-url.onrender.com/api
VITE_BUSINESS_NAME=Devasi's Annapurna
VITE_BUSINESS_PHONE=094210 08444
VITE_BUSINESS_EMAIL=info@devasiannapurna.com
VITE_BUSINESS_ADDRESS=ITI Chowk, Shop no. 6, Vijapur Rd, Medical Society, Ashok Nagar, Solapur, Maharashtra 413004
VITE_WHATSAPP_NUMBER=919421008444
VITE_GOOGLE_MAPS_EMBED=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.2535991095683!2d75.90219437522549!3d17.638143995532808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da06bd91d5c1%3A0x24fa4613f5b2d9d!2sDevasi.s%20Annapurna%20misthan%20bhandar!5e0!3m2!1sen!2sin!4v1772861870338!5m2!1sen!2sin
```

2. **Create `vercel.json` in frontend folder:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 3.2 Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Navigate to frontend folder:
```bash
cd frontend
```

3. Login to Vercel:
```bash
vercel login
```

4. Deploy:
```bash
vercel --prod
```

5. Follow prompts:
   - Set up and deploy? Yes
   - Which scope? Your account
   - Link to existing project? No
   - Project name? annapurna-frontend
   - Directory? ./
   - Override settings? No

#### Option B: Using Vercel Dashboard

1. Go to [Vercel](https://vercel.com)
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: frontend
   - **Build Command**: `npm run build`
   - **Output Directory**: dist
   - **Install Command**: `npm install`

6. Add Environment Variables (from .env.production)

7. Click "Deploy"
8. Wait for deployment (2-5 minutes)
9. Copy your frontend URL: `https://annapurna.vercel.app`

### 3.3 Update Backend CORS

Go back to Render and update `CORS_ORIGIN`:
```
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

---

## 🔐 Step 4: Create Admin Account

### 4.1 Using API (Postman/Thunder Client)

**POST** `https://your-backend-url.onrender.com/api/auth/register`

**Body (JSON):**
```json
{
  "username": "admin",
  "email": "admin@devasiannapurna.com",
  "password": "YourSecurePassword123!"
}
```

### 4.2 Save Admin Credentials
- Username: admin
- Password: (your chosen password)
- Login URL: `https://your-frontend-url.vercel.app/admin/login`

---

## ✅ Step 5: Post-Deployment Verification

### 5.1 Test Checklist

- [ ] Frontend loads correctly
- [ ] All images display properly
- [ ] Products load from backend
- [ ] Contact form works
- [ ] Google Maps shows correct location
- [ ] WhatsApp button works
- [ ] Admin login works
- [ ] Admin can add/edit/delete products
- [ ] Mobile responsive
- [ ] All animations work

### 5.2 Performance Check

1. **Google PageSpeed Insights**: https://pagespeed.web.dev/
2. **GTmetrix**: https://gtmetrix.com/
3. **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly

---

## 🌐 Step 6: Custom Domain (Optional)

### 6.1 Buy Domain
- Namecheap, GoDaddy, or Google Domains
- Recommended: `devasiannapurna.com`

### 6.2 Connect to Vercel

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add your custom domain
3. Update DNS records at your domain registrar:
   - Type: A, Name: @, Value: 76.76.21.21
   - Type: CNAME, Name: www, Value: cname.vercel-dns.com

4. Wait for DNS propagation (5-60 minutes)

### 6.3 Update Environment Variables

Update `CORS_ORIGIN` in Render to include your custom domain.

---

## 🔄 Step 7: Continuous Deployment

### Auto-Deploy on Git Push

Both Vercel and Render support automatic deployments:

1. **Push to GitHub**:
```bash
git add .
git commit -m "Update website"
git push origin main
```

2. **Automatic Deployment**:
   - Vercel: Deploys frontend automatically
   - Render: Deploys backend automatically

---

## 📊 Step 8: Monitoring & Analytics

### 8.1 Add Google Analytics (Optional)

1. Create Google Analytics account
2. Get tracking ID
3. Add to `frontend/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 8.2 Monitor Backend (Render)

- Check logs in Render dashboard
- Set up email alerts for downtime
- Monitor response times

---

## 🐛 Troubleshooting

### Frontend Issues

**Problem**: Images not loading
- **Solution**: Check image paths in `frontend/public/images/`
- Ensure all images are committed to Git

**Problem**: API calls failing
- **Solution**: Check `VITE_API_URL` in environment variables
- Verify CORS settings in backend

### Backend Issues

**Problem**: Database connection failed
- **Solution**: Check MongoDB Atlas IP whitelist
- Verify connection string format

**Problem**: 503 Service Unavailable
- **Solution**: Render free tier sleeps after inactivity
- First request may take 30-60 seconds to wake up

---

## 📱 Step 9: Share Your Website

Your website is now live! Share it:

- **Website**: https://your-domain.vercel.app
- **Admin Panel**: https://your-domain.vercel.app/admin/login
- **WhatsApp**: Share link directly
- **Google Business**: Add website URL
- **Social Media**: Facebook, Instagram

---

## 🎉 Congratulations!

Your Devasi's Annapurna website is now live and ready to accept orders!

### Quick Links:
- Frontend: https://your-frontend-url.vercel.app
- Backend: https://your-backend-url.onrender.com
- Database: MongoDB Atlas Dashboard
- Admin Panel: https://your-frontend-url.vercel.app/admin/login

### Support:
- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- MongoDB Docs: https://docs.mongodb.com/

---

**Need Help?** Check the troubleshooting section or contact support for each platform.
