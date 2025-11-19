# Charry Website

This is the website for Charry, an Estonian donation app. The site showcases our cause, introduces our team tells a bit about our partners.

## What is Charry?

Charry is a donation platform that makes it easy to support Estonian charities. Our mission is to make donating simple and enjoyable, so people want to do it more often.

## What's on the website?

- **Home page** - Introduction to Charry with a download button for the mobile app
- **Partners page** - Browse Estonian charities by category (health, education, animals, etc.)
- **Challenges page** - Info about corporate partnership programs
- **About Us page** - Meet our team and see photos

## Getting started (for beginners)

Never coded before? No worries! Here's how to run this website on your computer:

### 1. Install Node.js
Go to [nodejs.org](https://nodejs.org/) and download the version that says "LTS". Install it like any other program.

### 2. Get a code editor
Download [Visual Studio Code](https://code.visualstudio.com/) - it's free and makes coding much easier.

### 3. Download this project
Either clone it with Git or just download the ZIP file and extract it somewhere.

### 4. Open your terminal
- **Windows**: Press Windows key + R, type `cmd`, hit Enter
- **Mac**: Press Cmd + Space, type "Terminal", hit Enter

### 5. Navigate to the project folder
```bash
cd charry-web
```
(Replace "charry-web" with whatever you named the folder)

### 6. Install dependencies
```bash
npm install
```
This downloads everything the website needs to run. Takes a minute or two.

### 7. Start the website
```bash
npm run dev
```

### 8. Open it in your browser
Go to `http://localhost:5173` and you should see the Charry website!

## Testing things out

Once it's running, try:

- Clicking around the navigation menu
- On the Partners page, click the filter buttons to jump between charity categories
- Click "Toeta" on any charity card to see the donation QR code
- On the About Us page, use the arrows to browse through photos
- Try resizing your browser window to see how it looks on mobile

## For developers

The website is built with:
- React 19 + TypeScript
- Vite for building
- CSS Modules for styling
- React Router for navigation

### Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Check code quality
```

### Project structure
```
src/
├── pages/       # Main pages (Home, Partners, etc.)
├── components/  # Reusable stuff (Navbar, modals, etc.)
├── assets/      # Images and fonts
└── data/        # Partner data
```

### Adding new partners

Edit `src/data/cards.ts` - just add a new object to the array with the partner's info. The categories are: "Tervis", "Loomade heaolu", "Laste heaolu", "Loodus ja keskkond", "Haridus", "Tugev ühiskond".

### Adding gallery photos

Drop new images into `src/assets/gallery/` and they'll automatically show up in the photo carousel on the About Us page.

## Need help?

- **Can't install Node.js?** Make sure you're downloading from the official website
- **Terminal won't open?** Google "how to open terminal" + your operating system
- **`npm install` not working?** Try deleting the `node_modules` folder and running it again
- **Website won't load?** Check that the terminal shows the localhost URL and visit that exact address

## Estonian context

This website is made specifically for Estonia - all the text is in Estonian, it features real Estonian charities, and follows local donation practices.

---

Built for Estonia's donation community 🇪🇪