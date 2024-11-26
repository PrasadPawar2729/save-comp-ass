import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ({ onVerify }) => {
  const handleVerification = (token) => {
    if (token) onVerify();
  };

  return (
    <ReCAPTCHA
      sitekey="6LdRRooqAAAAAOhY1YLzvG4FWwAJ6g8vBFzyMx6V" 
      onChange={handleVerification}
    />
  );
};

export default ReCaptcha;
