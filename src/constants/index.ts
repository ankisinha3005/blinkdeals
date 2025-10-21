// Application Constants

// Branding
export const APP_NAME = "BlinkDeals";

// Currency
export const CURRENCY_SYMBOL = "₹";

// Colors - Tailwind class names
export const COLORS = {
  // Primary colors - Updated for better contrast
  primary: "indigo-500",
  secondary: "purple-500",
  
  // Primary shades
  primaryLight: "indigo-300",
  primaryDark: "indigo-600",
  primaryDarker: "indigo-700",
  primaryDarkest: "indigo-800",
  
  // Secondary shades
  secondaryLight: "purple-300",
  secondaryDark: "purple-600",
  secondaryDarker: "purple-700",
  secondaryDarkest: "purple-800",
  
  // Accent
  accent: "emerald-600",
  accentLight: "emerald-500",
} as const;

// Gradient classes
export const GRADIENTS = {
  primary: "bg-gradient-to-r from-indigo-500 to-purple-500",
  primaryHover: "hover:from-indigo-600 hover:to-purple-600",
  primaryDark: "bg-gradient-to-r from-indigo-600 to-purple-600",
  primaryDarker: "bg-gradient-to-r from-indigo-700 to-purple-700",
} as const;

// Helper function to format currency
export const formatCurrency = (amount: number): string => {
  return `${CURRENCY_SYMBOL}${amount.toFixed(2)}`;
};
