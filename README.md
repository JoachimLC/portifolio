# Personal Portfolio Website

A modern, tech-brutalist portfolio website built with React, JavaScript, and Sass. This website serves as a digital business card and showcases my technical skills, projects, and experience.

## Features

- Modern, tech-brutalist design
- Responsive layout for all devices
- Smooth scrolling navigation
- Animated components using Framer Motion
- Scroll animations with AOS
- Contact section with social links
- Project showcase with technical details
- Experience and education sections

## Tech Stack

- React
- JavaScript
- Sass
- Framer Motion
- AOS (Animate On Scroll)
- React Icons
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
├── components/         # React components
├── styles/            # Sass styles
│   ├── components/    # Component-specific styles
│   ├── _variables.scss
│   └── main.scss
├── assets/            # Static assets
└── App.jsx           # Main application component
```

## Customization

1. Update personal information in the respective components
2. Replace placeholder images in the `src/assets/images` directory
3. Modify the color scheme in `src/styles/_variables.scss`
4. Update social media links in the Contact component

## Deployment

The website can be easily deployed to platforms like Netlify or Vercel:

1. Push your code to a GitHub repository
2. Connect the repository to your preferred hosting platform
3. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## License

This project is licensed under the MIT License - see the LICENSE file for details.
