# Graham & Mint Wedding Website

A beautiful, mobile-first wedding website built with React, TypeScript, Vite, and Tailwind CSS. Designed for easy hosting on GitHub Pages.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ (recommended: Node 20)
- npm

### Local Development

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   
   Visit [http://localhost:5173](http://localhost:5173)

### Building for Production

```bash
npm run build
```

This creates a `dist` folder with the static site ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## ⚙️ Configuration

All site content is configured in a single file: `src/config.ts`

```typescript
export const config = {
  // Couple information
  coupleNames: "Graham & Mint",
  tagline: "Wedding celebration",
  location: "Chiang Mai, Thailand",

  // Venue details
  venueName: "Mint's house",
  address: "Mae Yang Ha, Samoeng District, Chiang Mai 50250",
  
  // Map coordinates
  lat: 18.841213,
  lng: 98.575860,
  
  // URLs
  googleMapsOpenUrl: "https://maps.app.goo.gl/...",
  mapEmbedUrl: "https://maps.google.com/maps?q=...",
  rsvpUrl: "https://docs.google.com/forms/...",
  
  // Footer
  footerMessage: "Thank you — we can't wait to celebrate with you.",
};
```

### Customizing for Your Wedding

1. Update `coupleNames` with your names
2. Change `tagline` and `location` as needed
3. Update venue details (`venueName`, `address`, coordinates)
4. Replace `googleMapsOpenUrl` with your venue's Google Maps link
5. Update `mapEmbedUrl` using format: `https://maps.google.com/maps?q=LAT,LNG&t=&z=14&ie=UTF8&iwloc=&output=embed`
6. Replace `rsvpUrl` with your Google Form URL
7. Customize the `footerMessage`

## 🌐 GitHub Pages Deployment

### Automatic Deployment

This project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to `main`.

### Setup Instructions

1. **Create a GitHub repository** for your wedding site

2. **Push your code:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository Settings
   - Navigate to **Pages** (in the left sidebar)
   - Under **Build and deployment**, select **GitHub Actions** as the source

4. **Update the base path** in `vite.config.ts`:

   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
   })
   ```

   Replace `YOUR_REPO_NAME` with your actual repository name.

5. **Commit and push** the config change:

   ```bash
   git add vite.config.ts
   git commit -m "Update base path for GitHub Pages"
   git push
   ```

6. **Wait for deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the workflow complete
   - Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Using a Custom Domain

If you're using a custom domain:

1. Set `base: '/'` in `vite.config.ts`
2. Add a `CNAME` file to the `public` folder with your domain
3. Configure your domain's DNS settings

## 📁 Project Structure

```
WeddingSite/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── public/
│   └── favicon.svg         # Site favicon
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Sticky navigation
│   │   ├── Hero.tsx        # Home/hero section
│   │   ├── Location.tsx    # Venue & map section
│   │   ├── RSVP.tsx        # RSVP section
│   │   ├── Accommodation.tsx # Accommodation section
│   │   └── Footer.tsx      # Site footer
│   ├── App.tsx             # Main app component
│   ├── config.ts           # Site configuration
│   ├── index.css           # Tailwind styles
│   └── main.tsx            # React entry point
├── index.html              # HTML template
├── package.json
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript config
└── vite.config.ts          # Vite configuration
```

## 🎨 Design Features

- **Mobile-first** responsive design
- **Smooth scrolling** navigation
- **Sticky header** that appears on scroll
- **Elegant typography** with Cormorant Garamond & Nunito Sans
- **Sage & champagne** color palette
- **Accessible** buttons with hover/focus states
- **Embedded Google Map** with coordinates

## 📝 License

MIT License - Feel free to use this for your own wedding!

---

Made with ❤️ for Graham & Mint

