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
