// Form validation utilities

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validators = {
  email: (email: string): ValidationResult => {
    if (!email) {
      return { isValid: false, error: 'Email is required' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { isValid: false, error: 'Please enter a valid email address' };
    }
    return { isValid: true };
  },

  password: (password: string, minLength: number = 8): ValidationResult => {
    if (!password) {
      return { isValid: false, error: 'Password is required' };
    }
    if (password.length < minLength) {
      return { isValid: false, error: `Password must be at least ${minLength} characters` };
    }
    return { isValid: true };
  },

  required: (value: string, fieldName: string = 'This field'): ValidationResult => {
    if (!value || value.trim().length === 0) {
      return { isValid: false, error: `${fieldName} is required` };
    }
    return { isValid: true };
  },

  minLength: (value: string, minLength: number, fieldName: string = 'This field'): ValidationResult => {
    if (!value || value.length < minLength) {
      return { isValid: false, error: `${fieldName} must be at least ${minLength} characters` };
    }
    return { isValid: true };
  },

  match: (value1: string, value2: string, fieldName: string = 'Fields'): ValidationResult => {
    if (value1 !== value2) {
      return { isValid: false, error: `${fieldName} do not match` };
    }
    return { isValid: true };
  },
};

