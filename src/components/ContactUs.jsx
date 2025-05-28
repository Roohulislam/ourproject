import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaHardHat, FaTruck, FaWhatsapp } from "react-icons/fa";
import { MdConstruction, MdSupportAgent } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: <FaPhone className="text-2xl text-blue-600" />,
      title: t('contact.generalInquiries'),
      contact: "+92 345 5000098",
      subtitle: t('contact.availableHours')
    },
    {
      icon: <FaWhatsapp className="text-2xl text-green-500" />,
      title: t('contact.whatsappSupport'),
      contact: "+92 345 5000098",
      subtitle: t('contact.chatSupport')
    },
    {
      icon: <FaEnvelope className="text-2xl text-blue-600" />,
      title: t('contact.emailUs'),
      contact: "info@abunaveed.com",
      subtitle: t('contact.responseTime')
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-blue-600" />,
      title: t('contact.visitUs'),
      contact: t('contact.address'),
      subtitle: t('contact.officeHours')
    }
  ];

  const excavatorTeamContacts = [
    {
      icon: <MdConstruction className="text-2xl text-orange-500" />,
      title: t('contact.excavatorLead'),
      contact: "+92 300 1234567",
      subtitle: t('contact.siteOperations')
    },
    {
      icon: <FaHardHat className="text-2xl text-orange-500" />,
      title: t('contact.equipmentSupport'),
      contact: "+92 300 7654321",
      subtitle: t('contact.maintenance')
    },
    {
      icon: <FaTruck className="text-2xl text-orange-500" />,
      title: t('contact.fuelDelivery'),
      contact: "+92 300 9876543",
      subtitle: t('contact.fuelSupply')
    },
    {
      icon: <MdSupportAgent className="text-2xl text-orange-500" />,
      title: t('contact.emergency'),
      contact: "+92 300 1122334",
      subtitle: t('contact.afterHours')
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
            {t('contact.title')} <span className="text-blue-600">Abunaveed</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('contact.formTitle')}
            </h3>
            
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.fullName')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder={t('contact.namePlaceholder')}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.emailAddress')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder={t('contact.emailPlaceholder')}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.subject')}
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                >
                  <option value="">{t('contact.selectInquiry')}</option>
                  <option value="lubricants">{t('contact.lubricantProducts')}</option>
                  <option value="excavator">{t('contact.excavatorServices')}</option>
                  <option value="bulk">{t('contact.bulkOrder')}</option>
                  <option value="other">{t('contact.otherQuestions')}</option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder={t('contact.messagePlaceholder')}
                ></textarea>
              </motion.div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all"
              >
                {t('contact.sendMessage')}
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.generalContact')}
              </h3>
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
                <h3 className="text-2xl font-bold text-gray-900">
                  {t('contact.excavatorTeam')}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                {t('contact.excavatorDescription')}
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