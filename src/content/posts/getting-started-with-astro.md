---
title: Getting Started with Astro
slug: getting-started-with-astro
description: Learn how to build fast, modern websites with Astro
date: 2025-01-15
thumbnail: /images/placeholder.svg
categories:
  - Blog
  - Frontend
tags:
  - Astro
  - Web Development
  - Tutorial
locale: en-US
---

## Introduction

Astro is a modern web framework that helps you build faster websites with less client-side JavaScript. It's perfect for content-focused sites like blogs, documentation, and marketing pages.

## Why Astro?

### 🚀 Fast by Default

Astro generates static HTML by default, which means your site loads incredibly fast. JavaScript is only loaded when needed.

### 🎨 Bring Your Own Framework

Use React, Vue, Svelte, or any other framework you prefer. Astro supports them all!

### 📦 Zero JS by Default

Astro ships zero JavaScript by default. Components are rendered to HTML at build time.

## Getting Started

To create a new Astro project, run:

```bash
npm create astro@latest
```

Follow the prompts to set up your project. You can choose from various templates or start from scratch.

## Project Structure

A typical Astro project looks like this:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
│       └── index.astro
└── package.json
```

## Creating Your First Page

Create a new file in `src/pages/about.astro`:

```astro
---
const pageTitle = "About Me";
---

<html>
  <head>
    <title>{pageTitle}</title>
  </head>
  <body>
    <h1>{pageTitle}</h1>
    <p>Welcome to my Astro site!</p>
  </body>
</html>
```

## Conclusion

Astro is a powerful tool for building modern websites. Its focus on performance and developer experience makes it an excellent choice for your next project.

Happy coding! 🎉
