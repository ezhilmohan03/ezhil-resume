# Ezhil Malar M - Professional Resume Website

A modern, responsive one-page resume website with an interactive AI chatbot assistant, built with React and Tailwind CSS.

## Features

✨ **Modern Design**
- Clean, professional layout with gradient backgrounds
- Responsive design for mobile, tablet, and desktop
- Smooth scrolling navigation
- Subtle animations and hover effects

🤖 **Interactive Chatbot**
- Floating chatbot widget ("Ezhil Assistant")
- Client-side knowledge base with keyword matching
- Answers questions about education, skills, achievements, and career interests
- Quick question suggestions for first-time users
- No backend required

📱 **Sections Included**
1. **Hero Section** - Professional headline and call-to-action buttons
2. **About** - Professional summary with key highlights
3. **Education Timeline** - Academic achievements with percentages
4. **Skills** - Organized by category (Programming, AI/LLM, Power Platform, RPA, etc.)
5. **Achievements & Awards** - Academic ranks, awards, and recognitions
6. **Research & Presentations** - Conference presentation details
7. **Certifications** - Adobe, design tools, and proficiencies
8. **Key Strengths** - Soft skills and personal qualities
9. **Career Interests** - Target roles and opportunities
10. **Contact Section** - Email, phone, and location information
11. **Floating Chatbot** - Interactive assistant

## Technology Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Deployment**: Vercel (ready to deploy)

## Local Installation & Development

### Prerequisites
- Node.js 14+ and npm 6+ (or yarn)
- Git

### Setup Instructions

1. **Clone or download the project**
   ```bash
   cd Resume_Builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The website will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
Resume_Builder/
├── public/
│   ├── index.html           # HTML entry point
│   └── favicon.ico
├── src/
│   ├── App.js              # Main app component
│   ├── App.css             # App-level styles
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles & Tailwind imports
│   └── ResumeWebsite.jsx   # Main resume component
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md              # This file
```

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a Vercel account** at [vercel.com](https://vercel.com)
2. **Connect your Git repository**
   - Push the project to GitHub, GitLab, or Bitbucket
3. **Create a new project**
   - Click "New Project" in Vercel dashboard
   - Import your repository
   - Click "Deploy"
4. **Done!** Your site will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI globally**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts** and your site will be deployed

### Option 3: Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to any static hosting:
   - Netlify
   - GitHub Pages
   - AWS S3
   - Firebase Hosting
   - Or any other static hosting service

## Chatbot Features

### How It Works
- Client-side keyword matching (no API calls required)
- Responds to questions about:
  - Personal introduction and overview
  - Technical skills and expertise
  - Academic achievements and awards
  - Educational background
  - Suitability for automation roles
  - AI and LLM tool knowledge
  - Power Platform expertise
  - Contact information
  - Career interests

### Sample Questions the Bot Can Answer
- "Tell me about Ezhil"
- "What are her technical skills?"
- "What are her achievements?"
- "Is she suitable for automation roles?"
- "What AI tools is she familiar with?"
- "What is her education background?"
- "How can I contact her?"

### Adding More Questions

To add more chatbot responses, edit the `chatbotKB` object in `src/ResumeWebsite.jsx`:

```javascript
const chatbotKB = {
  yourTopic: {
    keywords: ['keyword1', 'keyword2', 'keyword3'],
    response: "Your response here"
  },
  // ... more topics
};
```

## Customization Guide

### Update Personal Information
Edit `src/ResumeWebsite.jsx`:
- Name and headline in Hero section
- Contact details (email, phone, location)
- Education, skills, achievements
- Career interests

### Change Colors
Edit `tailwind.config.js` or use Tailwind classes:
- Primary blue: `#2563eb`
- Secondary purple: `#9333ea`
- Accent teal: `#0d9488`

### Add Your Own Resume Download
Update the "Download Resume" button in the hero section:
```javascript
<a href="/your-resume.pdf" download className="px-8 py-3 bg-blue-600...">
  Download Resume
</a>
```

### Modify Sections
Each major section is in `src/ResumeWebsite.jsx`:
- Search for section heading (e.g., `{/* Hero Section */}`)
- Modify content as needed
- Tailwind classes handle styling

## Performance Tips

- ✅ Optimized for Core Web Vitals
- ✅ Mobile-first responsive design
- ✅ No external API calls (chatbot runs client-side)
- ✅ Lazy-loaded components
- ✅ Lightweight dependencies (React 18 + Tailwind)

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile latest

## Accessibility Features

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus indicators for interactive elements
- ✅ Sufficient color contrast ratios

## SEO

The website includes:
- Meta tags for title and description
- Semantic HTML structure
- Open Graph tags (can be added)
- Structured data (can be added)

## Future Enhancements

- [ ] Add animations library (Framer Motion)
- [ ] Integrate with email service (Formspree, EmailJS)
- [ ] Add Dark mode toggle
- [ ] Add More detailed chatbot with NLP
- [ ] Add project portfolio section
- [ ] Add blog or articles section
- [ ] Implement resume PDF generation
- [ ] Add analytics (Google Analytics, Vercel Analytics)

## Troubleshooting

### Port 3000 already in use
```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Tailwind CSS not applying
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Next cache: `rm -rf .next`
- Restart dev server

### Build errors
- Ensure Node.js version is 14+: `node --version`
- Clear npm cache: `npm cache clean --force`
- Reinstall dependencies: `npm install`

## License

Created for Ezhil Malar M. Feel free to customize and use as your professional website.

## Contact & Support

For questions or modifications:
- Email: ezhilmohan03@gmail.com
- Phone: 9944036713

---

**Ready to deploy?** 🚀
1. Push to GitHub
2. Connect to Vercel
3. Instant deployment!

Your professional presence is just minutes away! 🌟
