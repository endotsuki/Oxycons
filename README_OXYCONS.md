# @endo/oxycons

A modern, comprehensive icon library for React applications. Oxycons provides a collection of beautifully designed, scalable SVG icons with full TypeScript support and zero dependencies.

## Features

- 🎨 **50+ Pre-built Icons** - Comprehensive icon set covering common UI patterns
- ⚡ **Zero Dependencies** - Lightweight and fast, no external dependencies
- 🎯 **TypeScript Support** - Fully typed for better developer experience
- 🔧 **Customizable** - Easy to customize size, color, and styling
- ♿ **Accessible** - Built with ARIA labels and semantic HTML
- 📦 **Tree-shakeable** - Only import the icons you need
- 🎓 **Developer Friendly** - Simple API with great documentation
- 🔍 **Searchable** - Built-in icon search and categorization system

## Installation

### npm

```bash
npm install @endo/oxycons
```

### yarn

```bash
yarn add @endo/oxycons
```

### pnpm

```bash
pnpm add @endo/oxycons
```

## Quick Start

### Basic Usage

```tsx
import OxyIcons from '@endo/oxycons'

export function MyComponent() {
  return (
    <div>
      <OxyIcons.home size={24} />
      <OxyIcons.search size={20} />
      <OxyIcons.user />
    </div>
  )
}
```

### Using Individual Icons

```tsx
import { createIcon } from '@endo/oxycons'
import { ICON_DATA } from '@endo/oxycons'

const HomeIcon = createIcon(ICON_DATA.home)

export function MyComponent() {
  return <HomeIcon size={24} />
}
```

### Custom Styling

```tsx
import OxyIcons from '@endo/oxycons'

export function MyComponent() {
  return (
    <OxyIcons.home 
      size={24} 
      className="text-blue-500 hover:text-blue-700 transition-colors"
      aria-label="Go to home page"
    />
  )
}
```

## API Reference

### Icon Component

All icons are React components that accept the following props:

```typescript
interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Size of the icon in pixels */
  size?: number | string
  /** Whether the icon is filled */
  filled?: boolean
  /** Custom CSS class for styling */
  className?: string
  /** ARIA label for accessibility */
  'aria-label'?: string
}
```

### Available Icons

#### Navigation
- `menu` - Hamburger menu icon
- `arrow-right` - Right arrow
- `arrow-left` - Left arrow
- `arrow-up` - Up arrow
- `arrow-down` - Down arrow
- `chevron-right` - Right chevron
- `chevron-left` - Left chevron
- `chevron-down` - Down chevron
- `chevron-up` - Up chevron
- `home` - Home icon

#### Actions
- `search` - Search/magnifier icon
- `close` - Close/X icon
- `check` - Checkmark icon
- `plus` - Plus/add icon
- `minus` - Minus/subtract icon
- `edit` - Edit/pencil icon
- `delete` - Delete/trash icon
- `download` - Download icon
- `upload` - Upload icon

#### Status & Feedback
- `alert` - Alert/warning icon
- `alert-circle` - Alert circle icon
- `info` - Info icon
- `success` - Success/checkmark icon
- `error` - Error icon

#### Communication
- `message` - Message/chat icon
- `mail` - Mail/email icon
- `phone` - Phone/call icon

#### Media & Files
- `image` - Image/photo icon
- `file` - File/document icon
- `folder` - Folder/directory icon

#### Commerce
- `shopping-cart` - Shopping cart icon
- `credit-card` - Credit card icon
- `dollar` - Dollar/money icon

#### Time
- `calendar` - Calendar icon
- `clock` - Clock/time icon

#### User & Account
- `user` - User/profile icon
- `users` - Users/team icon
- `settings` - Settings/gear icon
- `bell` - Bell/notification icon

#### Utility
- `help` - Help/question icon
- `external-link` - External link icon
- `eye` - Eye/visibility icon
- `eye-off` - Eye off/hidden icon
- `star` - Star/rating icon
- `heart` - Heart/like icon

### Utility Functions

#### `searchIcons(keyword: string): IconMetadata[]`

Search for icons by keyword.

```tsx
import { searchIcons } from '@endo/oxycons'

const arrowIcons = searchIcons('arrow')
// Returns all icons with 'arrow' in name or keywords
```

#### `getIconsByCategory(category: string): IconMetadata[]`

Get all icons in a specific category.

```tsx
import { getIconsByCategory } from '@endo/oxycons'

const navigationIcons = getIconsByCategory('navigation')
```

#### `getCategories(): string[]`

Get all available icon categories.

```tsx
import { getCategories } from '@endo/oxycons'

const categories = getCategories()
// Returns: ['navigation', 'action', 'status', ...]
```

#### `getIconNames(): string[]`

Get all available icon names.

```tsx
import { getIconNames } from '@endo/oxycons'

const allIcons = getIconNames()
// Returns: ['home', 'search', 'user', ...]
```

#### `createIcon(metadata: IconMetadata): React.FC<IconProps>`

Create a custom icon component from metadata.

```tsx
import { createIcon } from '@endo/oxycons'

const CustomIcon = createIcon({
  name: 'custom',
  viewBox: '0 0 24 24',
  path: 'M12 2L2 20h20L12 2z',
  categories: ['custom'],
  keywords: ['custom', 'triangle']
})

export function MyComponent() {
  return <CustomIcon size={24} />
}
```

