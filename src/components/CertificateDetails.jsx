import React from 'react';
import { ExternalLink } from 'lucide-react';

const CertificateDetails = ({ certificateTitle, issuer }) => {
  return (
    <div className="certificate-details">
      <h1 className="certificate-heading">{certificateTitle}</h1>
      <div className="issuer-wrapper">
        <span className="issuer-label">Issued by </span>
        <a
          href="https://eduskillsfoundation.org"
          target="_blank"
          rel="noopener noreferrer"
          className="issuer-link"
        >
          {issuer}
          <ExternalLink size={14} className="issuer-external-icon" strokeWidth={2.2} />
        </a>
      </div>
      <hr className="certificate-divider" />
    </div>
  );
};

export default CertificateDetails;
