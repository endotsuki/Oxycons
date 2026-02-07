import * as Programming from './categories/programming';
import * as App from './categories/app';
import * as DesignTools from './categories/design-tools';
import * as AI from './categories/ai';
import * as Tools from './categories/tools';
import * as Framework from './categories/framework';

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
};

export type OxyconsType = typeof Oxycons;

// Get all icon names
export const getIconNames = (): string[] => {
  return Object.keys(Oxycons);
};

// Get all categories with their icons
export const getIconsByCategory = () => {
  return {
    programming: Object.values(Programming),
    app: Object.values(App),
    'design-tools': Object.values(DesignTools),
    ai: Object.values(AI),
    tools: Object.values(Tools),
    framework: Object.values(Framework),
  };
};

// Get category info
export const getCategoryInfo = (category: string) => {
  const info: Record<string, { name: string; description: string }> = {
    programming: {
      name: 'Programming',
      description: 'Programming languages and web technologies',
    },
    app: {
      name: 'App',
      description: 'Application and device related icons',
    },
    'design-tools': {
      name: 'Design Tools',
      description: 'Design and creative software icons',
    },
    ai: {
      name: 'AI',
      description: 'Artificial intelligence and machine learning icons',
    },
    tools: {
      name: 'Tools',
      description: 'Development and utility tools icons',
    },
    framework: {
      name: 'Framework',
      description: 'Web frameworks and libraries icons',
    },
  };

  return info[category];
};

// All categories
export const CATEGORIES = [
  'programming',
  'app',
  'design-tools',
  'ai',
  'tools',
  'framework',
];
