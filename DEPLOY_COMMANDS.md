# 🚀 Quick Deploy Commands

## Option 1: Deploy Using Vercel CLI (Fastest)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy Frontend
```bash
cd frontend
vercel login
vercel --prod
```

Follow the prompts and copy your frontend URL.

### Step 3: Update Backend CORS
Update `backend/.env`:
```env
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

---

## Option 2: Deploy Using Git (Recommended)

### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Ready for deployment"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/annapurna.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy Backend on Render
1. Go to https://render.com
2. Sign up with GitHub
3. New Web Service → Connect repository
4. Root directory: `backend`
5. Add environment variables
6. Deploy

### Step 3: Deploy Frontend on Vercel
1. Go to https://vercel.com
2. Sign up with GitHub
3. Import repository
4. Root directory: `frontend`
5. Add environment variables
6. Deploy

---

## Environment Variables to Set

### Render (Backend)
```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/annapurna
JWT_SECRET=generate_random_string_here
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

### Vercel (Frontend)
```
VITE_API_URL=https://your-backend-url.onrender.com/api
VITE_BUSINESS_NAME=Devasi's Annapurna
VITE_BUSINESS_PHONE=094210 08444
VITE_BUSINESS_EMAIL=info@devasiannapurna.com
VITE_BUSINESS_ADDRESS=ITI Chowk, Shop no. 6, Vijapur Rd, Medical Society, Ashok Nagar, Solapur, Maharashtra 413004
VITE_WHATSAPP_NUMBER=919421008444
VITE_GOOGLE_MAPS_EMBED=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.2535991095683!2d75.90219437522549!3d17.638143995532808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da06bd91d5c1%3A0x24fa4613f5b2d9d!2sDevasi.s%20Annapurna%20misthan%20bhandar!5e0!3m2!1sen!2sin!4v1772861870338!5m2!1sen!2sin
```

---

## Create Admin Account

### Using curl:
```bash
curl -X POST https://your-backend-url.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@devasiannapurna.com",
    "password": "YourSecurePassword123!"
  }'
```

### Using PowerShell:
```powershell
$body = @{
    username = "admin"
    email = "admin@devasiannapurna.com"
    password = "YourSecurePassword123!"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://your-backend-url.onrender.com/api/auth/register" -Method Post -Body $body -ContentType "application/json"
```

---

## Test Deployment

### Test Backend:
```bash
curl https://your-backend-url.onrender.com/api/products
```

### Test Frontend:
Open in browser: `https://your-frontend-url.vercel.app`

### Test Admin Login:
Open in browser: `https://your-frontend-url.vercel.app/admin/login`

---

## Update After Changes

### Update Frontend:
```bash
cd frontend
git add .
git commit -m "Update frontend"
git push origin main
# Vercel auto-deploys
```

### Update Backend:
```bash
cd backend
git add .
git commit -m "Update backend"
git push origin main
# Render auto-deploys
```

---

## Generate JWT Secret

### Using Node.js:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### Using OpenSSL:
```bash
openssl rand -hex 64
```

### Using PowerShell:
```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 64 | % {[char]$_})
```

---

## Troubleshooting Commands

### Check Backend Logs (Render):
Go to Render Dashboard → Your Service → Logs

### Check Frontend Build Logs (Vercel):
Go to Vercel Dashboard → Your Project → Deployments → View Logs

### Test MongoDB Connection:
```bash
mongosh "mongodb+srv://username:password@cluster.mongodb.net/annapurna"
```

### Clear Vercel Cache:
```bash
cd frontend
vercel --prod --force
```

---

## Quick Links

- **Render Dashboard**: https://dashboard.render.com
- **Vercel Dashboard**: https://vercel.com/dashboard
- **MongoDB Atlas**: https://cloud.mongodb.com
- **GitHub**: https://github.com

---

## 🎉 That's It!

Your website should now be live and accessible worldwide!

**Frontend**: https://your-domain.vercel.app
**Admin Panel**: https://your-domain.vercel.app/admin/login
