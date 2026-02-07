'use client';

import React from 'react';
import { IconProps } from './types';

/**
 * Base Icon Component
 * Provides a consistent interface for rendering SVG icons
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size = 24,
      filled = false,
      className,
      children,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    // Convert size to string if it's a number
    const sizeValue = typeof size === 'number' ? `${size}px` : size;

    return (
      <svg
        ref={ref}
        width={sizeValue}
        height={sizeValue}
        viewBox="0 0 24 24"
        fill={filled ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth={filled ? 0 : 2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`inline-block ${className || ''}`}
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
