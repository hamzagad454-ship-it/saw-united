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
    cityCountry: "MOROCCO",
    footerCompany: "Sawa United Real Estate Development",
    pageTitle: "Sawa United | Morocco Real Estate",
    metaDescription: "Sawa United — selected properties and investment opportunities in Morocco’s leading cities.",
    moroccoEyebrow: "SAWA UNITED · MOROCCO",
    moroccoCitiesLabel: "Morocco cities",
    propertyFilterLabel: "Property filters",
    menu: "Menu",
    themeToggleLabel: "Toggle theme",
    nightMode: "Switch to dark mode",
    dayMode: "Switch to light mode",
    logoAlt: "Sawa United",
    villaAlt: "Villa in Marrakech",
    apartmentAlt: "Apartment in Casablanca",
    tangierAlt: "Home in Tangier",
    landAlt: "Investment land in Marrakech",
    commercialAlt: "Commercial unit in Casablanca",
    rabatAlt: "Apartment in Rabat",
    favoriteLabel: "Add to favorites",
    footerWhatsapp: "WhatsApp: 01029208418",
    whatsappContactLabel: "Contact us via WhatsApp",
    whatsappContactTitle: "Contact us via WhatsApp",
    navHome: "Home",
    navProjects: "Projects",
    services: "Services",
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
    moroccoTitle: "Discover Morocco Real Estate",
    moroccoLead:
      "Curated real estate selections in Morocco’s key cities, from modern living to promising investment opportunities.",
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
    modalContact: "Contact an advisor via WhatsApp",
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
    cityCountry: "المغرب",
    footerCompany: "سوا يونايتد للتطوير العقاري",
    pageTitle: "سوا يونايتد | عقارات المغرب",
    metaDescription: "سوا يونايتد — عقارات منتقاة وفرص استثمارية في أهم المدن المغربية.",
    moroccoEyebrow: "سوا يونايتد · المغرب",
    moroccoCitiesLabel: "مدن المغرب",
    propertyFilterLabel: "تصفية العقارات",
    menu: "القائمة",
    themeToggleLabel: "تبديل الوضع",
    nightMode: "التبديل إلى الوضع الليلي",
    dayMode: "التبديل إلى الوضع النهاري",
    logoAlt: "سوا يونايتد",
    villaAlt: "فيلا في مراكش",
    apartmentAlt: "شقة في الدار البيضاء",
    tangierAlt: "منزل في طنجة",
    landAlt: "أرض استثمارية في مراكش",
    commercialAlt: "وحدة تجارية في الدار البيضاء",
    rabatAlt: "شقة في الرباط",
    favoriteLabel: "إضافة للمفضلة",
    footerWhatsapp: "واتساب: 01029208418",
    whatsappContactLabel: "التواصل عبر واتساب",
    whatsappContactTitle: "تواصل معنا عبر واتساب",
    navHome: "الرئيسية",
    navProjects: "مشاريعنا",
    services: "الخدمات",
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
    moroccoTitle: "اكتشف عقارات المغرب",
    moroccoLead:
      "اختيارات عقارية منتقاة في أهم المدن المغربية، من السكن العصري إلى الفرص الاستثمارية الواعدة.",
    featured: "عقارات مميزة",
    selectedProperties: "عقارات مختارة",
    all: "الكل",
    villas: "فلل",
    apartments: "شقق",
    land: "أراضي",
    verified: "✓ Verified",
    exploreProperty: "استكشف العقار",
    exploreMorocco: "اكتشف المغرب",
    chooseCity: "اختر مدينتك",
    chooseCityLead:
      "ابدأ من المدينة التي تناسب أسلوب حياتك أو هدفك الاستثماري.",
    cityGuide: "دليل المدن",
    mostRequested: "الأكثر طلبًا",
    marketNature: "طبيعة السوق",
    exploreProperties: "استكشف العقارات",
    yourHome: "بيتك في المغرب",
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
    modalContact: "تواصل مع مستشار عبر واتساب",
    talkAdvisor: "تحدث مع مستشار عبر واتساب",
    about: "عن سوا يونايتد",
    aboutTitle1: "نختار العقار",
    aboutTitle2: "قبل أن نعرضه.",
    aboutLead:
      "سوا يونايتد تقدم تجربة عقارية أكثر وضوحًا: عقارات منتقاة، معلومات منظمة، وتجربة بحث تساعدك على اتخاذ قرار أفضل.",
    selected: "✓ عقارات مختارة",
    clearInfo: "✓ معلومات واضحة",
    directSupport: "✓ دعم مباشر",
    contact: "تواصل · المغرب",
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
    cityCountry: "MAROC",
    footerCompany: "Sawa United Développement Immobilier",
    pageTitle: "Sawa United | Immobilier au Maroc",
    metaDescription: "Sawa United — biens sélectionnés et opportunités d’investissement dans les principales villes du Maroc.",
    moroccoEyebrow: "SAWA UNITED · MAROC",
    moroccoCitiesLabel: "Villes du Maroc",
    propertyFilterLabel: "Filtres immobiliers",
    menu: "Menu",
    themeToggleLabel: "Changer de thème",
    nightMode: "Passer au mode sombre",
    dayMode: "Passer au mode clair",
    logoAlt: "Sawa United",
    villaAlt: "Villa à Marrakech",
    apartmentAlt: "Appartement à Casablanca",
    tangierAlt: "Maison à Tanger",
    landAlt: "Terrain d’investissement à Marrakech",
    commercialAlt: "Local commercial à Casablanca",
    rabatAlt: "Appartement à Rabat",
    favoriteLabel: "Ajouter aux favoris",
    footerWhatsapp: "WhatsApp : 01029208418",
    whatsappContactLabel: "Nous contacter via WhatsApp",
    whatsappContactTitle: "Contactez-nous via WhatsApp",
    navHome: "Accueil",
    navProjects: "Projets",
    services: "Services",
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
    moroccoTitle: "Découvrez l’immobilier au Maroc",
    moroccoLead:
      "Une sélection immobilière dans les principales villes marocaines, du résidentiel moderne aux opportunités d’investissement prometteuses.",
    featured: "BIENS EN VEDETTE",
    selectedProperties: "Biens sélectionnés",
    all: "Tous",
    villas: "Villas",
    apartments: "Appartements",
    land: "Terrains",
    verified: "✓ Vérifié",
    exploreProperty: "Découvrir le bien",
    exploreMorocco: "DÉCOUVRIR LE MAROC",
    chooseCity: "Choisissez votre ville",
    chooseCityLead:
      "Commencez par la ville qui correspond à votre style de vie ou à votre objectif d’investissement.",
    cityGuide: "GUIDE DES VILLES",
    mostRequested: "Le plus demandé",
    marketNature: "Profil du marché",
    exploreProperties: "Découvrir les biens",
    yourHome: "VOTRE MAISON AU MAROC",
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
    modalContact: "Contacter un conseiller via WhatsApp",
    talkAdvisor: "Parler à un conseiller sur WhatsApp",
    about: "À PROPOS DE SAWA UNITED",
    aboutTitle1: "Nous sélectionnons le bien",
    aboutTitle2: "avant de le présenter.",
    aboutLead:
      "Sawa United propose une expérience immobilière plus claire : des biens sélectionnés, des informations organisées et un parcours de recherche qui facilite votre décision.",
    selected: "✓ Biens sélectionnés",
    clearInfo: "✓ Informations claires",
    directSupport: "✓ Assistance directe",
    contact: "CONTACT · MAROC",
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

