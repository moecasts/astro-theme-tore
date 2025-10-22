---
title: Astro Theme Tore
slug: astro-theme-tore
description: A modern, feature-rich Astro theme for blogs and portfolios with i18n support
date: 2025-01-20
thumbnail: /images/placeholder.svg
demo: https://astro-theme-tore.vercel.app
github: https://github.com/moecasts/astro-theme-tore
tags:
  - Astro
  - React
  - TypeScript
  - Tailwind CSS
pin: true
featured: true
locale: en-US
---

## Project Overview

**Astro Theme Tore** is a modern, feature-rich theme built with Astro, React, and Tailwind CSS. It's designed for developers and content creators who want a fast, beautiful, and highly customizable website.

## Key Features

### 🚀 Performance First

- **Static Site Generation**: Lightning-fast page loads
- **Optimized Images**: Automatic image optimization
- **Minimal JavaScript**: Only load what's necessary
- **Perfect Lighthouse Scores**: 100/100 across all metrics

### 🌍 Internationalization (i18n)

- **Multi-language Support**: Built-in support for multiple languages
- **Automatic Language Detection**: Detects user's preferred language
- **Easy Translation Management**: Simple JSON-based translations

### 📝 Content Management

- **MDX Support**: Write content in Markdown with React components
- **Content Collections**: Type-safe content with Zod schemas
- **Categories & Tags**: Organize your content effectively
- **Full-text Search**: Powered by Pagefind

### 🎨 Modern Design

- **Responsive Layout**: Works perfectly on all devices
- **Dark Mode**: Automatic theme switching
- **Customizable**: Easy to customize colors and styles
- **Accessible**: WCAG 2.1 AA compliant

## Technical Stack

### Frontend

- **Astro 5.x**: Modern static site generator
- **React 19**: UI components and interactivity
- **Tailwind CSS 4**: Utility-first CSS framework
- **TypeScript**: Type-safe development

### Features

- **RSS Feed**: Automatic RSS feed generation
- **Sitemap**: SEO-friendly sitemap
- **PWA Support**: Progressive Web App capabilities
- **Analytics Ready**: Easy integration with analytics tools

## Project Structure

```
/
├── public/
│   ├── images/
│   └── locales/
├── src/
│   ├── components/
│   │   ├── hoc/
│   │   ├── layouts/
│   │   ├── portfolio/
│   │   └── ui/
│   ├── content/
│   │   ├── posts/
│   │   └── portfolios/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── astro.config.ts
```

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/moecasts/astro-theme-tore.git

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Configuration

Edit `src/config/index.ts` to customize your site:

```typescript
defineConfig({
  site: {
    title: 'Your Site Title',
    description: 'Your site description',
    author: 'Your Name',
    url: 'https://your-site.com',
  },
  profile: {
    name: 'Your Name',
    avatar: '/images/avatar.jpg',
    bio: 'Your bio',
    email: 'your@email.com',
  },
  // ... more configuration
});
```

## Content Creation

### Writing Blog Posts

Create a new file in `src/content/posts/`:

```markdown
---
title: Your Post Title
slug: your-post-slug
description: Post description
date: 2025-01-20
categories:
  - Blog
tags:
  - Tutorial
---

Your content here...
```

### Adding Portfolio Items

Create a new file in `src/content/portfolios/`:

```markdown
---
title: Project Name
description: Project description
date: 2025-01-20
demo: https://demo.com
github: https://github.com/user/repo
tags:
  - React
  - TypeScript
featured: true
---

Project details...
```

## Customization

### Styling

The theme uses Tailwind CSS for styling. Customize colors in `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
      },
    },
  },
};
```

### Components

All UI components are in `src/components/ui/` and can be easily customized.

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build command
pnpm build

# Publish directory
dist
```

### GitHub Pages

Configure `.github/workflows/deploy.yml` for automatic deployment.

## Performance

- **First Contentful Paint**: < 0.5s
- **Time to Interactive**: < 1s
- **Lighthouse Score**: 100/100
- **Bundle Size**: < 50KB (gzipped)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

Contributions are welcome! Please read the contributing guidelines before submitting a PR.

## License

MIT License - feel free to use this theme for your projects!

## Support

- 📧 Email: <your@email.com>
- 🐛 Issues: [GitHub Issues](https://github.com/moecasts/astro-theme-tore/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/moecasts/astro-theme-tore/discussions)

## Acknowledgments

Built with ❤️ using:

- [Astro](https://astro.build)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)

---

**Star ⭐ this repository if you find it helpful!**
