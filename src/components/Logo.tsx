import React from 'react';
import { Compass } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Compass className="w-8 h-8" />
      <span className="text-2xl font-bold">Agency.</span>
    </div>
  );
};

export default Logo;