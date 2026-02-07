import React from "react"
/**
 * Oxycons Icon Library Types
 * Core type definitions for the icon system
 */

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Size of the icon in pixels */
  size?: number | string;
  /** Whether the icon is filled */
  filled?: boolean;
  /** Custom CSS class for styling */
  className?: string;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

export interface PathData {
  /** SVG path d attribute */
  d: string;
  /** Fill color for the path */
  fill?: string;
  /** Stroke color for the path */
  stroke?: string;
  /** Fill opacity */
  fillOpacity?: number;
  /** Stroke opacity */
  strokeOpacity?: number;
  /** Opacity for the entire path */
  opacity?: number;
  /** Stroke width */
  strokeWidth?: string | number;
}

export interface IconMetadata {
  /** Icon name/identifier */
  name: string;
  /** SVG viewBox attribute */
  viewBox: string;
  /** SVG path data - supports single string or array of paths */
  path?: string;
  /** Multiple paths for complex icons */
  paths?: PathData[];
  /** Whether the icon has a filled variant */
  hasFilled?: boolean;
  /** Icon categories for organization */
  categories?: string[];
  /** Search keywords for the icon */
  keywords?: string[];
  /** Icon version */
  version?: string;
}

export type IconComponent = React.FC<IconProps>;

export interface IconLibraryConfig {
  /** Library name */
  name: string;
  /** Library version */
  version: string;
  /** Library description */
  description: string;
  /** Total number of icons */
  totalIcons: number;
  /** Available categories */
  categories: string[];
}
