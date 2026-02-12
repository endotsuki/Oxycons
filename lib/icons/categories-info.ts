/**
 * Server-safe category metadata. Use this in Server Components (e.g. app/page.tsx).
 * Do not import the full registry or any icon components on the server—
 * they use createIcon() which is client-only.
 */

export const CATEGORIES = ['programming', 'app', 'design-tools', 'ai', 'tools', 'framework', 'company'] as const;

const CATEGORY_INFO: Record<string, { name: string; description: string }> = {
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
  company: {
    name: 'Company',
    description: 'Tech companies and brands icons',
  },
};

export function getCategoryInfo(category: string) {
  return CATEGORY_INFO[category];
}
