import * as Programming from "./categories/programming";
import * as App from "./categories/app";
import * as DesignTools from "./categories/design-tools";
import * as AI from "./categories/ai";
import * as Tools from "./categories/tools";
import * as Framework from "./categories/framework";
import * as Company from "./categories/company";

// Compile all icons from all categories
export const Oxycons = {
  // Programming
  ...Programming,
  // App
  ...App,
  // Design Tools
  ...DesignTools,
  // AI
  ...AI,
  // Tools
  ...Tools,
  // Framework
  ...Framework,
  // Company
  ...Company,
};

export type OxyconsType = typeof Oxycons;

// Get all icon names
export const getIconNames = (): string[] => {
  return Object.keys(Oxycons);
};

// Get all categories with their icons
export const getIconsByCategory = () => {
  // Start with empty arrays for every known category
  const buckets: Record<string, any[]> = {
    programming: [],
    app: [],
    "design-tools": [],
    ai: [],
    tools: [],
    framework: [],
  };

  // Merge all exports into a single map to iterate
  const all: Record<string, any> = {
    ...Programming,
    ...App,
    ...DesignTools,
    ...AI,
    ...Tools,
    ...Framework,
    ...Company,
  };

  Object.entries(all).forEach(([exportName, component]) => {
    if (!component) return;

    // Try to read metadata attached to the component (created in createIcon)
    const meta = (component as any).metadata;

    // Prepare an item that includes the export name and the component
    const item = { name: exportName, component };

    // If metadata includes categories, add the component into each listed category
    if (meta && Array.isArray(meta.categories) && meta.categories.length > 0) {
      meta.categories.forEach((cat: string) => {
        if (!buckets[cat]) buckets[cat] = [];
        buckets[cat].push(item);
      });
      return;
    }

    // Fallback: add to framework by default
    buckets["framework"].push(item);
  });

  return buckets;
};

// Get category info
export const getCategoryInfo = (category: string) => {
  const info: Record<string, { name: string; description: string }> = {
    programming: {
      name: "Programming",
      description: "Programming languages and web technologies",
    },
    app: {
      name: "App",
      description: "Application and device related icons",
    },
    "design-tools": {
      name: "Design Tools",
      description: "Design and creative software icons",
    },
    ai: {
      name: "AI",
      description: "Artificial intelligence and machine learning icons",
    },
    tools: {
      name: "Tools",
      description: "Development and utility tools icons",
    },
    framework: {
      name: "Framework",
      description: "Web frameworks and libraries icons",
    },
    company: {
      name: "Company",
      description: "Tech companies and brands icons",
    },
  };

  return info[category];
};

// All categories
export const CATEGORIES = [
  "programming",
  "app",
  "design-tools",
  "ai",
  "tools",
  "framework",
  "company",
];
