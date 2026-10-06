import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Share2, Download, ExternalLink, Check, Copy, X, Linkedin, Facebook, Twitter } from 'lucide-react';

const CERTIFICATE_DATA = {
  issuer: "EDUSKILLS",
  title: "AI-ML Virtual Internship",
  studentName: "Chandan Beura",
  university: "C.V. Raman Global University",
  credentialId: "9d7a2f6c3e8b41d05c72a9f0e1",
  issuedOn: "27/7/2026",
  certificateImage: "/assets/certificate.png",
  certificatePdf: "/assets/certificate.pdf",
  modules: [
    "Program neural networks with TensorFlow",
    "Get started with object detection and pretrained models",
    "Train custom object-detection models using TensorFlow Lite and Model Maker",
    "Build on-device product image search features",
    "Detect objects in static images and live camera feeds",
    "Backend integration for product image search mobile applications",
    "Build custom image-classification models and improve classification skills",
    "Create and integrate a custom image classifier model into your app"
  ]
};

const CertificatePage = () => {
  const { studentId = "STU73f5e2a9c1840d6b927301598" } = useParams();
  const [toastMessage, setToastMessage] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleDownloadPdf = async () => {
    try {
      const response = await fetch(CERTIFICATE_DATA.certificatePdf);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'AI-ML-Virtual-Internship-Certificate.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      showToast('Downloading certificate...');
    } catch {
      const link = document.createElement('a');
      link.href = CERTIFICATE_DATA.certificatePdf;
      link.download = 'AI-ML-Virtual-Internship-Certificate.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Downloading certificate...');
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      showToast('Link copied to clipboard!');
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedLink(true);
      showToast('Link copied to clipboard!');
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleSocialShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(`${CERTIFICATE_DATA.title} - EduSkills Certificate Verification`);
    let shareUrl = '';

    if (platform === 'linkedin') {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === 'facebook') {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === 'twitter') {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=500');
    }
  };

  return (
    <div className="certificate-page-wrap">
      <main className="cert-main-card">
        {/* Left Column: Certificate Preview */}
        <div className="cert-preview-box">
          <img
            src={CERTIFICATE_DATA.certificateImage}
            alt={`${CERTIFICATE_DATA.title} - ${CERTIFICATE_DATA.studentName}`}
            className="cert-preview-img"
          />
        </div>

        {/* Right Column: Details & Curriculum */}
        <div className="cert-content-section">
          <span className="badge-issuer">{CERTIFICATE_DATA.issuer}</span>
          <h1 className="cert-main-title">{CERTIFICATE_DATA.title}</h1>

          {/* Curriculum / Description bullet points */}
          <ul className="cert-curriculum-list">
            {CERTIFICATE_DATA.modules.map((mod, idx) => (
              <li key={idx} className="cert-curriculum-item">
                <span className="cert-bullet-dot" />
                <span>{mod}</span>
              </li>
            ))}
          </ul>

          {/* Metadata Section */}
          <div className="cert-metadata-row">
            <div className="cert-meta-item">
              <span className="cert-meta-label">STUDENT ID</span>
              <span className="cert-meta-value">{studentId}</span>
            </div>

            <div className="cert-meta-item">
              <span className="cert-meta-label">CREDENTIAL ID</span>
              <span className="cert-meta-value">{CERTIFICATE_DATA.credentialId}</span>
            </div>

            <div className="cert-meta-item">
              <span className="cert-meta-label">ISSUED ON</span>
              <span className="cert-meta-value">{CERTIFICATE_DATA.issuedOn}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="cert-actions-row">
            <button
              type="button"
              className="btn-share"
              onClick={() => setShowShareModal(true)}
              aria-label="Share Certificate"
            >
              <Share2 size={16} strokeWidth={2.2} />
              <span>Share</span>
            </button>

            <button
              type="button"
              className="btn-pdf"
              onClick={handleDownloadPdf}
              aria-label="Download PDF"
            >
              <Download size={16} strokeWidth={2.2} />
              <span>PDF</span>
            </button>

            <button
              type="button"
              className="btn-public-link"
              onClick={handleCopyLink}
              aria-label="Public Link"
            >
              <ExternalLink size={15} strokeWidth={2.2} />
              <span>Public Link</span>
            </button>
          </div>
        </div>
      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="cert-toast">
          <Check size={16} color="#10B981" strokeWidth={2.5} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="modal-overlay" onClick={() => setShowShareModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Share Certificate</h2>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowShareModal(false)}
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="share-options-grid">
              <button
                type="button"
                className="share-option-btn"
                onClick={() => handleSocialShare('linkedin')}
              >
                <Linkedin size={22} color="#0A66C2" fill="#0A66C2" strokeWidth={0} />
                <span>LinkedIn</span>
              </button>

              <button
                type="button"
                className="share-option-btn"
                onClick={() => handleSocialShare('facebook')}
              >
                <Facebook size={22} color="#1877F2" fill="#1877F2" strokeWidth={0} />
                <span>Facebook</span>
              </button>

              <button
                type="button"
                className="share-option-btn"
                onClick={() => handleSocialShare('twitter')}
              >
                <Twitter size={22} color="#1DA1F2" fill="#1DA1F2" strokeWidth={0} />
                <span>Twitter</span>
              </button>
            </div>

            <div className="share-copy-box">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="share-copy-input"
              />
              <button
                type="button"
                className="share-copy-btn"
                onClick={handleCopyLink}
              >
                {copiedLink ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatePage;
