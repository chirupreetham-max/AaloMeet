// App-wide constants
export const APP_NAME = 'AlloMeet';
export const APP_CAPTION = 'Meet minds that match your thoughts.';

// API endpoints (to be configured)
export const API_BASE_URL = __DEV__ 
  ? 'http://localhost:8000/api' 
  : 'https://api.allomeet.com/api';

// Re-export theme for backward compatibility
export { theme, colors, fonts, spacing, borderRadius, shadows } from './theme';
export type { Theme } from './theme';

// Legacy exports (deprecated - use theme instead)
export const COLORS = {
  primary: '#6200ee',
  secondary: '#03dac6',
  background: '#ffffff',
  surface: '#f5f5f5',
  error: '#b00020',
  text: '#000000',
  textSecondary: '#666666',
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

