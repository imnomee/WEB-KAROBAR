import React from 'react';
import { Helmet } from 'react-helmet-async';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact DevStudio | Get in Touch</title>
        <meta name="description" content="Contact DevStudio for web development services, education programs, or consultation. We're here to help with your digital needs." />
      </Helmet>
      
      <div className="pt-24">
        <h1>Contact Page</h1>
        <p>This page will display contact information and a contact form.</p>
      </div>
    </>
  );
};

export default ContactPage;