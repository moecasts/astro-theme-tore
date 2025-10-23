import { defineConfig } from './theme';

export * from './theme';

/**
 * Custom config
 *
 * Note: site, profile, and menu support both direct config and locale-specific config:
 *
 * 1. Direct config (all locales use the same config):
 *    site: { title: 'My Site', ... }
 *
 * 2. Locale-specific config:
 *    site: {
 *      'zh-CN': { title: '我的网站', ... },
 *      'en-US': { title: 'My Site', ... }
 *    }
 */
defineConfig({
  /**
   * Site basic info
   */
  site: {
    title: 'Astro Theme Tore',
    description: 'A modern, feature-rich Astro theme for blogs and portfolios',
    keywords: ['Astro', 'Blog', 'Portfolio', 'Theme', 'Modern', 'i18n'],
    author: 'Your Name',
    language: 'en-US',
    timezone: 'UTC',
    url: 'https://your-site.com',
    root: '/',
    separator: ' - ',
    copyright: '© 2025 • Your Name',
  },

  profile: {
    name: 'Your Name',
    avatar: '/images/placeholder.svg',
    bio: 'A passionate developer and content creator',
    email: 'your.email@example.com',
    github: 'https://github.com/yourusername',
  },

  /**
   * Category and tag config
   */
  menu: [
    {
      id: 'home',
      href: '/',
      name: 'Home',
      icon: 'icon-[tabler--home-2]',
    },
    {
      id: 'blog',
      href: '/categories/blog',
      name: 'Blog',
      icon: 'icon-[tabler--article]',
    },
    {
      id: 'portfolios',
      href: '/portfolios',
      name: 'Portfolios',
      icon: 'icon-[tabler--briefcase]',
    },
    {
      id: 'about',
      href: '/about',
      name: 'About',
      icon: 'icon-[tabler--user]',
    },
    {
      id: 'tech',
      name: 'Tech',
      icon: 'icon-[tabler--code]',
      children: [
        {
          id: 'frontend',
          href: '/categories/frontend',
          name: 'Frontend',
          icon: 'icon-[tabler--brand-react]',
        },
        {
          id: 'backend',
          href: '/categories/backend',
          name: 'Backend',
          icon: 'icon-[tabler--server]',
        },
        {
          id: 'devops',
          href: '/categories/devops',
          name: 'DevOps',
          icon: 'icon-[tabler--cloud]',
        },
      ],
    },
  ],

  /**
   * About me config
   */
  about: [
    {
      type: 'hero',
      title: 'About Me',
      content:
        "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering.",
    },
    {
      type: 'text',
      title: 'Introduction',
      content: [
        'My favorite work lies at the intersection of **design and development**, creating experiences that not only look great but are meticulously built for performance and usability.',
        "Currently, I'm focused on building modern web applications using cutting-edge technologies. I contribute to open-source projects and enjoy sharing my knowledge through blog posts and tutorials.",
        "In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios.",
      ],
    },
    { type: 'separator' },
    {
      type: 'skills',
      title: 'Skills & Technologies',
      content: [
        {
          category: 'Frontend',
          icon: 'icon-[tabler--code]', // Iconify Tabler icons
          skills: [
            {
              name: 'React',
              icon: 'icon-[tabler--brand-react]',
            },
            {
              name: 'Next.js',
              icon: 'icon-[tabler--brand-nextjs]',
            },
            {
              name: 'TypeScript',
              icon: 'icon-[tabler--brand-typescript]',
            },
            {
              name: 'Tailwind CSS',
              icon: 'icon-[tabler--brand-tailwind]',
            },
            {
              name: 'Vue.js',
              icon: 'icon-[tabler--brand-vue]',
            },
          ],
        },
        {
          category: 'Backend',
          icon: 'icon-[tabler--server]',
          skills: [
            {
              name: 'Node.js',
              icon: 'icon-[tabler--brand-nodejs]',
            },
            {
              name: 'Python',
              icon: 'icon-[tabler--brand-python]',
            },
            {
              name: 'PostgreSQL',
              icon: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000' d='M22.98 28.875c-4.047 0-5.588-1.058-5.588-2.828a2.21 2.21 0 0 1 2.139-2.3v-.253a1.97 1.97 0 0 1-1.541-2c0-1.242 1.057-1.863 2.207-2.116v-.092a3.62 3.62 0 0 1-2.184-3.495c0-2.438 1.724-4.07 4.967-4.07a6.7 6.7 0 0 1 2.092.299v-.391a1.534 1.534 0 0 1 1.702-1.748h1.862v2.254h-2.552v.321a3.59 3.59 0 0 1 1.862 3.335c0 2.414-1.702 4.024-4.967 4.024a7.4 7.4 0 0 1-1.84-.207a1.23 1.23 0 0 0-.85 1.08c0 .599.506.897 1.563.897h3.22c2.943 0 4.208 1.265 4.208 3.427c0 2.506-1.702 3.863-6.3 3.863m1.494-4.737h-4.093a1.47 1.47 0 0 0-.621 1.242c0 .92.69 1.472 2.53 1.472h1.47c1.91 0 2.76-.483 2.76-1.495c0-.76-.551-1.22-2.046-1.22zm.667-8.163v-.391c0-1.219-.759-1.84-2.161-1.84s-2.162.62-2.162 1.84v.39c0 1.196.759 1.84 2.162 1.84s2.16-.644 2.16-1.84zM4.603 24V7.95h7.22c2.967 0 4.76 2 4.76 4.967c0 2.99-1.793 4.967-4.76 4.967H7.639V24zm3.036-8.738h3.909a1.69 1.69 0 0 0 1.885-1.817v-1.058a1.672 1.672 0 0 0-1.885-1.793h-3.91z'/%3E%3C/svg%3E")`,
            },
            {
              name: 'MongoDB',
              icon: 'icon-[tabler--brand-mongodb]',
            },
            {
              name: 'GraphQL',
              icon: 'icon-[tabler--brand-graphql]',
            },
          ],
        },
        {
          category: 'DevOps',
          icon: 'icon-[tabler--cloud]',
          skills: [
            {
              name: 'Docker',
              icon: 'icon-[tabler--brand-docker]',
            },
            {
              name: 'AWS',
              icon: 'icon-[tabler--brand-aws]',
            },
            {
              name: 'Vercel',
              icon: 'icon-[tabler--brand-vercel]',
            },
            {
              name: 'CI/CD',
              icon: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cpath fill='%23000' d='M23.53 19.81a7.5 7.5 0 0 1-1.65-.18a10.5 10.5 0 0 1 .72 2.13h.93a9.5 9.5 0 0 0 3-.49l-.93-1.81a7.7 7.7 0 0 1-2.07.35m-5.17-1.94l-.36-.38a7.4 7.4 0 0 1-2.2-5.92a7.3 7.3 0 0 1 1.54-4L17.26 9a1 1 0 0 0 .91 1h.09a1 1 0 0 0 1-.91L19.6 5a1 1 0 0 0-.29-.79a1 1 0 0 0-.79-.21l-4.09.35a1 1 0 0 0 .17 2l1.29-.11a9.45 9.45 0 0 0-2.05 5.32a9.28 9.28 0 0 0 2.67 7.26l.31.37a7.33 7.33 0 0 1 2.06 4.91a7.4 7.4 0 0 1-.26 2.47l1.8.91a8.8 8.8 0 0 0 .45-3.51a9.28 9.28 0 0 0-2.51-6.1m14.04.04l-1.21.09a9.65 9.65 0 0 0-7.66-15.55a9.3 9.3 0 0 0-3 .49l.91 1.8a7.67 7.67 0 0 1 9.76 7.39a7.58 7.58 0 0 1-1.65 4.72l.1-1.54a1 1 0 1 0-2-.13l-.28 4.08a1 1 0 0 0 .31.78a.94.94 0 0 0 .69.28h.1l4.08-.42a1 1 0 0 0 .9-1.1a1 1 0 0 0-1.05-.89M4.07 20.44h.08l4.09-.35a1 1 0 1 0-.17-2l-1.39.12a7.63 7.63 0 0 1 4.52-1.49a8 8 0 0 1 1.63.18a10.2 10.2 0 0 1-.71-2.13h-.92a9.66 9.66 0 0 0-5.9 2l.12-1.31a1 1 0 0 0-.92-1.08a1 1 0 0 0-1.08.91l-.35 4.08a1 1 0 0 0 1 1.08Zm14.35 7.79l-4.09.27a1 1 0 0 0 .13 2l1.54-.11a7.71 7.71 0 0 1-12.54-6a7.6 7.6 0 0 1 .29-2L2 21.46a9.6 9.6 0 0 0-.47 2.95A9.7 9.7 0 0 0 17.19 32l-.12 1.18a1 1 0 0 0 .89 1.1h.11a1 1 0 0 0 1-.9l.42-4.06a1 1 0 0 0-1.06-1.1Z'/%3E%3C/svg%3E")`,
            },
            {
              name: 'Git',
              icon: 'icon-[tabler--brand-git]',
            },
          ],
        },
      ],
    },
    { type: 'separator' },
    {
      type: 'timeline',
      title: 'Experience',
      content: [
        {
          period: '2024 — Present',
          title: 'Senior Frontend Engineer',
          company: {
            name: 'Tech Company',
            icon: 'icon-[tabler--building]',
          },
          description: [
            'Build and maintain critical components used to construct the frontend, across the whole product.',
            'Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.',
            'Lead technical discussions and mentor junior developers on modern frontend technologies.',
          ],
        },
        {
          period: '2022 — 2024',
          title: 'Full Stack Developer',
          company: {
            name: 'Digital Agency',
            icon: 'icon-[tabler--rocket]',
          },
          description:
            'Developed and shipped highly interactive web applications for clients including startups and Fortune 500 companies. Specialized in React, Node.js, and cloud infrastructure.',
        },
        {
          period: '2020 — 2022',
          title: 'Frontend Developer',
          company: 'Startup',
          description:
            "Built responsive web applications and collaborated with designers to create pixel-perfect implementations. Contributed to the company's design system and component library.",
        },
      ],
    },
    {
      type: 'social',
      title: "Let's Connect",
      description:
        "I'm always excited to connect with **fellow creators**, collaborators, and interesting people. Feel free to reach out on any of these platforms!",
      content: [
        {
          name: 'GitHub',
          url: 'https://github.com/yourusername',
          icon: 'Github',
        },
        {
          name: 'LinkedIn',
          url: 'https://linkedin.com/in/yourusername',
          icon: 'Linkedin',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/yourusername',
          icon: 'Twitter',
        },
        {
          name: 'Email',
          url: 'mailto:your.email@example.com',
          icon: 'Mail',
        },
      ],
    },
  ],

  /**
   * Metadata config
   */
  meta: {
    metaGenerator: true,
  },

  /**
   * Date time format config
   */
  datetime: {
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'HH:mm:ss',
    updatedOption: 'mtime',
  },

  /**
   * Pagination config
   */
  pagination: {
    pageSize: 10,
    orderBy: '-date',
    prefix: 'page',
  },
});
