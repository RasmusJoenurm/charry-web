# Charry Website

A modern website for the Charry mobile donation app - Estonia's contemporary donation platform that enables users to make a positive impact anytime, anywhere.

## About

Charry is an Estonian donation app that aims to make Estonia better, one small good deed at a time. This website serves as the web presence for the mobile application, featuring information about the platform, partners, challenges, and the team.

The site is built with React, TypeScript, and Vite, featuring:
- Multiple pages: Home, Partners, Challenges, and About Us
- Estonian language content
- Custom bird mascot graphics
- Responsive design with modern CSS modules

## Development

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Available Scripts

- **Development server**: `npm run dev`
  - Starts the development server with hot reload
  - Default URL: http://localhost:5173

- **Build for production**: `npm run build`
  - Creates optimized production build in `dist/` folder

- **Preview production build**: `npm run preview`
  - Serves the production build locally for testing

- **Lint code**: `npm run lint`
  - Runs ESLint to check code quality

### Project Structure
```
src/
├── pages/          # Page components (Home, Partners, Us, Challenges)
├── components/     # Reusable components (Navbar, Footer)
├── assets/         # Images, fonts, and static assets
└── App.tsx         # Main application component with routing
```

## Tech Stack
- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS Modules
- **Code Quality**: ESLint with TypeScript support
