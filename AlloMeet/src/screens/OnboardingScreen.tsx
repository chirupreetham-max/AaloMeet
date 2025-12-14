import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../constants/theme';
import { Button } from '../components';
import { AuthStackParamList } from '../types/navigation';

type OnboardingScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Onboarding'>;

const { width } = Dimensions.get('window');

interface OnboardingStep {
  title: string;
  description: string;
  icon: string; // Using emoji as placeholder for icons
}

const onboardingSteps: OnboardingStep[] = [
  {
    title: 'Connect with Like-Minded People',
    description: 'Find and connect with people who share your goals, mindset, and growth direction.',
    icon: '🤝',
  },
  {
    title: 'Goal-Based Matching',
    description: 'We match you based on your future aspirations, not just your current job title.',
    icon: '🎯',
  },
  {
    title: 'Online & Offline Meetups',
    description: 'Join virtual discussions or meet in person with people nearby who share your vision.',
    icon: '📍',
  },
];

export default function OnboardingScreen() {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();
  const [currentStep, setCurrentStep] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const step = Math.round(scrollPosition / width);
    setCurrentStep(step);
  };

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      const nextStep = currentStep + 1;
      scrollViewRef.current?.scrollTo({ x: nextStep * width, animated: true });
      setCurrentStep(nextStep);
    } else {
      navigation.navigate('Signup');
    }
  };

  const handleSkip = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <View style={styles.skipContainer}>
        <Text style={styles.skipText} onPress={handleSkip}>
          Skip
        </Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {onboardingSteps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{step.icon}</Text>
            </View>
            <Text style={styles.title}>{step.title}</Text>
            <Text style={styles.description}>{step.description}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Indicators */}
      <View style={styles.indicators}>
        {onboardingSteps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentStep === index && styles.indicatorActive,
            ]}
          />
        ))}
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <Button
          title={currentStep === onboardingSteps.length - 1 ? 'Get Started' : 'Next'}
          onPress={handleNext}
          variant="primary"
          size="large"
          fullWidth
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  skipContainer: {
    padding: theme.spacing.lg,
    alignItems: 'flex-end',
    paddingTop: theme.spacing.xl,
  },
  skipText: {
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.textSecondary,
    fontWeight: theme.fonts.weights.medium,
  },
  scrollView: {
    flex: 1,
  },
  stepContainer: {
    width,
    padding: theme.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.xl,
  },
  icon: {
    fontSize: 60,
  },
  title: {
    fontSize: theme.fonts.sizes.xxl,
    fontWeight: theme.fonts.weights.bold,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  description: {
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: theme.fonts.sizes.md * theme.fonts.lineHeights.normal,
    paddingHorizontal: theme.spacing.lg,
  },
  indicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.spacing.lg,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.border,
    marginHorizontal: 4,
  },
  indicatorActive: {
    width: 24,
    backgroundColor: theme.colors.primary,
  },
  buttonContainer: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
});

