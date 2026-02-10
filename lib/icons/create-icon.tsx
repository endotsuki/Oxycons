'use client';

import React from 'react';
import { Icon } from './icon';
import { IconMetadata, IconProps } from './types';

/**
 * Create a reusable icon component from icon metadata
 *
 * @param metadata - Icon metadata with paths array
 * @returns A React component that renders the icon with full styling support
 *
 * @example
 * ```tsx
 * // Single path with size and color customization
 * const HomeIcon = createIcon({
 *   name: 'home',
 *   viewBox: '0 0 24 24',
 *   paths: [{ d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' }],
 *   categories: ['navigation'],
 * });
 * <HomeIcon size={24} className="text-red-500" />
 * <HomeIcon size={24} color="#ff0000" />
 *
 * // Multiple paths with individual properties
 * const ComplexIcon = createIcon({
 *   name: 'logo',
 *   viewBox: '0 0 100 100',
 *   paths: [
 *     { d: 'M10 10h20v20H10z', fill: '#000', opacity: 0.45 },
 *     { d: 'M40 40h20v20H40z', fill: '#000', opacity: 0.6 },
 *   ],
 * });
 *
 * // With color prop override
 * <ComplexIcon color="#ffffff" />
 * ```
 */
export function createIcon(metadata: IconMetadata) {
  const IconComponent = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { size = 24, className = '', color, ...restProps } = props;
    const sizeValue = typeof size === 'number' ? size : parseInt(size as string, 10);

    // Handle legacy full SVG code (backward compatibility)
    if (metadata.svg) {
      return (
        <svg
          ref={ref}
          xmlns='http://www.w3.org/2000/svg'
          viewBox={metadata.viewBox}
          width={sizeValue}
          height={sizeValue}
          className={`inline-block ${className}`}
          style={{ color: color || 'inherit' }}
          dangerouslySetInnerHTML={{ __html: metadata.svg }}
          {...restProps}
        />
      );
    }

    // Handle paths array (preferred approach)
    const hasPaths = metadata.paths && metadata.paths.length > 0;
    const singlePath = metadata.path;

    return (
      <Icon {...props} ref={ref} viewBox={metadata.viewBox || '0 0 24 24'} color={color} className={className} size={sizeValue}>
        {hasPaths ? (
          // Render multiple paths with their individual properties
          metadata.paths!.map((pathData, index) => {
            // Detect if this is a multi-color icon (has different fills)
            const hasMultipleColors = metadata.paths!.some((p) => p.fill && p.fill !== 'currentColor');

            // Use currentColor by default to respect className/color props
            // Only use explicit fill for multi-color icons
            const fill = hasMultipleColors && pathData.fill ? pathData.fill : 'currentColor';

            return <path key={index} d={pathData.d} fill={fill} fillOpacity={pathData.fillOpacity} opacity={pathData.opacity} />;
          })
        ) : (
          // Render single path
          <path d={singlePath} fill='currentColor' />
        )}
      </Icon>
    );
  });

  IconComponent.displayName = `${metadata.name}Icon`;

  // Attach metadata to the component
  try {
    Object.defineProperty(IconComponent, 'metadata', {
      value: metadata,
      writable: false,
      configurable: true,
      enumerable: false,
    });
  } catch (e) {
    (IconComponent as any).metadata = metadata;
  }

  return IconComponent;
}

/**
 * Create multiple icon components from metadata
 *
 * @param metadataMap - Object mapping icon names to metadata
 * @returns Object with icon components
 */
export function createIcons(metadataMap: Record<string, IconMetadata>): Record<string, React.FC<IconProps>> {
  const icons: Record<string, React.FC<IconProps>> = {};

  Object.entries(metadataMap).forEach(([key, metadata]) => {
    icons[key] = createIcon(metadata);
  });

  return icons;
}
