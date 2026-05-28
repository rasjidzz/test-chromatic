import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoanApplication } from '../components/LoanApplication';

const baseProps = {
  applicationId: 'LN-240518-09',
  applicantName: 'Alya Putri',
  applicantEmail: 'alya.putri@example.com',
  loanType: 'Personal Loan',
  status: 'underReview',
  requestedAmount: 'IDR 85,000,000',
  termMonths: '36 months',
  interestRate: '8.9% APR',
  monthlyPayment: 'IDR 2,707,000 / month',
  purpose: 'Consolidating education and device financing into a single fixed repayment plan.',
  submittedAt: 'May 28, 2026 at 09:40',
  creditScore: '742',
  monthlyIncome: 'IDR 24,500,000',
  debtToIncome: '18%',
  reviewerNote: 'Stable income and low utilization. Ready for final decision.'
};

describe('LoanApplication', () => {
  it('renders the core loan application details', () => {
    render(<LoanApplication {...baseProps} />);

    expect(screen.getByRole('heading', { name: 'Alya Putri' })).toBeInTheDocument();
    expect(screen.getByText('LN-240518-09')).toBeInTheDocument();
    expect(screen.getByText('IDR 85,000,000')).toBeInTheDocument();
    expect(screen.getByText('Under Review')).toBeInTheDocument();
    expect(screen.getByText('Credit score 742')).toBeInTheDocument();
  });

  it('renders action buttons and triggers callbacks', async () => {
    const user = userEvent.setup();
    const handleApprove = vi.fn();
    const handleReject = vi.fn();

    render(<LoanApplication {...baseProps} onApprove={handleApprove} onReject={handleReject} />);

    await user.click(screen.getByRole('button', { name: 'Reject' }));
    await user.click(screen.getByRole('button', { name: 'Approve' }));

    expect(handleReject).toHaveBeenCalledTimes(1);
    expect(handleApprove).toHaveBeenCalledTimes(1);
  });
});