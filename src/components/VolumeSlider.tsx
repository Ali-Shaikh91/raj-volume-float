
import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Volume2, VolumeX, Phone, Bell } from 'lucide-react';

interface VolumeSliderProps {
  type: 'media' | 'ringtone' | 'notification';
  label: string;
  icon: React.ReactNode;
}

const VolumeSlider: React.FC<VolumeSliderProps> = ({ type, label, icon }) => {
  const [volume, setVolume] = useState([70]);

  const handleVolumeChange = (value: number[]) => {
    setVolume(value);
    console.log(`${type} volume changed to: ${value[0]}%`);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-purple-200">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-purple-600">
          {icon}
        </div>
        <span className="font-medium text-gray-800">{label}</span>
        <span className="ml-auto text-sm text-purple-600 font-semibold">
          {volume[0]}%
        </span>
      </div>
      <Slider
        value={volume}
        onValueChange={handleVolumeChange}
        max={100}
        step={1}
        className="w-full"
      />
    </div>
  );
};

export default VolumeSlider;
