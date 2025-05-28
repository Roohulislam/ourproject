import { motion } from "framer-motion";
import { FaOilCan, FaTruck, FaAward, FaShieldAlt, FaUsers } from "react-icons/fa";
import { GiOilPump } from "react-icons/gi";
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ur';

  const features = [
    {
      icon: <FaOilCan className="text-3xl text-blue-600" />,
      title: t('about.features.quality.title'),
      description: t('about.features.quality.description')
    },
    {
      icon: <FaTruck className="text-3xl text-blue-600" />,
      title: t('about.features.distribution.title'),
      description: t('about.features.distribution.description')
    },
    {
      icon: <FaAward className="text-3xl text-blue-600" />,
      title: t('about.features.certified.title'),
      description: t('about.features.certified.description')
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: t('about.features.protection.title'),
      description: t('about.features.protection.description')
    }
  ];

  const stats = [
    { value: t('about.stats.experience.value'), label: t('about.stats.experience.label') },
    { value: t('about.stats.clients.value'), label: t('about.stats.clients.label') },
    { value: t('about.stats.support.value'), label: t('about.stats.support.label') },
    { value: t('about.stats.guarantee.value'), label: t('about.stats.guarantee.label') }
  ];

  const missionTags = [
    t('about.mission.tags.quality'),
    t('about.mission.tags.customer'),
    t('about.mission.tags.excellence'),
    t('about.mission.tags.sustainability')
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
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}
        >
          {/* Left Column - Image */}
          <motion.div 
            variants={itemVariants}
            className="relative rounded-xl overflow-hidden shadow-xl h-96 lg:h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/70 flex items-center justify-center">
              <GiOilPump className="text-white text-9xl opacity-30" />
            </div>
            <div className={`absolute bottom-0 ${isRTL ? 'right-0 text-right' : 'left-0 text-left'} right-0 bg-gradient-to-t from-black/80 to-transparent p-8`}>
              <h3 className="text-2xl font-bold text-white">{t('about.since')}</h3>
              <p className="text-blue-200">{t('about.serving')}</p>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className={isRTL ? 'lg:pr-12' : 'lg:pl-12'}>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            >
              {t('about.title.prefix')} <span className="text-blue-600">{t('about.title.company')}</span> {t('about.title.suffix')}
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8"
            >
              {t('about.description.part1')}
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8"
            >
              {t('about.description.part2')}
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:border-blue-200 transition-all"
                >
                  <div className={`flex ${isRTL ? 'flex-row-reverse' : ''} items-start`}>
                    <div className={`${isRTL ? 'ml-4' : 'mr-4'} p-2 bg-blue-50 rounded-full`}>
                      {feature.icon}
                    </div>
                    <div className={isRTL ? 'text-right' : 'text-left'}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center p-4 bg-blue-50 rounded-lg"
                >
                  <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 sm:p-12 text-white"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="max-w-4xl mx-auto">
            <div className={`flex ${isRTL ? 'flex-row-reverse' : ''} items-center mb-6`}>
              <FaUsers className={`text-3xl ${isRTL ? 'ml-4' : 'mr-4'} text-blue-200`} />
              <h3 className="text-2xl sm:text-3xl font-bold">{t('about.mission.title')}</h3>
            </div>
            <p className={`text-lg sm:text-xl mb-6 text-blue-100 ${isRTL ? 'text-right' : 'text-left'}`}>
              {t('about.mission.description')}
            </p>
            <div className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
              {missionTags.map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;