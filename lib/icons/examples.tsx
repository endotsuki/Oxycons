'use client';

/**
 * Icon Usage Examples
 * Common patterns and usage scenarios for the Oxycons icon library
 */

import React from 'react';
import OxyIcons from './icons';
import { createIcon } from './create-icon';
import { searchIcons, getIconsByCategory, ICON_DATA } from './data';
import type { IconProps } from './types';

/**
 * Example 1: Basic Icon Usage
 * Using pre-built icons from OxyIcons
 */
export function BasicIconUsage() {
  return (
    <div className="flex gap-4">
      <OxyIcons.home size={24} />
      <OxyIcons.search size={24} />
      <OxyIcons.user size={24} />
      <OxyIcons.settings size={24} />
    </div>
  );
}

/**
 * Example 2: Icon Button Component
 * Creating a reusable icon button with Tailwind styling
 */
interface IconButtonProps extends IconProps {
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'ghost';
  label: string;
}

export function IconButton({
  onClick,
  variant = 'default',
  label,
  size = 20,
  ...props
}: IconButtonProps) {
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input hover:bg-accent',
    ghost: 'hover:bg-accent',
  };

  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg transition-colors ${variants[variant]}`}
      aria-label={label}
      {...props}
    >
      {/* Icon would be rendered here */}
    </button>
  );
}

/**
 * Example 3: Icon with Text
 * Combining icons with text in a reusable component
 */
interface IconLabelProps {
  icon: React.ReactNode;
  label: string;
  size?: number;
}

export function IconLabel({ icon, label, size = 20 }: IconLabelProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-shrink-0">{icon}</div>
      <span className="text-sm">{label}</span>
    </div>
  );
}

/**
 * Example 4: Responsive Icon Sizes
 * Using different icon sizes for responsive design
 */
export function ResponsiveIconSizes() {
  return (
    <div className="space-y-4">
      {/* Mobile size */}
      <div>
        <label className="text-sm text-muted-foreground">Mobile (16px)</label>
        <OxyIcons.home size={16} />
      </div>

      {/* Default size */}
      <div>
        <label className="text-sm text-muted-foreground">Default (24px)</label>
        <OxyIcons.home size={24} />
      </div>

      {/* Large size */}
      <div>
        <label className="text-sm text-muted-foreground">Large (32px)</label>
        <OxyIcons.home size={32} />
      </div>

      {/* Extra large */}
      <div>
        <label className="text-sm text-muted-foreground">Extra Large (48px)</label>
        <OxyIcons.home size={48} />
      </div>
    </div>
  );
}

/**
 * Example 5: Styled Icons
 * Using Tailwind CSS to style icons
 */
export function StyledIcons() {
  return (
    <div className="flex gap-6">
      {/* Primary color */}
      <OxyIcons.home size={24} className="text-blue-500" />

      {/* Success color with hover effect */}
      <OxyIcons.check
        size={24}
        className="text-green-500 hover:text-green-600 cursor-pointer transition-colors"
      />

      {/* Error color */}
      <OxyIcons.delete size={24} className="text-red-500" />

      {/* With animation */}
      <OxyIcons.search
        size={24}
        className="text-gray-600 animate-spin"
      />
    </div>
  );
}

/**
 * Example 6: Search Icons Dynamically
 * Using the search functionality to find icons
 */
export function SearchIconsExample() {
  // Search for arrow icons
  const arrowIcons = searchIcons('arrow');

  return (
    <div>
      <h3 className="font-semibold mb-4">Arrow Icons Found: {arrowIcons.length}</h3>
      <div className="grid grid-cols-3 gap-4">
        {arrowIcons.map((iconData) => {
          const Icon = OxyIcons[iconData.name as keyof typeof OxyIcons];
          return (
            <div key={iconData.name}>
              {Icon && <Icon size={24} />}
              <p className="text-xs mt-2">{iconData.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Example 7: Icons by Category
 * Display icons grouped by category
 */
export function IconsByCategory() {
  const navigationIcons = getIconsByCategory('navigation');

  return (
    <div>
      <h3 className="font-semibold mb-4">Navigation Icons</h3>
      <div className="grid grid-cols-4 gap-4">
        {navigationIcons.map((iconData) => {
          const Icon = OxyIcons[iconData.name as keyof typeof OxyIcons];
          return (
            <div key={iconData.name} className="flex flex-col items-center">
              {Icon && <Icon size={24} />}
              <p className="text-xs mt-2 text-center">{iconData.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Example 8: Custom Icon Component
 * Creating a custom icon from metadata
 */
export function CustomIconExample() {
  // Create a custom star icon
  const CustomStar = createIcon({
    name: 'custom-star',
    viewBox: '0 0 24 24',
    path: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z',
    categories: ['custom'],
    keywords: ['star', 'custom'],
  });

  return (
    <div className="flex gap-4 items-center">
      <CustomStar size={24} />
      <span>Custom Star Icon</span>
    </div>
  );
}

/**
 * Example 9: Accessibility-Aware Icons
 * Using icons with proper ARIA labels
 */
export function AccessibilityExample() {
  return (
    <div className="flex gap-4">
      {/* Icon with label (visible text) */}
      <button className="flex items-center gap-2 px-4 py-2 rounded hover:bg-muted">
        <OxyIcons.home size={20} aria-hidden="true" />
        <span>Home</span>
      </button>

      {/* Icon-only button with aria-label */}
      <button
        className="p-2 rounded hover:bg-muted"
        aria-label="Open search"
      >
        <OxyIcons.search size={20} />
      </button>

      {/* Decorative icon (no label needed) */}
      <div className="flex items-center gap-2">
        <OxyIcons.star size={20} />
        <span>5 stars</span>
      </div>
    </div>
  );
}

/**
 * Example 10: Icon Badge/Status Component
 * Using icons to show status
 */
interface StatusBadgeProps {
  status: 'success' | 'error' | 'warning' | 'info';
  label: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const icons = {
    success: OxyIcons.success,
    error: OxyIcons.error,
    warning: OxyIcons.alert,
    info: OxyIcons.info,
  };

  const colors = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
  };

  const Icon = icons[status];

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-full ${colors[status]}`}>
      {Icon && <Icon size={16} />}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

