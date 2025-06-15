
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Smartphone, 
  WifiOff, 
  Battery, 
  Zap, 
  Shield,
  Volume2,
  Settings,
  Star
} from 'lucide-react';
import CrownIcon from '@/components/CrownIcon';
import AppPreview from '@/components/AppPreview';
import FloatingVolumeWidget from '@/components/FloatingVolumeWidget';

const Index = () => {
  const features = [
    {
      icon: <WifiOff className="text-green-500" size={24} />,
      title: "100% Offline",
      description: "कोई इंटरनेट की जरूरत नहीं - पूरी तरह offline काम करता है"
    },
    {
      icon: <Volume2 className="text-blue-500" size={24} />,
      title: "Complete Volume Control",
      description: "Media, Ringtone, और Notification volumes को separately control करें"
    },
    {
      icon: <Smartphone className="text-purple-500" size={24} />,
      title: "Floating Widget",
      description: "किसी भी screen से easy access के लिए floating controls"
    },
    {
      icon: <Battery className="text-green-600" size={24} />,
      title: "Battery Efficient",
      description: "Lightweight और battery-friendly design"
    },
    {
      icon: <Shield className="text-indigo-500" size={24} />,
      title: "No Permissions",
      description: "केवल जरूरी permissions - आपकी privacy safe"
    },
    {
      icon: <Zap className="text-yellow-500" size={24} />,
      title: "Fast & Clean",
      description: "No ads, no bloatware - सिर्फ आपका volume control"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <CrownIcon size={48} />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Raj Volume
            </h1>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            आपके Android device के लिए सबसे simple और elegant volume control app। 
            Royal experience के साथ complete offline functionality।
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <WifiOff size={16} className="mr-2" />
              No Internet Required
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Shield size={16} className="mr-2" />
              Privacy First
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm">
              <Zap size={16} className="mr-2" />
              Lightning Fast
            </Badge>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full shadow-lg">
            <Download className="mr-2" size={20} />
            Download करें (Coming Soon)
          </Button>
        </div>

        {/* App Preview */}
        <div className="flex justify-center mb-16">
          <AppPreview />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-purple-500">
              <div className="flex items-start gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-white">
          <div className="flex items-center justify-center gap-3 mb-6">
            <CrownIcon size={36} />
            <h2 className="text-3xl font-bold">Ready for Royal Volume Control?</h2>
          </div>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Simple, elegant, और completely offline। Raj Volume के साथ अपने device के volume को 
            royal style में control करें।
          </p>
          <div className="flex items-center justify-center gap-2 text-yellow-300">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="currentColor" />
            ))}
            <span className="ml-2 text-lg font-semibold">Royal Experience Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Floating Widget Demo */}
      <FloatingVolumeWidget />
    </div>
  );
};

export default Index;
