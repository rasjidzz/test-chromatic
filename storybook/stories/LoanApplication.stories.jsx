import { LoanApplication } from '../../src/components/LoanApplication';

const meta = {
  title: 'Presentation/LoanApplication',
  component: LoanApplication,
  tags: ['autodocs'],
  args: {
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
  }
};

export default meta;

export const UnderReview = {};

export const Approved = {
  args: {
    status: 'approved',
    reviewerNote: 'Approved with standard terms after final compliance check.'
  }
};

export const Rejected = {
  args: {
    status: 'rejected',
    reviewerNote: 'Insufficient repayment capacity based on current debt ratio.'
  }
};