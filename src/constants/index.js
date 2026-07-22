export const myProjects = [
  {
    id: 1,
    title: "ProfitPulse: Stock Prediction & Community Platform",
    description: "A comprehensive platform that combines stock market prediction with a community-driven learning environment.",
    subDescription: [
      "Real-time stock predictions using LSTM neural networks",
      "Live community chat for market discussions",
      "Interactive practice zone for beginners",
      "Personal portfolio tracking",
    ],
    
    image: "/assets/projects/profitpulse.png",
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "/assets/logos/mongo-db.png",
      },
     
      {
        id: 3,
        name: "Node.js",
        path: "/assets/logos/Node.js_logo.svg.png",
      },
      {
        id: 4,
        name: "React.js",
        path: "/assets/logos/react-svgrepo-com.svg",
      },
      {
        id: 5,
        name: "Socket.io",
        path: "/assets/logos/socket-io-logo-1.jpeg.webp",
      },
    ],
  },
  {
    id: 2,
    title: "IPL Match Predictor",
    description: "A sophisticated cricket match prediction system that analyzes historical data and real-time match conditions.",
    subDescription: [
      "Live match probability updates",
      "Historical match data integration",
      "Interactive visualization dashboard",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ipl.png",
    tags: [
      {
        id: 1,
        name: "Streamlit",
        path: "/assets/logos/streamlit-logo-primary-colormark-lighttext.png",
      },
      {
        id: 2,
        name: "Logistic regression",
        path: "/assets/logos/1998661.png",
      },
      {
        id: 3,
        name: "python",
        path: "assets/logos/python-svgrepo-com.svg",
      },
    ],
  },
  {
    id: 3,
    title: "ShadowStrike: Haunted Archery Game",
    description: "ShadowStrike is a skill-based 2D archery shooting game that combines precision gameplay with atmospheric horror elements",
    subDescription: [
      "Atmospheric Horror Setting - Haunted graveyard with 3D blood moon, animated bats, glowing eyes, and dynamic fog effects",
      "Advanced Visual Effects - OpenGL-powered graphics with lighting effects, animation sequencing, and recursive drawing techniques",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/shadow.png",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/c++u.png",
      },
      {
        id: 2,
        name: "OpenGL",
        path: "/assets/logos/opengl.svg",
      },
      {
        id: 3,
        name: "GLUT",
        path: "/assets/logos/Screenshot 2025-06-03 at 6.07.51 PM.png",
      },
    ],
  },
  {
    id: 5,
    title: "AI Resume Matching & Candidate Analytics Platform",
    description: "An NLP-based resume-matching engine that ranks resumes against a job description and surfaces candidate insights through an interactive analytics dashboard.",
    subDescription: [
      "Engineered an NLP-based resume-matching engine with TF-IDF and Scikit-Learn that ranks 1000+ resumes against a job description by cosine similarity, automating the initial shortlisting pass that was previously done manually",
      "Built an interactive Streamlit analytics dashboard backed by MongoDB for resume parsing, skill extraction and candidate insights, surfacing per-candidate match scores and skill gaps in a single reviewer view",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/resume-matcher.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-svgrepo-com.svg",
      },
      {
        id: 2,
        name: "Scikit-Learn",
        path: "/assets/logos/python-svgrepo-com.svg",
      },
      {
        id: 3,
        name: "Streamlit",
        path: "/assets/logos/streamlit-logo-primary-colormark-lighttext.png",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/logos/mongo-db.png",
      },
    ],
  },
  {
    id: 6,
    title: "NLP-Based Market Sentiment Analyzer",
    description: "An NLP pipeline that predicts stock-market movement from tweet sentiment using semantic graphs and trained ML classifiers, recognized in the Top 1% at Technalytics, IIT BHU.",
    subDescription: [
      "Built an NLP pipeline to predict stock-market movement from tweet sentiment using semantic graphs and trained ML classifiers; recognized in the Top 1% at Technalytics, IIT BHU",
      "Implemented NER and dependency-parsing features across 4 entity types to extract relationships from tweets, capturing predictive signal beyond simple sentiment polarity",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/sentiment-analyzer.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python-svgrepo-com.svg",
      },
      {
        id: 2,
        name: "NLP",
        path: "/assets/logos/python-svgrepo-com.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Hospital Management System",
    description: "Comprehensive system for streamlining administrative, clinical, and financial operations in healthcare facilities.",
    // ✅ FIXED: Added missing subDescription array
    subDescription: [
      "Patient registration and management with comprehensive medical history tracking",
      "Appointment scheduling system with automated reminders and conflict resolution Inventory management for medical supplies, equipment, and pharmaceuticals",
      "Billing and insurance processing with automated claim submissions Staff management including scheduling, payroll, and performance tracking Reporting and analytics dashboard for operational insights and compliance"
    ],
    href: "",
    logo: "",
    image: "/assets/projects/hospital.png",
    tags: [
      {
        id: 1,
        name: "PL/SQL",
        path: "/assets/logos/sql-svgrepo-com.svg",
      },
    ],
  },
];

