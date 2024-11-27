import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ({ onVerify }) => {
  const handleVerification = (token) => {
    if (token) onVerify();
  };

  return (
    <ReCAPTCHA
      sitekey="6LdEmYsqAAAAAF6n165jLDNSMzVWQ5ZNV2R5p0PB" 
      onChange={handleVerification}
    />
  );
};

export default ReCaptcha;
