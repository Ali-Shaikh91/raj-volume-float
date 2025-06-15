
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Wifi, WifiOff, Battery, Zap } from 'lucide-react';
import CrownIcon from './CrownIcon';

const AppPreview: React.FC = () => {
  return (
    <div className="relative">
      <Card className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-2xl border-2 border-purple-300">
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <CrownIcon size={32} />
              <h3 className="text-white font-bold text-xl">Raj Volume</h3>
            </div>
            <Badge variant="secondary" className="bg-green-500 text-white">
              <WifiOff size={12} className="mr-1" />
              Offline
            </Badge>
          </div>
          
          <div className="space-y-4">
            {['Media', 'Ringtone', 'Notification'].map((type, index) => (
              <div key={type} className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800">{type}</span>
                  <span className="text-purple-600 font-semibold">{70 + index * 10}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${70 + index * 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
      
      <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
        <CrownIcon size={24} className="text-purple-800" />
      </div>
    </div>
  );
};

export default AppPreview;
