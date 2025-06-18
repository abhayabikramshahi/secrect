# PornHub Clone (React + Vite)

A modern, responsive video streaming web app inspired by YouTube and Pornhub, built with React and Vite.

## Features

- Responsive navbar with smart mobile menu
- Home page with video grid and auto-generated thumbnails
- Video player with YouTube-like layout, up next sidebar, and native controls
- User profiles (Sneha & Siwani) with their own videos and profile pages
- Category, Community, and other pages with dark theme
- Like button on video cards
- Local video support (mp4, mkv, etc.)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Add your videos:**
   - Place video files in `public/videos/` (e.g. `2023-12-10-02-02-21.mp4`, `2025-06-16 22-35-52.mkv`)
3. **Run the app locally:**
   ```bash
   npm run dev
   ```
4. **Build for production:**
   ```bash
   npm run build
   ```
5. **Preview production build locally:**
   ```bash
   npm run preview
   ```
6. **Deploy to Vercel:**
   - Make sure you have a `vercel.json` file with the following content:
     ```json
     {
       "builds": [
         { "src": "vite.config.js", "use": "@vercel/static-build", "config": { "distDir": "dist" } }
       ],
       "routes": [
         { "src": "/(.*)", "dest": "/index.html" }
       ]
     }
     ```
   - Run:
     ```bash
     vercel --prod
     ```

## Project Structure

- `src/components/` — Navbar, VideoCard, VideoPlayer, etc.
- `src/pages/` — Home, Category, UserProfile, etc.
- `public/videos/` — Your video files

## Customization
- Add more users and videos in `UserProfile.jsx` and `Home.jsx`.
- Update styles using Tailwind CSS classes in components.

## Credits
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- UI inspired by YouTube and Pornhub

---

**For demo purposes only. Not for production or distribution of adult content.**