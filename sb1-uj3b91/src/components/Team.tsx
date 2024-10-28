import React from 'react';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Hasan Atasay",
      role: "Kurucu & Yazılım Geliştirici",
      education: "Ankara Üniversitesi Bilgisayar Öğretmenliği",
      image: "https://i.ibb.co/d6qQrGg/Whats-App-Image-2024-10-28-at-16-46-34.jpg",
      socials: {
        instagram: "https://instagram.com/hsnatasay",
        github: "https://github.com/atasaymewing",
        email: "mailto:hsnatasayy@gmail.com"
      }
    },
    {
      name: "Cebrail Ulaş",
      role: "Yazılım Geliştirici",
      education: "Hacettepe Üniversitesi Bilgisayar Öğretmenliği",
      image: "https://i.ibb.co/S3mT10N/e1c0ff96-9ab2-4f6c-a837-bd3094e477e9.jpg",
      socials: {
        instagram: "https://instagram.com/cebrailulass",
        email: "cebrailulas11@gmail.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ekibimiz</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl bg-gray-900 p-6">
                <div className="absolute inset-0 bg-gradient-to-b from-red-600/20 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-red-600"
                  />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-red-600 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-400 mb-6">{member.education}</p>
                    <div className="flex justify-center space-x-4">
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-red-600 transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram size={24} />
                        </a>
                      )}
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-red-600 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={24} />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-red-600 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={24} />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={member.socials.email}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                          aria-label="Email"
                        >
                          <Mail size={24} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;