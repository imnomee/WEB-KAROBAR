import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Services | WebKarobar</title>
        <meta name="description" content="Professional web development services including static websites, dynamic applications, e-commerce solutions, and custom API development." />
      </Helmet>
      
      <div className="pt-24">
        <h1>Services Page</h1>
        <p>This page will display detailed services content.</p>
      </div>
    </>
  );
};

export default ServicesPage;