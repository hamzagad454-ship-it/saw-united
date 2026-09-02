/**
 * Sawa United — Vanilla JS
 * Organized behavior layer. UI, content, selectors and timing values are preserved.
 */

/* ==================== Shared Helpers ==================== */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));

/* ==================== Language + Theme System ==================== */

const SITE_TRANSLATIONS = {
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navServices: "Services",
    navAbout: "About us",
    navMedia: "Media Center",
    whatsapp: "WhatsApp",
    interests: "Register Interest",
    heroTitle1: "We build today ..",
    heroTitle2: "for a better future",
    heroLead:
      "Promising investment opportunities in premium real estate projects",
    contactWhatsapp: "Contact via WhatsApp",
    exploreProjects: "Explore projects",
    registerInterest: "Register your interest",
    startJourney: "Start your investment journey with us",
    unitType: "Unit type",
    residential: "Residential",
    administrative: "Office",
    commercial: "Commercial",
    hotelApartments: "Serviced apartments",
    registerNow: "Register now",
    discover: "Discover",
    featured: "FEATURED PROPERTIES",
    selectedProperties: "Selected properties",
    all: "All",
    villas: "Villas",
    apartments: "Apartments",
    land: "Land",
    verified: "✓ Verified",
    exploreProperty: "Explore property",
    exploreMorocco: "EXPLORE MOROCCO",
    chooseCity: "Choose your city",
    chooseCityLead:
      "Start with the city that fits your lifestyle or investment goal.",
    cityGuide: "CITY GUIDE",
    mostRequested: "Most requested",
    marketNature: "Market profile",
    exploreProperties: "Explore properties",
    yourHome: "YOUR HOME IN MOROCCO",
    homeInMorocco: "Your home in Morocco",
    evenFar: "even when you are far away.",
    journeyLead:
      "A clear journey from discovering the property to speaking with our advisor and arranging a visit. We designed the experience to stay simple whether you live in Morocco or abroad.",
    discoverStep: "Discover",
    compareStep: "Compare",
    contactStep: "Contact",
    visitStep: "Visit the property",
    advisor: "Your real estate advisor",
    advisorLead: "Let us help you reach the right choice.",
    talkAdvisor: "Talk to an advisor on WhatsApp",
    about: "ABOUT SAWA UNITED",
    aboutTitle1: "We select the property",
    aboutTitle2: "before we present it.",
    aboutLead:
      "Sawa United offers a clearer real estate experience: selected properties, organized information, and a search journey that helps you make a better decision.",
    selected: "✓ Selected properties",
    clearInfo: "✓ Clear information",
    directSupport: "✓ Direct support",
    contact: "CONTACT · MOROCCO",
    startSearch: "Start your property search",
    contactLead:
      "Leave your details and our team will contact you to help you choose the right property.",
    whatLooking: "What are you looking for?",
    buyProperty: "Buy a property",
    investment: "Investment",
    rent: "Rent",
    landOption: "Land",
    commercialProperty: "Commercial property",
    contactOnWhatsapp: "Contact via WhatsApp",
    footerLead:
      "Sawa United Real Estate Development — We build today for a better future.",
    contactUs: "Contact us",
    followUs: "Follow us",
    copyright: "Copyright © 2026 Sawa United. All rights reserved.",
    namePlaceholder: "Name *",
    phonePlaceholder: "Phone number *",
    close: "Close",
    property: "Property",
    overview: "Overview",
    masterplan: "Site plan",
    gallery: "Gallery",
    quickActions: "Quick Actions",
    viewMasterplan: "View Full Master Plan",
    projectStats: "Project Statistics",
    masterPlanTitle: "Master Plan",
    masterPlanLead: "Illustrative project site plan",
    residences: "RESIDENCES",
    greenArea: "GREEN AREA",
    clubAmenities: "CLUB / AMENITIES",
    countryMorocco: "Morocco · MA",
    cityMarrakech: "Marrakech",
    cityCard1: "Villas · Riads · Apartments",
    cityCard2: "Apartments · Commercial",
    cityCard3: "Sea View · Residences",
    cityCard4: "Residences · Investment",
    marrakechLocation: "Marrakech · Hivernage",
    casablancaLocation: "Casablanca · Maarif",
    tangierLocation: "Tanger · Malabata",
    rabatLocation: "Rabat · Agdal",
    "2000sqm": "2 000 m²",
    "380sqm": "380 m²",
    "420sqm": "420 m²",
    "165sqm": "165 m²",
    "180sqm": "180 m²",
    "240sqm": "240 m²",
    marrakechLocation: "Marrakech · Hivernage",
    casablancaLocation: "Casablanca · Maarif",
    tangierLocation: "Tangier · Malabata",
    rabatLocation: "Rabat · Agdal",
    "2000sqm": "2,000 m²",
    "380sqm": "380 m²",
    "420sqm": "420 m²",
    "165sqm": "165 m²",
    "180sqm": "180 m²",
    "240sqm": "240 m²",
    cityCasablanca: "Casablanca",
    cityTangier: "Tangier",
    cityRabat: "Rabat",
    villaDesc: "Modern villa with garden and private pool",
    apartmentDesc: "Elegant apartment in a central location close to services",
    tangierDesc: "Modern residence with sea view and open spaces",
    landDesc: "Land suitable for a residential or hospitality project",
    commercialDesc:
      "Commercial space suitable for premium businesses and activities",
    rabatDesc:
      "Quiet apartment with modern design close to the heart of the city",
    rooms4: "4 rooms",
    rooms3: "3 rooms",
    bathrooms3: "3 bathrooms",
    bathroom2: "2 bathrooms",
    bedrooms2: "2 bedrooms",
    primeLocation: "Prime location",
    investmentLabel: "Investment",
    frontFacade: "Main frontage",
    whatsappGreeting:
      "Hello Sawa United, I would like to speak with a real estate advisor.",
    nameLabel: "Name",
    phoneLabel: "Phone number",
    interestLabel: "Interest",
    whatsappProperty:
      "Hello Sawa United, I would like to inquire about the property:",
    sent: "Request sent ✓",
    openedWhatsapp: "WhatsApp opened ✓",
    languageLabel: "Choose language",
    dark: "Dark",
    light: "Light",
    cities: {
      marrakech: {
        title: "Marrakech",
        description:
          "A standout destination for villas, riads, hospitality properties and long-term investment.",
        type: "Villas",
        mood: "Premium",
      },
      casablanca: {
        title: "Casablanca",
        description:
          "Morocco’s business hub, with diverse demand for residential and commercial units.",
        type: "Apartments",
        mood: "Business",
      },
      tangier: {
        title: "Tangier",
        description:
          "A coastal city combining sea views, modern residences and growth opportunities.",
        type: "Sea View",
        mood: "Growing",
      },
      rabat: {
        title: "Rabat",
        description:
          "A calm, stable market for buyers seeking location quality and long-term living.",
        type: "Residences",
        mood: "Stable",
      },
    },
  },
  ar: {
    navHome: "الرئيسية",
    navProjects: "مشاريعنا",
    navServices: "الخدمات",
    navAbout: "من نحن",
    navMedia: "المركز الإعلامي",
    whatsapp: "واتساب",
    interests: "سجل الاهتمامات",
    heroTitle1: "نبني اليوم ..",
    heroTitle2: "لمستقبل أفضل",
    heroLead: "فرص استثمارية واعدة في أرقى المشاريع العقارية",
    contactWhatsapp: "تواصل عبر واتساب",
    exploreProjects: "استكشف المشاريع",
    registerInterest: "سجل اهتمامك",
    startJourney: "ابدأ رحلتك الاستثمارية معنا",
    unitType: "نوع الوحدة",
    residential: "سكني",
    administrative: "إداري",
    commercial: "تجاري",
    hotelApartments: "شقق فندقية",
    registerNow: "سجل الآن",
    discover: "اكتشف",
    featured: "FEATURED PROPERTIES",
    selectedProperties: "عقارات مختارة",
    all: "الكل",
    villas: "فلل",
    apartments: "شقق",
    land: "أراضي",
    verified: "✓ Verified",
    exploreProperty: "استكشف العقار",
    exploreMorocco: "EXPLORE MOROCCO",
    chooseCity: "اختر مدينتك",
    chooseCityLead:
      "ابدأ من المدينة التي تناسب أسلوب حياتك أو هدفك الاستثماري.",
    cityGuide: "CITY GUIDE",
    mostRequested: "الأكثر طلبًا",
    marketNature: "طبيعة السوق",
    exploreProperties: "استكشف العقارات",
    yourHome: "YOUR HOME IN MOROCCO",
    homeInMorocco: "بيتك في المغرب",
    evenFar: "حتى لو كنت بعيدًا.",
    journeyLead:
      "رحلة واضحة من اكتشاف العقار إلى التواصل مع مستشارنا وترتيب الزيارة. صممنا التجربة لتكون بسيطة لمن يعيش داخل المغرب أو خارجه.",
    discoverStep: "اكتشف",
    compareStep: "قارن",
    contactStep: "تواصل",
    visitStep: "زر العقار",
    advisor: "مستشارك العقاري",
    advisorLead: "دعنا نساعدك في الوصول إلى الاختيار المناسب.",
    talkAdvisor: "تحدث مع مستشار عبر واتساب",
    about: "ABOUT SAWA UNITED",
    aboutTitle1: "نختار العقار",
    aboutTitle2: "قبل أن نعرضه.",
    aboutLead:
      "سوا يونايتد تقدم تجربة عقارية أكثر وضوحًا: عقارات منتقاة، معلومات منظمة، وتجربة بحث تساعدك على اتخاذ قرار أفضل.",
    selected: "✓ عقارات مختارة",
    clearInfo: "✓ معلومات واضحة",
    directSupport: "✓ دعم مباشر",
    contact: "CONTACT · MOROCCO",
    startSearch: "ابدأ بحثك عن العقار",
    contactLead:
      "اترك بياناتك وسيتواصل معك فريقنا لمساعدتك في اختيار العقار المناسب.",
    whatLooking: "ماذا تبحث عن؟",
    buyProperty: "شراء عقار",
    investment: "استثمار",
    rent: "إيجار",
    landOption: "أرض",
    commercialProperty: "عقار تجاري",
    contactOnWhatsapp: "تواصل عبر واتساب",
    footerLead: "سوا يونايتد للتطوير العقاري — نبني اليوم لمستقبل أفضل.",
    contactUs: "تواصل معنا",
    followUs: "تابعنا",
    copyright: "حقوق النشر © 2026 سوا يونايتد. جميع الحقوق محفوظة.",
    namePlaceholder: "الاسم *",
    phonePlaceholder: "رقم الهاتف *",
    close: "إغلاق",
    property: "العقار",
    overview: "Overview",
    masterplan: "مخطط الموقع",
    gallery: "Gallery",
    quickActions: "Quick Actions",
    viewMasterplan: "عرض مخطط الموقع كاملًا",
    projectStats: "إحصائيات المشروع",
    masterPlanTitle: "Master Plan",
    masterPlanLead: "مخطط توضيحي للمشروع",
    residences: "RESIDENCES",
    greenArea: "GREEN AREA",
    clubAmenities: "CLUB / AMENITIES",
    countryMorocco: "المغرب · MA",
    cityMarrakech: "مراكش",
    cityCard1: "فلل · رياض · شقق",
    cityCard2: "شقق · تجاري",
    cityCard3: "إطلالة بحرية · سكن",
    cityCard4: "سكن · استثمار",
    marrakechLocation: "مراكش · Hivernage",
    casablancaLocation: "الدار البيضاء · Maarif",
    tangierLocation: "طنجة · Malabata",
    rabatLocation: "الرباط · Agdal",
    "2000sqm": "2,000 م²",
    "380sqm": "380 م²",
    "420sqm": "420 م²",
    "165sqm": "165 م²",
    "180sqm": "180 م²",
    "240sqm": "240 م²",
    cityCasablanca: "الدار البيضاء",
    cityTangier: "طنجة",
    cityRabat: "الرباط",
    villaDesc: "فيلا عصرية مع حديقة ومسبح خاص",
    apartmentDesc: "شقة راقية في موقع مركزي قريب من الخدمات",
    tangierDesc: "إقامة عصرية بإطلالة بحرية ومساحات مفتوحة",
    landDesc: "أرض مناسبة لمشروع سكني أو ضيافة",
    commercialDesc: "مساحة تجارية مناسبة للأعمال والأنشطة الراقية",
    rabatDesc: "شقة هادئة بتصميم حديث وقريبة من قلب المدينة",
    rooms4: "4 غرف",
    rooms3: "3 غرف",
    bathrooms3: "3 حمامات",
    bathroom2: "2 حمام",
    bedrooms2: "2 غرف",
    primeLocation: "موقع مميز",
    investmentLabel: "استثمار",
    frontFacade: "واجهة رئيسية",
    whatsappGreeting: "مرحبًا سوا يونايتد، أريد التواصل مع مستشار عقاري.",
    nameLabel: "الاسم",
    phoneLabel: "رقم الهاتف",
    interestLabel: "الاهتمام",
    whatsappProperty: "مرحبًا سوا يونايتد، أريد الاستفسار عن العقار:",
    sent: "تم إرسال طلبك ✓",
    openedWhatsapp: "فتح واتساب ✓",
    languageLabel: "اختيار اللغة",
    dark: "Dark",
    light: "Light",
    cities: {
      marrakech: {
        title: "مراكش",
        description:
          "وجهة مميزة للفلل والرياض والعقارات السياحية والاستثمار طويل الأجل.",
        type: "Villas",
        mood: "Premium",
      },
      casablanca: {
        title: "الدار البيضاء",
        description:
          "قلب الأعمال في المغرب، مع طلب متنوع على السكن والوحدات التجارية.",
        type: "Apartments",
        mood: "Business",
      },
      tangier: {
        title: "طنجة",
        description:
          "مدينة ساحلية تجمع بين الإطلالات البحرية والسكن العصري وفرص النمو.",
        type: "Sea View",
        mood: "Growing",
      },
      rabat: {
        title: "الرباط",
        description:
          "سوق هادئ ومستقر يناسب الباحثين عن جودة الموقع والسكن طويل الأجل.",
        type: "Residences",
        mood: "Stable",
      },
    },
  },
  fr: {
    navHome: "Accueil",
    navProjects: "Projets",
    navServices: "Services",
    navAbout: "À propos",
    navMedia: "Centre média",
    whatsapp: "WhatsApp",
    interests: "Prendre rendez-vous",
    heroTitle1: "Nous construisons aujourd’hui ..",
    heroTitle2: "pour un avenir meilleur",
    heroLead:
      "Des opportunités d’investissement prometteuses dans des projets immobiliers premium",
    contactWhatsapp: "Contacter via WhatsApp",
    exploreProjects: "Découvrir les projets",
    registerInterest: "Votre intérêt",
    startJourney: "Commencez votre parcours d’investissement avec nous",
    unitType: "Type de bien",
    residential: "Résidentiel",
    administrative: "Bureaux",
    commercial: "Commercial",
    hotelApartments: "Appartements hôteliers",
    registerNow: "S’inscrire",
    discover: "Découvrir",
    featured: "FEATURED PROPERTIES",
    selectedProperties: "Biens sélectionnés",
    all: "Tous",
    villas: "Villas",
    apartments: "Appartements",
    land: "Terrains",
    verified: "✓ Vérifié",
    exploreProperty: "Découvrir le bien",
    exploreMorocco: "EXPLORE MOROCCO",
    chooseCity: "Choisissez votre ville",
    chooseCityLead:
      "Commencez par la ville qui correspond à votre style de vie ou à votre objectif d’investissement.",
    cityGuide: "CITY GUIDE",
    mostRequested: "Le plus demandé",
    marketNature: "Profil du marché",
    exploreProperties: "Découvrir les biens",
    yourHome: "YOUR HOME IN MOROCCO",
    homeInMorocco: "Votre maison au Maroc",
    evenFar: "même à distance.",
    journeyLead:
      "Un parcours clair, de la découverte du bien au contact avec notre conseiller et à l’organisation de la visite. Une expérience simple, au Maroc comme à l’étranger.",
    discoverStep: "Découvrir",
    compareStep: "Comparer",
    contactStep: "Contacter",
    visitStep: "Visiter",
    advisor: "Votre conseiller immobilier",
    advisorLead: "Laissez-nous vous aider à trouver le bon choix.",
    talkAdvisor: "Parler à un conseiller sur WhatsApp",
    about: "ABOUT SAWA UNITED",
    aboutTitle1: "Nous sélectionnons le bien",
    aboutTitle2: "avant de le présenter.",
    aboutLead:
      "Sawa United propose une expérience immobilière plus claire : des biens sélectionnés, des informations organisées et un parcours de recherche qui facilite votre décision.",
    selected: "✓ Biens sélectionnés",
    clearInfo: "✓ Informations claires",
    directSupport: "✓ Assistance directe",
    contact: "CONTACT · MOROCCO",
    startSearch: "Commencez votre recherche",
    contactLead:
      "Laissez vos coordonnées et notre équipe vous contactera pour vous aider à choisir le bien adapté.",
    whatLooking: "Que recherchez-vous ?",
    buyProperty: "Acheter un bien",
    investment: "Investissement",
    rent: "Location",
    landOption: "Terrain",
    commercialProperty: "Bien commercial",
    contactOnWhatsapp: "Contacter via WhatsApp",
    footerLead:
      "Sawa United Real Estate Development — Nous construisons aujourd’hui pour un avenir meilleur.",
    contactUs: "Contactez-nous",
    followUs: "Suivez-nous",
    copyright: "Copyright © 2026 Sawa United. Tous droits réservés.",
    namePlaceholder: "Nom *",
    phonePlaceholder: "Numéro de téléphone *",
    close: "Fermer",
    property: "Bien",
    overview: "Aperçu",
    masterplan: "Plan du site",
    gallery: "Galerie",
    quickActions: "Actions rapides",
    viewMasterplan: "Voir le plan complet",
    projectStats: "Statistiques du projet",
    masterPlanTitle: "Plan directeur",
    masterPlanLead: "Plan illustratif du projet",
    residences: "RÉSIDENCES",
    greenArea: "ESPACE VERT",
    clubAmenities: "CLUB / SERVICES",
    countryMorocco: "Maroc · MA",
    cityMarrakech: "Marrakech",
    cityCard1: "Villas · Riads · Appartements",
    cityCard2: "Appartements · Commercial",
    cityCard3: "Vue mer · Résidences",
    cityCard4: "Résidences · Investissement",
    marrakechLocation: "Marrakech · Hivernage",
    casablancaLocation: "Casablanca · Maarif",
    tangierLocation: "Tangier · Malabata",
    rabatLocation: "Rabat · Agdal",
    "2000sqm": "2,000 m²",
    "380sqm": "380 m²",
    "420sqm": "420 m²",
    "165sqm": "165 m²",
    "180sqm": "180 m²",
    "240sqm": "240 m²",
    cityCasablanca: "Casablanca",
    cityTangier: "Tanger",
    cityRabat: "Rabat",
    villaDesc: "Villa moderne avec jardin et piscine privée",
    apartmentDesc:
      "Appartement élégant dans un emplacement central proche des services",
    tangierDesc: "Résidence moderne avec vue sur mer et espaces ouverts",
    landDesc: "Terrain adapté à un projet résidentiel ou hôtelier",
    commercialDesc:
      "Espace commercial adapté aux activités et enseignes premium",
    rabatDesc: "Appartement calme au design moderne, proche du centre de Rabat",
    rooms4: "4 chambres",
    rooms3: "3 chambres",
    bathrooms3: "3 salles de bain",
    bathroom2: "2 salles de bain",
    bedrooms2: "2 chambres",
    primeLocation: "Emplacement privilégié",
    investmentLabel: "Investissement",
    frontFacade: "Façade principale",
    whatsappGreeting:
      "Bonjour Sawa United, je souhaite parler à un conseiller immobilier.",
    nameLabel: "Nom",
    phoneLabel: "Téléphone",
    interestLabel: "Intérêt",
    whatsappProperty:
      "Bonjour Sawa United, je souhaite me renseigner sur le bien :",
    sent: "Demande envoyée ✓",
    openedWhatsapp: "WhatsApp ouvert ✓",
    languageLabel: "Choisir la langue",
    dark: "Sombre",
    light: "Clair",
    cities: {
      marrakech: {
        title: "Marrakech",
        description:
          "Une destination phare pour les villas, riads, biens touristiques et investissements à long terme.",
        type: "Villas",
        mood: "Premium",
      },
      casablanca: {
        title: "Casablanca",
        description:
          "Le cœur des affaires au Maroc, avec une demande variée en résidentiel et commercial.",
        type: "Appartements",
        mood: "Business",
      },
      tangier: {
        title: "Tanger",
        description:
          "Une ville côtière mêlant vues sur mer, résidences modernes et potentiel de croissance.",
        type: "Vue mer",
        mood: "En croissance",
      },
      rabat: {
        title: "Rabat",
        description:
          "Un marché calme et stable pour ceux qui recherchent qualité d’emplacement et résidence durable.",
        type: "Résidences",
        mood: "Stable",
      },
    },
  },
};

