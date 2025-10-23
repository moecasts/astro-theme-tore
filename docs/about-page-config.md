# About Page Configuration Guide

## Type Definitions

### Basic Types

```typescript
// Timeline item
interface TimelineItem {
  period: string;      // Time period, e.g., "2024 — Present"
  title: string;       // Position/role title
  company: string;     // Company/organization name
  description: string; // Detailed description
}

// Skill category
interface SkillCategory {
  category: string;    // Category name, e.g., "Frontend", "Backend", "DevOps"
  icon?: string;       // Optional icon (Iconify icon or custom image URL)
  skills: (string | { name: string; icon?: string })[];  // Skill list
}

// Social link
interface SocialLink {
  name: string;        // Platform name, e.g., "GitHub", "LinkedIn"
  url: string;         // Link URL
  icon: string;        // Icon name, e.g., "Github", "Linkedin", "Twitter"
}
```

### Section Types

```typescript
// Hero section - for page header with large title and description
interface HeroSection {
  type: 'hero';
  title: string;
  content: string; // Single paragraph description
}

// Text section - for introduction, explanations, and other text content
interface TextSection {
  type: 'text';
  title: string;
  content: string | string[]; // Single or multiple paragraphs
}

// Skills section - for displaying skill category cards
interface SkillsSection {
  type: 'skills';
  title: string;
  content: SkillCategory[]; // Array of skill categories
}

// List section - for simple bullet point lists
interface ListSection {
  type: 'list';
  title: string;
  content: string[]; // Array of strings
}

// Timeline section - for work experience, education, etc.
interface TimelineSection {
  type: 'timeline';
  title: string;
  content: TimelineItem[];
}

// Social links section - for social media and contact links
interface SocialLinksSection {
  type: 'social';
  title: string;
  description?: string; // Optional description text
  content: SocialLink[];
}

// Separator section - for visual separation between sections
interface SeparatorSection {
  type: 'separator';
}
```

## Configuration Examples

### Complete Configuration

