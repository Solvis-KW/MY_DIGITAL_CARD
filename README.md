# 🪪 Digital Business Card & QR Contact Profile

A modern, responsive, ultra-fast Digital Business Card web application. When someone scans your QR code or taps your link, they are taken to your personalized digital profile where they can immediately:

- 📥 **Save Contact directly into their phone** (`.vcf` vCard file that opens the native iOS & Android "Add to Contacts" sheet with Name, Role, Phone, WhatsApp, Email, Location, and Note pre-filled).
- 📞 **Directly Call you** (`tel:` link with 1-tap dialer and copy option).
- 💬 **Directly WhatsApp you** (`wa.me` instant chat with customizable intro greeting).
- ✉️ **Directly Email you** (`mailto:` with pre-filled subject line).
- 🌐 **Connect on Socials & Portfolio** (LinkedIn, GitHub, Portfolio, X/Twitter, Telegram, Calendly).
- 🌓 **Dark & Light Mode** with smooth theme switcher.
- 📱 **Built-in QR Code Studio** with high-resolution PNG download for printing on physical business cards, posters, or lock screens.
- ✏️ **Live In-App Profile Editor** to update details directly on the page in real time.

---

## 🚀 Quick Start (Running Locally)

You can view your digital business card by simply double-clicking `index.html` in any web browser, or by running a local web server:

```bash
# Python 3
python -m http.server 8080

# Or Node.js
npx serve .
```
Then open [http://localhost:8080](http://localhost:8080) in your browser.

---

## ⚙️ Customizing Your Information

You have two easy ways to set your personal details:

### Option 1: Live In-Browser Editor
1. Open the page and click the **Pencil icon (Edit Profile)** in the top navigation bar.
2. Fill in your Name, Role/Tagline, Phone Number, WhatsApp Number, Email, Bio, etc.
3. Click **Save Changes**. Your card will update instantly and persist in your browser!

### Option 2: Edit `config.js` (Recommended for Permanent Deployment)
Open [`config.js`](file:///c:/Users/solvi/Desktop/myprojs/mycard/config.js) and update your info:

```javascript
const CARD_CONFIG = {
  name: "Alex Morgan",
  tagline: "Software Engineer & Product Manager",
  company: "Tech Innovations & Labs",
  location: "San Francisco, CA (Open to Remote)",
  status: "Available for new opportunities",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  bio: "Passionate about bridging technology and product vision. Building scalable web architectures...",
  
  phone: "+1 (555) 234-5678",
  phoneRaw: "+15552345678",
  whatsapp: "+1 (555) 234-5678",
  whatsappRaw: "15552345678", // Digits only (country code + number)
  whatsappMessage: "Hi Alex! I scanned your QR code and would love to connect with you.",
  email: "alex.morgan@example.com",
  ...
};
```

---

## 🌐 Deploying Online (Free & Instant)

To make your QR code work when scanned from any phone camera in the world:

### Option A: GitHub Pages (Free)
1. Push this folder to a GitHub repository.
2. Go to **Settings > Pages** and set branch to `main` / `root`.
3. Your card is live at `https://<username>.github.io/<repo-name>/`.
4. Open the card URL, click the **QR Code icon**, and download your unique QR code!

### Option B: Netlify / Vercel (Drag & Drop)
1. Go to [Netlify Drop](https://app.netlify.com/drop) or [Vercel](https://vercel.com).
2. Drag and drop this `mycard` folder.
3. Your website goes live immediately with a free HTTPS URL and custom domain support.

---

## 📁 Project Structure

```
mycard/
├── index.html       # Semantic HTML5 layout with glassmorphic cards and modal dialogs
├── style.css        # Curated modern design system, dark/light themes, animations
├── app.js           # vCard generator (.vcf), QR code generator, live customizer
├── config.js        # Default user profile details
├── qrcode.min.js    # Standalone offline QR code generator
└── README.md        # Documentation and deployment instructions
```
