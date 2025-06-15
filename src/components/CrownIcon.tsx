
import React from 'react';
import { Crown } from 'lucide-react';

interface CrownIconProps {
  size?: number;
  className?: string;
}

const CrownIcon: React.FC<CrownIconProps> = ({ size = 24, className = "" }) => {
  return (
    <Crown 
      size={size} 
      className={`text-yellow-400 drop-shadow-lg ${className}`}
    />
  );
};

export default CrownIcon;
