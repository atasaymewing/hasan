import React from 'react';
import { Globe, Palette, Share2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-12 h-12 text-red-600" />,
      title: "Web Sitesi Tasarımı",
      description: "Modern ve etkileyici web siteleri ile markanızı dijitalde güçlendirin."
    },
    {
      icon: <Palette className="w-12 h-12 text-red-600" />,
      title: "Logo Tasarımı",
      description: "Markanızı en iyi şekilde yansıtan özgün ve profesyonel logolar tasarlıyoruz."
    },
    {
      icon: <Share2 className="w-12 h-12 text-red-600" />,
      title: "Sosyal Medya Yönetimi",
      description: "Etkili sosyal medya stratejileri ile hedef kitlenize ulaşın."
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-gray-800 rounded-lg hover:border-red-600 transition-colors">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;