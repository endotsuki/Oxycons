/**
 * Oxycons Icon Library Data
 * Icon metadata and definitions
 */

import { IconMetadata } from './types';

/**
 * Icon definitions with metadata
 * Each icon includes:
 * - name: unique identifier
 * - viewBox: SVG viewBox dimensions
 * - path: SVG path data for both outlined and filled variants
 * - categories: organizational tags
 * - keywords: searchable terms
 */
export const ICON_DATA: Record<string, IconMetadata> = {
  // Navigation & UI
  menu: {
    name: 'menu',
    viewBox: '0 0 24 24',
    path: 'M3 12h18M3 6h18M3 18h18',
    categories: ['navigation', 'ui'],
    keywords: ['menu', 'hamburger', 'navigation'],
  },
  'arrow-right': {
    name: 'arrow-right',
    viewBox: '0 0 24 24',
    path: 'M5 12h14M12 5l7 7-7 7',
    categories: ['navigation', 'direction'],
    keywords: ['arrow', 'right', 'next', 'forward'],
  },
  'arrow-left': {
    name: 'arrow-left',
    viewBox: '0 0 24 24',
    path: 'M19 12H5M12 19l-7-7 7-7',
    categories: ['navigation', 'direction'],
    keywords: ['arrow', 'left', 'back', 'previous'],
  },
  'arrow-up': {
    name: 'arrow-up',
    viewBox: '0 0 24 24',
    path: 'M12 19V5M5 12l7-7 7 7',
    categories: ['navigation', 'direction'],
    keywords: ['arrow', 'up', 'previous', 'scroll'],
  },
  'arrow-down': {
    name: 'arrow-down',
    viewBox: '0 0 24 24',
    path: 'M12 5v14M5 12l7 7 7-7',
    categories: ['navigation', 'direction'],
    keywords: ['arrow', 'down', 'next', 'scroll'],
  },
  'chevron-right': {
    name: 'chevron-right',
    viewBox: '0 0 24 24',
    path: 'M9 6l6 6-6 6',
    categories: ['navigation'],
    keywords: ['chevron', 'right', 'expand'],
  },
  'chevron-left': {
    name: 'chevron-left',
    viewBox: '0 0 24 24',
    path: 'M15 6l-6 6 6 6',
    categories: ['navigation'],
    keywords: ['chevron', 'left', 'collapse'],
  },
  'chevron-down': {
    name: 'chevron-down',
    viewBox: '0 0 24 24',
    path: 'M6 9l6 6 6-6',
    categories: ['navigation'],
    keywords: ['chevron', 'down', 'expand'],
  },
  'chevron-up': {
    name: 'chevron-up',
    viewBox: '0 0 24 24',
    path: 'M18 15l-6-6-6 6',
    categories: ['navigation'],
    keywords: ['chevron', 'up', 'collapse'],
  },

  // Common Actions
  search: {
    name: 'search',
    viewBox: '0 0 24 24',
    path: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35',
    categories: ['action', 'ui'],
    keywords: ['search', 'find', 'magnifier'],
  },
  close: {
    name: 'close',
    viewBox: '0 0 24 24',
    path: 'M18 6L6 18M6 6l12 12',
    categories: ['action', 'ui'],
    keywords: ['close', 'x', 'exit', 'cancel'],
  },
  check: {
    name: 'check',
    viewBox: '0 0 24 24',
    path: 'M20 6L9 17l-5-5',
    categories: ['action', 'feedback'],
    keywords: ['check', 'checkmark', 'complete', 'done'],
  },
  'plus': {
    name: 'plus',
    viewBox: '0 0 24 24',
    path: 'M12 5v14M5 12h14',
    categories: ['action'],
    keywords: ['plus', 'add', 'new', 'create'],
  },
  'minus': {
    name: 'minus',
    viewBox: '0 0 24 24',
    path: 'M5 12h14',
    categories: ['action'],
    keywords: ['minus', 'subtract', 'remove'],
  },
  'edit': {
    name: 'edit',
    viewBox: '0 0 24 24',
    path: 'M3 17.25V21h3.75L17.81 9.94m-2.79-2.79L21 7.04',
    categories: ['action'],
    keywords: ['edit', 'pencil', 'modify', 'change'],
  },
  'delete': {
    name: 'delete',
    viewBox: '0 0 24 24',
    path: 'M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V6m3 3v6m4-6v6',
    categories: ['action', 'destructive'],
    keywords: ['delete', 'remove', 'trash', 'bin'],
  },
  'download': {
    name: 'download',
    viewBox: '0 0 24 24',
    path: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
    categories: ['action'],
    keywords: ['download', 'save', 'export'],
  },
  'upload': {
    name: 'upload',
    viewBox: '0 0 24 24',
    path: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 10l-5-5-5 5M12 5v10',
    categories: ['action'],
    keywords: ['upload', 'import', 'file'],
  },

  // Status & Feedback
  alert: {
    name: 'alert',
    viewBox: '0 0 24 24',
    path: 'M12 2L2 20h20L12 2zM12 9v4m0 4v.01',
    categories: ['status', 'feedback'],
    keywords: ['alert', 'warning', 'danger'],
  },
  'alert-circle': {
    name: 'alert-circle',
    viewBox: '0 0 24 24',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
    categories: ['status', 'feedback'],
    keywords: ['alert', 'circle', 'warning'],
  },
  'info': {
    name: 'info',
    viewBox: '0 0 24 24',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
    categories: ['status', 'feedback'],
    keywords: ['info', 'information'],
  },
  'success': {
    name: 'success',
    viewBox: '0 0 24 24',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    categories: ['status', 'feedback'],
    keywords: ['success', 'check', 'complete'],
  },
  'error': {
    name: 'error',
    viewBox: '0 0 24 24',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z',
    categories: ['status', 'feedback'],
    keywords: ['error', 'problem', 'issue'],
  },

  // Communication
  'message': {
    name: 'message',
    viewBox: '0 0 24 24',
    path: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
    categories: ['communication'],
    keywords: ['message', 'chat', 'comment'],
  },
  'mail': {
    name: 'mail',
    viewBox: '0 0 24 24',
    path: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM2 6l10 7 10-7',
    categories: ['communication'],
    keywords: ['mail', 'email', 'message'],
  },
  'phone': {
    name: 'phone',
    viewBox: '0 0 24 24',
    path: 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z',
    categories: ['communication'],
    keywords: ['phone', 'call', 'mobile'],
  },

  // Media & Files
  'image': {
    name: 'image',
    viewBox: '0 0 24 24',
    path: 'M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM8 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM23 11L20 8l-7 7-4-4-6 6',
    categories: ['media'],
    keywords: ['image', 'photo', 'picture'],
  },
  'file': {
    name: 'file',
    viewBox: '0 0 24 24',
    path: 'M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z',
    categories: ['media'],
    keywords: ['file', 'document'],
  },
  'folder': {
    name: 'folder',
    viewBox: '0 0 24 24',
    path: 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z',
    categories: ['media'],
    keywords: ['folder', 'directory'],
  },

  // Business & Commerce
  'shopping-cart': {
    name: 'shopping-cart',
    viewBox: '0 0 24 24',
    path: 'M9 2L6.12 9H2l7 5.5L5.46 21 12 17.27 18.54 21 13 14.5 20 9h-6.12L15 2H9z',
    categories: ['commerce'],
    keywords: ['shopping', 'cart', 'buy'],
  },
  'credit-card': {
    name: 'credit-card',
    viewBox: '0 0 24 24',
    path: 'M21 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM3 9h18v2H3V9z',
    categories: ['commerce'],
    keywords: ['credit', 'card', 'payment'],
  },
  'dollar': {
    name: 'dollar',
    viewBox: '0 0 24 24',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c0 .83-.67 1.5-1.5 1.5S13 12.33 13 11.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm-7 0c0 .83-.67 1.5-1.5 1.5S5 12.33 5 11.5 5.67 10 6.5 10 8 10.67 8 11.5z',
    categories: ['commerce'],
    keywords: ['dollar', 'money', 'price'],
  },
  'calendar': {
    name: 'calendar',
    viewBox: '0 0 24 24',
    path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm0-4H5v-4h12v4z',
    categories: ['time'],
    keywords: ['calendar', 'date', 'schedule'],
  },
  'clock': {
    name: 'clock',
    viewBox: '0 0 24 24',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-5-2.9V7z',
    categories: ['time'],
    keywords: ['clock', 'time', 'schedule'],
  },

  // User & Account
  'user': {
    name: 'user',
    viewBox: '0 0 24 24',
    path: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    categories: ['user'],
    keywords: ['user', 'profile', 'account', 'person'],
  },
  'users': {
    name: 'users',
    viewBox: '0 0 24 24',
    path: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M16 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    categories: ['user'],
    keywords: ['users', 'team', 'group', 'people'],
  },
  'settings': {
    name: 'settings',
    viewBox: '0 0 24 24',
    path: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.18.18 0 0 0 .05-.23l-1.92-3.32a.19.19 0 0 0-.22-.08l-2.39.96a9.9 9.9 0 0 0-1.62-.99l-.36-2.54a.19.19 0 0 0-.19-.16h-3.84c-.1 0-.18.08-.2.17l-.36 2.54a10 10 0 0 0-1.62.99l-2.39-.96a.19.19 0 0 0-.23.08l-1.92 3.32a.18.18 0 0 0 .05.23l2.03 1.58c-.04.3-.07.62-.07.94 0 .32.02.64.07.94l-2.03 1.58a.18.18 0 0 0-.05.23l1.92 3.32a.19.19 0 0 0 .22.08l2.39-.96c.5.39 1.06.73 1.62.99l.36 2.54c.02.09.1.17.2.17h3.84c.1 0 .18-.08.2-.17l.36-2.54c.56-.26 1.12-.6 1.62-.99l2.39.96a.19.19 0 0 0 .23-.08l1.92-3.32a.18.18 0 0 0-.05-.23l-2.03-1.58zM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2z',
    categories: ['user'],
    keywords: ['settings', 'gear', 'configuration'],
  },
  'bell': {
    name: 'bell',
    viewBox: '0 0 24 24',
    path: 'M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0',
    categories: ['notification'],
    keywords: ['bell', 'notification', 'alert'],
  },

  // Utility
  'help': {
    name: 'help',
    viewBox: '0 0 24 24',
    path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.7-6.3c-.6.6-1.2 1.3-1.2 2.3h-2c0-1.1.4-2.1 1.2-2.8.7-.7 1.8-1.2 2.8-1.2 2.2 0 4-1.8 4-4 0-2.2-1.8-4-4-4s-4 1.8-4 4h-2c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2.5-1.5 4.7-3.7 5.7z',
    categories: ['utility'],
    keywords: ['help', 'question', 'support'],
  },
  'external-link': {
    name: 'external-link',
    viewBox: '0 0 24 24',
    path: 'M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z',
    categories: ['utility'],
    keywords: ['external', 'link', 'open'],
  },
  'eye': {
    name: 'eye',
    viewBox: '0 0 24 24',
    path: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
    categories: ['visibility'],
    keywords: ['eye', 'view', 'visible'],
  },
  'eye-off': {
    name: 'eye-off',
    viewBox: '0 0 24 24',
    path: 'M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.42-.08.65 0 1.66 1.34 3 3 3 .23 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm5.31-7.78l3.15 3.15.02-.02c-.71-.38-1.52-.59-2.39-.59-1.66 0-3 1.34-3 3 0 .87.21 1.69.59 2.39l-.02.02-3.15-3.15c.33-.67.53-1.41.53-2.2 0-2.76-2.24-5-5-5 .79 0 1.53.2 2.2.53z',
    categories: ['visibility'],
    keywords: ['eye off', 'hide', 'invisible'],
  },
  'home': {
    name: 'home',
    viewBox: '0 0 24 24',
    path: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    categories: ['navigation'],
    keywords: ['home', 'house', 'dashboard'],
  },
  'star': {
    name: 'star',
    viewBox: '0 0 24 24',
    path: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z',
    categories: ['rating'],
    keywords: ['star', 'favorite', 'rating'],
    hasFilled: true,
  },
  'heart': {
    name: 'heart',
    viewBox: '0 0 24 24',
    path: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    categories: ['feedback'],
    keywords: ['heart', 'like', 'favorite'],
    hasFilled: true,
  },
};

