import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import StudentInfo from '../components/StudentInfo';
import CertificatePreview from '../components/CertificatePreview';
import CertificateDetails from '../components/CertificateDetails';
import ActionButtons from '../components/ActionButtons';
const CERTIFICATE_DATA = {
  studentName: "Chandan Beura",
  issueDate: "July 27, 2026",
  certificateTitle: "AI-ML Virtual Internship",
  issuer: "EduSkills",
  certificateImage: "/assets/certificate.png",
  logo: "/assets/logo.png"
};

const CertificatePage = () => {
  const { studentId = "STU73f5e2a9c1840d6b927301598" } = useParams();

  return (
    <div className="certificate-page">
      <Header logo={CERTIFICATE_DATA.logo} />

      <main className="main-viewport">
        <div className="content-container">
          {/* Top student info section */}
          <StudentInfo
            studentName={CERTIFICATE_DATA.studentName}
            issueDate={CERTIFICATE_DATA.issueDate}
            studentId={studentId}
          />

          {/* Main content grid */}
          <div className="certificate-layout-grid">
            {/* Certificate Preview Card */}
            <div className="cert-preview-area">
              <CertificatePreview
                certificateImage={CERTIFICATE_DATA.certificateImage}
              />
            </div>

            {/* Certificate Details (Title, Issuer, Divider) */}
            <div className="cert-details-area">
              <CertificateDetails
                certificateTitle={CERTIFICATE_DATA.certificateTitle}
                issuer={CERTIFICATE_DATA.issuer}
              />
            </div>

            {/* Action Buttons (Download, Copy Link, Socials) */}
            <div className="cert-actions-area">
              <ActionButtons
                certificateImage={CERTIFICATE_DATA.certificateImage}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CertificatePage;
