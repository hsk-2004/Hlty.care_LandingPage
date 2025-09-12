# HLTY - India's Leading Childhood Wellness Platform

A modern, responsive web application built with Next.js that serves as India's leading childhood wellness platform, helping parents raise healthier, happier children through playful tools, joyful routines, and habits that heal.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)](#license)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Locally](#running-locally)
  - [Build Instructions](#build-instructions)
  - [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Contributing Guidelines](#contributing-guidelines)
- [License](#license)
- [Contact](#contact)

## Features

- 🏠 **Homepage** - Engaging landing page with hero section, testimonials, and company information
- 🧠 **Interactive Quiz Platform** - Comprehensive quiz system with registration, countdown timers, and prizes
- 👥 **About Us** - Team showcase with advisors, partners, and company mission
- 🔬 **Science Says** - Educational content about childhood wellness and health
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- ⚡ **Performance Optimized** - Built with Next.js 15 and Turbopack for fast development and production builds
- 🎨 **Modern UI/UX** - Beautiful animations with Framer Motion
- 📧 **Email Integration** - Contact forms with Resend API
- 🔍 **SEO Optimized** - Comprehensive meta tags and Open Graph support

## Tech Stack

### Frontend
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5.0** - Type safety
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library
- **Lucide React 0.542.0** - Icon library

### Development Tools
- **ESLint 9** - Code linting
- **PostCSS 8.5.6** - CSS processing
- **Turbopack** - Fast bundler for development and production

### Backend & Services
- **Resend 6.0.3** - Email API service
- **Next.js API Routes** - Serverless functions

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/hlthy-fe.git
   cd hlthy-fe
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

### Running Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit files. The `pages` directory is mapped to `/` routes.

### Build Instructions

**Build for production:**
```bash
npm run build
# or
yarn build
# or
pnpm build
```

**Start production server:**
```bash
npm run start
# or
yarn start
# or
pnpm start
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key_here

# Next.js
NEXT_PUBLIC_SITE_URL=https://hlty.in
NEXT_PUBLIC_APP_ENV=production

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Project Structure

```
hlthy-fe/
├── public/                     # Static assets
│   ├── images/                # Image assets organized by section
│   │   ├── about-us/         # About us page images
│   │   ├── company/          # Team and partner images
│   │   ├── home/             # Homepage images
│   │   └── quiz/             # Quiz page images
│   └── *.png, *.svg          # Root level assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── about-us/         # About us page
│   │   ├── api/              # API routes
│   │   │   └── send-email/   # Email sending endpoint
│   │   ├── quiz/             # Quiz page and layout
│   │   ├── science-says/     # Science content page
│   │   ├── privacy-policy/   # Privacy policy page
│   │   ├── terms-of-service/ # Terms of service page
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Homepage
│   ├── components/           # Reusable components
│   │   ├── About-Us/         # About us specific components
│   │   ├── Home/             # Homepage specific components
│   │   ├── Quiz/             # Quiz specific components
│   │   ├── Science-Says/     # Science content components
│   │   └── *.tsx             # Shared components
│   └── contexts/             # React contexts
│       └── MobileMenuContext.tsx
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production with Turbopack |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint to check for code issues |


## Guidelines

Please follow these guidelines:

### Branch Naming
- `feature/description` - For new features
- `fix/description` - For bug fixes
- `docs/description` - For documentation updates
- `refactor/description` - For code refactoring

### Pull Request Process
1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Run `npm run lint` to check for issues
5. Test your changes thoroughly
6. Submit a pull request with a clear description

### Code Style
- Follow the existing code style and patterns
- Use TypeScript for type safety
- Write meaningful commit messages
- Ensure all components are responsive
- Test on multiple devices and browsers

## License

This project is private and proprietary. All rights reserved.

## Contact

**HLTY Beings**
- Website: [https://hlty.in](https://hlty.in)
- Email: [Contact us through the website](https://hlty.in)

### Team
- **Suraj Prasad** - Hlty Founder
- **Ankita Dey** - Creative Experience Lead

### Partners
- **Solutionec** - Knowledge, Clinical & Tech Partner
- **Author Nest** - Marketing Partner  
- **SkyForge System Solutions** - Tech Partner
- **Quizarre** - Quiz Partner

---

Built with ❤️ by the HLTY team to help children grow healthier, happier, and stronger.