import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a
          href="https://certificate.eduskillsfoundation.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-logo-group"
          title="EduSkills Certificate Verification"
        >
          <img
            src="/assets/logo.png"
            alt="EduSkills - Nation Building Through Skills"
            className="header-logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
