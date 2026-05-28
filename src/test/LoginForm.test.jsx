import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from '../components/LoginForm';

describe('LoginForm', () => {
  it('renders the login fields and submit button', () => {
    render(<LoginForm />);

    expect(screen.getByRole('heading', { name: 'Welcome back' })).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign in' })).toBeInTheDocument();
  });

  it('calls onSubmit after preventing the default form submit', async () => {
    const user = userEvent.setup();
    const handleSubmit = vi.fn((event) => {
      expect(event.defaultPrevented).toBe(true);
    });

    render(<LoginForm onSubmit={handleSubmit} />);

    await user.type(screen.getByLabelText('Email address'), 'tester@example.com');
    await user.type(screen.getByLabelText('Password'), 'secret123');
    await user.click(screen.getByRole('button', { name: 'Sign in' }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('shows the error message when provided', () => {
    render(<LoginForm errorMessage="Email or password is invalid." />);

    expect(screen.getByRole('alert')).toHaveTextContent('Email or password is invalid.');
  });
});