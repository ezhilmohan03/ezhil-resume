# 🚀 Quick Start Guide - Ezhil Resume Website

Get your professional resume website live in minutes!

## 📋 Prerequisites

Before starting, make sure you have:
- Node.js 14+ installed ([Download](https://nodejs.org/))
- npm 6+ or yarn installed
- Git installed ([Download](https://git-scm.com/))
- A code editor (VS Code recommended)

## ✅ Check Your Installation

```bash
node --version    # Should be v14.0.0 or higher
npm --version     # Should be 6.0.0 or higher
```

---

## 🏃 Local Setup (5 minutes)

### Step 1: Navigate to the Project Directory
```bash
cd Resume_Builder
```

### Step 2: Install Dependencies
```bash
npm install
```
This will download all required packages.

### Step 3: Start Development Server
```bash
npm start
```

🎉 Your website will automatically open at `http://localhost:3000`

### Step 4: Verify Everything Works
- ✅ Website loads with professional styling
- ✅ Navigation works
- ✅ Scroll to different sections
- ✅ Click the floating chat button at bottom-right
- ✅ Try asking the chatbot a question

---

## 🌐 Deploy to Vercel (3 minutes)

### Option A: Via Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Ezhil resume website"
   git remote add origin https://github.com/YOUR_USERNAME/ezhil-resume.git
   git branch -M main
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)**
   - Sign up or log in with GitHub
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

3. **Done!** ✨
   - Your site is live at `your-project.vercel.app`
   - You'll get a live URL immediately

### Option B: Via Vercel CLI

```bash
# Install Vercel globally
npm i -g vercel

# Deploy
vercel

# Follow the prompts
# Your site will be live in seconds!
```

### Option C: Other Hosting Services

**Netlify:**
```bash
npm run build
# Drag & drop the "build" folder to Netlify
```

**GitHub Pages:**
```bash
npm run build
# Push the build folder to gh-pages branch
```

---

## 🎨 Customize Your Content

### Update Personal Details

**File:** `src/ResumeWebsite.jsx`

Find and update these sections:

#### Change Name & Email (Search for "ezhilmohan03@gmail.com")
```javascript
// Contact section
<a href="mailto:ezhilmohan03@gmail.com">
```

#### Change Phone Number (Search for "9944036713")
```javascript
href="tel:9944036713"
```

#### Change Location (Search for "Thirukkalukundram")
```javascript
// Update in Contact section
```

### Add Your Resume PDF

1. Place your resume PDF in `public/` folder as `resume.pdf`
2. Update the download button in Hero section:
   ```javascript
   <a href="/resume.pdf" download className="px-8 py-3...">
     <Download size={20} />
     Download Resume
   </a>
   ```

### Update Skills

Search for "Technical Skills" section in the code:
```javascript
{
  category: 'Your Category',
  level: 'Foundation/Learning/Intermediate/Familiar/Exploring',
  skills: ['Skill 1', 'Skill 2', 'Skill 3']
}
```

### Update Achievements

Search for "Achievements & Awards" section and modify the array of achievements.

### Update Chatbot Responses

Search for `chatbotKB` object in `src/ResumeWebsite.jsx`:

```javascript
const chatbotKB = {
  customTopic: {
    keywords: ['question', 'keyword', 'topic'],
    response: "Your answer here"
  },
  // ... more topics
};
```

---

## 🧪 Testing & Preview

### Test Locally
```bash
npm start
# Visit http://localhost:3000
# Test all sections and interactions
```

### Test Mobile
- Open DevTools: `F12` or `Ctrl+Shift+I`
- Click responsive design mode (looks like a phone icon)
- Test on various screen sizes

### Build & Test Production
```bash
npm run build
npm install -g serve
serve -s build
# Opens a production preview at localhost:3000
```

---

## 🚨 Troubleshooting

### Port 3000 Already in Use

**macOS/Linux:**
```bash
lsof -i :3000
kill -9 <PID>
```

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Dependencies Won't Install

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind CSS Not Working

```bash
# Reinstall dependencies
npm install

# Clear build
rm -rf build/

# Restart server
npm start
```

### Can't Push to GitHub

Make sure you:
1. Have a GitHub account
2. Created a repository
3. Have Git configured:
   ```bash
   git config --global user.email "your-email@example.com"
   git config --global user.name "Your Name"
   ```

---

## 📁 Project File Structure

```
Resume_Builder/
├── public/              # Static files
│   └── index.html      # HTML entry point
├── src/                # Source code
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── ResumeWebsite.jsx  # Main component
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind config
├── postcss.config.js   # PostCSS config
└── README.md          # Full documentation
```

---

## 🔄 Development Workflow

### Make Changes
1. Edit files in `src/` folder
2. Save the file
3. Browser automatically refreshes (hot reload)

### Before Deploying
```bash
# Check for errors
npm start

# Build for production
npm run build

# Verify build succeeded
# Check that "build" folder was created
```

### Deploy
```bash
# Push to GitHub
git add .
git commit -m "Your changes"
git push

# Vercel auto-deploys when you push!
```

---

## ✨ Key Features Recap

✅ **Responsive Design** - Works on mobile, tablet, desktop
✅ **Modern UI** - Professional gradient backgrounds, smooth animations
✅ **Interactive Chatbot** - Answer questions about Ezhil
✅ **No Backend** - Everything runs in the browser
✅ **Easy Customization** - Update content in React component
✅ **Production Ready** - Deploy immediately to Vercel
✅ **SEO Optimized** - Proper semantic HTML
✅ **Fast Performance** - Optimized bundle size

---

## 📞 Need Help?

### Common Questions

**Q: Where do I add my skills?**
A: Edit the skills array in "Technical Skills" section of ResumeWebsite.jsx

**Q: How do I change the colors?**
A: Edit tailwind.config.js or use Tailwind class names in components

**Q: Can I add more sections?**
A: Yes! Copy an existing section and modify the content

**Q: How do I update the chatbot?**
A: Edit the chatbotKB object in ResumeWebsite.jsx

**Q: Will it work on mobile?**
A: Yes! The entire site is fully responsive

---

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start local server: `npm start`
3. ✅ Customize content in src/ResumeWebsite.jsx
4. ✅ Test on mobile (DevTools → Responsive)
5. ✅ Push to GitHub
6. ✅ Deploy to Vercel
7. ✅ Share your awesome website!

---

## 📊 Performance Tips

- Website loads in < 2 seconds ⚡
- No external CDN dependencies (everything local)
- Optimized images and fonts
- Efficient React rendering
- Minified CSS and JS in production build

---

## 🎉 You're All Set!

Your professional resume website is ready to impress recruiters.

**Share your live site:** `https://your-project.vercel.app`

Good luck with your career! 🚀
