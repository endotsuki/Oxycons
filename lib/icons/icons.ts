/**
 * Pre-built Icon Components
 * Automatically generated icon components for easy usage
 */

import { createIcons } from './create-icon';
import { ICON_DATA } from './data';

/**
 * All available icons as pre-built components
 * Each icon can be used directly without additional setup
 *
 * @example
 * ```tsx
 * import OxyIcons from '@endo/oxycons'
 *
 * export function MyComponent() {
 *   return <OxyIcons.home size={24} />
 * }
 * ```
 */
const OxyIcons = createIcons(ICON_DATA);

export default OxyIcons;
