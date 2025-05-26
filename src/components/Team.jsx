import React from "react";
import { FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

// Import placeholder images (replace with your actual images)
import ceoImage from "/images/team/q.jpg";
import managerImage from "/images/team/m.jpg";
import leaderImage from "/images/team/a.jpg";
import execImage from "/images/team/k.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Qare Aurang Zeb",
      position: "CEO & Founder",
      bio: "Visionary leader with 15+ years in oil industry",
      image: ceoImage,
      facebook: "#",
      whatsapp: "#",
      email: "mailto:ceo@abunaveed.com"
    },
    {
      name: "Mufti Salem Malik",
      position: "Manager",
      bio: "Operations expert ensuring seamless workflows",
      image: managerImage,
      facebook: "#",
      whatsapp: "#",
      email: "mailto:manager@abunaveed.com"
    },
    {
      name: "Mulana Awais",
      position: "Team Leader",
      bio: "Technical specialist in lubricant formulations",
      image: leaderImage,
      facebook: "#",
      whatsapp: "#",
      email: "mailto:leader@abunaveed.com"
    },
    {
      name: "Kamran Khan",
      position: "Executor Manager",
      bio: "Logistics and supply chain professional",
      image: execImage,
      facebook: "#",
      whatsapp: "#",
      email: "mailto:exec@abunaveed.com"
    },
    
  ];

  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Team Members Section */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-3">
            Our Team
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            Meet the experts driving our oil and lubricant solutions
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
                      aria-label="Facebook"
                    >
                      <FaFacebook size={16} />
                    </a>
                    <a 
                      href={`https://wa.me/${member.whatsapp}`} 
                      className="text-gray-800 hover:text-green-500 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp size={16} />
                    </a>
                    <a 
                      href={member.email} 
                      className="text-gray-800 hover:text-red-500 transition-colors"
                      aria-label="Email"
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