#### `createIcons(metadataMap: Record<string, IconMetadata>): Record<string, React.FC<IconProps>>`

Create multiple icon components at once.

```tsx
import { createIcons } from '@endo/oxycons'

const myIcons = createIcons({
  custom1: {...},
  custom2: {...}
})

<myIcons.custom1 size={24} />
```

## Adding Custom Icons

### Method 1: Using SVG Files

Place your SVG files in `public/icons/` and run the icon generator:

```bash
npm run generate:icons
```

This will automatically:
1. Extract path data from your SVG files
2. Generate TypeScript icon definitions
3. Create pre-built icon components

### Method 2: Manual Definition

Create icons programmatically:

```tsx
import { createIcon } from '@endo/oxycons'

const MyIcon = createIcon({
  name: 'my-icon',
  viewBox: '0 0 24 24',
  path: 'M12 2L2 20h20L12 2z',
  categories: ['custom'],
  keywords: ['custom', 'icon']
})
```

## Theming

Icons inherit color from their parent's `color` property. Style them using Tailwind CSS or custom CSS:

```tsx
// Tailwind CSS
<OxyIcons.home className="text-blue-500 hover:text-blue-700" size={24} />

// Inline styles
<OxyIcons.home style={{ color: '#3b82f6' }} size={24} />

// Custom CSS
<OxyIcons.home className="my-custom-icon" size={24} />
```

```css
.my-custom-icon {
  color: #3b82f6;
}

.my-custom-icon:hover {
  color: #1e40af;
}
```

## Accessibility

All icons support ARIA labels for better accessibility:

```tsx
<OxyIcons.home 
  size={24} 
  aria-label="Navigate to home page"
/>
```

For decorative icons, omit the `aria-label`:

```tsx
<OxyIcons.star size={16} />
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Zero dependencies** - Faster load times
- **Lightweight SVG icons** - Average 200-300 bytes per icon
- **Tree-shakeable** - Only bundle the icons you use
- **Optimized paths** - Minimal SVG complexity

## Contributing

We welcome contributions! Please read our contributing guidelines before submitting PRs.

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# View icon showcase
# Visit http://localhost:3000/icons

# Generate icons from SVG files
npm run generate:icons

# Build for production
npm run build

# Run tests
npm test
```

## Publishing to npm

Follow these steps to publish a new version of the package to the npm registry.

1. Verify `package.json`:

  - Ensure `name` is correct and unique (e.g. `@your-scope/oxycons` or `oxycons`).
  - Ensure `private` is `false`.
  - Ensure `main`, `module`, and `types` (if TypeScript) point to the build output.
  - Ensure `files` or `.npmignore` include the built `lib/` (or `dist/`) output.

2. Build the package:

```bash
pnpm build
```

3. Inspect the package contents (optional but recommended):

```bash
pnpm pack --no-install
# or inspect the tarball created in the project root
```

4. Bump the version (choose `patch`, `minor`, or `major`):

```bash
pnpm version patch
```

5. Login to npm (if not already logged in):

```bash
npm login
```

6. Publish the package:

- For a public scoped package (e.g. `@your-scope/name`):

```bash
pnpm publish --access public
```

- For an unscoped package:

```bash
pnpm publish
```

7. Verify the package on npm and test installation in a clean project:

```bash
npm i @your-scope/oxycons
# or
pnpm add @your-scope/oxycons
```

Notes:

- If your package is scoped (starts with `@`), you must publish with `--access public` to make it public.
- If `private` is `true` in `package.json`, change it to `false` before publishing.
- Make sure the build output (e.g. `lib/` or `dist/`) is included in the package using the `files` array in `package.json` or via `.npmignore`.
- If you want CI to publish automatically, set up an authenticated `NPM_TOKEN` and use `pnpm publish --no-git-checks --access public` in your pipeline.

## License

MIT © 2024 Endo Design

## Changelog

### v1.0.0 (Initial Release)
- Initial release with 50+ icons
- TypeScript support
- Icon search and categorization
- Custom icon creation
- Automatic SVG to component generation

## Support

- 📖 [Documentation](https://github.com/endo-design/oxycons)
- 🐛 [Issue Tracker](https://github.com/endo-design/oxycons/issues)
- 💬 [Discussions](https://github.com/endo-design/oxycons/discussions)

## FAQ

### Can I use these icons in commercial projects?

Yes! Oxycons is licensed under the MIT license, which allows commercial use.

### Can I modify the icons?

Absolutely! You can customize the SVG paths and create your own icon variants.

### How do I add icons to my project?

You can either:
1. Place SVG files in `public/icons/` and run `npm run generate:icons`
2. Create custom icons programmatically using `createIcon()`

### Do these icons support filled and outlined variants?

Yes! Some icons have both variants. You can toggle with the `filled` prop:

```tsx
<OxyIcons.star filled={true} size={24} />
```

### Can I tree-shake unused icons?

Yes! The library is designed to be tree-shakeable. Only import the icons you need using individual icon components.

---

Made with ❤️ by Endo Design
