/**
 * BlinkDeals Logo Pack
 * 
 * A comprehensive collection of CSS-based logos for the BlinkDeals application.
 * All logos are built with React and Tailwind CSS - no images required.
 * 
 * Available Logos:
 * ---------------
 * 
 * 1. LogoFull - Full logo with icon and text
 *    - Best for: Headers, landing pages
 *    - Sizes: sm, md, lg, xl
 *    - Variants: default, white, dark, gradient
 * 
 * 2. LogoHorizontal - Horizontal layout with optional tagline
 *    - Best for: Navigation bars, footers
 *    - Sizes: sm, md, lg
 *    - Variants: default, white, dark, gradient
 *    - Props: showTagline
 * 
 * 3. LogoStacked - Vertically stacked with optional tagline
 *    - Best for: Mobile views, centered layouts
 *    - Sizes: sm, md, lg
 *    - Variants: default, white, dark, gradient
 *    - Props: showTagline
 * 
 * 4. LogoIcon - Icon only version
 *    - Best for: Favicons, app icons, buttons
 *    - Sizes: sm, md, lg, xl
 *    - Variants: default, white, dark, gradient, outline
 * 
 * 5. LogoMinimal - Text only version
 *    - Best for: Minimal designs, tight spaces
 *    - Sizes: sm, md, lg, xl
 *    - Variants: default, white, dark, gradient
 * 
 * 6. LogoAnimated - Animated version with motion
 *    - Best for: Loading screens, splash pages
 *    - Sizes: sm, md, lg
 *    - Variants: default, white, dark, gradient
 * 
 * 7. LogoBadge - Badge style with customizable text
 *    - Best for: Promotional banners, tags
 *    - Sizes: sm, md, lg
 *    - Variants: default, outline, gradient
 *    - Props: text (default: "FLASH SALE")
 * 
 * 8. LogoCircle - Circular icon with optional text below
 *    - Best for: Profile pictures, avatars, app icons
 *    - Sizes: sm, md, lg, xl
 *    - Variants: default, white, dark, gradient, outline
 *    - Props: showText
 * 
 * Usage Examples:
 * --------------
 * 
 * import { LogoHorizontal, LogoIcon, LogoBadge } from './components/logos';
 * 
 * <LogoHorizontal size="md" variant="gradient" showTagline />
 * <LogoIcon size="sm" variant="outline" />
 * <LogoBadge size="lg" variant="gradient" text="NEW SALE" />
 */

export { LogoFull } from './LogoFull';
export { LogoHorizontal } from './LogoHorizontal';
export { LogoStacked } from './LogoStacked';
export { LogoIcon } from './LogoIcon';
export { LogoMinimal } from './LogoMinimal';
export { LogoAnimated } from './LogoAnimated';
export { LogoBadge } from './LogoBadge';
export { LogoCircle } from './LogoCircle';
