import PropTypes from 'prop-types';
import { Badge } from './Badge';
import { Button } from './Button';

const STATUS_TO_TONE = {
  approved: 'teal',
  underReview: 'accent',
  pending: 'muted',
  rejected: 'danger'
};

const STATUS_LABELS = {
  approved: 'Approved',
  underReview: 'Under Review',
  pending: 'Pending',
  rejected: 'Rejected'
};

export function LoanApplication({
  applicationId,
  applicantName,
  applicantEmail,
  loanType,
  status,
  requestedAmount,
  termMonths,
  interestRate,
  monthlyPayment,
  purpose,
  submittedAt,
  creditScore,
  monthlyIncome,
  debtToIncome,
  reviewerNote,
  approveLabel = 'Approve',
  rejectLabel = 'Reject',
  onApprove,
  onReject
}) {
  const statusTone = STATUS_TO_TONE[status] ?? 'muted';
  const statusLabel = STATUS_LABELS[status] ?? status;

  return (
    <article className="loan-application">
      <header className="loan-application-header">
        <div>
          <p className="loan-application-eyebrow">Loan Application</p>
          <h2 className="loan-application-title">{applicantName}</h2>
          <p className="loan-application-subtitle">
            {loanType} · {applicationId}
          </p>
        </div>

        <Badge text={statusLabel} tone={statusTone} />
      </header>

      <section className="loan-application-summary" aria-label="Loan summary">
        <div className="loan-summary-item">
          <span className="loan-summary-label">Requested amount</span>
          <strong className="loan-summary-value">{requestedAmount}</strong>
        </div>
        <div className="loan-summary-item">
          <span className="loan-summary-label">Term</span>
          <strong className="loan-summary-value">{termMonths}</strong>
        </div>
        <div className="loan-summary-item">
          <span className="loan-summary-label">Interest rate</span>
          <strong className="loan-summary-value">{interestRate}</strong>
        </div>
        <div className="loan-summary-item">
          <span className="loan-summary-label">Estimated payment</span>
          <strong className="loan-summary-value">{monthlyPayment}</strong>
        </div>
      </section>

      <section className="loan-application-details">
        <div className="loan-detail-card">
          <span className="loan-detail-label">Applicant</span>
          <strong>{applicantName}</strong>
          <span>{applicantEmail}</span>
        </div>

        <div className="loan-detail-card">
          <span className="loan-detail-label">Financial profile</span>
          <strong>Credit score {creditScore}</strong>
          <span>Income {monthlyIncome}</span>
          <span>Debt-to-income {debtToIncome}</span>
        </div>

        <div className="loan-detail-card loan-detail-card-wide">
          <span className="loan-detail-label">Purpose</span>
          <p>{purpose}</p>
          <span className="loan-detail-meta">Submitted {submittedAt}</span>
        </div>

        {reviewerNote ? (
          <div className="loan-detail-card loan-detail-card-wide">
            <span className="loan-detail-label">Reviewer note</span>
            <p>{reviewerNote}</p>
          </div>
        ) : null}
      </section>

      {(onApprove || onReject) && (
        <footer className="loan-application-footer">
          {onReject ? (
            <Button label={rejectLabel} variant="ghost" size="md" onClick={onReject} />
          ) : null}
          {onApprove ? (
            <Button label={approveLabel} variant="teal" size="md" onClick={onApprove} />
          ) : null}
        </footer>
      )}
    </article>
  );
}

LoanApplication.propTypes = {
  applicationId: PropTypes.string.isRequired,
  applicantName: PropTypes.string.isRequired,
  applicantEmail: PropTypes.string.isRequired,
  loanType: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['approved', 'underReview', 'pending', 'rejected']).isRequired,
  requestedAmount: PropTypes.string.isRequired,
  termMonths: PropTypes.string.isRequired,
  interestRate: PropTypes.string.isRequired,
  monthlyPayment: PropTypes.string.isRequired,
  purpose: PropTypes.string.isRequired,
  submittedAt: PropTypes.string.isRequired,
  creditScore: PropTypes.string.isRequired,
  monthlyIncome: PropTypes.string.isRequired,
  debtToIncome: PropTypes.string.isRequired,
  reviewerNote: PropTypes.string,
  approveLabel: PropTypes.string,
  rejectLabel: PropTypes.string,
  onApprove: PropTypes.func,
  onReject: PropTypes.func
};