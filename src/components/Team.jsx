import React from "react";
import { FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

// Import placeholder images (replace with your actual images)
import ceoImage from "/images/team/q.jpg";
import managerImage from "/images/team/m.jpg";
import leaderImage from "/images/team/a.jpg";
import execImage from "/images/team/k.jpg";

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t('team.ceo.name'),
      position: t('team.ceo.position'),
      bio: t('team.ceo.bio'),
      image: ceoImage,
      facebook: "https://www.facebook.com/share/1AYHbX2e8M/",
      whatsapp: "+923455000098",
      email: "mailto:ceo@abunaveed.com"
    },
    {
      name: t('team.manager.name'),
      position: t('team.manager.position'),
      bio: t('team.manager.bio'),
      image: managerImage,
      facebook: "https://www.facebook.com/share/1CqKof986f/",
      whatsapp: "+923458869670",
      email: "mailto:manager@abunaveed.com"
    },
    {
      name: t('team.leader.name'),
      position: t('team.leader.position'),
      bio: t('team.leader.bio'),
      image: leaderImage,
      facebook: "https://www.facebook.com/share/18v5uKW3kV/",
      whatsapp: "+923485312654",
      email: "mailto:leader@abunaveed.com"
    },
    {
      name: t('team.exec.name'),
      position: t('team.exec.position'),
      bio: t('team.exec.bio'),
      image: execImage,
      facebook: "#",
      whatsapp: "#",
      email: "mailto:exec@abunaveed.com"
    },
  ];

  return (
    <section id="team" className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Team Members Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3">
            {t('team.title')}
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            {t('team.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-[#a0c4f3] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Profile Image */}
                <div className="h-60 bg-gradient-to-r from-blue-500 to-blue-700 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <div className="h-20 w-20 rounded-full border-3 border-white overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Team Member Info */}
                <div className="pt-14 pb-4 px-4 text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">{member.position}</p>
                  <p className="text-black text-xs mb-3">{member.bio}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a 
                      href={member.facebook} 
                      className="text-gray-800 hover:text-blue-600 transition-colors"
                      aria-label={t('team.social.facebook')}
                    >
                      <FaFacebook size={16} />
                    </a>
                    <a 
                      href={`https://wa.me/${member.whatsapp}`} 
                      className="text-gray-800 hover:text-green-500 transition-colors"
                      aria-label={t('team.social.whatsapp')}
                    >
                      <FaWhatsapp size={16} />
                    </a>
                    <a 
                      href={member.email} 
                      className="text-gray-800 hover:text-red-500 transition-colors"
                      aria-label={t('team.social.email')}
                    >
                      <FaEnvelope size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;