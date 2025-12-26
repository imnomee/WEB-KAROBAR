import React from 'react';
import { Helmet } from 'react-helmet-async';

const EducationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Educational Resources | WebKarobar</title>
        <meta name="description" content="MERN stack courses, workshops, mentoring sessions, and educational resources for web developers." />
      </Helmet>
      
      <div className="pt-24">
        <h1>Education Page</h1>
        <p>This page will display detailed educational content.</p>
      </div>
    </>
  );
};

export default EducationPage;