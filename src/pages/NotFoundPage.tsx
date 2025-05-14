import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | DevStudio</title>
      </Helmet>
      
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mt-6 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-dark-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Button href="/" leftIcon={<Home size={18} />} size="large">
            Back to Home
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;