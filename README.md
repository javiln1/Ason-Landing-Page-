# Landing Page Template System

A powerful Handlebars-based templating system for creating and managing client landing pages. Build new client sites in 15-30 minutes instead of hours.

## 🚀 Quick Start

### For Your First New Client

```bash
# 1. Create a new client
npm run new-client john-doe

# 2. Edit their config
# Open clients/john-doe/config.json and update all values

# 3. Add their assets
# Place images in clients/john-doe/assets/

# 4. Build their site
npm run build john-doe

# 5. Deploy
# Upload clients/john-doe/output/ to Vercel
```

---

## 📁 Project Structure

Your original Ason site files remain untouched. The template system is completely separate:

```
/Ason/
├── index.html                    ← Original Ason site (UNTOUCHED ✅)
├── education.html                ← Original Ason site (UNTOUCHED ✅)
├── confirmation-page.html        ← Original Ason site (UNTOUCHED ✅)
│
├── templates/                    ← NEW: Handlebars templates
│   ├── index.hbs
│   ├── education.hbs
│   ├── confirmation-page.hbs
│   └── partials/
│       ├── video-embed.hbs
│       ├── typeform-modal.hbs
│       └── video-modal.hbs
│
├── clients/                      ← NEW: All client sites
│   └── ason/                     ← Example client
│       ├── config.json           ← All customization here
│       ├── assets/               ← Client images
│       └── output/               ← Generated HTML (deploy this)
│
├── scripts/                      ← NEW: Build automation
│   ├── build.js
│   └── new-client.js
│
└── shared/                       ← NEW: Shared assets
    └── js/utm.js
```

---

## 📝 Available Commands

```bash
# Create a new client
npm run new-client <client-name>

# Build a specific client
npm run build <client-name>

# Build all clients at once
npm run build:all
```

---

## ⚙️ Config.json - The Control Center

Every client has ONE file that controls their entire site: `clients/[name]/config.json`

### Key Sections:

**Colors & Branding**
```json
{
  "colors": {
    "primary": "#5B1F0F",
    "secondary": "#000000",
    "accent": "#F2EEE6"
  },
  "fonts": {
    "heading": "Merriweather",
    "body": "Inter"
  }
}
```

**Hero Section (Main VSL)**
```json
{
  "hero": {
    "headline": "YOUR MAIN HEADLINE",
    "subheadline": "Supporting text",
    "videoId": "wistia_video_id",
    "ctaText": "Apply Now",
    "ctaLink": "https://form.typeform.com/to/YOUR_FORM"
  }
}
```

**See `clients/ason/config.json` for a complete example**

---

## 🎯 How It Works

1. **Edit** `clients/[name]/config.json` (one file, all changes)
2. **Run** `npm run build [name]`
3. **Deploy** `clients/[name]/output/` folder to Vercel

That's it! No more hunting through 1700 lines of HTML.

---

## 🚢 Deployment

```bash
cd clients/john-doe/output
vercel
```

Or drag-and-drop the `output/` folder to Vercel dashboard.

---

## 💡 Quick Tips

- **Change colors**: Update `config.json` → rebuild
- **Change videos**: Update `videoId` → rebuild
- **Add testimonials**: Place images in `assets/` → add to config → rebuild
- **Use highlights**: `<span class=\"highlight-burgundy\">text</span>` in config

---

## 📊 Time Savings

**Before:** 2-4 hours per new client
**After:** 15-30 minutes per new client

**Time saved: 2-3 hours per client**

---

## 🔧 Troubleshooting

**Build fails?**
- Check `config.json` syntax (use JSON validator)
- Make sure client folder exists

**Colors not applying?**
- Verify hex codes start with `#`
- Rebuild after changes

**Images missing?**
- Check images are in `clients/[name]/assets/`
- Match filenames in config exactly

---

## 📚 Learn More

1. Study `clients/ason/config.json` - complete example
2. Compare generated `output/` to originals
3. Experiment with a test client

---

Built for speed and simplicity 🚀
