'use client';

import React from 'react';
import { IconProps } from './types';

/**
 * Base Icon Component
 * Provides a consistent interface for rendering SVG icons
 * Supports color customization via color prop or className
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, filled = false, className = '', color, children, 'aria-label': ariaLabel, viewBox = '0 0 24 24', ...props }, ref) => {
    // Convert size to string if it's a number
    const sizeValue = typeof size === 'number' ? `${size}px` : size;

    // Build inline style with color if provided
    // Only set color inline if explicitly passed, otherwise let className handle it
    const style: React.CSSProperties = color ? { color, ...props.style } : props.style || {};

    return (
      <svg
        ref={ref}
        width={sizeValue}
        height={sizeValue}
        viewBox={viewBox}
        className={`inline-block ${className}`}
        style={style}
        aria-label={ariaLabel}
        role={ariaLabel ? 'img' : 'presentation'}
        {...props}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';
