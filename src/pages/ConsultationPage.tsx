import React from 'react';
import { Helmet } from 'react-helmet-async';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Consultation Services | DevStudio</title>
        <meta name="description" content="Expert web development consultation services including project scoping, technical consultations, code reviews, and architecture planning." />
      </Helmet>
      
      <div className="pt-24">
        <h1>Consultation Page</h1>
        <p>This page will display detailed consultation services content.</p>
      </div>
    </>
  );
};

export default ConsultationPage;