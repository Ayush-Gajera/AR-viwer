# AR Bowl Viewer 🥣

A beautiful, modern web-based AR viewer for displaying 3D objects (USDZ files) on real-world surfaces using iPhone's AR Quick Look technology.

## ✨ Features

- 🎯 **No App Required** - Works directly in Safari browser
- 📱 **iPhone AR Support** - Native AR Quick Look integration
- 🤖 **Android Compatible** - Scene Viewer support for ARCore devices
- 💻 **Desktop 3D Viewer** - Interactive 3D model viewing on desktop
- 🎨 **Premium UI** - Modern, glassmorphism design with smooth animations
- ⚡ **Lightweight** - No dependencies except Model Viewer component

## 🚀 Quick Start

### 1. Add Your USDZ File

1. Place your USDZ 3D model file in the `assets` folder
2. Rename it to `bowl.usdz` OR update the path in `index.html`:

```html
<!-- Line 65 in index.html -->
<model-viewer
    src="assets/your-model-name.usdz"
    ios-src="assets/your-model-name.usdz"
    ...>
```

### 2. Test Locally

**Option A: Using Python**
```bash
# Navigate to ar-viewer folder
cd ar-viewer

# Python 3
python -m http.server 8000

# Open browser to http://localhost:8000
```

**Option B: Using Node.js**
```bash
# Install http-server globally
npm install -g http-server

# Run server
http-server -p 8000

# Open browser to http://localhost:8000
```

**Option C: Using VS Code**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

### 3. Test on iPhone

1. Make sure your computer and iPhone are on the same network
2. Find your computer's local IP address:
   - Windows: `ipconfig` (look for IPv4 Address)
   - Mac/Linux: `ifconfig` or `ip addr`
3. On your iPhone, open Safari and navigate to `http://YOUR-IP-ADDRESS:8000`
4. Click the "View in Your Space" button
5. Point your camera at a flat surface and tap to place the bowl

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd ar-viewer
   vercel
   ```

3. **Follow prompts:**
   - Setup and deploy? `Y`
   - Scope? (select your account)
   - Link to existing project? `N`
   - Project name? `ar-bowl-viewer` (or your choice)
   - Directory? `./`

4. **Your site is live!** ✨
   - Vercel will give you a URL like `https://ar-bowl-viewer.vercel.app`
   - HTTPS is automatically enabled (required for AR features)

### Deploy to Netlify

1. Drag and drop the `ar-viewer` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   cd ar-viewer
   netlify deploy --prod
   ```

### Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR-REPO-URL
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select branch `main` and folder `/ar-viewer` or `/` (root)
5. Save and wait for deployment

## 📱 Device Support

| Device | 3D Viewer | AR Features |
|--------|-----------|-------------|
| iPhone (iOS 12+) | ✅ | ✅ Full AR Quick Look |
| Android (ARCore) | ✅ | ✅ Scene Viewer |
| Desktop/Laptop | ✅ | ❌ View only |

## 🎨 Customization

### Change Colors

Edit `styles.css` and modify CSS variables:

```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    /* Add more customizations */
}
```

### Change Model Scale

Edit `index.html`:

```html
<model-viewer
    ...
    scale="0.5"  <!-- Add this to make model smaller -->
    ...>
```

### Add Multiple Models

1. Duplicate the `viewer-card` section in `index.html`
2. Change the `src` attribute to point to different USDZ files
3. Update the model ID and button IDs

## 🔧 Tech Stack

- **Model Viewer** - Google's web component for 3D/AR (v3.4.0)
- **AR Quick Look** - Apple's native AR technology (iOS)
- **Scene Viewer** - Google's AR technology (Android)
- **Pure HTML/CSS/JS** - No frameworks needed
- **Inter Font** - Modern, clean typography

## 📝 File Structure

```
ar-viewer/
├── index.html          # Main HTML page
├── styles.css          # Premium styles & animations
├── script.js           # Client-side functionality
├── assets/             # 3D model files
│   └── bowl.usdz      # Your USDZ file (add this)
└── README.md          # This file
```

## 🐛 Troubleshooting

### Model not loading?
- ✅ Check if `bowl.usdz` exists in `assets` folder
- ✅ Verify file path in `index.html` is correct
- ✅ Open browser console (F12) to see error messages
- ✅ Make sure the USDZ file is valid (test in AR Quick Look on Mac)

### AR button not working?
- ✅ Must be on iPhone or Android device with AR support
- ✅ Must be served over HTTPS (localhost is OK for testing)
- ✅ Safari is recommended for iPhone
- ✅ Chrome is recommended for Android

### Model appears but AR doesn't activate?
- ✅ Grant camera permissions when prompted
- ✅ Make sure you're on a device with AR sensors
- ✅ Point camera at a well-lit flat surface
- ✅ Restart browser if issues persist

## 📚 Resources

- [Model Viewer Documentation](https://modelviewer.dev/)
- [AR Quick Look Guidelines](https://developer.apple.com/augmented-reality/quick-look/)
- [USDZ Tools & Resources](https://developer.apple.com/augmented-reality/tools/)
- [Convert 3D models to USDZ](https://www.apple.com/augmented-reality/quick-look/)

## 🎯 Converting Other 3D Formats to USDZ

If you have `.obj`, `.fbx`, `.glb`, or other 3D formats:

1. **Reality Converter (Mac only)** - Free Apple app
   - Download from Apple Developer site
   - Drag and drop your model
   - Export as USDZ

2. **Online Converters**
   - [Sketchfab](https://sketchfab.com/) - Upload model, download as USDZ
   - [Model Viewer Editor](https://modelviewer.dev/editor/) - Test and convert

3. **Blender** (Advanced)
   - Import your model
   - Export using USD exporter plugin

## ⚡ Performance Tips

- Keep USDZ file size under 10MB for best performance
- Optimize textures (2K resolution maximum recommended)
- Use compressed texture formats when possible
- Test on actual devices, not just simulator

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify all file paths are correct
3. Test on a different device
4. Check that USDZ file is valid

---

**Made with ❤️ using Model Viewer & AR Quick Look**