let currentLanguage = localStorage.getItem("sawa-language") || "en";
let currentTheme =
  localStorage.getItem("sawa-theme") ||
  (window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

const TEXT_KEY_MAP = {
  الرئيسية: "navHome",
  Home: "navHome",
  Accueil: "navHome",
  مشاريعنا: "navProjects",
  Projects: "navProjects",
  Projets: "navProjects",
  الخدمات: "navServices",
  Services: "navServices",
  "من نحن": "navAbout",
  "About us": "navAbout",
  "À propos": "navAbout",
  "المركز الإعلامي": "navMedia",
  "Media Center": "navMedia",
  "Centre média": "navMedia",
  واتساب: "whatsapp",
  WhatsApp: "whatsapp",
  "سجل الاهتمامات": "interests",
  "Register Interest": "interests",
  "Prendre rendez-vous": "interests",
  "نبني اليوم ..": "heroTitle1",
  "We build today ..": "heroTitle1",
  "Nous construisons aujourd’hui ..": "heroTitle1",
  "لمستقبل أفضل": "heroTitle2",
  "for a better future": "heroTitle2",
  "pour un avenir meilleur": "heroTitle2",
  "فرص استثمارية واعدة فى أرقى المشاريع العقارية": "heroLead",
  "فرص استثمارية واعدة في أرقى المشاريع العقارية": "heroLead",
  "Promising investment opportunities in premium real estate projects":
    "heroLead",
  "Des opportunités d’investissement prometteuses dans des projets immobiliers premium":
    "heroLead",
  "تواصل عبر واتساب": "contactWhatsapp",
  "Contact via WhatsApp": "contactWhatsapp",
  "Contacter via WhatsApp": "contactWhatsapp",
  "استكشف المشاريع": "exploreProjects",
  "Explore projects": "exploreProjects",
  "Découvrir les projets": "exploreProjects",
  "سجل اهتمامك": "registerInterest",
  "ابدأ رحلتك الاستثمارية معنا": "startJourney",
  "Start your investment journey with us": "startJourney",
  "نوع الوحدة": "unitType",
  "Unit type": "unitType",
  "Type de bien": "unitType",
  سكني: "residential",
  Residential: "residential",
  Résidentiel: "residential",
  إداري: "administrative",
  Office: "administrative",
  Bureaux: "administrative",
  تجاري: "commercial",
  Commercial: "commercial",
  "شقق فندقية": "hotelApartments",
  "Serviced apartments": "hotelApartments",
  "Appartements hôteliers": "hotelApartments",
  "سجل الآن": "registerNow",
  "Register now": "registerNow",
  "S’inscrire": "registerNow",
  اكتشف: "discover",
  Discover: "discover",
  Découvrir: "discover",
  "عقارات مختارة": "selectedProperties",
  "Selected properties": "selectedProperties",
  "Biens sélectionnés": "selectedProperties",
  الكل: "all",
  All: "all",
  Tous: "all",
  فلل: "villas",
  Villas: "villas",
  شقق: "apartments",
  Apartments: "apartments",
  Appartements: "apartments",
  أراضي: "land",
  Land: "land",
  Terrains: "land",
  "✓ Verified": "verified",
  "✓ Vérifié": "verified",
  "استكشف العقار": "exploreProperty",
  "Explore property": "exploreProperty",
  "Découvrir le bien": "exploreProperty",
  "اختر مدينتك": "chooseCity",
  "Choose your city": "chooseCity",
  "Choisissez votre ville": "chooseCity",
  "ابدأ من المدينة التي تناسب أسلوب حياتك أو هدفك الاستثماري.":
    "chooseCityLead",
  "Start with the city that fits your lifestyle or investment goal.":
    "chooseCityLead",
  "Commencez par la ville qui correspond à votre style de vie ou à votre objectif d’investissement.":
    "chooseCityLead",
  "الأكثر طلبًا": "mostRequested",
  "Most requested": "mostRequested",
  "Le plus demandé": "mostRequested",
  "طبيعة السوق": "marketNature",
  "Market profile": "marketNature",
  "Profil du marché": "marketNature",
  "استكشف العقارات": "exploreProperties",
  "Explore properties": "exploreProperties",
  "Découvrir les biens": "exploreProperties",
  "بيتك في المغرب": "homeInMorocco",
  "Your home in Morocco": "homeInMorocco",
  "Votre maison au Maroc": "homeInMorocco",
  "حتى لو كنت بعيدًا.": "evenFar",
  "even when you are far away.": "evenFar",
  "même à distance.": "evenFar",
  قارن: "compareStep",
  Compare: "compareStep",
  Comparer: "compareStep",
  تواصل: "contactStep",
  Contact: "contactStep",
  Contacter: "contactStep",
  "زر العقار": "visitStep",
  "Visit the property": "visitStep",
  Visiter: "visitStep",
  "مستشارك العقاري": "advisor",
  "Your real estate advisor": "advisor",
  "Votre conseiller immobilier": "advisor",
  "دعنا نساعدك في الوصول إلى الاختيار المناسب.": "advisorLead",
  "Let us help you reach the right choice.": "advisorLead",
  "Laissez-nous vous aider à trouver le bon choix.": "advisorLead",
  "تحدث مع مستشار عبر واتساب": "talkAdvisor",
  "Talk to an advisor on WhatsApp": "talkAdvisor",
  "Parler à un conseiller sur WhatsApp": "talkAdvisor",
  "نختار العقار": "aboutTitle1",
  "We select the property": "aboutTitle1",
  "Nous sélectionnons le bien": "aboutTitle1",
  "قبل أن نعرضه.": "aboutTitle2",
  "before we present it.": "aboutTitle2",
  "avant de le présenter.": "aboutTitle2",
  "سوا يونايتد تقدم تجربة عقارية أكثر وضوحًا: عقارات منتقاة، معلومات منظمة، وتجربة بحث تساعدك على اتخاذ قرار أفضل.":
    "aboutLead",
  "Sawa United offers a clearer real estate experience: selected properties, organized information, and a search journey that helps you make a better decision.":
    "aboutLead",
  "Sawa United propose une expérience immobilière plus claire : des biens sélectionnés, des informations organisées et un parcours de recherche qui facilite votre décision.":
    "aboutLead",
  "✓ عقارات مختارة": "selected",
  "✓ Selected properties": "selected",
  "✓ Biens sélectionnés": "selected",
  "✓ معلومات واضحة": "clearInfo",
  "✓ Clear information": "clearInfo",
  "✓ Informations claires": "clearInfo",
  "✓ دعم مباشر": "directSupport",
  "✓ Direct support": "directSupport",
  "✓ Assistance directe": "directSupport",
  "ابدأ بحثك عن العقار": "startSearch",
  "Start your property search": "startSearch",
  "Commencez votre recherche": "startSearch",
  "اترك بياناتك وسيتواصل معك فريقنا لمساعدتك في اختيار العقار المناسب.":
    "contactLead",
  "Leave your details and our team will contact you to help you choose the right property.":
    "contactLead",
  "Laissez vos coordonnées et notre équipe vous contactera pour vous aider à choisir le bien adapté.":
    "contactLead",
  "ماذا تبحث عن؟": "whatLooking",
  "What are you looking for?": "whatLooking",
  "Que recherchez-vous ?": "whatLooking",
  "شراء عقار": "buyProperty",
  "Buy a property": "buyProperty",
  "Acheter un bien": "buyProperty",
  استثمار: "investment",
  Investment: "investment",
  Investissement: "investment",
  إيجار: "rent",
  Rent: "rent",
  Location: "rent",
  أرض: "landOption",
  "Commercial property": "commercialProperty",
  "عقار تجاري": "commercialProperty",
  "Bien commercial": "commercialProperty",
  "سوا يونايتد للتطوير العقاري — نبني اليوم لمستقبل أفضل.": "footerLead",
  "Sawa United Real Estate Development — We build today for a better future.":
    "footerLead",
  "Sawa United Real Estate Development — Nous construisons aujourd’hui pour un avenir meilleur.":
    "footerLead",
  "تواصل معنا": "contactUs",
  "Contact us": "contactUs",
  "Contactez-nous": "contactUs",
  تابعنا: "followUs",
  "Follow us": "followUs",
  "Suivez-nous": "followUs",
  "حقوق النشر © 2026 سوا يونايتد. جميع الحقوق محفوظة.": "copyright",
  "Copyright © 2026 Sawa United. All rights reserved.": "copyright",
  "Copyright © 2026 Sawa United. Tous droits réservés.": "copyright",
  "الاسم *": "namePlaceholder",
  "Name *": "namePlaceholder",
  "Nom *": "namePlaceholder",
  "رقم الهاتف *": "phonePlaceholder",
  "Phone number *": "phonePlaceholder",
  "Numéro de téléphone *": "phonePlaceholder",
  إغلاق: "close",
  Close: "close",
  Fermer: "close",
  العقار: "property",
  Property: "property",
  Bien: "property",
  "مخطط الموقع": "masterplan",
  "Site plan": "masterplan",
  "Plan du site": "masterplan",
  Gallery: "gallery",
  Galerie: "gallery",
  "Quick Actions": "quickActions",
  "Actions rapides": "quickActions",
  "عرض مخطط الموقع كاملًا": "viewMasterplan",
  "View Full Master Plan": "viewMasterplan",
  "Voir le plan complet": "viewMasterplan",
  "Project Statistics": "projectStats",
  "إحصائيات المشروع": "projectStats",
  "Statistiques du projet": "projectStats",
  "Master Plan": "masterPlanTitle",
  "Plan directeur": "masterPlanTitle",
  "مخطط توضيحي للمشروع": "masterPlanLead",
  "Illustrative project site plan": "masterPlanLead",
  "Plan illustratif du projet": "masterPlanLead",
  RESIDENCES: "residences",
  RÉSIDENCES: "residences",
  "GREEN AREA": "greenArea",
  "ESPACE VERT": "greenArea",
  "CLUB / AMENITIES": "clubAmenities",
  "CLUB / SERVICES": "clubAmenities",
  Dark: "dark",
  Sombre: "dark",
  Light: "light",
  Clair: "light",
};

function normalizeText(value) {
  return String(value ?? "")
    .replace(/\\s+/g, " ")
    .trim();
}
function translateValue(value) {
  const clean = normalizeText(value);
  const key = TEXT_KEY_MAP[clean];
  return key ? (SITE_TRANSLATIONS[currentLanguage][key] ?? value) : value;
}
function applyTranslations() {
  const root = document.documentElement;
  root.lang = currentLanguage;
  root.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  document.body.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  $(".spine-site")?.setAttribute(
    "dir",
    currentLanguage === "ar" ? "rtl" : "ltr",
  );

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((node) => {
    if (
      !node.parentElement ||
      ["SCRIPT", "STYLE"].includes(node.parentElement.tagName)
    )
      return;
    const original = normalizeText(node.nodeValue);
    if (!original) return;
    const translated = translateValue(original);
    if (translated !== original)
      node.nodeValue = node.nodeValue.replace(original, translated);
  });

  $$("input[placeholder], textarea[placeholder]").forEach(
    (el) => (el.placeholder = translateValue(el.placeholder)),
  );
  $$("[aria-label]").forEach((el) =>
    el.setAttribute(
      "aria-label",
      translateValue(el.getAttribute("aria-label")),
    ),
  );
  $$("[title]").forEach((el) =>
    el.setAttribute("title", translateValue(el.getAttribute("title"))),
  );
  $(".lang-current")?.replaceChildren(
    document.createTextNode(
      currentLanguage === "en"
        ? "English"
        : currentLanguage === "ar"
          ? "العربية"
          : "Français",
    ),
  );
  $(".theme-label")?.replaceChildren(
    document.createTextNode(
      currentTheme === "dark"
        ? SITE_TRANSLATIONS[currentLanguage].dark
        : SITE_TRANSLATIONS[currentLanguage].light,
    ),
  );
  $$(".language-option").forEach((option) =>
    option.classList.toggle(
      "active",
      option.dataset.language === currentLanguage,
    ),
  );

  const city = $(".city-card.active")?.dataset.city || "marrakech";
  updateCityGuide(city);
  updateThemeUI();
}

function initLanguageAndTheme() {
  const languageToggle = $("#languageToggle"),
    languageMenu = $("#languageMenu"),
    themeToggle = $("#themeToggle");
  const closeLanguageMenu = () => {
    languageMenu?.classList.remove("is-open");
    languageMenu?.setAttribute("aria-hidden", "true");
    languageToggle?.setAttribute("aria-expanded", "false");
  };
  languageToggle?.addEventListener("click", (event) => {
    event.stopPropagation();
    const open = !languageMenu.classList.contains("is-open");
    languageMenu.classList.toggle("is-open", open);
    languageMenu.setAttribute("aria-hidden", String(!open));
    languageToggle.setAttribute("aria-expanded", String(open));
  });
  $$(".language-option").forEach((option) =>
    option.addEventListener("click", () => {
      currentLanguage = option.dataset.language;
      localStorage.setItem("sawa-language", currentLanguage);
      applyTranslations();
      closeLanguageMenu();
    }),
  );
  document.addEventListener("click", (event) => {
    if (
      languageMenu &&
      !languageMenu.contains(event.target) &&
      event.target !== languageToggle
    )
      closeLanguageMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLanguageMenu();
  });
  themeToggle?.addEventListener("click", () => {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("sawa-theme", currentTheme);
    updateThemeUI();
  });
  applyTranslations();
}

function updateThemeUI() {
  document.documentElement.dataset.theme = currentTheme;
  document.body.classList.toggle("theme-dark", currentTheme === "dark");
  const toggle = $("#themeToggle");
  if (toggle) {
    toggle.setAttribute(
      "aria-label",
      currentTheme === "dark"
        ? "التبديل إلى الوضع النهاري"
        : "التبديل إلى الوضع الليلي",
    );
    toggle.setAttribute(
      "title",
      currentTheme === "dark"
        ? "التبديل إلى الوضع النهاري"
        : "التبديل إلى الوضع الليلي",
    );
  }
}

function updateCityGuide(city) {
  const data = SITE_TRANSLATIONS[currentLanguage]?.cities?.[city];
  if (!data) return;
  $("#cityTitle")?.replaceChildren(document.createTextNode(data.title));
  $("#cityDescription")?.replaceChildren(
    document.createTextNode(data.description),
  );
  $("#cityType")?.replaceChildren(document.createTextNode(data.type));
  $("#cityMood")?.replaceChildren(document.createTextNode(data.mood));
}

function getLocalizedCityData(city) {
  return (
    SITE_TRANSLATIONS[currentLanguage]?.cities?.[city] ||
    SITE_TRANSLATIONS.en.cities[city]
  );
}

/* ==================== Navigation ==================== */

function initHeaderScroll() {
  const header = $("#siteHeader");
  if (!header) return;

  const SCROLL_THRESHOLD = 30;

  const update = () => {
    header.classList.toggle("scrolled", window.scrollY > SCROLL_THRESHOLD);
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initMobileMenu() {
  const menuButton = $("#menuBtn");
  const mobileNav = $("#mobileNav");
  const iconOpen = $("#menuIconOpen");
  const iconClose = $("#menuIconClose");

  if (!menuButton || !mobileNav) return;

  let isOpen = false;
  const render = () => {
    document.body.classList.toggle("menu-open", isOpen);
    mobileNav.classList.toggle("is-open", isOpen);
    mobileNav.setAttribute("aria-hidden", String(!isOpen));
    menuButton.setAttribute("aria-expanded", String(isOpen));
    if (iconOpen) iconOpen.style.display = isOpen ? "none" : "block";
    if (iconClose) iconClose.style.display = isOpen ? "block" : "none";
  };
  const setOpen = (value) => {
    isOpen = value;
    render();
  };

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.addEventListener("click", () => setOpen(!isOpen));
  $$("a", mobileNav).forEach((element) =>
    element.addEventListener("click", () => setOpen(false)),
  );
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
  render();
}
/* ==================== Hero ==================== */

function initHeroRotation() {
  const heroImages = $$(".hero-bg");
  if (!heroImages.length) return;

  const ROTATION_INTERVAL_MS = 7200;
  let currentIndex = 0;

  const showImage = (index) => {
    heroImages.forEach((image, indexToShow) => {
      image.classList.toggle("active", indexToShow === index);
    });
  };

  showImage(currentIndex);

  window.setInterval(() => {
    currentIndex = (currentIndex + 1) % heroImages.length;
    showImage(currentIndex);
  }, ROTATION_INTERVAL_MS);
}

function initHeroDepth() {
  const hero = $(".reference-hero");
  if (!hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return;

  const content = $(".reference-copy, .hero-content", hero);
  const card = $(".hero-interest-card", hero);
  let animationFrame = null;

  const reset = () => {
    hero.style.setProperty("--mx", "0px");
    hero.style.setProperty("--my", "0px");

    if (content) {
      content.style.transform = "translate3d(0, 0, 70px)";
    }

    if (card) {
      card.style.transform = "translate3d(0, 0, 110px)";
    }
  };

  const move = (event) => {
    if (window.innerWidth < 981) return;

    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    hero.style.setProperty("--mx", `${x * -12}px`);
    hero.style.setProperty("--my", `${y * -8}px`);

    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }

    animationFrame = requestAnimationFrame(() => {
      if (content) {
        content.style.transform = `translate3d(${x * 6}px, ${y * 4}px, 70px)`;
      }

      if (card) {
        card.style.transform = `translate3d(${x * -10}px, ${y * -8}px, 110px)`;
      }
    });
  };

  hero.addEventListener("pointermove", move, { passive: true });
  hero.addEventListener("pointerleave", reset, { passive: true });
}

/* ==================== Active Navigation ==================== */

function initActiveNavigation() {
  const links = $$(".desktop-nav a, .mobile-nav a");
  const sections = $$("main > section[id]");
  if (!links.length || !sections.length || !("IntersectionObserver" in window))
    return;

  const update = (id) => {
    links.forEach((link) => {
      const href = link.getAttribute("href") || "";
      link.classList.toggle("active", href === `#${id}`);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) update(visible.target.id);
    },
    { rootMargin: "-28% 0px -58% 0px", threshold: [0.05, 0.2, 0.5] },
  );

  sections.forEach((section) => observer.observe(section));
}

/* ==================== Counters ==================== */

function initStatCounters() {
  const counters = $$(".js-count");
  if (!counters.length) return;

  const DURATION_MS = 1400;

  const animate = (element) => {
    const target = parseFloat(element.dataset.target || "0");
    const decimals = parseInt(element.dataset.decimals || "0", 10);
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      element.textContent = (target * eased).toFixed(decimals);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        animate(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.4 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

/* ==================== Form Handling ==================== */

function initInterestForms() {
  const WHATSAPP_NUMBER = "201029208418";
  const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

  $$(".js-interest-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const inputs = $$("input, select, textarea", form);
      const name = inputs[0]?.value.trim() || "";
      const phone =
        $(".phone-input", form)?.value.trim() ||
        inputs
          .find((field) => field !== inputs[0] && field.tagName === "INPUT")
          ?.value.trim() ||
        "";
      const interest =
        inputs.find((field) => field.tagName === "SELECT")?.value.trim() || "";

      const message = [
        SITE_TRANSLATIONS[currentLanguage].whatsappGreeting,
        name ? `${SITE_TRANSLATIONS[currentLanguage].nameLabel}: ${name}` : "",
        phone
          ? `${SITE_TRANSLATIONS[currentLanguage].phoneLabel}: ${phone}`
          : "",
        interest
          ? `${SITE_TRANSLATIONS[currentLanguage].interestLabel}: ${interest}`
          : "",
      ]
        .filter(Boolean)
        .join("\\n");

      window.open(
        `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );

      const button = $('button[type="submit"]', form);
      if (button) {
        const oldText = button.textContent;
        button.textContent = SITE_TRANSLATIONS[currentLanguage].openedWhatsapp;
        button.disabled = true;
        window.setTimeout(() => {
          form.reset();
          button.textContent = oldText;
          button.disabled = false;
        }, 1800);
      }
    });
  });
}

/* ==================== Premium Motion ==================== */

function initPremiumMotion() {
  const reduceMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  const reduceMotion = reduceMotionQuery.matches;

  document.documentElement.classList.add("motion-ready");

  /*
   * Section-specific motion choreography.
   * The goal is not to animate everything: each section gets a small
   * sequence so the eye naturally moves from heading -> content -> CTA.
   */
  const revealGroups = [
    { selector: "#thespine .section-heading", effect: "up", delay: 40 },
    {
      selector: "#thespine .city-card",
      effect: "scale",
      stagger: 95,
      cap: 285,
    },

    { selector: "#prices .section-heading", effect: "up", delay: 30 },
    { selector: "#prices .property-card", effect: "up", stagger: 75, cap: 375 },

    { selector: "#integratedexp .section-heading", effect: "up", delay: 35 },
    {
      selector: "#integratedexp .investment-card",
      effect: "up",
      stagger: 85,
      cap: 255,
    },
    { selector: "#integratedexp .calculator", effect: "up", delay: 190 },

    { selector: "#cognitivesys .section-heading", effect: "up", delay: 35 },
    { selector: "#cognitivesys .morocco-map", effect: "scale", delay: 150 },

    {
      selector: "#masterplan .diaspora-grid > div:first-child",
      effect: "left",
      delay: 40,
    },
    { selector: "#masterplan .diaspora-panel", effect: "right", delay: 180 },
    {
      selector: "#masterplan .journey > div",
      effect: "up",
      stagger: 80,
      cap: 240,
    },

    { selector: "#tmg .tmg-logo", effect: "scale", delay: 70 },
    { selector: "#tmg .about-grid > div", effect: "right", delay: 145 },
    {
      selector: "#tmg .trust-points span",
      effect: "up",
      stagger: 85,
      cap: 170,
    },

    {
      selector: "#interest .interest-inner > .eyebrow",
      effect: "up",
      delay: 30,
    },
    { selector: "#interest .interest-inner > h2", effect: "up", delay: 105 },
    { selector: "#interest .interest-inner > p", effect: "up", delay: 165 },
    {
      selector: "#interest .interest-form > *",
      effect: "up",
      stagger: 70,
      cap: 210,
    },

    { selector: ".footer-grid > *", effect: "up", stagger: 70, cap: 210 },
  ];

  const animatedElements = [];

  revealGroups.forEach(
    ({ selector, effect, stagger, delay = 0, cap = 300 }) => {
      $$(selector).forEach((element, index) => {
        if (element.closest(".property-modal")) return;

        element.classList.add("reveal", `reveal-${effect}`);

        const revealDelay = stagger
          ? Math.min(index * stagger, cap) + delay
          : delay;

        element.style.setProperty("--reveal-delay", `${revealDelay}ms`);
        element.style.setProperty(
          "--reveal-duration",
          effect === "scale" ? "0.72s" : "0.64s",
        );
        animatedElements.push(element);
      });
    },
  );

  /* Decorative labels enter quickly, then stay visually quiet. */
  $$(
    "#thespine .eyebrow, #prices .eyebrow, #integratedexp .eyebrow, #cognitivesys .eyebrow",
  ).forEach((element) => {
    element.classList.add("reveal");
    element.style.setProperty("--reveal-delay", "0ms");
    element.style.setProperty("--reveal-duration", "0.52s");
  });

  if (reduceMotion || !("IntersectionObserver" in window)) {
    animatedElements.forEach((element) => element.classList.add("is-visible"));
    $$(".reveal").forEach((element) => element.classList.add("is-visible"));
    initPremiumScrollParallax();
    return;
  }

  /*
   * Cinematic reveal loop:
   * - Entering the viewport reveals the element.
   * - Leaving the viewport resets it.
   * - Re-entering plays the reveal again.
   * This keeps the motion alive without running an animation on every scroll tick.
   */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  $$(".reveal").forEach((element) => observer.observe(element));
  initPremiumScrollParallax();
}
function initPremiumScrollParallax() {
  const hero = $(".reference-hero");
  const images = $$(".motion-parallax");

  if (!hero && !images.length) return;

  let animationFrame = 0;

  const update = () => {
    animationFrame = 0;
    const viewportHeight = window.innerHeight || 1;

    if (hero) {
      const rect = hero.getBoundingClientRect();
      const progress = Math.max(
        -0.15,
        Math.min(1, -rect.top / Math.max(rect.height, 1)),
      );
      const heroY = progress * 42;

      hero.style.setProperty("--hero-depth", `${heroY}px`);

      $$(".hero-bg.active", hero).forEach((image) => {
        image.style.setProperty("--hero-scroll-y", `${heroY}px`);
      });
    }

    images.forEach((image) => {
      const rect = image.getBoundingClientRect();

      if (rect.bottom < -80 || rect.top > viewportHeight + 80) return;

      const centerOffset =
        (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
      const y = Math.max(-18, Math.min(18, centerOffset * -18));

      image.style.setProperty("--parallax-y", `${y}px`);
    });
  };

  const requestUpdate = () => {
    if (!animationFrame) {
      animationFrame = requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });

  update();
}

/* ==================== Bootstrap ==================== */

function initSite() {
  // Keep the original initialization order to preserve behavior.
  initLanguageAndTheme();
  initHeaderScroll();
  initMobileMenu();
  initHeroRotation();
  initHeroDepth();
  initStatCounters();
  initInterestForms();
  initPremiumMotion();
}

document.addEventListener("DOMContentLoaded", initSite);

/* ==================== Morocco Property Experience ==================== */
(function initMoroccoExperience() {
  initActiveNavigation();
  const cards = $$(".property-card");
  const filters = $$(".filter-btn");
  const cityCards = $$(".city-card");
  const pins = $$(".map-pin");
  const cityData = SITE_TRANSLATIONS.en.cities;

  function filterProperties(type) {
    cards.forEach((card) =>
      card.classList.toggle(
        "hidden",
        type !== "all" && card.dataset.type !== type,
      ),
    );
  }
  filters.forEach((btn) =>
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      filterProperties(btn.dataset.filter);
    }),
  );

  function selectCity(city) {
    const data = cityData[city];
    if (!data) return;
    cityCards.forEach((c) =>
      c.classList.toggle("active", c.dataset.city === city),
    );
    pins.forEach((p) => p.classList.toggle("active", p.dataset.city === city));
    updateCityGuide(city);
  }
  cityCards.forEach((c) =>
    c.addEventListener("click", () => {
      selectCity(c.dataset.city);
      filterProperties("all");
      filters.forEach((b) =>
        b.classList.toggle("active", b.dataset.filter === "all"),
      );
    }),
  );
  pins.forEach((p) =>
    p.addEventListener("click", () => {
      selectCity(p.dataset.city);
      const grid = document.querySelector(".property-section");
      if (grid) grid.scrollIntoView({ behavior: "smooth" });
      cards.forEach((c) =>
        c.classList.toggle("hidden", c.dataset.city !== p.dataset.city),
      );
      filters.forEach((b) => b.classList.remove("active"));
    }),
  );
  const mapExplore = $("#mapExplore");
  if (mapExplore)
    mapExplore.addEventListener("click", () => {
      const active = $(".map-pin.active");
      if (active) active.click();
    });

  $$(".favorite").forEach((button) =>
    button.addEventListener("click", () => {
      button.classList.toggle("saved");
      button.textContent = button.classList.contains("saved") ? "♥" : "♡";
    }),
  );

  const amount = $("#investmentAmount"),
    range = $("#yieldRange"),
    yieldValue = $("#yieldValue"),
    annual = $("#annualReturn");
  function updateCalc() {
    if (!amount || !range) return;
    const value = Math.max(0, Number(amount.value) || 0),
      rate = Number(range.value) || 0;
    if (yieldValue) yieldValue.textContent = rate.toFixed(1) + "%";
    if (annual)
      annual.textContent =
        new Intl.NumberFormat("en-US").format(
          Math.round((value * rate) / 100),
        ) + " MAD";
  }
  amount?.addEventListener("input", updateCalc);
  range?.addEventListener("input", updateCalc);
  updateCalc();

  /* ==================== Property Detail Modal ==================== */
  const propertyCatalog = {
    "Villa Atlas": {
      country: "Morocco · MA",
      location: "Marrakech · Hivernage",
      type: "Villa",
      description:
        "فيلا عصرية في موقع مميز بمراكش، مع حديقة ومسبح ومساحات معيشة واسعة.",
      stats: ["4 غرف", "3 حمامات", "420 م²"],
    },
    "Casa Residence": {
      country: "Morocco · MA",
      location: "Casablanca · Maarif",
      type: "Apartment",
      description:
        "شقة راقية في قلب الدار البيضاء، قريبة من الخدمات والمناطق الرئيسية.",
      stats: ["3 غرف", "2 حمام", "165 م²"],
    },
    "Tangier Bay": {
      country: "Morocco · MA",
      location: "Tangier · Malabata",
      type: "Villa",
      description:
        "إقامة عصرية في طنجة بإطلالة بحرية ومساحات مفتوحة وتصميم حديث.",
      stats: ["3 غرف", "3 حمامات", "240 م²"],
    },
    "Atlas Land": {
      country: "Morocco · MA",
      location: "Marrakech · Route de l'Ourika",
      type: "Land",
      description: "قطعة أرض مناسبة لمشروع سكني أو ضيافة في موقع واعد بمراكش.",
      stats: ["2,000 م²", "استثمار", "موقع مميز"],
    },
    "Anfa Business": {
      country: "Morocco · MA",
      location: "Casablanca · Anfa",
      type: "Commercial",
      description:
        "مساحة تجارية في موقع رئيسي بالدار البيضاء مناسبة للأعمال والأنشطة الراقية.",
      stats: ["380 م²", "تجاري", "واجهة رئيسية"],
    },
    "Rabat Garden": {
      country: "Morocco · MA",
      location: "Rabat · Agdal",
      type: "Apartment",
      description: "شقة هادئة بتصميم حديث في موقع مميز وقريب من قلب الرباط.",
      stats: ["3 غرف", "2 حمام", "180 م²"],
    },
  };

  const modal = document.createElement("div");
  modal.className = "property-modal";
  modal.innerHTML = `
    <div class="modal-box property-detail-box" role="dialog" aria-modal="true" aria-labelledby="propertyModalTitle">
      <button class="modal-close" aria-label="إغلاق">×</button>
      <div class="property-modal-hero">
        <img id="propertyModalImage" src="home.png" alt="">
        <div class="property-modal-hero-copy">
          <span class="property-country" id="propertyModalCountry"></span>
          <h3 id="propertyModalTitle"></h3>
          <p id="propertyModalLocation"></p>
        </div>
      </div>
      <div class="property-tabs" role="tablist">
        <button class="property-tab active" data-tab="overview" role="tab">Overview</button>
        <button class="property-tab" data-tab="masterplan" role="tab">مخطط الموقع</button>
        <button class="property-tab" data-tab="gallery" role="tab">Gallery</button>
      </div>
      <div class="property-tab-panel active" data-panel="overview">
        <div class="property-overview-grid">
          <aside class="property-quick-actions">
            <h4>Quick Actions</h4>
            <button type="button" class="masterplan-open">View Full Master Plan</button>
            <a href="https://wa.me/201029208418" class="property-contact" target="_blank" rel="noopener">تواصل مع مستشار عبر واتساب</a>
          </aside>
          <div class="property-overview-copy">
            <span class="eyebrow" id="propertyModalType"></span>
            <p id="propertyModalDescription"></p>
            <div class="property-modal-stats" id="propertyModalStats"></div>
            <h4>Project Statistics</h4>
          </div>
        </div>
      </div>
      <div class="property-tab-panel" data-panel="masterplan">
        <div class="masterplan-viewer">
          <div class="masterplan-toolbar"><strong>Master Plan</strong><span>مخطط توضيحي للمشروع</span></div>
          <div class="masterplan-canvas">
            <svg viewBox="0 0 1000 560" class="masterplan-svg" role="img" aria-label="مخطط موقع توضيحي">
              <rect x="20" y="20" width="960" height="520" rx="24" class="plan-boundary"/>
              <path d="M70 440 C210 360 280 470 410 390 S650 320 930 420" class="plan-road"/>
              <path d="M80 120 C250 180 330 90 500 160 S760 220 920 120" class="plan-road secondary"/>
              <rect x="105" y="185" width="145" height="95" rx="12" class="plan-building"/><rect x="290" y="225" width="150" height="105" rx="12" class="plan-building"/>
              <rect x="510" y="185" width="145" height="95" rx="12" class="plan-building"/><rect x="720" y="250" width="155" height="105" rx="12" class="plan-building"/>
              <circle cx="470" cy="115" r="52" class="plan-park"/><circle cx="675" cy="420" r="62" class="plan-park"/>
              <rect x="410" y="395" width="155" height="70" rx="18" class="plan-water"/>
              <text x="178" y="238" class="plan-label">RESIDENCES</text><text x="345" y="282" class="plan-label">VILLAS</text>
              <text x="545" y="238" class="plan-label">SERVICES</text><text x="752" y="307" class="plan-label">COMMERCIAL</text>
              <text x="430" y="122" class="plan-label small">GREEN AREA</text><text x="430" y="437" class="plan-label small">CLUB / AMENITIES</text>
            </svg>
          </div>
        </div>
      </div>
      <div class="property-tab-panel" data-panel="gallery">
        <div class="property-gallery-grid">
          <img src="home.png" alt="Property gallery 1"><img src="home-.png" alt="Property gallery 2"><img src="home--.png" alt="Property gallery 3">
        </div>
      </div>
    </div>`;
  document.body.appendChild(modal);
  applyTranslations();

  const modalTitle = $("#propertyModalTitle", modal);
  const modalCountry = $("#propertyModalCountry", modal);
  const modalLocation = $("#propertyModalLocation", modal);
  const modalType = $("#propertyModalType", modal);
  const modalDescription = $("#propertyModalDescription", modal);
  const modalStats = $("#propertyModalStats", modal);
  const modalImage = $("#propertyModalImage", modal);
  const closeModal = () => modal.classList.remove("open");

  function activatePropertyTab(tabName) {
    $$(".property-tab", modal).forEach((tab) =>
      tab.classList.toggle("active", tab.dataset.tab === tabName),
    );
    $$(".property-tab-panel", modal).forEach((panel) =>
      panel.classList.toggle("active", panel.dataset.panel === tabName),
    );
  }

  $$(".property-tab", modal).forEach((tab) =>
    tab.addEventListener("click", () => activatePropertyTab(tab.dataset.tab)),
  );
  $(".masterplan-open", modal)?.addEventListener("click", () =>
    activatePropertyTab("masterplan"),
  );

  $$(".property-details").forEach((btn) =>
    btn.addEventListener("click", () => {
      const card = btn.closest(".property-card");
      const name =
        btn.dataset.property ||
        $("h3", card)?.textContent.trim() ||
        SITE_TRANSLATIONS[currentLanguage].property;
      const location = $(".property-top span", card)?.textContent.trim() || "";
      const country = SITE_TRANSLATIONS[currentLanguage].countryMorocco;
      const typeMap = {
        villa: SITE_TRANSLATIONS[currentLanguage].villas,
        apartment: SITE_TRANSLATIONS[currentLanguage].apartments,
        land: SITE_TRANSLATIONS[currentLanguage].land,
        commercial: SITE_TRANSLATIONS[currentLanguage].commercialProperty,
      };
      const type =
        typeMap[card?.dataset.type] ||
        SITE_TRANSLATIONS[currentLanguage].property;
      const description = $("p", card)?.textContent.trim() || "";
      const stats = $$(".property-meta span", card).map((el) =>
        el.textContent.trim(),
      );

      modalTitle.textContent = name;
      modalCountry.textContent = country;
      modalLocation.textContent = location;
      modalType.textContent = type;
      modalDescription.textContent = description;
      modalStats.innerHTML = stats
        .map((stat) => `<span>${stat}</span>`)
        .join("");
      const image = $(".property-media img", card);
      if (image) {
        modalImage.src = image.getAttribute("src");
        modalImage.alt = name;
      }
      activatePropertyTab("overview");
      modal.classList.add("open");
    }),
  );

  $(".modal-close", modal)?.addEventListener("click", closeModal);
  $(".property-contact", modal)?.addEventListener("click", (event) => {
    event.preventDefault();
    const propertyName = modalTitle.textContent.trim() || "العقار";
    const message = `${SITE_TRANSLATIONS[currentLanguage].whatsappProperty} ${propertyName}`;
    window.open(
      `https://wa.me/201029208418?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  });
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  $$(".js-interest-form").forEach((form) =>
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const button = $('button[type="submit"]', form);
      if (button) {
        const old = button.textContent;
        button.textContent = SITE_TRANSLATIONS[currentLanguage].sent;
        button.disabled = true;
        window.setTimeout(() => {
          form.reset();
          button.textContent = old;
          button.disabled = false;
        }, 2200);
      }
    }),
  );
})();
