import { LoginForm } from '../../src/components/LoginForm';

const meta = {
  title: 'Presentation/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  args: {
    title: 'Welcome back',
    subtitle: 'Sign in to continue to your workspace.',
    emailLabel: 'Email address',
    passwordLabel: 'Password',
    rememberLabel: 'Keep me signed in',
    submitLabel: 'Sign in'
  }
};

export default meta;

export const Default = {};

export const WithError = {
  args: {
    errorMessage: 'Email or password is invalid.'
  }
};

export const Minimal = {
  args: {
    title: 'Login',
    subtitle: 'Use your team account to continue.',
    rememberLabel: 'Remember this device',
    submitLabel: 'Continue'
  }
};