// Global Theme Configuration for AlloMeet

export const theme = {
  colors: {
    // Primary colors
    primary: '#6200ee',
    primaryLight: '#9d46ff',
    primaryDark: '#3700b3',
    
    // Secondary colors
    secondary: '#03dac6',
    secondaryLight: '#66fff9',
    secondaryDark: '#00a896',
    
    // Background colors
    background: '#ffffff',
    surface: '#f5f5f5',
    surfaceVariant: '#e8e8e8',
    
    // Text colors
    text: '#000000',
    textSecondary: '#666666',
    textTertiary: '#999999',
    textOnPrimary: '#ffffff',
    textOnSecondary: '#000000',
    
    // Status colors
    success: '#4caf50',
    error: '#b00020',
    warning: '#ff9800',
    info: '#2196f3',
    
    // Border colors
    border: '#e0e0e0',
    borderLight: '#f0f0f0',
    borderDark: '#b0b0b0',
    
    // Overlay
    overlay: 'rgba(0, 0, 0, 0.5)',
    overlayLight: 'rgba(0, 0, 0, 0.1)',
  },
  
  fonts: {
    // Font families
    regular: 'System',
    medium: 'System',
    bold: 'System',
    
    // Font sizes
    sizes: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      xxl: 24,
      xxxl: 32,
      display: 40,
    },
    
    // Font weights (React Native compatible values)
    weights: {
      regular: '400' as const,
      medium: '500' as const,
      semibold: '600' as const,
      bold: '700' as const,
    },
    
    // Line heights
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
  },
  
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.20,
      shadowRadius: 3.84,
      elevation: 5,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.23,
      shadowRadius: 6.27,
      elevation: 8,
    },
  },
};

// Export individual theme sections for convenience
export const colors = theme.colors;
export const fonts = theme.fonts;
export const spacing = theme.spacing;
export const borderRadius = theme.borderRadius;
export const shadows = theme.shadows;

// Type for theme
export type Theme = typeof theme;

