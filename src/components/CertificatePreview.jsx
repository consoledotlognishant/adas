import React from 'react';

const CertificatePreview = ({ certificateImage }) => {
  return (
    <div className="certificate-card">
      <img
        src={certificateImage}
        alt="Certificate Preview"
        className="certificate-img"
      />
    </div>
  );
};

export default CertificatePreview;
