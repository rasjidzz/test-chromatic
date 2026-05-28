import PropTypes from 'prop-types';
import { Badge } from './Badge';

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

export function LoanApplicationList({ title, subtitle, applications }) {
  return (
    <section className="loan-list-shell" aria-label="Loan application list">
      <header className="loan-list-header">
        <div>
          <p className="loan-list-eyebrow">Loan Applications</p>
          <h1 className="loan-list-title">{title}</h1>
          {subtitle ? <p className="loan-list-subtitle">{subtitle}</p> : null}
        </div>

        <div className="loan-list-count">
          <span>Total Applications</span>
          <strong>{applications.length}</strong>
        </div>
      </header>

      <div className="loan-list-grid">
        {applications.map((application) => {
          const statusTone = STATUS_TO_TONE[application.status] ?? 'muted';
          const statusLabel = STATUS_LABELS[application.status] ?? application.status;

          return (
            <article className="loan-list-card" key={application.applicationId}>
              <div className="loan-list-card-header">
                <div>
                  <h2 className="loan-list-card-title">{application.applicantName}</h2>
                  <p className="loan-list-card-meta">
                    {application.loanType} · {application.applicationId}
                  </p>
                </div>

                <Badge text={statusLabel} tone={statusTone} />
              </div>

              <dl className="loan-list-stats">
                <div>
                  <dt>Requested</dt>
                  <dd>{application.requestedAmount}</dd>
                </div>
                <div>
                  <dt>Term</dt>
                  <dd>{application.termMonths}</dd>
                </div>
                <div>
                  <dt>Score</dt>
                  <dd>{application.creditScore}</dd>
                </div>
                <div>
                  <dt>Submitted</dt>
                  <dd>{application.submittedAt}</dd>
                </div>
              </dl>

              <p className="loan-list-purpose">{application.purpose}</p>

              <div className="loan-list-footer">
                <span>APR {application.interestRate}</span>
                <strong>{application.monthlyPayment}</strong>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

LoanApplicationList.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  applications: PropTypes.arrayOf(
    PropTypes.shape({
      applicationId: PropTypes.string.isRequired,
      applicantName: PropTypes.string.isRequired,
      loanType: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['approved', 'underReview', 'pending', 'rejected']).isRequired,
      requestedAmount: PropTypes.string.isRequired,
      termMonths: PropTypes.string.isRequired,
      interestRate: PropTypes.string.isRequired,
      monthlyPayment: PropTypes.string.isRequired,
      purpose: PropTypes.string.isRequired,
      submittedAt: PropTypes.string.isRequired,
      creditScore: PropTypes.string.isRequired
    })
  ).isRequired
};