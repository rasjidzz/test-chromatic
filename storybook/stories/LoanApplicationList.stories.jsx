import { LoanApplicationList } from '../../src/components/LoanApplicationList';

const applications = [
  {
    applicationId: 'LN-240518-09',
    applicantName: 'Alya Putri',
    loanType: 'Personal Loan',
    status: 'underReview',
    requestedAmount: 'IDR 85,000,000',
    termMonths: '36 months',
    interestRate: '8.9% APR',
    monthlyPayment: 'IDR 2,707,000 / month',
    purpose: 'Consolidating education and device financing into a single fixed repayment plan.',
    submittedAt: 'May 28, 2026 at 09:40',
    creditScore: '742'
  },
  {
    applicationId: 'LN-240518-10',
    applicantName: 'Bima Santoso',
    loanType: 'Business Loan',
    status: 'pending',
    requestedAmount: 'IDR 150,000,000',
    termMonths: '48 months',
    interestRate: '10.2% APR',
    monthlyPayment: 'IDR 3,845,000 / month',
    purpose: 'Expanding warehouse inventory and fulfillment capacity.',
    submittedAt: 'May 28, 2026 at 10:15',
    creditScore: '701'
  },
  {
    applicationId: 'LN-240518-11',
    applicantName: 'Citra Lestari',
    loanType: 'Home Improvement Loan',
    status: 'approved',
    requestedAmount: 'IDR 60,000,000',
    termMonths: '24 months',
    interestRate: '7.6% APR',
    monthlyPayment: 'IDR 2,704,000 / month',
    purpose: 'Renovating kitchen and electrical systems for long-term occupancy.',
    submittedAt: 'May 28, 2026 at 11:05',
    creditScore: '778'
  }
];

const meta = {
  title: 'Presentation/LoanApplicationList',
  component: LoanApplicationList,
  tags: ['autodocs'],
  args: {
    title: 'Incoming applications queue',
    subtitle: 'Review, prioritize, and route each loan submission from one screen.',
    applications
  }
};

export default meta;

export const Default = {};

export const Approved = {
  args: {
    title: 'Approved applications',
    subtitle: 'Applications cleared for the next step.',
    applications: [
      {
        applicationId: 'LN-240518-11',
        applicantName: 'Citra Lestari',
        loanType: 'Home Improvement Loan',
        status: 'approved',
        requestedAmount: 'IDR 60,000,000',
        termMonths: '24 months',
        interestRate: '7.6% APR',
        monthlyPayment: 'IDR 2,704,000 / month',
        purpose: 'Renovating kitchen and electrical systems for long-term occupancy.',
        submittedAt: 'May 28, 2026 at 11:05',
        creditScore: '778'
      }
    ]
  }
};

export const Rejected = {
  args: {
    title: 'Rejected applications',
    subtitle: 'Applications that did not pass review.',
    applications: [
      {
        applicationId: 'LN-240518-12',
        applicantName: 'Dimas Wicaksono',
        loanType: 'Personal Loan',
        status: 'rejected',
        requestedAmount: 'IDR 100,000,000',
        termMonths: '36 months',
        interestRate: '11.1% APR',
        monthlyPayment: 'IDR 3,280,000 / month',
        purpose: 'Consolidating short-term debt with fixed repayments.',
        submittedAt: 'May 28, 2026 at 12:20',
        creditScore: '612'
      }
    ]
  }
};

export const Pending = {
  args: {
    title: 'Pending applications',
    subtitle: 'Queued up for documents or additional verification.',
    applications: [
      {
        applicationId: 'LN-240518-13',
        applicantName: 'Farah Nadila',
        loanType: 'Business Loan',
        status: 'pending',
        requestedAmount: 'IDR 175,000,000',
        termMonths: '48 months',
        interestRate: '9.8% APR',
        monthlyPayment: 'IDR 4,420,000 / month',
        purpose: 'Preparing stock for a new online storefront launch.',
        submittedAt: 'May 28, 2026 at 13:10',
        creditScore: '689'
      }
    ]
  }
};