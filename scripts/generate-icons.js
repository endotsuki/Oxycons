#!/usr/bin/env node

/**
 * Icon Generator Script
 * Automatically generates icon components from SVG files
 *
 * Usage:
 *   node scripts/generate-icons.js [--input ./svgs] [--output ./lib/icons]
 *
 * This script:
 * 1. Scans SVG files from input directory
 * 2. Extracts path data and metadata
 * 3. Generates TypeScript icon definitions with paths array
 * 4. Creates pre-built icon components
 */

const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  inputDir: process.argv.includes('--input') ? process.argv[process.argv.indexOf('--input') + 1] : './public/icons',
  outputDir: process.argv.includes('--output') ? process.argv[process.argv.indexOf('--output') + 1] : './lib/icons',
  dataFile: 'generated-icons.ts',
  verbose: process.argv.includes('--verbose'),
};

/**
 * Extract SVG path data from SVG file content
 * Returns array of path objects with their properties
 */
function extractSvgData(svgContent) {
  const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Extract all path elements with their attributes
  const pathMatches = svgContent.match(/<path[^>]*>/g) || [];
  const paths = pathMatches
    .map((match) => {
      const pathObj = {};

      // Extract d attribute (required)
      const dMatch = match.match(/d="([^"]+)"/);
      if (!dMatch) return null;
      pathObj.d = dMatch[1];

      // Extract optional fill attribute
      const fillMatch = match.match(/fill="([^"]+)"/);
      if (fillMatch) pathObj.fill = fillMatch[1];

      // Extract optional opacity attribute
      const opacityMatch = match.match(/opacity="([^"]+)"/);
      if (opacityMatch) pathObj.opacity = parseFloat(opacityMatch[1]);

      // Extract optional fill-opacity attribute
      const fillOpacityMatch = match.match(/fill-opacity="([^"]+)"/);
      if (fillOpacityMatch) pathObj.fillOpacity = parseFloat(fillOpacityMatch[1]);

      return pathObj;
    })
    .filter(Boolean);

  return {
    viewBox,
    paths,
    pathCount: paths.length,
  };
}

/**
 * Generate icon name from filename
 */
function generateIconName(filename) {
  return path
    .basename(filename, '.svg')
    .toLowerCase()
    .replace(/[-_\s]/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Generate icon metadata object with paths array
 */
function generateIconMetadata(filename, svgPath) {
  const svgContent = fs.readFileSync(svgPath, 'utf8');
  const svgData = extractSvgData(svgContent);
  const iconName = generateIconName(filename);

  if (svgData.paths.length === 0) {
    console.warn(`⚠️  No path found in ${filename}`);
    return null;
  }

  return {
    name: iconName,
    viewBox: svgData.viewBox,
    paths: svgData.paths, // Array of path objects with properties
    categories: ['custom'],
    keywords: [iconName],
  };
}

/**
 * Convert path data object to TypeScript code
 */
function formatPathData(pathData) {
  const parts = [`d: '${pathData.d}'`];

  if (pathData.fill) parts.push(`fill: '${pathData.fill}'`);
  if (pathData.opacity !== undefined) parts.push(`opacity: ${pathData.opacity}`);
  if (pathData.fillOpacity !== undefined) parts.push(`fillOpacity: ${pathData.fillOpacity}`);

  return `{ ${parts.join(', ')} }`;
}

/**
 * Generate TypeScript code for icons
 */
function generateTypeScriptCode(icons) {
  const iconObjects = icons
    .map((icon) => {
      const pathsCode = icon.paths.map((p) => formatPathData(p)).join(',\n      ');

      return `  '${icon.name}': {
    name: '${icon.name}',
    viewBox: '${icon.viewBox}',
    paths: [
      ${pathsCode}
    ],
    categories: ${JSON.stringify(icon.categories)},
    keywords: ${JSON.stringify(icon.keywords)},
  }`;
    })
    .join(',\n');

  return `/**
 * Auto-generated Icon Data
 * Generated from SVG files in public/icons
 *
 * DO NOT EDIT MANUALLY
 * Re-run \`npm run generate:icons\` to update
 */

import { IconMetadata } from './types';

export const GENERATED_ICONS: Record<string, IconMetadata> = {
${iconObjects}
};

export const GENERATED_ICON_COUNT = ${icons.length};
`;
}

/**
 * Main script execution
 */
async function main() {
  try {
    console.log('🎨 Generating icon components...\n');

    // Check if input directory exists
    if (!fs.existsSync(config.inputDir)) {
      console.log(`📁 Input directory not found: ${config.inputDir}`);
      console.log('   Create this directory and add SVG files to auto-generate icons.\n');
      return;
    }

    // Read SVG files
    const svgFiles = fs.readdirSync(config.inputDir).filter((f) => f.endsWith('.svg'));

    if (svgFiles.length === 0) {
      console.log(`No SVG files found in ${config.inputDir}`);
      return;
    }

    console.log(`Found ${svgFiles.length} SVG file(s):\n`);

    // Generate metadata for each SVG
    const icons = [];
    svgFiles.forEach((filename) => {
      const svgPath = path.join(config.inputDir, filename);
      try {
        const metadata = generateIconMetadata(filename, svgPath);
        if (metadata) {
          icons.push(metadata);
          console.log(`✓ ${filename} → ${metadata.name} (${metadata.paths.length} path${metadata.paths.length > 1 ? 's' : ''})`);
        }
      } catch (error) {
        console.error(`✗ Error processing ${filename}: ${error.message}`);
      }
    });

    console.log(`\n✨ Successfully processed ${icons.length} icon(s)\n`);

    // Generate TypeScript code
    const tsCode = generateTypeScriptCode(icons);

    // Create output directory if it doesn't exist
    if (!fs.existsSync(config.outputDir)) {
      fs.mkdirSync(config.outputDir, { recursive: true });
    }

    // Write generated file
    const outputPath = path.join(config.outputDir, config.dataFile);
    fs.writeFileSync(outputPath, tsCode);

    console.log(`📝 Generated: ${outputPath}`);
    console.log(`\n✅ Icon generation complete!\n`);

    if (config.verbose) {
      console.log('Generated icons:');
      icons.forEach((icon) => {
        console.log(`  - ${icon.name} (${icon.paths.length} path${icon.paths.length > 1 ? 's' : ''})`);
      });
      console.log();
    }
  } catch (error) {
    console.error('❌ Error generating icons:', error);
    process.exit(1);
  }
}

main();
