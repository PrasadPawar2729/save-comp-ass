import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ({ onVerify }) => {
  const handleVerification = (token) => {
    if (token) onVerify();
  };

  return (
    <ReCAPTCHA
      sitekey="6LfrmIoqAAAAAGdGto1BUMEv0_Ff4NrNIglMmgCF" 
      onChange={handleVerification}
    />
  );
};

export default ReCaptcha;
