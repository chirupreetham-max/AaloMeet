# Theme Usage Guide

This document explains how to use the AlloMeet theme system.

## Importing the Theme

```typescript
import { theme, colors, fonts, spacing, borderRadius, shadows } from '../constants/theme';
```

## Using Colors

```typescript
import { colors } from '../constants/theme';

// Primary colors
colors.primary          // #6200ee
colors.primaryLight     // #9d46ff
colors.primaryDark      // #3700b3

// Secondary colors
colors.secondary        // #03dac6
colors.secondaryLight   // #66fff9
colors.secondaryDark   // #00a896

// Background colors
colors.background       // #ffffff
colors.surface          // #f5f5f5
colors.surfaceVariant   // #e8e8e8

// Text colors
colors.text             // #000000
colors.textSecondary    // #666666
colors.textTertiary     // #999999
colors.textOnPrimary    // #ffffff
colors.textOnSecondary  // #000000

// Status colors
colors.success          // #4caf50
colors.error            // #b00020
colors.warning          // #ff9800
colors.info             // #2196f3
```

## Using Fonts

```typescript
import { fonts } from '../constants/theme';

// Font sizes
fonts.sizes.xs      // 12
fonts.sizes.sm      // 14
fonts.sizes.md      // 16
fonts.sizes.lg      // 18
fonts.sizes.xl      // 20
fonts.sizes.xxl     // 24
fonts.sizes.xxxl    // 32
fonts.sizes.display // 40

// Font weights
fonts.weights.regular   // '400'
fonts.weights.medium    // '500'
fonts.weights.semibold  // '600'
fonts.weights.bold      // '700'

// Line heights
fonts.lineHeights.tight    // 1.2
fonts.lineHeights.normal   // 1.5
fonts.lineHeights.relaxed  // 1.75
```

## Using Spacing

```typescript
import { spacing } from '../constants/theme';

spacing.xs    // 4
spacing.sm    // 8
spacing.md    // 16
spacing.lg    // 24
spacing.xl    // 32
spacing.xxl   // 48
spacing.xxxl  // 64
```

## Using Border Radius

```typescript
import { borderRadius } from '../constants/theme';

borderRadius.none  // 0
borderRadius.sm    // 4
borderRadius.md    // 8
borderRadius.lg    // 12
borderRadius.xl    // 16
borderRadius.full  // 9999
```

## Using Shadows

```typescript
import { shadows } from '../constants/theme';

// Apply shadow styles
<View style={shadows.sm}>  // Small shadow
<View style={shadows.md}>  // Medium shadow
<View style={shadows.lg}>  // Large shadow
```

## Using Theme Context

```typescript
import { useTheme } from '../context';

function MyComponent() {
  const { theme } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.colors.primary }}>
      <Text style={{ color: theme.colors.textOnPrimary }}>
        Hello World
      </Text>
    </View>
  );
}
```

## Example: Styling a Component

```typescript
import { StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.md,
  },
  title: {
    fontSize: theme.fonts.sizes.xl,
    fontWeight: theme.fonts.weights.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.textSecondary,
    lineHeight: theme.fonts.sizes.md * theme.fonts.lineHeights.normal,
  },
});
```

