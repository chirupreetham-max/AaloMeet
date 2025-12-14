# AlloMeet Mobile App - Folder Structure

This document describes the clean architecture folder structure for the AlloMeet mobile application.

## Folder Structure

```
src/
├── screens/          # Screen components (full-page views)
├── components/       # Reusable UI components
├── navigation/       # Navigation configuration and setup
├── types/            # TypeScript type definitions
├── utils/            # Utility functions and helpers
├── constants/        # App-wide constants (colors, spacing, etc.)
├── hooks/            # Custom React hooks
├── services/         # API services and external integrations
└── context/          # React Context providers for state management
```

## Description

### `screens/`
Contains all screen components. Each screen represents a full page/view in the app.
- HomeScreen
- ProfileScreen
- ChatScreen
- GroupsScreen
- MeetupsScreen
- MatchingScreen

### `components/`
Reusable UI components that can be used across multiple screens.
- Buttons, Cards, Inputs, etc.
- Each component should be self-contained and reusable

### `navigation/`
Navigation setup and configuration using React Navigation.
- AppNavigator.tsx - Main navigation container
- Stack, Tab, or Drawer navigators

### `types/`
TypeScript type definitions and interfaces.
- navigation.ts - Navigation types
- user.ts - User-related types
- api.ts - API response types
- etc.

### `utils/`
Utility functions and helper methods.
- Formatters, validators, helpers
- Pure functions that don't depend on React

### `constants/`
App-wide constants.
- Colors, spacing, API endpoints
- Configuration values

### `hooks/`
Custom React hooks for shared logic.
- useAuth, useLocation, useApi, etc.

### `services/`
API services and external integrations.
- API client setup
- Service functions for backend communication

### `context/`
React Context providers for global state management.
- AuthContext, ThemeContext, etc.

## Import Paths

The project uses path aliases configured in `tsconfig.json`:
- `@/` - Points to `src/`
- `@screens/` - Points to `src/screens/`
- `@components/` - Points to `src/components/`
- `@navigation/` - Points to `src/navigation/`
- `@types/` - Points to `src/types/`
- `@utils/` - Points to `src/utils/`
- `@constants/` - Points to `src/constants/`
- `@hooks/` - Points to `src/hooks/`
- `@services/` - Points to `src/services/`
- `@context/` - Points to `src/context/`

## Example Usage

```typescript
// Import from screens
import HomeScreen from '@screens/HomeScreen';

// Import from components
import { Button } from '@components/Button';

// Import from types
import { RootStackParamList } from '@types/navigation';

// Import from constants
import { COLORS, SPACING } from '@constants';
```

