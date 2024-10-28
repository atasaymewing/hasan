import React, { useState } from 'react';
import { Globe, Instagram, X } from 'lucide-react';

const Portfolio = () => {
  const [showLogoModal, setShowLogoModal] = useState(false);

  const logos = [
    {
      title: "Lil Street Coffee",
      image: "https://i.ibb.co/6D3rrJJ/d0dc94c6-08fb-4ca2-8bd5-d867ff20c1e9.jpg",
      description: "Modern kahve dükkanı logosu"
    },
    // Placeholder for future logos
    {
      title: "Logo Design 2",
      image: "https://images.unsplash.com/photo-1560416313-414b33c856a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Yakında"
    },
    {
      title: "Logo Design 3",
      image: "https://images.unsplash.com/photo-1588534510807-86dfb5ed5d5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Yakında"
    }
  ];

  const projects = [
    {
      title: "Web Sitesi Tasarımı",
      category: "Web Tasarım",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      websiteUrl: "https://sayass.netlify.app/#portfolio",
      description: "Modern ve etkileyici web siteleri ile markanızı dijitalde güçlendirin.",
      buttonText: "Yönettiğimiz Web Siteleri",
      buttonColor: "bg-red-600 hover:bg-red-700"
    },
    {
      title: "Logo Tasarımı",
      category: "Grafik Tasarım",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Markanızı en iyi şekilde yansıtan özgün ve profesyonel logolar.",
      buttonText: "Logo Tasarımlarımız",
      buttonColor: "bg-green-600 hover:bg-green-700",
      onClick: () => setShowLogoModal(true)
    },
    {
      title: "Sosyal Medya Yönetimi",
      category: "Dijital Pazarlama",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      instagramUrl: "https://www.instagram.com/hsnatasay/",
      description: "Etkili sosyal medya stratejileri ile hedef kitlenize ulaşın.",
      buttonText: "Yönettiğimiz Instagram Hesapları"
    }
  ];

  return (
    <>
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portfolyo</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg bg-black/20 hover:bg-black/30 transition-colors">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-red-600 mb-2">{project.category}</p>
                    <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                    <div className="flex gap-3">
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 ${project.buttonColor || 'bg-red-600 hover:bg-red-700'} text-white px-4 py-2 rounded-lg transition-colors`}
                        >
                          <Globe size={16} />
                          <span>{project.buttonText}</span>
                        </a>
                      )}
                      {project.instagramUrl && (
                        <a
                          href={project.instagramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
                        >
                          <Instagram size={16} />
                          <span>{project.buttonText}</span>
                        </a>
                      )}
                      {project.onClick && (
                        <button
                          onClick={project.onClick}
                          className={`flex items-center gap-2 ${project.buttonColor || 'bg-red-600 hover:bg-red-700'} text-white px-4 py-2 rounded-lg transition-colors`}
                        >
                          <Globe size={16} />
                          <span>{project.buttonText}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Modal */}
      {showLogoModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900 p-4 border-b border-gray-800 flex justify-between items-center">
              <h3 className="text-2xl font-bold">Logo Tasarımlarımız</h3>
              <button
                onClick={() => setShowLogoModal(false)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {logos.map((logo, index) => (
                <div key={index} className="bg-black/20 rounded-lg overflow-hidden group">
                  <div className="relative aspect-square">
                    <img
                      src={logo.image}
                      alt={logo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h4 className="text-lg font-bold">{logo.title}</h4>
                      <p className="text-sm text-gray-300">{logo.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;