```typescript
about: [
  // 1. Page header - Hero section
  {
    type: 'hero',
    title: 'About Me',
    content: "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces."
  },
  
  // 2. Introduction - Multiple paragraphs
  {
    type: 'text',
    title: 'Introduction',
    content: [
      'First paragraph about your work philosophy.',
      'Second paragraph about current focus.',
      'Third paragraph about past experience.'
    ]
  },
  
  // 3. Skills cards - Using SkillsSection (supports Iconify icons)
  {
    type: 'skills',
    title: 'Skills & Technologies',
    content: [
      {
        category: 'Frontend',
        icon: 'icon-[tabler--code]', // Iconify Tabler icon
        skills: [
          { name: 'React', icon: 'icon-[tabler--brand-react]' },
          { name: 'Next.js', icon: 'icon-[tabler--brand-nextjs]' },
          { name: 'TypeScript', icon: 'icon-[tabler--brand-typescript]' },
          { name: 'Tailwind CSS', icon: 'icon-[tabler--brand-tailwind]' }
        ]
      },
      {
        category: 'Backend',
        icon: 'icon-[tabler--server]',
        skills: [
          { name: 'Node.js', icon: 'icon-[tabler--brand-nodejs]' },
          { name: 'Python', icon: 'icon-[tabler--brand-python]' },
          { name: 'PostgreSQL', icon: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath fill='%23000' d='M22.98 28.875c-4.047 0-5.588-1.058-5.588-2.828a2.21 2.21 0 0 1 2.139-2.3v-.253a1.97 1.97 0 0 1-1.541-2c0-1.242 1.057-1.863 2.207-2.116v-.092a3.62 3.62 0 0 1-2.184-3.495c0-2.438 1.724-4.07 4.967-4.07a6.7 6.7 0 0 1 2.092.299v-.391a1.534 1.534 0 0 1 1.702-1.748h1.862v2.254h-2.552v.321a3.59 3.59 0 0 1 1.862 3.335c0 2.414-1.702 4.024-4.967 4.024a7.4 7.4 0 0 1-1.84-.207a1.23 1.23 0 0 0-.85 1.08c0 .599.506.897 1.563.897h3.22c2.943 0 4.208 1.265 4.208 3.427c0 2.506-1.702 3.863-6.3 3.863m1.494-4.737h-4.093a1.47 1.47 0 0 0-.621 1.242c0 .92.69 1.472 2.53 1.472h1.47c1.91 0 2.76-.483 2.76-1.495c0-.76-.551-1.22-2.046-1.22zm.667-8.163v-.391c0-1.219-.759-1.84-2.161-1.84s-2.162.62-2.162 1.84v.39c0 1.196.759 1.84 2.162 1.84s2.16-.644 2.16-1.84zM4.603 24V7.95h7.22c2.967 0 4.76 2 4.76 4.967c0 2.99-1.793 4.967-4.76 4.967H7.639V24zm3.036-8.738h3.909a1.69 1.69 0 0 0 1.885-1.817v-1.058a1.672 1.672 0 0 0-1.885-1.793h-3.91z'/%3E%3C/svg%3E")` },
          { name: 'GraphQL', icon: 'icon-[tabler--brand-graphql]' }
        ]
      },
      {
        category: 'DevOps',
        icon: 'icon-[tabler--cloud]',
        skills: [
          { name: 'Docker', icon: 'icon-[tabler--brand-docker]' },
          { name: 'AWS', icon: 'icon-[tabler--brand-aws]' },
          { name: 'Git', icon: 'icon-[tabler--brand-git]' }
        ]
      }
    ]
  },
  
  // 4. Simple list
  {
    type: 'list',
    title: 'Interests',
    content: [
      'Open source contribution',
      'Technical writing',
      'Photography'
    ]
  },
  
  // 5. Work experience - Using TimelineItem
  {
    type: 'timeline',
    title: 'Experience',
    content: [
      {
        period: '2024 — Present',
        title: 'Senior Frontend Engineer',
        company: 'Tech Company',
        description: 'Build and maintain critical components...'
      },
      {
        period: '2022 — 2024',
        title: 'Full Stack Developer',
        company: 'Digital Agency',
        description: 'Developed and shipped highly interactive web applications...'
      }
    ]
  },
  
  // 6. Social links - Using SocialLink
  {
    type: 'social',
    title: "Let's Connect",
    description: "I'm always excited to connect with fellow creators, collaborators, and interesting people. Feel free to reach out on any of these platforms!",
    content: [
      {
        name: 'GitHub',
        url: 'https://github.com/yourusername',
        icon: 'Github'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/yourusername',
        icon: 'Linkedin'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/yourusername',
        icon: 'Twitter'
      },
      {
        name: 'Email',
        url: 'mailto:your.email@example.com',
        icon: 'Mail'
      }
    ]
  }
]
```

## Design Features

### Icon System

#### Category Icons

Two methods are supported:

1. **Iconify Icons** (Recommended)

   ```typescript
   icon: 'icon-[tabler--code]'    // Tabler Code icon
   icon: 'icon-[tabler--server]'  // Tabler Server icon
   icon: 'icon-[tabler--cloud]'   // Tabler Cloud icon
   ```

   You can use any Iconify icon set, for example:
   - Tabler: `icon-[tabler--home]`
   - Material Design: `icon-[mdi--home]`
   - Font Awesome: `icon-[fa--home]`

   Find icons at: <https://icon-sets.iconify.design/>

2. **Custom Image URLs**

   ```typescript
   // HTTP(S) URL
   icon: 'https://cdn.example.com/icon.svg'
   
   // Data URL
   icon: 'data:image/svg+xml,%3Csvg...%3C/svg%3E'
   
   // CSS url() format
   icon: 'url("data:image/svg+xml,%3Csvg...%3C/svg%3E")'
   ```

#### Skill Icons

Each skill can also have its own icon:

```typescript
skills: [
  'React',  // Plain string, no icon
  { 
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  }
]
```

#### Social Link Icons

Supported icons (using Iconify Tabler icons):

- `Github` - GitHub icon (`icon-[tabler--brand-github]`)
- `Linkedin` - LinkedIn icon (`icon-[tabler--brand-linkedin]`)
- `Twitter` - Twitter/X icon (`icon-[tabler--brand-twitter]`)
- `Instagram` - Instagram icon (`icon-[tabler--brand-instagram]`)
- `Facebook` - Facebook icon (`icon-[tabler--brand-facebook]`)
- `Youtube` - YouTube icon (`icon-[tabler--brand-youtube]`)
- `Mail` - Email icon (`icon-[tabler--mail]`)
- `Globe` - Website/globe icon (`icon-[tabler--world]`) (default)

### Responsive Layout

- **Skill Cards**: 1 column on mobile, 3 columns on desktop
- **Max Width**: 4xl (56rem), centered
- **Auto Separators**: Automatic separators between sections

### Typography Optimization

- Uses `text-balance` for optimized title line breaks
- Uses `text-pretty` for optimized paragraph typography
- Semantic color variables with perfect dark mode support

## Usage

Configure the `about` field in `src/config/index.ts`, and the component will automatically render the corresponding UI based on the type.

### Single Language Configuration

```typescript
defineConfig({
  about: [
    { type: 'hero', title: 'About Me', content: '...' },
    // ... other configurations
  ]
});
```

### Multi-language Configuration

```typescript
defineConfig({
  about: {
    'en-US': [
      { type: 'hero', title: 'About Me', content: 'I am a developer...' },
      { type: 'text', title: 'Introduction', content: ['...'] }
    ],
    'zh-CN': [
      { type: 'hero', title: '关于我', content: '我是一名开发者...' },
      { type: 'text', title: '简介', content: ['...'] }
    ]
  }
});
```
