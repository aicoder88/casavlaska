# 🚀 GitHub Push Instructions for CasaVlaška

## ✅ Current Status
- ✅ Repository initialized
- ✅ All files staged and committed
- ✅ Remote repository added
- ⚠️ Authentication needed for push

## 📋 Steps to Complete Deployment

### 1. Configure Git (if needed)
```bash
cd /Users/macpro/dev/vlaska
git config user.name "aicoder88"
git config user.email "your-email@example.com"
```

### 2. Authenticate with GitHub
Choose one of these methods:

#### Option A: GitHub CLI (Recommended)
```bash
# Install GitHub CLI if not installed
brew install gh

# Authenticate
gh auth login

# Push to repository
git push -u origin main
```

#### Option B: Personal Access Token
1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate new token with `repo` permissions
3. Use token as password when prompted:
```bash
git push -u origin main
# Username: aicoder88
# Password: [your-personal-access-token]
```

#### Option C: SSH (if SSH key is set up)
```bash
git remote set-url origin git@github.com:aicoder88/casavlaska.git
git push -u origin main
```

### 3. Verify Push Success
After successful push, verify at:
https://github.com/aicoder88/casavlaska

## 🚀 Deploy to Vercel

### Auto-Deploy Option (Recommended)
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New Project"
4. Import `aicoder88/casavlaska` repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Site will be live in ~3 minutes at `your-project.vercel.app`

### Manual Deploy Option
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📊 Current Commit Details
- **Commit Hash**: 633e960
- **Files**: 46 files, 10,638 insertions
- **Status**: Ready for production
- **Build Size**: 405 kB total
- **Features**: All implemented and tested

## 🎯 Expected Results
- **Live Site**: Available at Vercel URL
- **Performance**: Lighthouse scores ≥95
- **Features**: All working (bilingual, calculator, charts, gallery)
- **SEO**: Optimized with structured data
- **Mobile**: Fully responsive

## 🛠️ Troubleshooting
If you encounter issues:
1. Ensure GitHub repository exists at https://github.com/aicoder88/casavlaska
2. Check repository permissions
3. Try authentication methods above
4. Contact support if needed

## 📞 Site Contact Info
- **Property**: Drago - +385 99 343 3344
- **WhatsApp**: https://wa.me/385993433344
- **Price**: €159,900 (46m², Vlaška 117, Zagreb)

---
**✅ Code is ready - just needs authentication to push!**