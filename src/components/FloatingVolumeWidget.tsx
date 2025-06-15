
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Minimize2, Maximize2 } from 'lucide-react';
import CrownIcon from './CrownIcon';
import VolumeSlider from './VolumeSlider';

const FloatingVolumeWidget: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    console.log(isMuted ? 'Unmuted' : 'Muted');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded ? (
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-2xl p-6 shadow-2xl border border-purple-300 w-80">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <CrownIcon size={28} />
              <h3 className="text-white font-bold text-lg">Raj Volume</h3>
            </div>
            <Button
              onClick={toggleExpanded}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <Minimize2 size={16} />
            </Button>
          </div>
          
          <div className="space-y-4">
            <VolumeSlider
              type="media"
              label="Media"
              icon={<Volume2 size={20} />}
            />
            <VolumeSlider
              type="ringtone"
              label="Ringtone"
              icon={<Volume2 size={20} />}
            />
            <VolumeSlider
              type="notification"
              label="Notification"
              icon={<Volume2 size={20} />}
            />
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-full p-4 shadow-2xl border-2 border-yellow-400">
          <Button
            onClick={toggleExpanded}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 p-2"
          >
            <CrownIcon size={24} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default FloatingVolumeWidget;
