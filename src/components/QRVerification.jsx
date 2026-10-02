import React from 'react';

const QRVerification = ({ qrImage }) => {
  return (
    <div className="qr-verification-container">
      <div className="qr-card">
        <img
          src={qrImage}
          alt="Verification QR Code"
          className="qr-image"
        />
      </div>
      <div className="qr-text-group">
        <span className="qr-title">SCAN TO VERIFY</span>
        <span className="qr-subtitle">Quick verification using QR code</span>
      </div>
    </div>
  );
};

export default QRVerification;
