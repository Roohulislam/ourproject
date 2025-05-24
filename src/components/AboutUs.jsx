import { motion } from "framer-motion";
import { FaOilCan, FaTruck, FaAward, FaShieldAlt, FaUsers } from "react-icons/fa";
import { GiOilPump } from "react-icons/gi";

const AboutUs = () => {
  const features = [
    {
      icon: <FaOilCan className="text-3xl text-blue-600" />,
      title: "Premium Quality",
      description: "We source only the highest grade lubricants from trusted manufacturers"
    },
    {
      icon: <FaTruck className="text-3xl text-blue-600" />,
      title: "Nationwide Distribution",
      description: "Efficient logistics network covering all major cities in Pakistan"
    },
    {
      icon: <FaAward className="text-3xl text-blue-600" />,
      title: "Industry Certified",
      description: "Certified products meeting international quality standards"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Reliable Protection",
      description: "Engine protection that extends machinery lifespan"
    }
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5000+", label: "Satisfied Clients" },
    { value: "24/7", label: "Customer Support" },
    { value: "100%", label: "Quality Guarantee" }
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
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div 
            variants={itemVariants}
            className="relative rounded-xl overflow-hidden shadow-xl h-96 lg:h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/70 flex items-center justify-center">
              <GiOilPump className="text-white text-9xl opacity-30" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-2xl font-bold text-white">Since 2008</h3>
              <p className="text-blue-200">Serving Pakistan's lubrication needs</p>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="lg:pl-12">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            >
              About <span className="text-blue-600">Abunaveed</span> Oil Agency
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8"
            >
              Abunaveed Oil & Lubricant Agency has been a trusted name in Pakistan's lubrication industry since 2008. We specialize in providing high-quality automotive and industrial lubricants to businesses and individuals across the country.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-600 mb-8"
            >
              Our commitment to quality, customer satisfaction, and technical expertise has made us the preferred choice for workshops, transport companies, and industrial clients throughout Northern Pakistan.
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
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-blue-50 rounded-full">
                      {feature.icon}
                    </div>
                    <div>
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
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <FaUsers className="text-3xl mr-4 text-blue-200" />
              <h3 className="text-2xl sm:text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg sm:text-xl mb-6 text-blue-100">
              To revolutionize Pakistan's lubricant industry by providing superior quality products, technical expertise, and unmatched customer service that keeps machinery running smoothly and businesses moving forward.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Quality Assurance</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Customer Focus</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Technical Excellence</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Sustainable Solutions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;