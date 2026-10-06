import React from 'react';
import { UserRound, CheckCircle } from 'lucide-react';

const StudentInfo = ({ studentName, issueDate, studentId }) => {
  return (
    <section className="student-info-section">
      <div className="student-profile-group">
        <div className="profile-avatar-circle">
          <UserRound size={26} className="profile-avatar-icon" strokeWidth={1.75} />
        </div>
        <div className="student-meta">
          <p className="issued-statement">
            This badge was issued to <span className="student-name">{studentName}</span>
          </p>
          <p className="issue-date">Date Issued: {issueDate}</p>
        </div>
      </div>

      <div className="student-verify-action">
        <button type="button" className="btn-verify" aria-label="Verify Certificate">
          <CheckCircle size={18} className="verify-check-icon" strokeWidth={2.4} />
          <span>Verify</span>
        </button>
      </div>
    </section>
  );
};

export default StudentInfo;
