# Deployment Instructions

## GitHub + Vercel Deployment

### Step 1: Push to GitHub
After creating your GitHub repository, run these commands:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy with Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings (Vercel will auto-detect Next.js):
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click "Deploy"

### Step 3: Custom Domain (Optional)
- Go to your project settings in Vercel
- Click "Domains"
- Add your custom domain

## Your Website Features:
✅ Next.js 14 with TypeScript
✅ Interactive maps with Leaflet.js
✅ Advanced property filtering
✅ Mobile-responsive design
✅ SEO optimization
✅ 12 realistic Oman properties
✅ Contact forms and lead capture

## Live URLs (after deployment):
- **Vercel URL**: https://your-project-name.vercel.app
- **Custom Domain**: https://yourdomain.com (if configured)

## Environment Variables (if needed later):
```
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

Your real estate website is production-ready! 🚀🏠