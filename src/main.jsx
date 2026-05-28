import React from 'react';
import { createRoot } from 'react-dom/client';
import { LoanApplicationList } from './components/LoanApplicationList';
import './styles/theme.css';
import { LoginForm } from './components/LoginForm';
import { LoanApplication } from './components/LoanApplication';

const loanApplications = [
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
    applicantName: 'Bunga Citra Lestari',
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

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoanApplicationList
      title="Incoming applications queue"
      subtitle="Review, prioritize, and route each loan submission from one screen."
      applications={loanApplications}
    />
    <LoginForm></LoginForm>
    <LoanApplication 
      applicationId={loanApplications[0].applicationId}
      applicantName={loanApplications[0].applicantName}
      applicantEmail={loanApplications[0].applicantEmail}
      loanType={loanApplications[0].loanType}
      status={loanApplications[0].status}
      requestedAmount={loanApplications[0].requestedAmount}
      termMonths={loanApplications[0].termMonths}
      interestRate={loanApplications[0].interestRate}
      monthlyPayment={loanApplications[0].monthlyPayment}
      purpose={loanApplications[0].purpose}
      submittedAt={loanApplications[0].submittedAt}
      creditScore={loanApplications[0].creditScore}
      monthlyIncome="IDR 24,500,000"
      debtToIncome="18%"
      reviewerNote="Stable income and low utilization. Ready for final decision. aaaa"
    ></LoanApplication>
  </React.StrictMode>
);