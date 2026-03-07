# ⚡ Quick Deploy to Vercel - 30 Minutes

## Simple 7-Step Deployment

### Step 1: MongoDB Atlas (10 min)
1. Go to https://mongodb.com/cloud/atlas
2. Sign up → Create FREE cluster
3. Database Access → Add user (save password!)
4. Network Access → Add IP: `0.0.0.0/0`
5. Connect → Get connection string
6. Replace `<password>` and add `/annapurna` at end

**Connection String Format:**
```
mongodb+srv://username:password@cluster.mongodb.net/annapurna?retryWrites=true&w=majority
```

---

### Step 2: Push to GitHub (5 min)
```bash
git init
git add .
git commit -m "Deploy to Vercel"
git remote add origin https://github.com/yourusername/annapurna.git
git push -u origin main
```

---

### Step 3: Deploy Backend (5 min)
1. Go to https://vercel.com
2. Sign up with GitHub
3. New Project → Import repository
4. **Root Directory**: `backend`
5. **Framework**: Other
6. Add Environment Variables:
   ```
   NODE_ENV=production
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=generate_random_64_char_string
   PORT=5000
   ```
7. Deploy → Copy backend URL

**Generate JWT Secret:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

---

### Step 4: Deploy Frontend (5 min)
1. Vercel → New Project → Same repository
2. **Root Directory**: `frontend`
3. **Framework**: Vite
4. Add Environment Variables:
   ```
   VITE_API_URL=https://your-backend-url.vercel.app/api
   VITE_BUSINESS_NAME=Devasi's Annapurna
   VITE_BUSINESS_PHONE=094210 08444
   VITE_BUSINESS_EMAIL=info@devasiannapurna.com
   VITE_BUSINESS_ADDRESS=ITI Chowk, Shop no. 6, Vijapur Rd, Medical Society, Ashok Nagar, Solapur, Maharashtra 413004
   VITE_WHATSAPP_NUMBER=919421008444
   VITE_GOOGLE_MAPS_EMBED=https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.2535991095683!2d75.90219437522549!3d17.638143995532808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da06bd91d5c1%3A0x24fa4613f5b2d9d!2sDevasi.s%20Annapurna%20misthan%20bhandar!5e0!3m2!1sen!2sin!4v1772861870338!5m2!1sen!2sin
   ```
5. Deploy → Copy frontend URL

---

### Step 5: Update CORS (2 min)
1. Go to backend project in Vercel
2. Settings → Environment Variables
3. Add: `CORS_ORIGIN=https://your-frontend-url.vercel.app`
4. Deployments → Redeploy

---

### Step 6: Create Admin (2 min)
**PowerShell:**
```powershell
$body = @{
    username = "admin"
    email = "admin@devasiannapurna.com"
    password = "Admin@123456"
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://your-backend-url.vercel.app/api/auth/register" -Method Post -Body $body -ContentType "application/json"
```

---

### Step 7: Test (1 min)
- [ ] Visit frontend URL
- [ ] Check all images load
- [ ] Test WhatsApp button
- [ ] Login to admin panel

---

## ✅ Done!

**Your URLs:**
- Website: https://your-frontend.vercel.app
- Admin: https://your-frontend.vercel.app/admin/login
- API: https://your-backend.vercel.app/api

**Admin Login:**
- Username: `admin`
- Password: `Admin@123456`

---

## 🔄 To Update:
```bash
git add .
git commit -m "Update"
git push
# Auto-deploys in 2 minutes!
```

---

## 📖 Need More Details?
Read: **VERCEL_DEPLOYMENT.md**

---

**Total Time**: 30 minutes
**Total Cost**: ₹0 (Free!)
**Difficulty**: Easy ⭐⭐☆☆☆
