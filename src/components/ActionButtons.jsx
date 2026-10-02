import React, { useState } from 'react';
import { Download, Copy, Linkedin, Facebook, Twitter } from 'lucide-react';

const ActionButtons = ({ certificateImage }) => {
  const [copied, setCopied] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch('/assets/certificate.pdf');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'AI-ML-Virtual-Internship-Certificate.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      const link = document.createElement('a');
      link.href = '/assets/certificate.pdf';
      link.download = 'AI-ML-Virtual-Internship-Certificate.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && window.location.href) {
        await navigator.clipboard.writeText(window.location.href);
      } else {
        throw new Error('Clipboard not available');
      }
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }

    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const handleSocialShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('AI-ML Virtual Internship Certificate - EduSkills');
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
    <div className="action-buttons-container">
      {/* Primary Action Buttons */}
      <div className="primary-action-row">
        <button
          type="button"
          onClick={handleDownload}
          className="btn-download"
          aria-label="Download Certificate"
        >
          <Download size={16} strokeWidth={2.4} />
          <span>Download</span>
        </button>

        <button
          type="button"
          onClick={handleCopyLink}
          className={`btn-copy ${copied ? 'is-copied' : ''}`}
          aria-label="Copy Certificate Link"
        >
          <Copy size={16} strokeWidth={2.2} />
          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>
      </div>

      {/* Social Buttons */}
      <div className="social-action-row">
        <button
          type="button"
          onClick={() => handleSocialShare('linkedin')}
          className="btn-social btn-linkedin"
          aria-label="Share on LinkedIn"
        >
          <Linkedin size={15} fill="currentColor" strokeWidth={0} />
          <span>LinkedIn</span>
        </button>

        <button
          type="button"
          onClick={() => handleSocialShare('facebook')}
          className="btn-social btn-facebook"
          aria-label="Share on Facebook"
        >
          <Facebook size={15} fill="currentColor" strokeWidth={0} />
          <span>Facebook</span>
        </button>

        <button
          type="button"
          onClick={() => handleSocialShare('twitter')}
          className="btn-social btn-twitter"
          aria-label="Share on Twitter"
        >
          <Twitter size={15} fill="currentColor" strokeWidth={0} />
          <span>Twitter</span>
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
