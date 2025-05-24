import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHardHat, FaTruck, FaWhatsapp } from "react-icons/fa";
import { MdConstruction, MdSupportAgent } from "react-icons/md";

const ContactUs = () => {
  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl text-blue-600" />,
      title: "General Inquiries",
      contact: "+92 345 5000098",
      subtitle: "Available 8:00 AM - 6:00 PM"
    },
    {
      icon: <FaWhatsapp className="text-2xl text-green-500" />,
      title: "WhatsApp Support",
      contact: "+92 345 5000098",
      subtitle: "24/7 Chat Support"
    },
    {
      icon: <FaEnvelope className="text-2xl text-blue-600" />,
      title: "Email Us",
      contact: "info@abunaveed.com",
      subtitle: "Response within 24 hours"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-blue-600" />,
      title: "Visit Us",
      contact: "Abu naveed oil Agency, Chilās, 05812",
      subtitle: "Open Mon-Sat: 8AM-6PM"
    }
  ];

  const excavatorTeamContacts = [
    {
      icon: <MdConstruction className="text-2xl text-orange-500" />,
      title: "Excavator Team Lead",
      contact: "+92 300 1234567",
      subtitle: "Ali Khan - Site Operations"
    },
    {
      icon: <FaHardHat className="text-2xl text-orange-500" />,
      title: "Equipment Support",
      contact: "+92 300 7654321",
      subtitle: "Mechanical & Maintenance"
    },
    {
      icon: <FaTruck className="text-2xl text-orange-500" />,
      title: "Bulk Fuel Delivery",
      contact: "+92 300 9876543",
      subtitle: "On-site fuel supply"
    },
    {
      icon: <MdSupportAgent className="text-2xl text-orange-500" />,
      title: "24/7 Emergency",
      contact: "+92 300 1122334",
      subtitle: "After-hours excavator support"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Contact <span className="text-blue-600">Abunaveed</span> Oil Agency
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team for lubricant solutions or excavator services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="bg-white rounded-xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="">Select inquiry type</option>
                  <option value="lubricants">Lubricant Products</option>
                  <option value="excavator">Excavator Team Services</option>
                  <option value="bulk">Bulk Order Inquiry</option>
                  <option value="other">Other Questions</option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your message..."
                ></textarea>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div>
            {/* General Contact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="bg-white rounded-xl shadow-xl p-8 mb-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">General Contact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="mr-4 p-2 bg-blue-50 rounded-full">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{method.title}</h4>
                      <p className="text-gray-800 font-medium">{method.contact}</p>
                      <p className="text-sm text-gray-500 mt-1">{method.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Excavator Team Contact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl shadow-xl p-8 border border-orange-100"
            >
              <div className="flex items-center mb-6">
                <MdConstruction className="text-3xl text-orange-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Excavator Team Contacts</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Direct contacts for our heavy equipment and excavation services team
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {excavatorTeamContacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start p-4 bg-white/80 hover:bg-white rounded-lg shadow-sm transition-all"
                  >
                    <div className="mr-4 p-2 bg-orange-50 rounded-full">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{contact.title}</h4>
                      <p className="text-gray-800 font-medium">{contact.contact}</p>
                      <p className="text-sm text-gray-500 mt-1">{contact.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;