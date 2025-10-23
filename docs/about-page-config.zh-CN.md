# About Page 配置指南

## 类型定义

### 基础类型

```typescript
// 时间线项目
interface TimelineItem {
  period: string;      // 时间段，如 "2024 — Present"
  title: string;       // 职位/角色标题
  company: string;     // 公司/机构名称
  description: string; // 详细描述
}

// 技能分类
interface SkillCategory {
  category: string;    // 分类名称，如 "Frontend", "Backend", "DevOps"
  icon?: string;       // 可选图标（Iconify 图标或自定义图片 URL）
  skills: (string | { name: string; icon?: string })[];  // 技能列表
}

// 社交链接
interface SocialLink {
  name: string;        // 平台名称，如 "GitHub", "LinkedIn"
  url: string;         // 链接地址
  icon: string;        // 图标名称，如 "Github", "Linkedin", "Twitter"
}
```

### Section 类型

```typescript
// Hero 区块 - 用于页面头部，大标题和描述
interface HeroSection {
  type: 'hero';
  title: string;
  content: string; // 单段描述文本
}

// 文本区块 - 用于介绍、说明等文本内容
interface TextSection {
  type: 'text';
  title: string;
  content: string | string[]; // 单段或多段文本
}

// 技能区块 - 用于展示技能分类卡片
interface SkillsSection {
  type: 'skills';
  title: string;
  content: SkillCategory[]; // 技能分类数组
}

// 列表区块 - 用于普通项目符号列表
interface ListSection {
  type: 'list';
  title: string;
  content: string[]; // 字符串数组
}

// 时间线区块 - 用于工作经历、教育背景等
interface TimelineSection {
  type: 'timeline';
  title: string;
  content: TimelineItem[];
}

// 社交链接区块 - 用于展示社交媒体和联系方式
interface SocialLinksSection {
  type: 'social';
  title: string;
  description?: string; // 可选的描述文本
  content: SocialLink[];
}

// 分隔线区块 - 用于区块之间的视觉分隔
interface SeparatorSection {
  type: 'separator';
}
```

## 配置示例

### 完整配置

```typescript
about: [
  // 1. 页面头部 - Hero 区块
  {
    type: 'hero',
    title: 'About Me',
    content: "I'm a developer passionate about crafting accessible, pixel-perfect user interfaces."
  },
  
  // 2. 介绍 - 多段文本
  {
    type: 'text',
    title: 'Introduction',
    content: [
      'First paragraph about your work philosophy.',
      'Second paragraph about current focus.',
      'Third paragraph about past experience.'
    ]
  },
  
  // 3. 技能卡片 - 使用 SkillsSection（支持 Iconify 图标）
  {
    type: 'skills',
    title: 'Skills & Technologies',
    content: [
      {
        category: 'Frontend',
        icon: 'icon-[tabler--code]', // Iconify Tabler 图标
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
  
  // 4. 普通列表
  {
    type: 'list',
    title: 'Interests',
    content: [
      'Open source contribution',
      'Technical writing',
      'Photography'
    ]
  },
  
  // 5. 工作经历 - 使用 TimelineItem
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
  
  // 6. 社交链接 - 使用 SocialLink
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

## 设计特点

### 图标系统

#### Category 图标

支持两种方式：

1. **Iconify 图标**（推荐）

   ```typescript
   icon: 'icon-[tabler--code]'    // Tabler Code 图标
   icon: 'icon-[tabler--server]'  // Tabler Server 图标
   icon: 'icon-[tabler--cloud]'   // Tabler Cloud 图标
   ```

   可以使用任何 Iconify 图标集，例如：
   - Tabler: `icon-[tabler--home]`
   - Material Design: `icon-[mdi--home]`
   - Font Awesome: `icon-[fa--home]`

   查找图标：<https://icon-sets.iconify.design/>

2. **自定义图片 URL**

   ```typescript
   // HTTP(S) URL
   icon: 'https://cdn.example.com/icon.svg'
   
   // Data URL
   icon: 'data:image/svg+xml,%3Csvg...%3C/svg%3E'
   
   // CSS url() 格式
   icon: 'url("data:image/svg+xml,%3Csvg...%3C/svg%3E")'
   ```

#### Skill 图标

每个技能也可以单独设置图标：

```typescript
skills: [
  'React',  // 纯字符串，无图标
  { 
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  }
]
```

#### 社交链接图标

支持的图标（使用 Iconify Tabler 图标）：

- `Github` - GitHub 图标 (`icon-[tabler--brand-github]`)
- `Linkedin` - LinkedIn 图标 (`icon-[tabler--brand-linkedin]`)
- `Twitter` - Twitter/X 图标 (`icon-[tabler--brand-twitter]`)
- `Instagram` - Instagram 图标 (`icon-[tabler--brand-instagram]`)
- `Facebook` - Facebook 图标 (`icon-[tabler--brand-facebook]`)
- `Youtube` - YouTube 图标 (`icon-[tabler--brand-youtube]`)
- `Mail` - 邮件图标 (`icon-[tabler--mail]`)
- `Globe` - 网站/全球图标 (`icon-[tabler--world]`)（默认）

### 响应式布局

- **技能卡片**：移动端 1 列，桌面端 3 列
- **最大宽度**：4xl (56rem)，居中对齐
- **自动分隔线**：区块之间自动添加分隔线

### 排版优化

- 使用 `text-balance` 优化标题换行
- 使用 `text-pretty` 优化段落排版
- 语义化颜色变量，完美支持暗色模式

## 使用方式

在 `src/config/index.ts` 中配置 `about` 字段即可，组件会自动根据类型渲染对应的 UI。

### 单语言配置

```typescript
defineConfig({
  about: [
    { type: 'hero', title: 'About Me', content: '...' },
    // ... 其他配置
  ]
});
```

### 多语言配置

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
