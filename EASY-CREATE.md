# Easy Icon Creation Guide

This guide walks you through creating new icons for the Oxycons icon library using automated tools and templates.

## Quick Start

### Create Icon Template

First create a new icon file with and then type `template` in your code editor then press `Enter` it will give you a template to fill in the details of your icon.

**Examples template:**

```bash
import { createIcon } from "../../create-icon";

export const IconName = createIcon({
  name: "Icon Name",
  viewBox: "0 0 24 24",
  svg: `<svg fill="currentColor">
         <path
             d="" />
     </svg>`,
  categories: ["tools"],
  keywords: ["keyword"],
});
```

**What it does:**

- ✅ Creates a new TypeScript file in the appropriate category folder
- ✅ Pre-fills the structure with placeholders for name, viewBox, SVG code, categories, and keywords/

---

## Auto Add file Category to Indexes

After creating your new icon(s), update all category index files so they're automatically exported:

```bash
npm run update:indexes
```

**What it does:**

- ✅ Scans all category folders
- ✅ Extracts component names from each icon file
- ✅ Updates `index.ts` in each category with exports
- ✅ Keeps exports sorted alphabetically
- ✅ Registers your new icons automatically

**Before:**

```typescript
// lib/icons/categories/app/index.ts
export { AppleNews } from "./applenews";
export { Telegram } from "./telegram";
// FacebookIcon missing!
```

**After running `npm run update:indexes`:**

```typescript
export { AppleNews } from "./applenews";
export { Facebook } from "./facebook"; // ✅ Auto-added!
export { Messenger } from "./messenger";
export { Telegram } from "./telegram";
```

---

## Complete Icon Creation Workflow

### Example: Create Instagram Icon

**1. Create template:**

```bash
npm run create:icon instagram
```

→ Creates: `lib/icons/categories/app/instagram.ts`

**2. Have SVG file? Format it:**

```bash
npm run format:svg instagram-icon.svg
```

→ Outputs clean SVG code

**3. Fill the template:**

- Type `createicon` in the editor
- Press Tab to jump between fields
- Paste SVG path data in the `d="..."` field
- Set category: `app`
- Set keywords: `social,media,instagram`

**4. Update indexes:**

```bash
npm run update:indexes
```

→ Instagram is now auto-exported in `app/index.ts` ✅

---

## Icon File Structure

Created files look like this:

```typescript
import { createIcon } from "../../create-icon";

export const Instagram = createIcon({
  name: "Instagram",
  viewBox: "0 0 24 24",
  svg: `<svg fill="currentColor" viewBox="0 0 24 24">
    <path
        d="M12 0C5.376..." />
</svg>`,
  categories: ["app"],
  keywords: ["instagram", "social", "media"],
});
```

**Fields:**

- `name`: Display name for the icon
- `viewBox`: SVG coordinate system (usually `0 0 24 24`)
- `svg`: The SVG code with formatted paths
- `categories`: One or more categories (e.g., `["app"]`, `["design-tools", "design"]`)
- `keywords`: Searchable terms for filtering/discovery

---

## Available Categories

Choose from these when creating icons:

- **`app`** - Applications & social apps (Facebook, Instagram, Telegram, etc.)
- **`design-tools`** - Design software (Figma, Adobe, Sketch, etc.)
- **`framework`** - Web frameworks (React, Vue, Node.js, etc.)
- **`programming`** - Programming languages (Python, JavaScript, HTML, CSS, etc.)
- **`tools`** - Development tools (Git, Docker, Kubernetes, etc.)
- **`ai`** - AI/ML services (ChatGPT, Gemini, etc.)

---

## Tips & Tricks

### Tip 1: Auto-detect Category

When you run `npm run create:icon`, keywords automatically set the category:

```bash
npm run create:icon figma
# → auto-detects category as "design-tools"

npm run create:icon python
# → auto-detects category as "programming"
```

### Tip 2: Multiple Paths

If your SVG has multiple `<path>` elements, the formatter keeps them all:

```svg
<svg fill="currentColor" viewBox="0 0 100 100">
    <path d="M10..." />
    <path d="M40..." />
</svg>
```

### Tip 3: Batch Create Icons

Create multiple icons at once:

```bash
npm run create:icon twitter
npm run create:icon linkedin
npm run create:icon github
npm run update:indexes
```

### Tip 4: Keep Attributes

If your SVG paths have special attributes (opacity, stroke, etc.), the formatter preserves them:

```svg
<path opacity="0.5" d="M10..." />
<path stroke="currentColor" d="M40..." />
```

---

## NPM Scripts Reference

| Command                         | Purpose                                             |
| ------------------------------- | --------------------------------------------------- |
| `npm run create:icon <name>`    | Create new icon template with auto-filled structure |
| `npm run format:svg <file.svg>` | Clean and format SVG code                           |
| `npm run update:indexes`        | Auto-register all icons in category indexes         |
| `npm run generate:icons`        | Generate icon registry (after updates)              |
| `npm run dev`                   | Start development server                            |

---

## Troubleshooting

### Issue: Script not found

**Solution:** Run `npm install` to ensure all dependencies are installed

### Issue: SVG formatting didn't work

**Ensure your SVG file:**

- Has valid XML/SVG syntax
- Contains at least one `<path>` element
- Has a `viewBox` attribute

**Example valid SVG:**

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path d="M12 0C5.24..." />
</svg>
```

### Issue: Icon not appearing after creating file

**Remember:** Run `npm run update:indexes` after creating new icon files!

---

## Summary

**Fastest way to add a new icon:**

```bash
# 1. Create template (30 seconds)
npm run create:icon MyIcon

# 2. Edit in VS Code
# - Type "createicon" and Tab through fields
# - Paste SVG path data

# 3. Register it (1 second)
npm run update:indexes

# Done! ✅
```

Your icon is now ready to use and automatically exported!
