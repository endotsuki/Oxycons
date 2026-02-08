#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

/**
 * Update category index.ts files to export all icon components
 * Scans each category folder and generates/updates the corresponding index.ts
 */

const categoriesBase = path.join(__dirname, "..", "lib", "icons", "categories");

// Get all category directories
const categories = fs.readdirSync(categoriesBase).filter((f) => {
  const stat = fs.statSync(path.join(categoriesBase, f));
  return stat.isDirectory() && !f.startsWith(".");
});

categories.forEach((category) => {
  const categoryPath = path.join(categoriesBase, category);
  const indexPath = path.join(categoryPath, "index.ts");

  // Get all .ts files except index.ts and subdirectories
  const files = fs
    .readdirSync(categoryPath)
    .filter(
      (f) =>
        f.endsWith(".ts") &&
        f !== "index.ts" &&
        !fs.statSync(path.join(categoryPath, f)).isDirectory(),
    )
    .sort();

  if (files.length === 0) {
    console.log(`⚠ No icon files in ${category}`);
    return;
  }

  // Extract component names from files
  const exports = files
    .map((file) => {
      const filePath = path.join(categoryPath, file);
      const content = fs.readFileSync(filePath, "utf8");

      // Extract component name from "export const ComponentName = createIcon"
      const match = content.match(/export\s+const\s+(\w+)\s*=\s*createIcon/);
      if (!match) {
        console.warn(`⚠ Could not extract component name from ${file}`);
        return null;
      }

      const componentName = match[1];
      const fileName = file.slice(0, -3); // Remove .ts extension

      return `export { ${componentName} } from "./${fileName}";`;
    })
    .filter(Boolean);

  // Sort exports
  exports.sort();

  // Write index file
  const indexContent = exports.join("\n") + "\n";
  fs.writeFileSync(indexPath, indexContent, "utf8");

  console.log(`✓ Updated ${category}/index.ts (${exports.length} icons)`);
});

console.log("\n✅ All category indexes updated!");
