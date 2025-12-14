// Navigation type definitions

// Auth Stack - for authentication screens (Login, Signup, etc.)
export type AuthStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Signup: undefined;
};

// Main Stack - for main app screens (Home, Profile, Chat, etc.)
export type MainStackParamList = {
  // Main app screens will be added here later
};

// Root Navigator - combines Auth and Main stacks
export type RootStackParamList = {
  AuthStack: undefined;
  MainStack: undefined;
};
