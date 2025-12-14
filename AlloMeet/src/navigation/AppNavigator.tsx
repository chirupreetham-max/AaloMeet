import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { theme } from '../constants/theme';

// Stacks
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer
      linking={{
        enabled: Platform.OS === 'web',
        prefixes: [],
      }}
    >
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="AuthStack" 
          component={AuthStack}
        />
        <Stack.Screen 
          name="MainStack" 
          component={MainStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