/* ==================== Country / Market Personalization ==================== */
const COUNTRY_PROFILES = {
  ma: {
    code: "ma",
    flag: "🇲🇦",
    phoneCode: "+212",
    whatsapp: "201029208418",
    phoneDisplay: "01029208418",
    labels: {
      en: {
        countryName: "Morocco",
        countryNameUpper: "MOROCCO",
        countryAdjective: "Moroccan",
        marketTitle: "Discover Morocco Real Estate",
        marketLead: "Curated real estate selections in Morocco’s key cities, from modern living to promising investment opportunities.",
        marketEyebrow: "SAWA UNITED · MOROCCO",
        exploreMarket: "EXPLORE MOROCCO",
        citiesLabel: "Morocco cities",
        contactLabel: "CONTACT · MOROCCO",
        countryCode: "Morocco · MA",
        mapLabel: "Morocco",
        mapCity1: "Marrakech", mapCity2: "Casablanca", mapCity3: "Tangier", mapCity4: "Rabat",
        heroTitle1:"Invest in", heroTitle2:"Morocco Real Estate", heroLead:"Curated opportunities in Morocco’s most promising real estate destinations.",
        pageTitle: "Sawa United | Morocco Real Estate", metaDescription: "Sawa United — selected properties and investment opportunities in Morocco’s leading cities.",
        yourHome: "YOUR HOME IN MOROCCO", homeInMorocco: "Your home in Morocco", journeyLead: "A clear journey from discovering the property to speaking with our advisor and arranging a visit. We designed the experience to stay simple whether you live in Morocco or abroad.",
        contactLead: "Leave your details and our team will contact you to help you choose the right property.", footerLead: "Sawa United Real Estate Development — We build today for a better future."
      },
      ar: {
        countryName: "المغرب",
        countryNameUpper: "المغرب",
        countryAdjective: "المغربية",
        marketTitle: "اكتشف عقارات المغرب",
        marketLead: "اختيارات عقارية منتقاة في أهم المدن المغربية، من السكن العصري إلى الفرص الاستثمارية الواعدة.",
        marketEyebrow: "سوا يونايتد · المغرب",
        exploreMarket: "اكتشف المغرب",
        citiesLabel: "مدن المغرب",
        contactLabel: "تواصل · المغرب",
        countryCode: "المغرب · MA",
        mapLabel: "المغرب",
        mapCity1: "مراكش", mapCity2: "الدار البيضاء", mapCity3: "طنجة", mapCity4: "الرباط",
        heroTitle1:"استثمر في", heroTitle2:"عقارات المغرب", heroLead:"فرص استثمارية منتقاة في أبرز الوجهات العقارية بالمغرب.",
        pageTitle: "سوا يونايتد | عقارات المغرب", metaDescription: "سوا يونايتد — عقارات منتقاة وفرص استثمارية في أهم المدن المغربية.",
        yourHome: "بيتك في المغرب", homeInMorocco: "بيتك في المغرب", journeyLead: "رحلة واضحة من اكتشاف العقار إلى التواصل مع مستشارنا وترتيب الزيارة. صممنا التجربة لتكون بسيطة لمن يعيش داخل المغرب أو خارجه.",
        contactLead: "اترك بياناتك وسيتواصل معك فريقنا لمساعدتك في اختيار العقار المناسب.", footerLead: "سوا يونايتد للتطوير العقاري — نبني اليوم لمستقبل أفضل."
      },
      fr: {
        countryName: "Maroc",
        countryNameUpper: "MAROC",
        countryAdjective: "marocaine",
        marketTitle: "Découvrez l’immobilier au Maroc",
        marketLead: "Une sélection immobilière dans les principales villes marocaines, du résidentiel moderne aux opportunités d’investissement prometteuses.",
        marketEyebrow: "SAWA UNITED · MAROC",
        exploreMarket: "DÉCOUVRIR LE MAROC",
        citiesLabel: "Villes du Maroc",
        contactLabel: "CONTACT · MAROC",
        countryCode: "Maroc · MA",
        mapLabel: "Maroc",
        mapCity1: "Marrakech", mapCity2: "Casablanca", mapCity3: "Tanger", mapCity4: "Rabat",
        heroTitle1:"Investissez dans", heroTitle2:"l’immobilier au Maroc", heroLead:"Des opportunités sélectionnées dans les destinations immobilières les plus prometteuses du Maroc.",
        pageTitle: "Sawa United | Immobilier au Maroc", metaDescription: "Sawa United — une sélection de biens et d’opportunités d’investissement dans les principales villes du Maroc.",
        yourHome: "VOTRE MAISON AU MAROC", homeInMorocco: "Votre maison au Maroc", journeyLead: "Un parcours clair, de la découverte du bien au contact avec notre conseiller et à l’organisation de la visite. Une expérience simple, au Maroc comme à l’étranger.",
        contactLead: "Laissez vos coordonnées et notre équipe vous contactera pour vous aider à choisir le bien adapté.", footerLead: "Sawa United Real Estate Development — Nous construisons aujourd’hui pour un avenir meilleur."
      }
    },
    cities: {
      marrakech: {
        en: {title:"Marrakech", description:"A standout destination for villas, riads, hospitality properties and long-term investment.", type:"Villas", mood:"Premium"},
        ar: {title:"مراكش", description:"وجهة مميزة للفلل والرياض والعقارات السياحية والاستثمار طويل الأجل.", type:"فلل", mood:"مميز"},
        fr: {title:"Marrakech", description:"Une destination de choix pour les villas, riads, biens hôteliers et l’investissement à long terme.", type:"Villas", mood:"Premium"}
      },
      casablanca: {
        en: {title:"Casablanca", description:"Morocco’s business hub, with diverse demand for residential and commercial units.", type:"Apartments", mood:"Business"},
        ar: {title:"الدار البيضاء", description:"قلب الأعمال في المغرب، مع طلب متنوع على السكن والوحدات التجارية.", type:"شقق", mood:"أعمال"},
        fr: {title:"Casablanca", description:"Le cœur économique du Maroc, avec une demande variée en résidentiel et commercial.", type:"Appartements", mood:"Business"}
      },
      tangier: {
        en: {title:"Tangier", description:"A coastal city combining sea views, modern residences and growth opportunities.", type:"Sea View", mood:"Growing"},
        ar: {title:"طنجة", description:"مدينة ساحلية تجمع بين الإطلالات البحرية والسكن العصري وفرص النمو.", type:"إطلالة بحرية", mood:"نامٍ"},
        fr: {title:"Tanger", description:"Une ville côtière qui combine vues sur mer, résidences modernes et potentiel de croissance.", type:"Vue mer", mood:"En croissance"}
      },
      rabat: {
        en: {title:"Rabat", description:"A calm, stable market for buyers seeking location quality and long-term living.", type:"Residences", mood:"Stable"},
        ar: {title:"الرباط", description:"سوق هادئ ومستقر يناسب الباحثين عن جودة الموقع والسكن طويل الأجل.", type:"سكن", mood:"مستقر"},
        fr: {title:"Rabat", description:"Un marché calme et stable pour ceux qui recherchent un emplacement de qualité et une résidence durable.", type:"Résidences", mood:"Stable"}
      }
    },
    properties: [
      {name:{en:"Villa Atlas",ar:"فيلا أطلس",fr:"Villa Atlas"}, city:"marrakech", location:{en:"Marrakech · Hivernage",ar:"مراكش · هيفرناج",fr:"Marrakech · Hivernage"}, description:{en:"Modern villa with a private garden and pool.",ar:"فيلا عصرية مع حديقة ومسبح خاص.",fr:"Villa moderne avec jardin et piscine privée."}},
      {name:{en:"Casa Residence",ar:"كازا ريزيدنس",fr:"Casa Residence"}, city:"casablanca", location:{en:"Casablanca · Maarif",ar:"الدار البيضاء · المعاريف",fr:"Casablanca · Maarif"}, description:{en:"Elegant apartment in a central location close to services.",ar:"شقة راقية في موقع مركزي قريب من الخدمات.",fr:"Appartement élégant au cœur de la ville, proche des services."}},
      {name:{en:"Tangier Bay",ar:"خليج طنجة",fr:"Tangier Bay"}, city:"tangier", location:{en:"Tangier · Malabata",ar:"طنجة · ملاباطا",fr:"Tanger · Malabata"}, description:{en:"Modern residence with sea views and open spaces.",ar:"إقامة عصرية بإطلالة بحرية ومساحات مفتوحة.",fr:"Résidence moderne avec vue sur mer et espaces ouverts."}},
      {name:{en:"Atlas Land",ar:"أرض أطلس",fr:"Terrain Atlas"}, city:"marrakech", location:{en:"Marrakech · Route de l’Ourika",ar:"مراكش · طريق أوريكا",fr:"Marrakech · Route de l’Ourika"}, description:{en:"Land suitable for a residential or hospitality project.",ar:"أرض مناسبة لمشروع سكني أو ضيافة.",fr:"Terrain adapté à un projet résidentiel ou touristique."}},
      {name:{en:"Anfa Business",ar:"أنفا للأعمال",fr:"Anfa Business"}, city:"casablanca", location:{en:"Casablanca · Anfa",ar:"الدار البيضاء · أنفا",fr:"Casablanca · Anfa"}, description:{en:"Commercial space suited to premium businesses and activities.",ar:"مساحة تجارية مناسبة للأعمال والأنشطة الراقية.",fr:"Espace commercial adapté aux activités et enseignes premium."}},
      {name:{en:"Rabat Garden",ar:"حدائق الرباط",fr:"Rabat Garden"}, city:"rabat", location:{en:"Rabat · Agdal",ar:"الرباط · أكدال",fr:"Rabat · Agdal"}, description:{en:"Quiet apartment with modern design near the city center.",ar:"شقة هادئة بتصميم حديث وقريبة من قلب المدينة.",fr:"Appartement calme au design moderne, proche du centre-ville."}}
    ]
  },

  eg: {
    code: "eg",
    flag: "🇪🇬",
    phoneCode: "+20",
    whatsapp: "201029208418",
    phoneDisplay: "01029208418",
    labels: {
      en: {
        countryName: "Egypt", countryNameUpper:"EGYPT", countryAdjective:"Egyptian",
        marketTitle:"Discover Egypt Real Estate",
        marketLead:"Curated real estate selections across Egypt’s leading destinations, from modern living to strong investment opportunities.",
        marketEyebrow:"SAWA UNITED · EGYPT",
        exploreMarket:"EXPLORE EGYPT", citiesLabel:"Egypt cities",
        contactLabel:"CONTACT · EGYPT", countryCode:"Egypt · EG", mapLabel:"Egypt",
        heroTitle1:"Invest in", heroTitle2:"Egypt Real Estate", heroLead:"Curated opportunities in Egypt’s leading residential and investment destinations.",
        pageTitle:"Sawa United | Egypt Real Estate", metaDescription:"Sawa United — selected properties and investment opportunities across Egypt’s leading destinations.",
        yourHome:"YOUR HOME IN EGYPT", homeInMorocco:"Your home in Egypt", journeyLead:"A clear journey from discovering the property to speaking with our advisor and arranging a visit. We keep the experience simple whether you live in Egypt or abroad.",
        contactLead:"Leave your details and our team will contact you to help you choose the right property.", footerLead:"Sawa United Real Estate Development — We build today for a better future.",
        mapCity1:"New Cairo", mapCity2:"Alexandria", mapCity3:"North Coast", mapCity4:"Cairo"
      },
      ar: {
        countryName:"مصر", countryNameUpper:"مصر", countryAdjective:"المصرية",
        marketTitle:"اكتشف عقارات مصر",
        marketLead:"اختيارات عقارية منتقاة في أهم وجهات مصر، من السكن العصري إلى الفرص الاستثمارية الواعدة.",
        marketEyebrow:"سوا يونايتد · مصر",
        exploreMarket:"اكتشف مصر", citiesLabel:"مدن مصر",
        contactLabel:"تواصل · مصر", countryCode:"مصر · EG", mapLabel:"مصر",
        heroTitle1:"استثمر في", heroTitle2:"عقارات مصر", heroLead:"فرص استثمارية منتقاة في أهم الوجهات العقارية في مصر.",
        pageTitle:"سوا يونايتد | عقارات مصر", metaDescription:"سوا يونايتد — عقارات منتقاة وفرص استثمارية في أهم وجهات مصر.",
        yourHome:"بيتك في مصر", homeInMorocco:"بيتك في مصر", journeyLead:"رحلة واضحة من اكتشاف العقار إلى التواصل مع مستشارنا وترتيب الزيارة. صممنا التجربة لتكون بسيطة لمن يعيش داخل مصر أو خارجها.",
        contactLead:"اترك بياناتك وسيتواصل معك فريقنا لمساعدتك في اختيار العقار المناسب.", footerLead:"سوا يونايتد للتطوير العقاري — نبني اليوم لمستقبل أفضل.",
        mapCity1:"القاهرة الجديدة", mapCity2:"الإسكندرية", mapCity3:"الساحل الشمالي", mapCity4:"القاهرة"
      },
      fr: {
        countryName:"Égypte", countryNameUpper:"ÉGYPTE", countryAdjective:"égyptienne",
        marketTitle:"Découvrez l’immobilier en Égypte",
        marketLead:"Une sélection immobilière dans les principales destinations d’Égypte, du résidentiel moderne aux opportunités d’investissement prometteuses.",
        marketEyebrow:"SAWA UNITED · ÉGYPTE",
        exploreMarket:"DÉCOUVRIR L’ÉGYPTE", citiesLabel:"Villes d’Égypte",
        contactLabel:"CONTACT · ÉGYPTE", countryCode:"Égypte · EG", mapLabel:"Égypte",
        heroTitle1:"Investissez dans", heroTitle2:"l’immobilier en Égypte", heroLead:"Des opportunités sélectionnées dans les principales destinations résidentielles et d’investissement d’Égypte.",
        pageTitle:"Sawa United | Immobilier en Égypte", metaDescription:"Sawa United — une sélection de biens et d’opportunités d’investissement dans les principales destinations d’Égypte.",
        yourHome:"VOTRE MAISON EN ÉGYPTE", homeInMorocco:"Votre maison en Égypte", journeyLead:"Un parcours clair, de la découverte du bien au contact avec notre conseiller et à l’organisation de la visite. Une expérience simple, en Égypte comme à l’étranger.",
        contactLead:"Laissez vos coordonnées et notre équipe vous contactera pour vous aider à choisir le bien adapté.", footerLead:"Sawa United Real Estate Development — Nous construisons aujourd’hui pour un avenir meilleur.",
        mapCity1:"New Cairo", mapCity2:"Alexandrie", mapCity3:"Côte Nord", mapCity4:"Le Caire"
      }
    },
    cities: {
      marrakech: {
        en:{title:"New Cairo",description:"A modern destination with premium residential communities and strong long-term investment potential.",type:"Apartments",mood:"Premium"},
        ar:{title:"القاهرة الجديدة",description:"وجهة عصرية تضم مجتمعات سكنية مميزة وفرصًا قوية للاستثمار طويل الأجل.",type:"شقق",mood:"مميز"},
        fr:{title:"New Cairo",description:"Une destination moderne avec des résidences premium et un fort potentiel d’investissement à long terme.",type:"Appartements",mood:"Premium"}
      },
      casablanca: {
        en:{title:"Alexandria",description:"A coastal Egyptian market combining city living, sea views and diverse residential demand.",type:"Sea View",mood:"Coastal"},
        ar:{title:"الإسكندرية",description:"سوق عقاري ساحلي يجمع بين الحياة داخل المدينة والإطلالات البحرية والطلب السكني المتنوع.",type:"إطلالة بحرية",mood:"ساحلي"},
        fr:{title:"Alexandrie",description:"Un marché côtier combinant vie urbaine, vues sur mer et demande résidentielle variée.",type:"Vue mer",mood:"Côtier"}
      },
      tangier: {
        en:{title:"North Coast",description:"A premium coastal destination for summer residences, hospitality and seasonal investment.",type:"Chalets",mood:"Growing"},
        ar:{title:"الساحل الشمالي",description:"وجهة ساحلية مميزة للمصايف والإقامات الفاخرة والاستثمار الموسمي.",type:"شاليهات",mood:"متنامٍ"},
        fr:{title:"Côte Nord",description:"Une destination côtière premium pour les résidences d’été, l’hospitalité et l’investissement saisonnier.",type:"Résidences",mood:"En croissance"}
      },
      rabat: {
        en:{title:"Cairo",description:"Egypt’s capital with established neighborhoods, services and diversified residential demand.",type:"Residences",mood:"Stable"},
        ar:{title:"القاهرة",description:"العاصمة المصرية بمناطق سكنية راسخة وخدمات متكاملة وطلب عقاري متنوع.",type:"سكن",mood:"مستقر"},
        fr:{title:"Le Caire",description:"La capitale égyptienne, avec des quartiers établis, des services complets et une demande résidentielle diversifiée.",type:"Résidences",mood:"Stable"}
      }
    },
    properties: [
      {name:{en:"New Cairo Villa",ar:"فيلا القاهرة الجديدة",fr:"Villa New Cairo"}, city:"marrakech", location:{en:"New Cairo · Fifth Settlement",ar:"القاهرة الجديدة · التجمع الخامس",fr:"New Cairo · Cinquième Agglomération"}, description:{en:"Modern villa in a premium residential community with private outdoor space.",ar:"فيلا عصرية داخل مجتمع سكني مميز مع مساحة خارجية خاصة.",fr:"Villa moderne dans une résidence premium avec espace extérieur privé."}},
      {name:{en:"Alexandria Residence",ar:"إقامة الإسكندرية",fr:"Alexandria Residence"}, city:"casablanca", location:{en:"Alexandria · Smouha",ar:"الإسكندرية · سموحة",fr:"Alexandrie · Smouha"}, description:{en:"Elegant residence close to services and the city’s coastal lifestyle.",ar:"إقامة راقية قريبة من الخدمات ونمط الحياة الساحلي للمدينة.",fr:"Résidence élégante proche des services et du littoral."}},
      {name:{en:"North Coast Bay",ar:"خليج الساحل الشمالي",fr:"North Coast Bay"}, city:"tangier", location:{en:"North Coast · Sidi Abdel Rahman",ar:"الساحل الشمالي · سيدي عبد الرحمن",fr:"Côte Nord · Sidi Abdel Rahman"}, description:{en:"Premium coastal residence for summer living and seasonal investment.",ar:"إقامة ساحلية مميزة للمصيف والاستثمار الموسمي.",fr:"Résidence côtière premium pour les vacances et l’investissement saisonnier."}},
      {name:{en:"New Cairo Land",ar:"أرض استثمارية بالقاهرة الجديدة",fr:"Terrain New Cairo"}, city:"marrakech", location:{en:"New Cairo · Golden Square",ar:"القاهرة الجديدة · جولدن سكوير",fr:"New Cairo · Golden Square"}, description:{en:"Investment land in a strategic New Cairo location.",ar:"أرض استثمارية في موقع استراتيجي بالقاهرة الجديدة.",fr:"Terrain d’investissement dans un emplacement stratégique de New Cairo."}},
      {name:{en:"Cairo Business",ar:"وحدة أعمال بالقاهرة",fr:"Cairo Business"}, city:"casablanca", location:{en:"Cairo · New Capital",ar:"القاهرة · العاصمة الجديدة",fr:"Le Caire · Nouvelle Capitale"}, description:{en:"Premium commercial space for business and professional activities.",ar:"مساحة تجارية مميزة للأعمال والأنشطة المهنية.",fr:"Espace commercial premium pour activités professionnelles."}},
      {name:{en:"Cairo Garden",ar:"حدائق القاهرة",fr:"Cairo Garden"}, city:"rabat", location:{en:"Cairo · Maadi",ar:"القاهرة · المعادي",fr:"Le Caire · Maadi"}, description:{en:"Contemporary residence in a calm, well-connected neighborhood.",ar:"إقامة عصرية في منطقة هادئة ومتصلة بالخدمات.",fr:"Résidence contemporaine dans un quartier calme et bien desservi."}}
    ]
  }
};

