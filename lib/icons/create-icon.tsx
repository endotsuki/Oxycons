'use client';

import React from 'react';
import { Icon } from './icon';
import { IconMetadata, IconProps } from './types';

/**
 * Create a reusable icon component from icon metadata
 *
 * @param metadata - Icon metadata including SVG path data (single or multiple)
 * @returns A React component that renders the icon
 *
 * @example
 * ```tsx
 * // Single path
 * const HomeIcon = createIcon({
 *   name: 'home',
 *   viewBox: '0 0 24 24',
 *   path: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
 *   categories: ['navigation'],
 * });
 *
 * // Multiple paths with properties
 * const ComplexIcon = createIcon({
 *   name: 'logo',
 *   viewBox: '0 0 100 100',
 *   paths: [
 *     { d: 'M10 10h20v20H10z', fill: '#000', opacity: 0.45 },
 *     { d: 'M40 40h20v20H40z', fill: '#000', opacity: 0.6 },
 *   ],
 * });
 * <HomeIcon size={24} />
 * ```
 */
export function createIcon(metadata: IconMetadata) {
  const IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
    (props, ref) => {
      // Handle both single path and multiple paths
      const hasPaths = metadata.paths && metadata.paths.length > 0;
      const singlePath = metadata.path;

      return (
        <Icon {...props} ref={ref} viewBox={metadata.viewBox}>
          {hasPaths ? (
            // Render multiple paths with their individual properties
            metadata.paths!.map((pathData, index) => (
              <path
                key={index}
                d={pathData.d}
                fill={pathData.fill || 'currentColor'}
                stroke={pathData.stroke}
                fillOpacity={pathData.fillOpacity}
                strokeOpacity={pathData.strokeOpacity}
                opacity={pathData.opacity}
                strokeWidth={pathData.strokeWidth}
              />
            ))
          ) : (
            // Render single path
            <path d={singlePath} fill="currentColor" stroke="currentColor" />
          )}
        </Icon>
      );
    }
  );

  IconComponent.displayName = `${metadata.name}Icon`;

  return IconComponent;
}

/**
 * Create multiple icon components from metadata
 *
 * @param metadataMap - Object mapping icon names to metadata
 * @returns Object with icon components
 *
 * @example
 * ```tsx
 * const icons = createIcons({
 *   home: ICON_DATA.home,
 *   search: ICON_DATA.search,
 * });
 * <icons.home size={24} />
 * ```
 */
export function createIcons(
  metadataMap: Record<string, IconMetadata>
): Record<string, React.FC<IconProps>> {
  const icons: Record<string, React.FC<IconProps>> = {};

  Object.entries(metadataMap).forEach(([key, metadata]) => {
    icons[key] = createIcon(metadata);
  });

  return icons;
}
