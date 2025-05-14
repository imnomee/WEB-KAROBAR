import React from 'react';
import { Code2 } from 'lucide-react';

interface LogoProps {
  color?: string;
}

const Logo: React.FC<LogoProps> = ({ color = 'text-primary-600' }) => {
  return (
    <div className={`${color}`}>
      <Code2 size={28} strokeWidth={2} />
    </div>
  );
};

export default Logo;