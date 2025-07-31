# 🚀 JanMitra Deployment Guide

This guide will help you deploy the JanMitra project to GitHub and Vercel.

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/) installed
- [GitHub](https://github.com/) account
- [Vercel](https://vercel.com/) account

## 🔧 Local Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd project-bolt-sb1-s2sf2kzu/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📦 GitHub Deployment

### 1. Initialize Git Repository

```bash
# Navigate to project directory
cd project

# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: JanMitra AI-powered animal rescue platform"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/janmitra.git

# Push to GitHub
git push -u origin main
```

### 2. GitHub Repository Setup

1. **Create a new repository** on GitHub
2. **Don't initialize** with README, .gitignore, or license
3. **Copy the repository URL**
4. **Follow the git commands above**

### 3. Repository Structure

Your GitHub repository should look like this:

```
janmitra/
├── app/                    # Next.js 13 App Router
│   ├── about/             # About page
│   ├── admin/             # Admin panel
│   ├── contact/           # Contact page
│   ├── login/             # Login page
│   ├── report/            # Animal reporting
│   ├── subscribe/         # Subscription plans
│   ├── vet/               # Vet network
│   ├── volunteer/         # Volunteer dashboard
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (Radix)
│   ├── FloatingChatbot.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── SOSButton.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── .gitignore           # Git ignore file
├── package.json         # Dependencies
├── README.md            # Project documentation
├── vercel.json          # Vercel configuration
└── DEPLOYMENT.md        # This file
```

## 🌐 Vercel Deployment

### 1. Connect to Vercel

1. **Go to [Vercel](https://vercel.com/)**
2. **Sign in** with your GitHub account
3. **Click "New Project"**
4. **Import your GitHub repository**
5. **Select the repository** you just created

### 2. Configure Project Settings

**Framework Preset**: Next.js
**Root Directory**: `./` (or leave empty)
**Build Command**: `npm run build`
**Output Directory**: `.next`
**Install Command**: `npm install`

### 3. Environment Variables

Add these environment variables in Vercel:

```env
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
NEXT_PUBLIC_API_URL=https://your-api-url.com
RAZORPAY_KEY_ID=your-razorpay-key
STRIPE_PUBLISHABLE_KEY=your-stripe-key
```

### 4. Deploy

1. **Click "Deploy"**
2. **Wait for build** to complete
3. **Your app will be live** at the provided URL

## 🔧 Custom Domain (Optional)

1. **Go to your Vercel project dashboard**
2. **Click "Settings" → "Domains"**
3. **Add your custom domain**
4. **Follow the DNS configuration instructions**

## 📊 Monitoring & Analytics

### 1. Vercel Analytics

1. **Enable Vercel Analytics** in your project settings
2. **Add the analytics script** to your layout.tsx

### 2. Error Tracking

1. **Sign up for [Sentry](https://sentry.io/)**
2. **Add Sentry SDK** to your project
3. **Configure error tracking**

### 3. Performance Monitoring

1. **Use Vercel's built-in performance monitoring**
2. **Set up [PostHog](https://posthog.com/)** for analytics
3. **Monitor Core Web Vitals**

## 🔄 Continuous Deployment

### Automatic Deployments

- **Every push to main branch** triggers a new deployment
- **Preview deployments** are created for pull requests
- **Automatic rollbacks** on failed deployments

### Deployment Commands

```bash
# Deploy to production
git push origin main

# Create a new feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push feature branch
git push origin feature/new-feature

# Create pull request on GitHub
# Vercel will create a preview deployment
```

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules .next
   npm install
   npm run build
   ```

2. **Environment Variables**
   - **Check Vercel dashboard** for correct environment variables
   - **Restart deployment** after adding new variables

3. **Performance Issues**
   - **Optimize images** using Next.js Image component
   - **Enable compression** in Vercel settings
   - **Use CDN** for static assets

### Debug Commands

```bash
# Check build locally
npm run build

# Run production build locally
npm run start

# Check for TypeScript errors
npx tsc --noEmit

# Lint code
npm run lint
```

## 🔒 Security

### Environment Variables

- **Never commit** sensitive data to GitHub
- **Use Vercel environment variables** for secrets
- **Rotate API keys** regularly

### Security Headers

The project includes security headers in `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 📈 Performance Optimization

### 1. Image Optimization

```jsx
import Image from 'next/image'

// Use Next.js Image component
<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={500}
  height={300}
  priority={true}
/>
```

### 2. Code Splitting

- **Automatic code splitting** with Next.js
- **Lazy load components** when needed
- **Optimize bundle size** with webpack analyzer

### 3. Caching

- **Static generation** for pages
- **Incremental Static Regeneration** for dynamic content
- **CDN caching** with Vercel

## 🔄 Updates & Maintenance

### Regular Updates

1. **Update dependencies** monthly
   ```bash
   npm update
   npm audit fix
   ```

2. **Monitor security** advisories
   ```bash
   npm audit
   ```

3. **Update Next.js** when new versions are released
   ```bash
   npm install next@latest
   ```

### Backup Strategy

1. **GitHub** serves as your primary backup
2. **Vercel** provides automatic backups
3. **Database backups** (if applicable)
4. **Environment variables** backup

## 📞 Support

### Getting Help

1. **Vercel Documentation**: https://vercel.com/docs
2. **Next.js Documentation**: https://nextjs.org/docs
3. **GitHub Issues**: Create issues in your repository
4. **Community**: Join Next.js and Vercel communities

### Emergency Contacts

- **Vercel Support**: support@vercel.com
- **GitHub Support**: https://support.github.com/
- **Project Issues**: Create GitHub issue

---

## ✅ Deployment Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables configured
- [ ] Custom domain added (optional)
- [ ] Analytics enabled
- [ ] Error tracking configured
- [ ] Performance monitoring set up
- [ ] Security headers configured
- [ ] SSL certificate active
- [ ] Backup strategy in place

**🎉 Your JanMitra platform is now live and ready to help animals!** 