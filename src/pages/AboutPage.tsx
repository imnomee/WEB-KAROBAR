import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About WebKarobar | Web Development Agency</title>
        <meta name="description" content="Learn about WebKarobar, our mission, values, and the team of expert web developers behind our success." />
      </Helmet>
      
      <div className="pt-24">
        <h1>About Page</h1>
        <p>This page will display information about the company.</p>
      </div>
    </>
  );
};

export default AboutPage;