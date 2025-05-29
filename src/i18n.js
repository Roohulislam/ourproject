import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// In your i18n configuration file

// Directly include translations instead of importing
const resources = {
  en: {
    translation: {
       "navbar": {
    "logoAlt": "Abunaveed Oil and Lubricant Agency",
    "home": "Home",
    "products": "Products",
    "services": "Services",
    "locations": "Locations",
    "about": "About Us",
    "contact": "Contact Us",
    "toggleLanguage": "Toggle Language",
    "openMenu": "Open main menu"
  },
    "hero": {
    "ariaLabel": "Hero carousel",
    "title": "Premium Lubricants & Excavator Services",
    "subtitle": "Trusted oil solutions for automotive and industrial applications across Pakistan",
    "ctaPrimary": "Contact",
    "ctaSecondary": "Contact Team",
    "slideIndicator": "Go to slide {{number}}"
  },
   "products": {
    "title": "Our Products",
    "sortBy": "Sort by:",
    "sortOptions": {
      "featured": "Featured",
      "rating": "Customer Rating",
      "newest": "Newest Arrivals"
    },
    "newBadge": "NEW",
    "addToWishlist": "Add to wishlist",
    "removeFromWishlist": "Remove from wishlist",
    "share": "Share product",
    "quickView": "Quick view",
    "addToCart": "Add to cart",
    "add": "Add",
    "previousPage": "Previous page",
    "nextPage": "Next page",
    "goToPage": "Go to page {page}",
    "viewAll": "View all products",
    "viewAllProducts": "View All Products",
    "errorLoading": "Error loading products:"
  }, "services": {
    "title": "Our Comprehensive Services",
    "subtitle": "Delivering premium lubrication solutions for automotive and industrial needs across Pakistan",
    "exploreButton": "Explore All Services",
    "servicesList": [
      {
        "title": "Lubricant & Oil Distribution",
        "items": [
          "Wholesale & Retail Supply of engine oils",
          "Bulk Supply for workshops & factories",
          "Customized Packaging solutions"
        ]
      },
      {
        "title": "Automotive & Industrial Lubricants",
        "items": [
          "Synthetic/Semi-Synthetic/Mineral oils",
          "Specialty lubricants for marine/aviation",
          "Industrial greases & anti-wear solutions"
        ]
      },
      {
        "title": "Oil Change & Maintenance",
        "items": [
          "On-site oil change services",
          "Lubrication consultancy",
          "Preventive maintenance programs"
        ]
      },
      {
        "title": "Fleet Management Solutions",
        "items": [
          "Custom lubrication plans",
          "Oil analysis & testing",
          "Eco-friendly disposal services"
        ]
      },
      {
        "title": "Retail & E-Commerce",
        "items": [
          "Online ordering & doorstep delivery",
          "Loyalty programs",
          "Subscription services"
        ]
      },
      {
        "title": "Technical Support & Training",
        "items": [
          "Mechanic training workshops",
          "24/7 customer support",
          "Technical consultations"
        ]
      }
    ]
  },
   "location": {
    "title": "Find Us Easily",
    "subtitle": "Visit our headquarters or contact us for distribution inquiries across Pakistan",
    "agencyName": "Abunaveed Oil & Lubricant Agency",
    "address": "Abu naveed oil Agency, Chilās, 05812",
    "phone": "+92 3455000098",
    "whatsapp": "+92 3455000098",
    "hours": "Mon-Sat: 8:00 AM - 6:00 PM\nSun: 10:00 AM - 4:00 PM",
    "coordinates": "35.428516, 74.108550",
    "addressLabel": "Address",
    "phoneLabel": "Phone",
    "hoursLabel": "Business Hours",
    "coordinatesLabel": "Coordinates",
    "directionsButton": "Get Directions",
    "loadingMap": "Loading map...",
    "mapTitle": "Abunaveed Oil & Lubricant Agency Location",
    "openMapsButton": "Open in Maps"
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "subtitle": "Find answers to common questions about our lubricant products and excavator services",
    "lubricantTitle": "Lubricant Products",
    "excavatorTitle": "Excavator Team",
    "supportTitle": "Still have questions?",
    "supportText": "Our support team is available 24/7 to assist you with any inquiries about our products or services.",
    "call": "Call Now",
    "whatsapp": "WhatsApp Us",
    "errorTitle": "Error Loading FAQs",
    "errorText": "We encountered an issue displaying the FAQ section.",
    "errorToggle": "Failed to toggle accordion",
    "reload": "Reload Section",
    "lubricantFAQs": [
      {
        "question": "What types of lubricants does Abunaveed Oil Agency supply?",
        "answer": "We supply a comprehensive range of lubricants including engine oils (synthetic, semi-synthetic, mineral), gear oils, hydraulic fluids, greases, and specialty lubricants for marine and industrial applications."
      },
      {
        "question": "How can I verify the authenticity of your lubricant products?",
        "answer": "All our products come with holographic security seals and batch numbers that can be verified through our website or mobile app. We are authorized distributors for major international brands."
      },
      {
        "question": "Do you offer bulk purchasing options for businesses?",
        "answer": "Yes, we provide special bulk purchase programs with discounted rates for workshops, transport companies, and industrial clients. Our team can arrange customized packaging and delivery schedules."
      },
      {
        "question": "What makes your lubricants suitable for Pakistan's climate?",
        "answer": "Our lubricants are specially formulated to withstand Pakistan's extreme temperatures, from the cold northern regions to the hot southern areas, ensuring optimal engine protection year-round."
      }
    ],
    "excavatorFAQs": [
      {
        "question": "What excavator services does your team provide?",
        "answer": "Our excavator team offers complete earthmoving solutions including site preparation, trenching, foundation digging, and material handling. We also provide equipment with operators for short or long-term projects."
      },
      {
        "question": "Do you provide maintenance services for heavy equipment?",
        "answer": "Yes, our certified technicians offer on-site maintenance, lubrication services, and repairs for excavators, bulldozers, and other heavy machinery using genuine lubricants and parts."
      },
      {
        "question": "What areas in Pakistan do your excavator services cover?",
        "answer": "We operate throughout Pakistan with teams based in major cities. Our equipment can be deployed to remote project sites, including infrastructure and mining locations in all provinces."
      },
      {
        "question": "How do you ensure safety during excavation projects?",
        "answer": "All our operators are certified and undergo regular safety training. We conduct site risk assessments, provide safety gear, and follow international excavation safety protocols on every project."
      }
    ]
  },
    "team": {
    "title": "Our Team",
    "subtitle": "Meet the experts driving our oil and lubricant solutions",
    "ceo": {
      "name": "Qare Aurang Zeb",
      "position": "CEO & Founder",
      "bio": "Visionary leader with 15+ years in oil industry"
    },
    "manager": {
      "name": "Mufti Salem Malik",
      "position": "Manager",
      "bio": "Operations expert ensuring seamless workflows"
    },
    "leader": {
      "name": "Mulana Awais",
      "position": "Team Leader",
      "bio": "Technical specialist in lubricant formulations"
    },
    "exec": {
      "name": "Kamran Khan",
      "position": "Executor Manager",
      "bio": "Logistics and supply chain professional"
    },
    "social": {
      "facebook": "Facebook",
      "whatsapp": "WhatsApp",
      "email": "Email"
    }
  },
  "footer": {
    "logoAlt": "Abunaveed Oil and Lubricant Agency Logo",
    "companyName": "Abunaveed",
    "description": "Your trusted partner for premium lubricants and excavator services across Pakistan.",
    "social": {
      "facebook": "https://facebook.com/abunaveed",
      "facebookAria": "Visit our Facebook page",
      "whatsapp": "923455000098",
      "whatsappAria": "Contact us on WhatsApp"
    },
    "links": {
      "title": "Quick Links",
      "home": "Home",
      "products": "Products",
      "services": "Services",
      "about": "About Us",
      "contact": "Contact"
    },
    "contact": {
      "title": "Contact Us",
      "phone": "+92 345 5000098",
      "email": "info@abunaveed.com",
      "address": "Abu naveed oil Agency, Chilās, 05812"
    },
    "services": {
      "title": "Excavator Team",
      "support": "24/7 Equipment Support",
      "fuel": "Bulk Fuel Delivery",
      "maintenance": "On-site Maintenance",
      "emergency": "Emergency Services"
    },
    "copyright": "Abunaveed Oil and Lubricant Agency. All rights reserved."
  },
  "about": {
    "title": {
      "prefix": "About",
      "company": "Abunaveed",
      "suffix": "Oil Agency"
    },
    "since": "Since 2008",
    "serving": "Serving Pakistan's lubrication needs",
    "description": {
      "part1": "Abunaveed Oil & Lubricant Agency has been a trusted name in Pakistan's lubrication industry since 2008. We specialize in providing high-quality automotive and industrial lubricants to businesses and individuals across the country.",
      "part2": "Our commitment to quality, customer satisfaction, and technical expertise has made us the preferred choice for workshops, transport companies, and industrial clients throughout Northern Pakistan."
    },
    "features": {
      "quality": {
        "title": "Premium Quality",
        "description": "We source only the highest grade lubricants from trusted manufacturers"
      },
      "distribution": {
        "title": "Nationwide Distribution",
        "description": "Efficient logistics network covering all major cities in Pakistan"
      },
      "certified": {
        "title": "Industry Certified",
        "description": "Certified products meeting international quality standards"
      },
      "protection": {
        "title": "Reliable Protection",
        "description": "Engine protection that extends machinery lifespan"
      }
    },
    "stats": {
      "experience": {
        "value": "15+",
        "label": "Years Experience"
      },
      "clients": {
        "value": "5000+",
        "label": "Satisfied Clients"
      },
      "support": {
        "value": "24/7",
        "label": "Customer Support"
      },
      "guarantee": {
        "value": "100%",
        "label": "Quality Guarantee"
      }
    },
    "mission": {
      "title": "Our Mission",
      "description": "To revolutionize Pakistan's lubricant industry by providing superior quality products, technical expertise, and unmatched customer service that keeps machinery running smoothly and businesses moving forward.",
      "tags": {
        "quality": "Quality Assurance",
        "customer": "Customer Focus",
        "excellence": "Technical Excellence",
        "sustainability": "Sustainable Solutions"
      }
    }
  },
   "contact": {
    "title": "Contact",
    "subtitle": "Get in touch with our team for lubricant solutions or excavator services",
    "formTitle": "Send Us a Message",
    "fullName": "Full Name",
    "namePlaceholder": "Your name",
    "emailAddress": "Email Address",
    "emailPlaceholder": "your@email.com",
    "subject": "Subject",
    "selectInquiry": "Select inquiry type",
    "lubricantProducts": "Lubricant Products",
    "excavatorServices": "Excavator Team Services",
    "bulkOrder": "Bulk Order Inquiry",
    "otherQuestions": "Other Questions",
    "message": "Message",
    "messagePlaceholder": "Your message...",
    "sendMessage": "Send Message",
    "generalContact": "General Contact",
    "generalInquiries": "General Inquiries",
    "availableHours": "Available 8:00 AM - 6:00 PM",
    "whatsappSupport": "WhatsApp Support",
    "chatSupport": "24/7 Chat Support",
    "emailUs": "Email Us",
    "responseTime": "Response within 24 hours",
    "visitUs": "Visit Us",
    "address": "Abu naveed oil Agency, Chilās, 05812",
    "officeHours": "Open Mon-Sat: 8AM-6PM",
    "excavatorTeam": "Excavator Team Contacts",
    "excavatorDescription": "Direct contacts for our heavy equipment and excavation services team",
    "excavatorLead": "Excavator Team Lead",
    "siteOperations": "Ali Khan - Site Operations",
    "equipmentSupport": "Equipment Support",
    "maintenance": "Mechanical & Maintenance",
    "fuelDelivery": "Bulk Fuel Delivery",
    "fuelSupply": "On-site fuel supply",
    "emergency": "24/7 Emergency",
    "afterHours": "After-hours excavator support"
  }
    }
  },
  ur: {
    translation: {
        "navbar": {
    "logoAlt": "ابونوید آئل اور لبریکنٹ ایجنسی",
    "home": "ہوم",
    "products": "مصنوعات",
    "services": "خدمات",
    "locations": "مقامات",
    "about": "ہمارے بارے میں",
    "contact": "ہم سے رابطہ کریں",
    "toggleLanguage": "زبان تبدیل کریں",
    "openMenu": "مینو کھولیں"
  },
    "hero": {
    "ariaLabel": "ہیرو کیروسل",
    "title": "پریمیم لبریکنٹس اور ایکسکیویٹر خدمات",
    "subtitle": "پاکستان بھر میں آٹوموٹو اور صنعتی ایپلی کیشنز کے لیے قابل اعتماد تیل کے حل",
    "ctaPrimary": "ہم سے رابطہ کریں",
    "ctaSecondary": "ٹیم سے رابطہ کریں",
    "slideIndicator": "سلائیڈ {{number}} پر جائیں"
  },
   "products": {
    "title": "ہماری مصنوعات",
    "sortBy": "ترتیب دیں:",
    "sortOptions": {
      "featured": "نمایاں",
      "rating": "کسٹمر ریٹنگ",
      "newest": "نئی آمد"
    },
    "newBadge": "نیا",
    "addToWishlist": "خواہش کی فہرست میں شامل کریں",
    "removeFromWishlist": "خواہش کی فہرست سے ہٹائیں",
    "share": "مصنوعات کا اشتراک کریں",
    "quickView": "فوری نظارہ",
    "addToCart": "کارٹ میں شامل کریں",
    "add": "شامل کریں",
    "previousPage": "پچھلا صفحہ",
    "nextPage": "اگلا صفحہ",
    "goToPage": "صفحہ {page} پر جائیں",
    "viewAll": "تمام مصنوعات دیکھیں",
    "viewAllProducts": "تمام مصنوعات دیکھیں",
    "errorLoading": "مصنوعات لوڈ کرنے میں خرابی:"
  },
  "services": {
    "title": "ہماری جامع خدمات",
    "subtitle": "پاکستان بھر میں آٹوموٹو اور صنعتی ضروریات کے لیے پریمیم لبریکیشن حل فراہم کرنا",
    "exploreButton": "تمام خدمات دریافت کریں",
    "servicesList": [
      {
        "title": "لبریکنٹ اور تیل کی تقسیم",
        "items": [
          "انجن آئلز کی تھوک اور خوردہ فراہمی",
          "ورکشاپس اور فیکٹریوں کے لیے بڑی مقدار میں سپلائی",
          "اپنی مرضی کے مطابق پیکجنگ حل"
        ]
      },
      {
        "title": "آٹوموٹو اور صنعتی لبریکنٹس",
        "items": [
          "سنتھیٹک/سیمی سنتھیٹک/منرل آئلز",
          "بحری/ہوائی خدمات کے لیے خصوصی لبریکنٹس",
          "صنعتی گریس اور اینٹی ویئر حل"
        ]
      },
      {
        "title": "آئل چینج اور دیکھ بھال",
        "items": [
          "مقام پر آئل چینج خدمات",
          "لبریکیشن مشاورت",
          "احتیاطی دیکھ بھال کے پروگرام"
        ]
      },
      {
        "title": "فلیٹ مینجمنٹ حل",
        "items": [
          "اپنی مرضی کے لبریکیشن منصوبے",
          "تیل کا تجزیہ اور ٹیسٹنگ",
          "ماحول دوست ضائع کرنے کی خدمات"
        ]
      },
      {
        "title": "ریٹیل اور ای کامرس",
        "items": [
          "آن لائن آرڈرنگ اور گھر کی ڈلیوری",
          "وفاداری پروگرام",
          "سبسکرپشن خدمات"
        ]
      },
      {
        "title": "تکنیکی مدد اور تربیت",
        "items": [
          "میکینک تربیتی ورکشاپس",
          "24/7 کسٹمر سپورٹ",
          "تکنیکی مشاورت"
        ]
      }
    ]
  },
  "location": {
    "title": "آسانی سے ہمیں تلاش کریں",
    "subtitle": "ہمارے ہیڈکوارٹرز کا دورہ کریں یا پاکستان بھر میں تقسیم کے بارے میں معلومات کے لیے ہم سے رابطہ کریں",
    "agencyName": "ابونوید آئل اینڈ لبریکنٹ ایجنسی",
    "address": "ابو نعید آئل ایجنسی، چلاس، 05812",
    "phone": "+92 3455000098",
    "whatsapp": "+92 3455000098",
    "hours": "سوموار سے ہفتہ: صبح 8:00 سے شام 6:00 تک\nاتوار: صبح 10:00 سے شام 4:00 تک",
    "coordinates": "35.428516, 74.108550",
    "addressLabel": "پتہ",
    "phoneLabel": "فون",
    "hoursLabel": "کاروباری اوقات",
    "coordinatesLabel": "کوآرڈینیٹس",
    "directionsButton": "سمت حاصل کریں",
    "loadingMap": "نقشہ لوڈ ہو رہا ہے...",
    "mapTitle": "ابونوید آئل اینڈ لبریکنٹ ایجنسی کا مقام",
    "openMapsButton": "نقشے میں کھولیں"
  },
   "faq": {
    "title": "اکثر پوچھے گئے سوالات",
    "subtitle": "ہمارے لبریکنٹ مصنوعات اور ایکسکیویٹر خدمات کے بارے میں عام سوالات کے جوابات تلاش کریں",
    "lubricantTitle": "لبریکنٹ مصنوعات",
    "excavatorTitle": "ایکسکیویٹر ٹیم",
    "supportTitle": "ابھی بھی سوالات ہیں؟",
    "supportText": "ہماری سپورٹ ٹیم 24/7 دستیاب ہے تاکہ ہماری مصنوعات یا خدمات کے بارے میں کسی بھی استفسار میں آپ کی مدد کر سکیں۔",
    "call": "ابھی کال کریں",
    "whatsapp": "واٹس ایپ کریں",
    "errorTitle": "FAQ سیکشن لوڈ کرنے میں خرابی",
    "errorText": "ہمیں FAQ سیکشن دکھانے میں ایک مسئلہ درپیش آیا۔",
    "errorToggle": "ایکورڈین کو ٹوگل کرنے میں ناکامی",
    "reload": "سیکشن دوبارہ لوڈ کریں",
    "lubricantFAQs": [
      {
        "question": "ابونوید آئل ایجنسی کس قسم کے لبریکنٹس فراہم کرتی ہے؟",
        "answer": "ہم انجن آئلز (سنتھیٹک، سیمی سنتھیٹک، معدنی)، گیئر آئلز، ہائیڈرالک سیال، گریس، اور سمندری اور صنعتی ایپلی کیشنز کے لیے خصوصی لبریکنٹس کی ایک جامع رینج فراہم کرتے ہیں۔"
      },
      {
        "question": "میں آپ کی لبریکنٹ مصنوعات کی اصلیت کی تصدیق کیسے کر سکتا ہوں؟",
        "answer": "ہماری تمام مصنوعات ہولوگرافک سیکیورٹی مہروں اور بیچ نمبروں کے ساتھ آتی ہیں جنہیں ہماری ویب سائٹ یا موبائل ایپ کے ذریعے تصدیق کیا جا سکتا ہے۔ ہم بڑی بین الاقوامی برانڈز کے مجاز ڈسٹریبیوٹرز ہیں۔"
      },
      {
        "question": "کیا آپ کاروباروں کے لیے بڑی مقدار میں خریداری کے اختیارات پیش کرتے ہیں؟",
        "answer": "جی ہاں، ہم ورکشاپس، ٹرانسپورٹ کمپنیوں، اور صنعتی کلائنٹس کے لیے رعایتی شرحوں کے ساتھ خصوصی بلک خرید پروگرام پیش کرتے ہیں۔ ہماری ٹیم حسب ضرورت پیکجنگ اور ترسیل کے شیڈول کا انتظام کر سکتی ہے۔"
      },
      {
        "question": "آپ کے لبریکنٹس پاکستان کے موسم کے لیے کیسے موزوں ہیں؟",
        "answer": "ہمارے لبریکنٹس خصوصی طور پر پاکستان کے انتہائی درجہ حرارت کو برداشت کرنے کے لیے تیار کیے گئے ہیں، شمالی علاقوں کی سردی سے لے کر جنوبی علاقوں کی گرمی تک، سال بھر انجن کے بہترین تحفظ کو یقینی بناتے ہیں۔"
      }
    ],
    "excavatorFAQs": [
      {
        "question": "آپ کی ٹیم کس قسم کی ایکسکیویٹر خدمات فراہم کرتی ہے؟",
        "answer": "ہماری ایکسکیویٹر ٹیم سائٹ کی تیاری، ٹرینچنگ، فاؤنڈیشن کھدائی، اور مواد کے ہینڈلنگ سمیت مکمل ارتھ موونگ حل پیش کرتی ہے۔ ہم شارٹ یا لانگ ٹرم منصوبوں کے لیے آپریٹرز کے ساتھ سامان بھی فراہم کرتے ہیں۔"
      },
      {
        "question": "کیا آپ بھاری مشینری کے لیے بحالی کی خدمات فراہم کرتے ہیں؟",
        "answer": "جی ہاں، ہمارے سرٹیفائیڈ ٹیکنیشنز ایکسکیویٹرز، بلڈوزرز، اور دیگر بھاری مشینری کے لیے جینیوئن لبریکنٹس اور پرزے استعمال کرتے ہوئے آن سائٹ بحالی، لبریکیشن خدمات، اور مرمت پیش کرتے ہیں۔"
      },
      {
        "question": "آپ کی ایکسکیویٹر خدمات پاکستان کے کن علاقوں میں دستیاب ہیں؟",
        "answer": "ہم پورے پاکستان میں بڑے شہروں میں مقیم ٹیموں کے ساتھ کام کرتے ہیں۔ ہمارا سامان تمام صوبوں میں انفراسٹرکچر اور کان کنی کے مقامات سمیت دور دراز کے منصوبوں کے مقامات پر تعینات کیا جا سکتا ہے۔"
      },
      {
        "question": "آپ کھدائی کے منصوبوں کے دوران حفاظت کو کیسے یقینی بناتے ہیں؟",
        "answer": "ہمارے تمام آپریٹرز سرٹیفائیڈ ہیں اور باقاعدہ حفاظتی تربیت سے گزرتے ہیں۔ ہم ہر منصوبے پر سائٹ رسک اسسمنٹ کرتے ہیں، حفاظتی گیئر فراہم کرتے ہیں، اور بین الاقوامی کھدائی کے حفاظتی پروٹوکول پر عمل کرتے ہیں۔"
      }
    ]
  },
  "team": {
    "title": "ہماری ٹیم",
    "subtitle": "ہماری تیل اور چکنا کرنے والے حل کو چلانے والے ماہرین سے ملیں",
    "ceo": {
      "name": "قارے اورنگ زیب",
      "position": "سی ای او اور بانی",
      "bio": "تیل کی صنعت میں 15+ سال کے ساتھ بصیرت والا رہنما"
    },
    "manager": {
      "name": "مفتی سالم ملک",
      "position": "مینیجر",
      "bio": "آپریشنز کے ماہر بے ربطہ ورک فلو کو یقینی بناتے ہیں"
    },
    "leader": {
      "name": "مولانا اویس",
      "position": "ٹیم لیڈر",
      "bio": "چکنا کرنے والے فارمولیشنز میں تکنیکی ماہر"
    },
    "exec": {
      "name": "کامران خان",
      "position": "ایگزیکٹر مینیجر",
      "bio": "لاجسٹکس اور سپلائی چین کے پیشہ ور"
    },
    "social": {
      "facebook": "فیس بک",
      "whatsapp": "واٹس ایپ",
      "email": "ای میل"
    }
  },
    "footer": {
    "logoAlt": "ابو نویڈ آئل اینڈ لبریکنٹ ایجنسی لوگو",
    "companyName": "ابو نویڈ",
    "description": "پاکستان بھر میں پریمیم لبریکنٹس اور ایکسکیویٹر خدمات کا آپ کا قابل اعتماد پارٹنر۔",
    "social": {
      "facebook": "https://facebook.com/abunaveed",
      "facebookAria": "ہمارا فیس بک پیج دیکھیں",
      "whatsapp": "923455000098",
      "whatsappAria": "ہم سے واٹس ایپ پر رابطہ کریں"
    },
    "links": {
      "title": "فوری لنکس",
      "home": "ہوم",
      "products": "مصنوعات",
      "services": "خدمات",
      "about": "ہمارے بارے میں",
      "contact": "رابطہ"
    },
    "contact": {
      "title": "ہم سے رابطہ کریں",
      "phone": "+92 345 5000098",
      "email": "info@abunaveed.com",
      "address": "ابو نویڈ آئل ایجنسی، چلاس، 05812"
    },
    "services": {
      "title": "ایکسکیویٹر ٹیم",
      "support": "24/7 آلات کی سپورٹ",
      "fuel": "بھاری مقدار میں ایندھن کی ترسیل",
      "maintenance": "مقامی مرمت",
      "emergency": "ہنگامی خدمات"
    },
    "copyright": "ابو نویڈ آئل اینڈ لبریکنٹ ایجنسی۔ تمام حقوق محفوظ ہیں۔"
  },
   "about": {
    "title": {
      "prefix": "کے بارے میں",
      "company": "ابو نویڈ",
      "suffix": "آئل ایجنسی"
    },
    "since": "2008 سے",
    "serving": "پاکستان کی لبریکنٹ کی ضروریات پوری کر رہے ہیں",
    "description": {
      "part1": "ابو نویڈ آئل اینڈ لبریکنٹ ایجنسی 2008 سے پاکستان کی لبریکنٹ انڈسٹری میں ایک معتبر نام رہا ہے۔ ہم ملک بھر کے کاروباروں اور افراد کو اعلیٰ معیار کے آٹوموٹو اور صنعتی لبریکنٹس فراہم کرنے میں مہارت رکھتے ہیں۔",
      "part2": "معیار، گاہک کی اطمینان، اور تکنیکی مہارت کے لیے ہماری وابستگی نے ہمیں شمالی پاکستان بھر میں ورکشاپس، ٹرانسپورٹ کمپنیوں اور صنعتی کلائنٹس کے لیے پسندیدہ انتخاب بنایا ہے۔"
    },
    "features": {
      "quality": {
        "title": "پریمیم کوالٹی",
        "description": "ہم صرف قابل اعتماد مینوفیکچررز سے اعلیٰ ترین گریڈ کے لبریکنٹس حاصل کرتے ہیں"
      },
      "distribution": {
        "title": "ملک بھر میں تقسیم",
        "description": "پاکستان کے تمام بڑے شہروں کو کور کرنے والا موثر لاجسٹکس نیٹ ورک"
      },
      "certified": {
        "title": "انڈسٹری سرٹیفائیڈ",
        "description": "بین الاقوامی معیار کے مطابق مصنوعات"
      },
      "protection": {
        "title": "قابل اعتماد تحفظ",
        "description": "انجن کا تحفظ جو مشینری کی زندگی کو بڑھاتا ہے"
      }
    },
    "stats": {
      "experience": {
        "value": "15+",
        "label": "سالوں کا تجربہ"
      },
      "clients": {
        "value": "5000+",
        "label": "مطمئن کلائنٹس"
      },
      "support": {
        "value": "24/7",
        "label": "کسٹمر سپورٹ"
      },
      "guarantee": {
        "value": "100%",
        "label": "کوالٹی گارنٹی"
      }
    },
    "mission": {
      "title": "ہمارا مشن",
      "description": "پاکستان کی لبریکنٹ انڈسٹری کو انقلابی تبدیلی لانا بہترین معیار کی مصنوعات، تکنیکی مہارت، اور بے مثال کسٹمر سروس فراہم کرکے جو مشینری کو ہموار چلانے اور کاروبار کو آگے بڑھانے میں مدد کرے۔",
      "tags": {
        "quality": "کوالٹی کی ضمانت",
        "customer": "کسٹمر پر توجہ",
        "excellence": "تکنیکی مہارت",
        "sustainability": "پائیدار حل"
      }
    }
  },
   "contact": {
    "title": "رابطہ کریں",
    "subtitle": "لبریکنٹ حل یا ایکسکیویٹر خدمات کے لیے ہماری ٹیم سے رابطہ کریں",
    "formTitle": "ہمیں پیغام بھیجیں",
    "fullName": "مکمل نام",
    "namePlaceholder": "آپ کا نام",
    "emailAddress": "ای میل ایڈریس",
    "emailPlaceholder": "آپ کا@ای میل۔com",
    "subject": "موضوع",
    "selectInquiry": "استفسار کی قسم منتخب کریں",
    "lubricantProducts": "لبریکنٹ مصنوعات",
    "excavatorServices": "ایکسکیویٹر ٹیم خدمات",
    "bulkOrder": "بھاری مقدار میں آرڈر کا استفسار",
    "otherQuestions": "دیگر سوالات",
    "message": "پیغام",
    "messagePlaceholder": "آپ کا پیغام...",
    "sendMessage": "پیغام بھیجیں",
    "generalContact": "عام رابطہ",
    "generalInquiries": "عام استفسارات",
    "availableHours": "صبح 8:00 سے شام 6:00 تک دستیاب",
    "whatsappSupport": "واٹس ایپ سپورٹ",
    "chatSupport": "24/7 چیٹ سپورٹ",
    "emailUs": "ہمیں ای میل کریں",
    "responseTime": "24 گھنٹوں کے اندر جواب",
    "visitUs": "ہمیں ملنے آئیں",
    "address": "ابو نوید آئل ایجنسی، چلاس، 05812",
    "officeHours": "سوموار سے ہفتہ: صبح 8 سے شام 6 بجے تک کھلا",
    "excavatorTeam": "ایکسکیویٹر ٹیم کے رابطے",
    "excavatorDescription": "ہماری بھاری مشینری اور کھدائی کی خدمات کی ٹیم کے براہ راست رابطے",
    "excavatorLead": "ایکسکیویٹر ٹیم لیڈ",
    "siteOperations": "علی خان - سائٹ آپریشنز",
    "equipmentSupport": "سامان کی سپورٹ",
    "maintenance": "میکانی اور دیکھ بھال",
    "fuelDelivery": "بھاری مقدار میں ایندھن کی ترسیل",
    "fuelSupply": "سائٹ پر ایندھن کی فراہمی",
    "emergency": "24/7 ہنگامی",
    "afterHours": "اوقات کار کے بعد ایکسکیویٹر سپورٹ"
  }
    }
  }
};

i18n
  // Use the XHR backend for loading translations
  .use(Backend)
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next)
  // Initialize i18next
  .init({
    load: "languageOnly", // Only load the language, not the region
    resources,
    fallbackLng: "en", // Changed from "de" to "en" as your default
    debug: true,
    interpolation: {
      escapeValue: false // Not needed for React as it escapes by default
    },
    react: {
      useSuspense: false // Changed to false for better control
    }
  });

// Handle language changes and direction
if (typeof window !== 'undefined') {
  // Set initial direction
  document.body.dir = i18n.language === 'ur' ? 'rtl' : 'ltr';
  
  // Listen for language changes
  i18n.on('languageChanged', (lng) => {
    localStorage.setItem('language', lng);
    document.body.dir = lng === 'ur' ? 'rtl' : 'ltr';
  });
}


export default i18n;