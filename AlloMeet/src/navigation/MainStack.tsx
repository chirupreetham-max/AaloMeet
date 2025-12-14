import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackParamList } from '../types/navigation';
import { theme } from '../constants/theme';

const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.textOnPrimary,
        headerTitleStyle: {
          fontWeight: theme.fonts.weights.bold,
        },
      }}
    >
      {/* Main app screens will be added here */}
    </Stack.Navigator>
  );
}

