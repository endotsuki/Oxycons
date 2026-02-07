# @endo/oxycons Integration Guide

This guide covers different ways to integrate Oxycons into your React projects.

## Table of Contents

1. [Next.js Integration](#nextjs-integration)
2. [React Integration](#react-integration)
3. [TypeScript Support](#typescript-support)
4. [Custom Icon Setup](#custom-icon-setup)
5. [Performance Optimization](#performance-optimization)
6. [Troubleshooting](#troubleshooting)

## Next.js Integration

### 1. Installation

```bash
npm install @endo/oxycons
```

### 2. Basic Usage

```tsx
// app/page.tsx
import OxyIcons from '@endo/oxycons'

export default function Home() {
  return (
    <main>
      <button className="flex items-center gap-2">
        <OxyIcons.home size={24} />
        Home
      </button>
    </main>
  )
}
```

### 3. Using with App Router

```tsx
// app/layout.tsx
import OxyIcons from '@endo/oxycons'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <header className="flex items-center gap-4">
          <OxyIcons.home size={24} />
          <h1>My App</h1>
        </header>
        {main}
      </body>
    </html>
  )
}
```

### 4. Server Components

```tsx
// app/components/navigation.tsx
import OxyIcons from '@endo/oxycons'

export function Navigation() {
  return (
    <nav>
      <OxyIcons.menu size={24} />
    </nav>
  )
}
```

## React Integration

### 1. Create React App

```bash
npm install @endo/oxycons
```

```tsx
// src/App.tsx
import OxyIcons from '@endo/oxycons'

function App() {
  return (
    <div>
      <OxyIcons.home size={24} />
    </div>
  )
}

export default App
```

### 2. Vite

```bash
npm install @endo/oxycons
```

```tsx
// src/main.tsx
import OxyIcons from '@endo/oxycons'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)
```

## TypeScript Support

### 1. Full Type Support

```tsx
import OxyIcons from '@endo/oxycons'
import type { IconProps } from '@endo/oxycons'

interface MyComponentProps extends IconProps {
  label: string
}

function MyComponent({ label, ...iconProps }: MyComponentProps) {
  return (
    <button className="flex items-center gap-2">
      <OxyIcons.home {...iconProps} />
      {label}
    </button>
  )
}
```

### 2. Icon Metadata Types

```tsx
import { searchIcons, getIconsByCategory } from '@endo/oxycons'
import type { IconMetadata } from '@endo/oxycons'

function IconList() {
  const icons: IconMetadata[] = searchIcons('arrow')
  
  return (
    <ul>
      {icons.map((icon) => (
        <li key={icon.name}>{icon.name}</li>
      ))}
    </ul>
  )
}
```

## Custom Icon Setup

### 1. Adding SVG Icons

1. Create `public/icons/` directory
2. Add your SVG files
3. Run the generator:

```bash
npm run generate:icons
```

This will create `lib/icons/generated-icons.ts`

### 2. Merging Custom and Built-in Icons

```tsx
// lib/icons/all-icons.ts
import { ICON_DATA } from '@endo/oxycons'
import { GENERATED_ICONS } from './generated-icons'

export const ALL_ICONS = {
  ...ICON_DATA,
  ...GENERATED_ICONS,
}
```

```tsx
// components/my-icon.tsx
import { createIcon } from '@endo/oxycons'
import { ALL_ICONS } from '@/lib/icons/all-icons'

const MyIcons = createIcons(ALL_ICONS)

export function MyIcon({ name }: { name: keyof typeof MyIcons }) {
  const Icon = MyIcons[name]
  return <Icon size={24} />
}
```

### 3. Creating Custom Icon Components

```tsx
// lib/icons/custom.tsx
import { createIcon } from '@endo/oxycons'

export const CustomIcon = createIcon({
  name: 'custom',
  viewBox: '0 0 24 24',
  path: 'M12 2L2 20h20L12 2z',
  categories: ['custom'],
  keywords: ['custom', 'icon'],
})
```

## Performance Optimization

### 1. Tree-Shaking

Import only what you need:

```tsx
// ❌ Avoid - imports all icons
import OxyIcons from '@endo/oxycons'

// ✅ Better - imports only needed
import { createIcon } from '@endo/oxycons'
import { ICON_DATA } from '@endo/oxycons'

const HomeIcon = createIcon(ICON_DATA.home)
```

### 2. Dynamic Imports

```tsx
import { lazy, Suspense } from 'react'
import OxyIcons from '@endo/oxycons'

const IconLibrary = lazy(() => import('@endo/oxycons'))

export function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <IconLibrary />
    </Suspense>
  )
}
```

### 3. Icon Sprite/Symbol Approach

For applications with many icons, consider generating an SVG sprite:

```bash
npm run generate:icons:sprite
```

```tsx
// components/sprite-icon.tsx
interface SpriteIconProps {
  id: string
  size?: number
}

export function SpriteIcon({ id, size = 24 }: SpriteIconProps) {
  return (
    <svg width={size} height={size} className="inline-block">
      <use href={`/icons.svg#${id}`} />
    </svg>
  )
}
```

## Styling

### 1. Tailwind CSS

```tsx
<OxyIcons.home 
  size={24} 
  className="text-blue-500 hover:text-blue-700 dark:text-blue-400"
/>
```

### 2. CSS Modules

```tsx
// styles/icons.module.css
.home {
  color: #3b82f6;
  transition: color 0.2s;
}

.home:hover {
  color: #1e40af;
}
```

```tsx
// components/icon.tsx
import styles from '@/styles/icons.module.css'
import OxyIcons from '@endo/oxycons'

export function HomeIcon() {
  return <OxyIcons.home size={24} className={styles.home} />
}
```

### 3. CSS-in-JS

```tsx
import styled from 'styled-components'
import OxyIcons from '@endo/oxycons'

const StyledHome = styled(OxyIcons.home)`
  color: #3b82f6;
  transition: color 0.2s;

  &:hover {
    color: #1e40af;
  }
`

export function HomeIcon() {
  return <StyledHome size={24} />
}
```

## Theming

### 1. Dark Mode Support

```tsx
// components/themed-icon.tsx
import { useTheme } from 'next-themes'
import OxyIcons from '@endo/oxycons'

export function ThemedIcon() {
  const { theme } = useTheme()
  
  return (
    <OxyIcons.home 
      size={24}
      className={theme === 'dark' ? 'text-white' : 'text-black'}
    />
  )
}
```

### 2. Custom Theme Context

```tsx
// contexts/icon-theme.tsx
import { createContext, ReactNode } from 'react'

interface IconTheme {
  primaryColor: string
  secondaryColor: string
  size: number
}

export const IconThemeContext = createContext<IconTheme>({
  primaryColor: '#000',
  secondaryColor: '#666',
  size: 24,
})

// Provider component
export function IconThemeProvider({ 
  children, 
  theme 
}: { 
  children: ReactNode
  theme: IconTheme 
}) {
  return (
    <IconThemeContext.Provider value={theme}>
      {children}
    </IconThemeContext.Provider>
  )
}
```

## Troubleshooting

### Issue: Icons not displaying

**Solution:**
```tsx
// Make sure you're importing from the correct path
import OxyIcons from '@endo/oxycons'

// Not from the lib directory
// ❌ import OxyIcons from '@/lib/icons'
```

### Issue: TypeScript errors

**Solution:**
```tsx
// Ensure you have proper TypeScript setup
// tsconfig.json should include:
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "types": ["react", "react-dom"]
  }
}
```

### Issue: Styling not applying

**Solution:**
```tsx
// Make sure icons inherit color from parent
<div style={{ color: 'blue' }}>
  <OxyIcons.home size={24} />
</div>

// Or use className
<OxyIcons.home size={24} className="text-blue-500" />
```

### Issue: Large bundle size

**Solution:**
```tsx
// Use individual icons instead of importing all
import { createIcon } from '@endo/oxycons'
import { ICON_DATA } from '@endo/oxycons'

const HomeIcon = createIcon(ICON_DATA.home)
const SearchIcon = createIcon(ICON_DATA.search)

// Instead of
// import OxyIcons from '@endo/oxycons'
```

## Best Practices

### 1. Use Semantic Icons
```tsx
// ✅ Good - uses appropriate icons for their purpose
<button>
  <OxyIcons.home size={20} aria-hidden="true" />
  <span>Home</span>
</button>

// ❌ Avoid - using icons for styling only
<div style={{ color: 'red' }}>
  <OxyIcons.star size={20} />
  Important
</div>
```

### 2. Accessibility
```tsx
// ✅ Always provide context for icon-only buttons
<button aria-label="Open search">
  <OxyIcons.search size={24} />
</button>

// If icon has accompanying text, hide it from screen readers
<button>
  <OxyIcons.search size={20} aria-hidden="true" />
  <span>Search</span>
</button>
```

### 3. Consistency
```tsx
// Define icon sizes in one place
const ICON_SIZES = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
}

<OxyIcons.home size={ICON_SIZES.md} />
```

### 4. Performance
```tsx
// Cache icon components if used multiple times
const HomeIcon = createIcon(ICON_DATA.home)

export function Component() {
  return (
    <>
      <HomeIcon size={24} />
      <HomeIcon size={24} />
      <HomeIcon size={24} />
    </>
  )
}
```

## Resources

- [Main Documentation](../README_OXYCONS.md)
- [GitHub Repository](https://github.com/endo-design/oxycons)
- [Icon Showcase](http://localhost:3000/icons)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev)
- [Next.js Documentation](https://nextjs.org/docs)

## Support

For issues, questions, or suggestions:
- Open an issue on [GitHub](https://github.com/endo-design/oxycons/issues)
- Start a discussion on [GitHub Discussions](https://github.com/endo-design/oxycons/discussions)
- Check existing documentation and FAQs
