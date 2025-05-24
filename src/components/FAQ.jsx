import { useState } from 'react';
import { 
  FaChevronDown, 
  FaOilCan, 
  FaHardHat, 
  FaQuestionCircle,
  FaPhone,
  FaWhatsapp,
  FaTools,
  FaTruck
} from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [error, setError] = useState(null);

  const toggleAccordion = (index) => {
    try {
      setActiveIndex(activeIndex === index ? null : index);
    } catch (err) {
      setError("Failed to toggle accordion");
      console.error("Accordion error:", err);
    }
  };

  const lubricantFAQs = [
    {
      question: "What types of lubricants does Abunaveed Oil Agency supply?",
      answer: "We supply a comprehensive range of lubricants including engine oils (synthetic, semi-synthetic, mineral), gear oils, hydraulic fluids, greases, and specialty lubricants for marine and industrial applications."
    },
    {
      question: "How can I verify the authenticity of your lubricant products?",
      answer: "All our products come with holographic security seals and batch numbers that can be verified through our website or mobile app. We are authorized distributors for major international brands."
    },
    {
      question: "Do you offer bulk purchasing options for businesses?",
      answer: "Yes, we provide special bulk purchase programs with discounted rates for workshops, transport companies, and industrial clients. Our team can arrange customized packaging and delivery schedules."
    },
    {
      question: "What makes your lubricants suitable for Pakistan's climate?",
      answer: "Our lubricants are specially formulated to withstand Pakistan's extreme temperatures, from the cold northern regions to the hot southern areas, ensuring optimal engine protection year-round."
    }
  ];

  const excavatorFAQs = [
    {
      question: "What excavator services does your team provide?",
      answer: "Our excavator team offers complete earthmoving solutions including site preparation, trenching, foundation digging, and material handling. We also provide equipment with operators for short or long-term projects."
    },
    {
      question: "Do you provide maintenance services for heavy equipment?",
      answer: "Yes, our certified technicians offer on-site maintenance, lubrication services, and repairs for excavators, bulldozers, and other heavy machinery using genuine lubricants and parts."
    },
    {
      question: "What areas in Pakistan do your excavator services cover?",
      answer: "We operate throughout Pakistan with teams based in major cities. Our equipment can be deployed to remote project sites, including infrastructure and mining locations in all provinces."
    },
    {
      question: "How do you ensure safety during excavation projects?",
      answer: "All our operators are certified and undergo regular safety training. We conduct site risk assessments, provide safety gear, and follow international excavation safety protocols on every project."
    }
  ];

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-8 my-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <FaQuestionCircle className="text-red-500 text-4xl mb-4" />
          <h3 className="text-xl font-medium text-red-800 mb-2">Error Loading FAQs</h3>
          <p className="text-red-700 mb-4">We encountered an issue displaying the FAQ section.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
          >
            Reload Section
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our lubricant products and excavator services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Lubricant FAQs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-600 px-6 py-4 flex items-center">
              <FaOilCan className="text-white text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-white">Lubricant Products</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {lubricantFAQs.map((faq, index) => (
                <div key={`lubricant-${index}`} className="p-6">
                  <button
                    onClick={() => toggleAccordion(`lubricant-${index}`)}
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                    aria-expanded={activeIndex === `lubricant-${index}`}
                    aria-controls={`lubricant-answer-${index}`}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <FaChevronDown 
                      className={`ml-4 text-blue-600 transition-transform duration-300 ${
                        activeIndex === `lubricant-${index}` ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`lubricant-answer-${index}`}
                    className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
                      activeIndex === `lubricant-${index}` ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="pb-2">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Excavator Team FAQs */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-orange-600 px-6 py-4 flex items-center">
              <FaHardHat className="text-white text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-white">Excavator Team</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {excavatorFAQs.map((faq, index) => (
                <div key={`excavator-${index}`} className="p-6">
                  <button
                    onClick={() => toggleAccordion(`excavator-${index}`)}
                    className="flex justify-between items-center w-full text-left focus:outline-none"
                    aria-expanded={activeIndex === `excavator-${index}`}
                    aria-controls={`excavator-answer-${index}`}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <FaChevronDown 
                      className={`ml-4 text-orange-600 transition-transform duration-300 ${
                        activeIndex === `excavator-${index}` ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`excavator-answer-${index}`}
                    className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
                      activeIndex === `excavator-${index}` ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <p className="pb-2">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Support */}
        <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <FaQuestionCircle className="text-white text-5xl mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-blue-100 mb-6">
              Our support team is available 24/7 to assist you with any inquiries about our products or services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+923455000098"
                className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                <FaPhone className="mr-2" /> Call Now
              </a>
              <a
                href="https://wa.me/923455000098"
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                <FaWhatsapp className="mr-2" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;