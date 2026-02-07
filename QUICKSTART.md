# 🚀 Quick Start Guide - AR Viewer

## ✅ FIXED: Model Loading Error

The error has been resolved! The site now uses **publicly hosted demo models** so you can test immediately without needing to add your own USDZ file first.

### What's Running Now:
- **Desktop/Android**: Astronaut 3D model (GLB format)
- **iPhone**: Toy Drummer 3D model (USDZ format from Apple)

---

## 🎯 How to Test Right Now

### 1. Server is Already Running! ✅

The development server is started on **port 8000**.

### 2. Open in Your Browser

**On the same computer:**
```
http://localhost:8000
```

**On your iPhone (same WiFi network):**
1. Find your computer's IP address:
   ```powershell
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., `192.168.1.100`)

2. On iPhone, open Safari and go to:
   ```
   http://YOUR-IP-ADDRESS:8000
   ```
   Example: `http://192.168.1.100:8000`

### 3. What You Should See

✅ Dark themed website with purple/pink gradients  
✅ "AR Bowl Viewer" header with bowl emoji  
✅ 3D model viewer with auto-rotating astronaut  
✅ "View in Your Space" AR button  
✅ Instructions and device support cards  

### 4. Test AR on iPhone

1. **Tap** the purple "View in Your Space" button
2. **Allow** camera access if prompted
3. **Point** your camera at a table or floor
4. **Tap** on the surface to place the 3D model
5. **Move around** to see the model anchored in real space!

---

## 📝 Using Your Own Bowl USDZ File

Once you have your own USDZ file:

1. **Add** `bowl.usdz` to the `assets` folder

2. **Edit** `index.html` (lines 47-48):
   ```html
   <!-- Change from: -->
   src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
   ios-src="https://developer.apple.com/augmented-reality/quick-look/models/drummertoy/toy_drummer_idle.usdz"
   
   <!-- To: -->
   src="assets/bowl.usdz"
   ios-src="assets/bowl.usdz"
   ```

3. **Refresh** the browser

See `assets/PLACEHOLDER.txt` for more details on converting 3D models to USDZ format.

---

## 🛠️ Server Commands

**Start server:**
```powershell
cd d:\contribution\DataSlush\ar-viewer
python -m http.server 8000
```

**Stop server:**
Press `Ctrl + C` in the terminal

**Restart server:**
Stop it, then start again

---

## 🐛 Troubleshooting

### Model not loading?
- ✅ Check browser console (F12) for errors
- ✅ Make sure server is running
- ✅ Try refreshing the page (Ctrl + F5)

### AR button not working?
- ✅ Must be on iPhone or ARCore Android device
- ✅ Must use Safari on iPhone (recommended)
- ✅ Grant camera permissions when asked
- ✅ Point at well-lit flat surface

### Can't access from iPhone?
- ✅ Both devices must be on same WiFi network
- ✅ Check Windows Firewall isn't blocking port 8000
- ✅ Use correct IP address from `ipconfig`

---

## 🌐 Deploy to Production

When ready to share with others:

**Vercel (Easiest):**
```powershell
cd d:\contribution\DataSlush\ar-viewer
npx vercel
```

**Netlify:**
```powershell
npx netlify-cli deploy --prod
```

Both provide free HTTPS hosting (required for AR to work).

---

## 📚 File Structure

```
ar-viewer/
├── index.html              # Main page (using demo models)
├── styles.css              # Premium dark theme
├── script.js               # AR functionality
├── README.md               # Full documentation
└── assets/
    └── PLACEHOLDER.txt     # Instructions for your USDZ file
```

---

## ✨ What's Special About This?

✅ **No app needed** - Works directly in browser  
✅ **Production ready** - Complete with error handling  
✅ **Beautiful design** - Premium dark UI  
✅ **Works now** - Demo models included  
✅ **Easy to customize** - Just swap the model URL  

---

**Happy AR Testing! 🚀**

Need help? Check the full `README.md` for detailed documentation.