/**
 * Example 11: Navigation Menu with Icons
 * Creating a navigation menu with icons
 */
export function NavigationMenu() {
  const menuItems = [
    { label: 'Home', icon: OxyIcons.home },
    { label: 'Search', icon: OxyIcons.search },
    { label: 'Messages', icon: OxyIcons.message },
    { label: 'Profile', icon: OxyIcons.user },
    { label: 'Settings', icon: OxyIcons.settings },
  ];

  return (
    <nav className="flex gap-6 p-4 border-b">
      {menuItems.map(({ label, icon: Icon }) => (
        <button
          key={label}
          className="flex items-center gap-2 px-3 py-2 rounded hover:bg-muted transition-colors"
        >
          {Icon && <Icon size={20} />}
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
    </nav>
  );
}

/**
 * Example 12: Icon Grid Selector
 * Allow users to select from available icons
 */
export function IconGridSelector() {
  const [selectedIcon, setSelectedIcon] = React.useState<string | null>(null);

  const iconNames = Object.keys(ICON_DATA);

  return (
    <div>
      <h3 className="font-semibold mb-4">Select an Icon</h3>
      <div className="grid grid-cols-6 gap-2">
        {iconNames.slice(0, 12).map((name) => {
          const Icon = OxyIcons[name as keyof typeof OxyIcons];
          return (
            <button
              key={name}
              onClick={() => setSelectedIcon(name)}
              className={`p-3 rounded border transition-colors ${
                selectedIcon === name
                  ? 'border-primary bg-primary/10'
                  : 'border-input hover:border-primary'
              }`}
            >
              {Icon && <Icon size={24} />}
            </button>
          );
        })}
      </div>
      {selectedIcon && (
        <p className="mt-4 text-sm text-muted-foreground">
          Selected: <span className="font-semibold">{selectedIcon}</span>
        </p>
      )}
    </div>
  );
}