// Rest of your exports remain the same
export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/917009981594",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/kritik-makkar-1b26b5286",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kritik.makkar?igsh=enF0MGo1djR2bGFw",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Development Engineer Intern",
    job: "DotPe",
    date: "Feb 2026 - July 2026",
    contents: [
      "Architected a five-module, configuration-driven Loyalty Program platform (wizard, state/API layer, customer experience, checkout redemption, analytics) for DotPe's CRM & Loyalty SaaS product, letting 1000+ merchants launch visit-based or point-based rewards without custom engineering.",
      "Engineered the shared state and API layer using Redux and Redux-Saga, with React Context isolating in-progress wizard data across 13 configuration steps; flattened step data into a single validated payload per program.",
      "Built draft save/resume and publish pipelines with step-level validation and a program-type-aware rewards screen, serving all static UI assets from Amazon S3 while maintaining complete data isolation across merchant configurations.",
      "Optimized API endpoint routing by migrating frontend requests to an internal API gateway, cutting redundant external calls and lowering infrastructure overhead while preserving full backward compatibility.",
      "Designed the checkout redemption flow with OTP-backed point blocking/unblocking and mode-aware (earn/burn/both) exclusions handling, passing all end-to-end test scenarios with zero regressions.",
      "Instrumented Google Analytics 4 (GA4) event tracking with merchant/user custom dimensions across 25+ tracked events, lifting engagement by 22%.",
      "Diagnosed and resolved 50+ frontend defects through debugging, root-cause analysis and code reviews across 6 production releases.",
    ],
  },
  {
    title: "Computer Engineering Student",
    job: "Thapar Institute of Engineering and Technology",
    date: "Sep 2022 - May 2026",
    contents: [
     "Pursuing B.E in Computer Engineering and Technology ",
      "Developing expertise in core CS subjects including Operating Systems, DBMS, Networking, OOPs, and Algorithms.",
      "Working on advanced projects involving machine learning, web development, and database management systems.",
      "Maintaining academic excellence while actively participating in extracurricular activities and technical projects.",
    ],
  },
  {
    title: "Technical Project Developer",
    job: "Personal & Academic Projects",
    date: "2022 - Present",
    contents: [
      "Developed full-stack applications using MERN stack with advanced features like real-time chat and ML integration.",
      "Created machine learning models for stock prediction using LSTM networks and sports outcome prediction.",
      "Built comprehensive database systems using PL/SQL for healthcare management applications.",
      "Demonstrated proficiency in multiple programming languages including Python, C/C++, JavaScript, and R.",
     ],
  },
  {
    title: "AIESEC Member",
    job: "AIESEC International",
    date: "2023-2024",
    contents: [
      "Contributed to International Relations (IR) calls, facilitating cross-cultural discussions and collaborations.",
      "Played a key role in the marketing team, successfully securing sponsorships for Global Village events.",
      "Demonstrated leadership and teamwork skills through event coordination and guest hospitality management.",
     
    ],
  },
];

export const reviews = [
  {
    name: "SaaS Platform Architecture",
    username: "@dotpe_engineering",
    body: "Architected a five-module, configuration-driven Loyalty Program platform at DotPe, letting 1000+ merchants launch rewards programs without custom engineering.",
    img: "https://robohash.org/dotpe",
  },
  {
    name: "Resume Intelligence Tooling",
    username: "@nlp_hiring",
    body: "Built an NLP-based resume-matching engine with TF-IDF and Scikit-Learn that ranks 1000+ resumes against a job description, automating initial shortlisting.",
    img: "https://robohash.org/resumematch",
  },
  {
    name: "Stock Prediction Innovation",
    username: "@ml_community",
    body: "Developed sophisticated LSTM-based stock prediction platform with real-time community features using MERN stack.",
    img: "https://robohash.org/stock",
  },
  {
    name: "Sports Analytics Expertise",
    username: "@cricket_analytics",
    body: "Created IPL match predictor with live probability updates, showcasing advanced machine learning skills.",
    img: "https://robohash.org/ipl",
  },
  {
    name: "Healthcare Technology",
    username: "@healthcare_tech",
    body: "Built comprehensive Hospital Management System using PL/SQL, streamlining clinical and administrative operations.",
    img: "https://robohash.org/hospital",
  },
  {
    name: "Data Science Contributor",
    username: "@kaggle_community",
    body: "Active Kaggle contributor with expertise in Python, R, and advanced ML libraries for data analysis and modeling.",
    img: "https://robohash.org/kaggle",
  },
  {
    name: "International Leadership",
    username: "@aiesec_global",
    body: "Successfully contributed to AIESEC's international relations and marketing initiatives, securing sponsorships for Global Village.",
    img: "https://robohash.org/aiesec",
  },
  {
    name: "Technical Versatility",
    username: "@dev_community",
    body: "Proficient across multiple domains - from game development with OpenGL to full-stack web applications.",
    img: "https://robohash.org/versatile",
  },
];