let currentCountry = localStorage.getItem("sawa-country") || "";
function getCountryProfile() {
  return COUNTRY_PROFILES[currentCountry] || COUNTRY_PROFILES.ma;
}
function getCountryLabel(key) {
  return getCountryProfile().labels[currentLanguage]?.[key]
    ?? getCountryProfile().labels.en[key]
    ?? "";
}
function getCountryCityData(city) {
  return getCountryProfile().cities[city]?.[currentLanguage]
    ?? getCountryProfile().cities[city]?.en
    ?? null;
}

let currentLanguage = localStorage.getItem("sawa-language") || "en";
let currentTheme =
  localStorage.getItem("sawa-theme") ||
  (window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

function getTranslation(key) {
  if (!key) return "";
  const countryKeyMap = {
    cityCountry: "countryNameUpper",
    moroccoEyebrow: "marketEyebrow",
    moroccoCitiesLabel: "citiesLabel",
    moroccoTitle: "marketTitle",
    moroccoLead: "marketLead",
    exploreMorocco: "exploreMarket",
    contact: "contactLabel",
    countryMorocco: "countryCode",
    pageTitle: "pageTitle",
    metaDescription: "metaDescription",
    yourHome: "yourHome",
    homeInMorocco: "homeInMorocco",
    journeyLead: "journeyLead",
    contactLead: "contactLead",
    footerLead: "footerLead",
    heroTitle1: "heroTitle1",
    heroTitle2: "heroTitle2",
    heroLead: "heroLead",
  };
  const countryKey = countryKeyMap[key];
  if (countryKey) {
    return getCountryLabel(countryKey);
  }
  return (
    SITE_TRANSLATIONS[currentLanguage]?.[key] ??
    SITE_TRANSLATIONS.en?.[key] ??
    ""
  );
}

function setTranslatedText(element, key) {
  if (!element) return;
  const value = getTranslation(key);
  if (value) element.textContent = value;
}

function setTranslatedAttribute(element, attribute, key) {
  if (!element) return;
  const value = getTranslation(key);
  if (value) element.setAttribute(attribute, value);
}

function applyTranslations() {
  const root = document.documentElement;
  const isArabic = currentLanguage === "ar";
  root.lang = currentLanguage;
  root.dir = isArabic ? "rtl" : "ltr";
  document.body.dir = isArabic ? "rtl" : "ltr";
  $(".spine-site")?.setAttribute("dir", isArabic ? "rtl" : "ltr");

  // Static visible text: every translatable element declares its own key.
  $$('[data-i18n]').forEach((element) => {
    setTranslatedText(element, element.dataset.i18n);
  });

  // Translatable HTML attributes use explicit, semantic data attributes.
  $$('[data-i18n-placeholder]').forEach((element) =>
    setTranslatedAttribute(element, "placeholder", element.dataset.i18nPlaceholder),
  );
  $$('[data-i18n-aria-label]').forEach((element) =>
    setTranslatedAttribute(element, "aria-label", element.dataset.i18nAriaLabel),
  );
  $$('[data-i18n-title]').forEach((element) =>
    setTranslatedAttribute(element, "title", element.dataset.i18nTitle),
  );
  $$('[data-i18n-alt]').forEach((element) =>
    setTranslatedAttribute(element, "alt", element.dataset.i18nAlt),
  );
  $$('[data-i18n-content]').forEach((element) =>
    setTranslatedAttribute(element, "content", element.dataset.i18nContent),
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
        ? getTranslation("dark")
        : getTranslation("light"),
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
  document.dispatchEvent(new CustomEvent("sawa:languagechange"));
}

function updateCountrySwitcherLanguage() {
  const switcher = document.querySelector("#countrySwitcher");
  if (!switcher) return;
  const buttons = $$("[data-country-choice]", switcher);
  const labels = {
    en: { eg: ["Egypt", "Egypt Real Estate"], ma: ["Morocco", "Morocco Real Estate"] },
    ar: { eg: ["مصر", "عقارات مصر"], ma: ["المغرب", "عقارات المغرب"] },
    fr: { eg: ["Égypte", "Immobilier en Égypte"], ma: ["Maroc", "Immobilier au Maroc"] }
  };
  const lang = labels[currentLanguage] || labels.en;
  buttons.forEach((button) => {
    const country = button.dataset.countryChoice;
    const isActive = country === currentCountry;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
    const title = button.querySelector("[data-country-choice-label]");
    const sub = button.querySelector("[data-country-choice-sub]");
    if (title) title.textContent = lang[country]?.[0] || country;
    if (sub) sub.textContent = lang[country]?.[1] || "";
  });
  switcher.setAttribute("aria-label", currentLanguage === "ar" ? "اختيار الدولة" : currentLanguage === "fr" ? "Choisir le pays" : "Choose country");
}

function applyCountryContent() {
  const profile = getCountryProfile();
  const countryKeys = {
    "data-country-label": "countryName",
    "data-country-upper": "countryNameUpper"
  };

  // Update every country-sensitive label declared in HTML.
  $$("[data-country-label]").forEach((el) => {
    el.textContent = getCountryLabel(el.dataset.countryLabel);
  });
  $$("[data-country-upper]").forEach((el) => {
    el.textContent = getCountryLabel(el.dataset.countryUpper);
  });

  // City cards: names and descriptions follow the selected market.
  const cityOrder = ["marrakech", "casablanca", "tangier", "rabat"];
  $$(".city-card").forEach((card, index) => {
    const city = getCountryCityData(cityOrder[index]);
    if (!city) return;
    const name = $("strong", card);
    const description = $("em", card);
    const country = $("small", card);
    if (name) name.textContent = city.title;
    if (description) description.textContent = city.type + " · " + city.mood;
    if (country) country.textContent = getCountryLabel("countryNameUpper");
    const image = $("img", card);
    if (image) image.alt = city.title;
  });

  // Property cards: names, locations and descriptions are country-specific.
  $$(".property-card").forEach((card, index) => {
    const item = profile.properties[index];
    if (!item) return;
    const nameEl = $("[data-country-property]", card);
    const locationEl = $(".property-top span", card);
    const descriptionEl = $(".property-body > p", card);
    const imageEl = $(".property-media img", card);
    if (nameEl) nameEl.textContent = item.name[currentLanguage] || item.name.en;
    if (locationEl) locationEl.textContent = item.location?.[currentLanguage] || item.location?.en || "";
    if (descriptionEl) descriptionEl.textContent = item.description?.[currentLanguage] || item.description?.en || "";
    if (imageEl) imageEl.alt = item.name[currentLanguage] || item.name.en;

    // Keep the property modal trigger in sync with the visible property name.
    const details = $(".property-details", card);
    if (details) details.dataset.property = nameEl?.textContent.trim() || item.name.en;
  });

  // Phone/contact details.
  $$(".js-country-flag").forEach((el) => el.textContent = profile.flag);
  $$(".js-phone-code").forEach((el) => el.textContent = profile.phoneCode);

  $$('a[href*="wa.me/"]').forEach((link) => {
    const currentUrl = new URL(link.href, window.location.href);
    currentUrl.pathname = "/" + profile.whatsapp;
    link.href = currentUrl.toString();
  });

  // Update text fragments that are not part of the regular i18n map.
  const title = document.querySelector('title');
  if (title) title.textContent = currentLanguage === "ar"
    ? `سوا يونايتد | عقارات ${getCountryLabel("countryName")}`
    : currentLanguage === "fr"
      ? `Sawa United | Immobilier en ${getCountryLabel("countryName")}`
      : `Sawa United | ${getCountryLabel("countryName")} Real Estate`;

  const keywords = document.querySelector('meta[name="keywords"]');
  if (keywords) {
    const cityNames = Object.values(profile.cities)
      .map(c => c[currentLanguage]?.title || c.en.title)
      .join(", ");
    keywords.content = `Sawa United, ${getCountryLabel("countryName")}, real estate, ${cityNames}, investment`;
  }

  // The map is visual decoration in this project; update all labels to the selected market.
  const mapLabels = $$(".map-label");
  const mapValues = ["mapCity1","mapCity2","mapCity3","mapCity4"];
  mapLabels.forEach((el, index) => {
    const key = mapValues[index];
    if (key) el.textContent = getCountryLabel(key);
  });

  // Update map pin accessibility labels.
  const mapPins = $$(".map-pin");
  mapPins.forEach((el, index) => {
    const key = mapValues[index];
    if (key) {
      const value = getCountryLabel(key);
      el.setAttribute("aria-label", value);
    }
  });

  document.documentElement.dataset.market = profile.code;
  document.dispatchEvent(new CustomEvent("sawa:countrychange", {
    detail: { country: profile.code }
  }));
}

function applyCountryAndLanguage() {
  syncCountrySwitcherUI();
  updateCountrySwitcherLanguage();
  applyTranslations();
  applyCountryContent();
}

function syncCountrySwitcherUI() {
  const switcher = document.querySelector("#countrySwitcher");
  if (!switcher) return;
  $$(".country-choice[data-country-choice]", switcher).forEach((button) => {
    const active = button.dataset.countryChoice === currentCountry;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function initCountrySelector() {
  const switcher = document.querySelector("#countrySwitcher");
  if (!switcher) return;

  if (!currentCountry || !COUNTRY_PROFILES[currentCountry]) {
    currentCountry = "eg";
    localStorage.setItem("sawa-country", currentCountry);
  }

  $$('[data-country-choice]', switcher).forEach((button) => {
    button.addEventListener("click", () => {
      const country = button.dataset.countryChoice;
      if (!COUNTRY_PROFILES[country] || country === currentCountry) return;
      currentCountry = country;
      localStorage.setItem("sawa-country", currentCountry);
      applyCountryAndLanguage();
    });
  });

  applyCountryAndLanguage();
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
      applyCountryAndLanguage();
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
    const labelKey = currentTheme === "dark" ? "dayMode" : "nightMode";
    const label = getTranslation(labelKey);
    toggle.setAttribute("aria-label", label);
    toggle.setAttribute("title", label);
  }
}

function updateCityGuide(city) {
  const data = getCountryCityData(city);
  if (!data) return;
  $("#cityTitle")?.replaceChildren(document.createTextNode(data.title));
  $("#cityDescription")?.replaceChildren(
    document.createTextNode(data.description),
  );
  $("#cityType")?.replaceChildren(document.createTextNode(data.type));
  $("#cityMood")?.replaceChildren(document.createTextNode(data.mood));
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
  const WHATSAPP_NUMBER = getCountryProfile().whatsapp;
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

    { selector: "#properties .section-heading", effect: "up", delay: 30 },
    { selector: "#properties .property-card", effect: "up", stagger: 75, cap: 375 },

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
    "#thespine .eyebrow, #properties .eyebrow, #integratedexp .eyebrow, #cognitivesys .eyebrow",
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
  initCountrySelector();
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

  /* ==================== Property Detail Modal ==================== */
  const modal = document.createElement("div");
  modal.className = "property-modal";
  modal.innerHTML = `
    <div class="modal-box property-detail-box" role="dialog" aria-modal="true" aria-labelledby="propertyModalTitle">
      <button class="modal-close" aria-label="إغلاق" data-i18n-aria-label="close">×</button>
      <div class="property-modal-hero">
        <img id="propertyModalImage" src="home.png" alt="">
        <div class="property-modal-hero-copy">
          <span class="property-country" id="propertyModalCountry"></span>
          <h3 id="propertyModalTitle"></h3>
          <p id="propertyModalLocation"></p>
        </div>
      </div>
      <div class="property-tabs" role="tablist">
        <button class="property-tab active" data-tab="overview" role="tab" data-i18n="overview">Overview</button>
        <button class="property-tab" data-tab="masterplan" role="tab" >مخطط الموقع</button>
        <button class="property-tab" data-tab="gallery" role="tab" data-i18n="gallery">Gallery</button>
      </div>
      <div class="property-tab-panel active" data-panel="overview">
        <div class="property-overview-grid">
          <aside class="property-quick-actions">
            <h4 data-i18n="quickActions">Quick Actions</h4>
            <button type="button" class="masterplan-open" data-i18n="viewMasterplan">View Full Master Plan</button>
            <a href="https://wa.me/201029208418" class="property-contact" target="_blank" rel="noopener" data-i18n="modalContact">تواصل مع مستشار عبر واتساب</a>
          </aside>
          <div class="property-overview-copy">
            <span class="eyebrow" id="propertyModalType"></span>
            <p id="propertyModalDescription"></p>
            <div class="property-modal-stats" id="propertyModalStats"></div>
            <h4 data-i18n="projectStats">Project Statistics</h4>
          </div>
        </div>
      </div>
      <div class="property-tab-panel" data-panel="masterplan">
        <div class="masterplan-viewer">
          <div class="masterplan-toolbar"><strong data-i18n="masterPlanTitle">Master Plan</strong><span data-i18n="masterPlanLead">مخطط توضيحي للمشروع</span></div>
          <div class="masterplan-canvas">
            <svg viewBox="0 0 1000 560" class="masterplan-svg" role="img" aria-label="مخطط موقع توضيحي" data-i18n-aria-label="masterPlanLead">
              <rect x="20" y="20" width="960" height="520" rx="24" class="plan-boundary"/>
              <path d="M70 440 C210 360 280 470 410 390 S650 320 930 420" class="plan-road"/>
              <path d="M80 120 C250 180 330 90 500 160 S760 220 920 120" class="plan-road secondary"/>
              <rect x="105" y="185" width="145" height="95" rx="12" class="plan-building"/><rect x="290" y="225" width="150" height="105" rx="12" class="plan-building"/>
              <rect x="510" y="185" width="145" height="95" rx="12" class="plan-building"/><rect x="720" y="250" width="155" height="105" rx="12" class="plan-building"/>
              <circle cx="470" cy="115" r="52" class="plan-park"/><circle cx="675" cy="420" r="62" class="plan-park"/>
              <rect x="410" y="395" width="155" height="70" rx="18" class="plan-water"/>
              <text x="178" y="238" class="plan-label" data-i18n="residences">RESIDENCES</text><text x="345" y="282" class="plan-label" data-i18n="villas">VILLAS</text>
              <text x="545" y="238" class="plan-label" data-i18n="services">SERVICES</text><text x="752" y="307" class="plan-label" data-i18n="commercial">COMMERCIAL</text>
              <text x="430" y="122" class="plan-label small" data-i18n="greenArea">GREEN AREA</text><text x="430" y="437" class="plan-label small" data-i18n="clubAmenities">CLUB / AMENITIES</text>
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
  let activePropertyCard = null;

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

  function renderPropertyModal(card) {
    if (!card) return;

    const name =
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
    modalStats.replaceChildren(
      ...stats.map((stat) => {
        const span = document.createElement("span");
        span.textContent = stat;
        return span;
      }),
    );
    const image = $(".property-media img", card);
    if (image) {
      modalImage.src = image.getAttribute("src");
      modalImage.alt = name;
    }
  }

  $$(".property-details").forEach((btn) =>
    btn.addEventListener("click", () => {
      activePropertyCard = btn.closest(".property-card");
      renderPropertyModal(activePropertyCard);
      activatePropertyTab("overview");
      modal.classList.add("open");
    }),
  );

  document.addEventListener("sawa:languagechange", () => {
    if (activePropertyCard) renderPropertyModal(activePropertyCard);
  });
  document.addEventListener("sawa:countrychange", () => {
    if (activePropertyCard) renderPropertyModal(activePropertyCard);
  });

  $(".modal-close", modal)?.addEventListener("click", closeModal);
  $(".property-contact", modal)?.addEventListener("click", (event) => {
    event.preventDefault();
    const propertyName = modalTitle.textContent.trim() || "العقار";
    const message = `${SITE_TRANSLATIONS[currentLanguage].whatsappProperty} ${propertyName}`;
    window.open(
      `https://wa.me/${getCountryProfile().whatsapp}?text=${encodeURIComponent(message)}`,
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

  // Interest-form submission (opening WhatsApp, button feedback, reset)
  // is handled once, centrally, by initInterestForms().
})();