/**
 * Get icon metadata by name
 */
export const getIcon = (name: string): IconMetadata | undefined => {
  return ICON_DATA[name.toLowerCase()];
};

/**
 * Get all icon names
 */
export const getIconNames = (): string[] => {
  return Object.keys(ICON_DATA);
};

/**
 * Search icons by keyword
 */
export const searchIcons = (keyword: string): IconMetadata[] => {
  const searchTerm = keyword.toLowerCase();
  return Object.values(ICON_DATA).filter(
    (icon) =>
      icon.name.includes(searchTerm) ||
      icon.keywords?.some((k) => k.includes(searchTerm))
  );
};

/**
 * Get icons by category
 */
export const getIconsByCategory = (category: string): IconMetadata[] => {
  return Object.values(ICON_DATA).filter((icon) =>
    icon.categories?.includes(category.toLowerCase())
  );
};

/**
 * Get all available categories
 */
export const getCategories = (): string[] => {
  const categories = new Set<string>();
  Object.values(ICON_DATA).forEach((icon) => {
    icon.categories?.forEach((cat) => categories.add(cat));
  });
  return Array.from(categories).sort();
};

/**
 * Library configuration and statistics
 */
export const LIBRARY_CONFIG = {
  name: '@endo/oxycons',
  version: '1.0.0',
  description: 'A comprehensive icon library for modern web applications',
  totalIcons: Object.keys(ICON_DATA).length,
  categories: getCategories(),
};
