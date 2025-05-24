import { motion } from "framer-motion";
import { FaOilCan, FaTruck, FaTools, FaCarAlt, FaCogs, FaShoppingCart, FaHeadset } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Lubricant & Oil Distribution",
      icon: <FaOilCan className="text-4xl text-blue-600" />,
      items: [
        "Wholesale & Retail Supply of engine oils",
        "Bulk Supply for workshops & factories",
        "Customized Packaging solutions"
      ]
    },
    {
      title: "Automotive & Industrial Lubricants",
      icon: <FaCarAlt className="text-4xl text-blue-600" />,
      items: [
        "Synthetic/Semi-Synthetic/Mineral oils",
        "Specialty lubricants for marine/aviation",
        "Industrial greases & anti-wear solutions"
      ]
    },
    {
      title: "Oil Change & Maintenance",
      icon: <FaTools className="text-4xl text-blue-600" />,
      items: [
        "On-site oil change services",
        "Lubrication consultancy",
        "Preventive maintenance programs"
      ]
    },
    {
      title: "Fleet Management Solutions",
      icon: <FaTruck className="text-4xl text-blue-600" />,
      items: [
        "Custom lubrication plans",
        "Oil analysis & testing",
        "Eco-friendly disposal services"
      ]
    },
    {
      title: "Retail & E-Commerce",
      icon: <FaShoppingCart className="text-4xl text-blue-600" />,
      items: [
        "Online ordering & doorstep delivery",
        "Loyalty programs",
        "Subscription services"
      ]
    },
    {
      title: "Technical Support & Training",
      icon: <FaCogs className="text-4xl text-blue-600" />,
      items: [
        "Mechanic training workshops",
        "24/7 customer support",
        "Technical consultations"
      ]
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering premium lubrication solutions for automotive and industrial needs across Pakistan
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4 p-3 bg-blue-50 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Explore All Services
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;