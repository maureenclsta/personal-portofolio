export type NavItem = {
  label: string;
  href: string;
  icon: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  semester: string;
  period: string;
  categories: string[];
  overview: string;
  media: {
    type: "image" | "video";
    src: string | null;
    alt: string;
  };
  metrics: { label: string; value: string }[];
  bestModel?: string;
  github: string;
  whyMadeThis: string | null;
  sdgs: string[];
  technologies: string[];
  strengths: string[];
  limitations: string | null;
  process?: string[];
};

export type ExperiencePhoto = {
  src: string;
  alt: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  photos: ExperiencePhoto[];
};

export type ExperienceGroup = {
  title: string;
  items: ExperienceItem[];
};

export type SkillItem = {
  name: string;
  description?: string;
  status?: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: SkillItem[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: "⌂" },
  { label: "About", href: "/about", icon: "◌" },
  { label: "Projects", href: "/projects", icon: "▣" },
  { label: "Experience", href: "/experience", icon: "◫" },
  { label: "Skills", href: "/skills", icon: "✦" },
  { label: "Contact", href: "/contact", icon: "✉" },
];

export const aboutHighlights = [
  "Computer Science student specializing in Artificial Intelligence",
  "Currently in semester 5 and preparing for an internship",
  "Interested in AI, machine learning, web development, and product-building",
  "Building applications that combine technical depth with a thoughtful user experience",
];

export const projects: Project[] = [
  {
    slug: "agriyield",
    title: "AgriYield",
    subtitle: "Machine Learning-Based Paddy Yield Prediction",
    semester: "Semester 4",
    period: "February 2026 — July 2026",
    categories: ["Machine Learning", "Web Application"],
    overview:
      "AgriYield is a web-based machine learning application that predicts paddy yield from land characteristics, fertilizer use, weather, and other agricultural features. Users enter the relevant data in a Streamlit interface and receive an estimated harvest in kilograms.",
    media: { type: "video", src: null, alt: "AgriYield project media" },
    metrics: [
      { label: "R²", value: "0.99" },
      { label: "MAE", value: "657.62 Kg" },
    ],
    bestModel: "Random Forest",
    github: "https://github.com/maureenclsta/PaddyYield---Machine-Learning.git",
    whyMadeThis: null,
    sdgs: [],
    technologies: ["Streamlit"],
    strengths: ["Accepts multiple agricultural inputs and returns a yield estimate in kilograms."],
    limitations: null,
  },
  {
    slug: "buginator",
    title: "Buginator",
    subtitle: "GitHub Issue Severity Classification Using NLP",
    semester: "Semester 4",
    period: "February 2026 — July 2026",
    categories: ["Natural Language Processing", "Machine Learning", "Web Application"],
    overview:
      "Buginator is a web-based NLP application that classifies GitHub issue reports as Critical or Non-Critical. Users enter an issue description and receive the predicted severity and classification probability through a Streamlit interface.",
    media: { type: "video", src: null, alt: "Buginator project media" },
    metrics: [
      { label: "Accuracy", value: "93.74%" },
      { label: "F1-score", value: "0.94" },
    ],
    bestModel: "SVM",
    github: "https://github.com/maureenclsta/Bug-Severity-Classification---NLP.git",
    whyMadeThis: null,
    sdgs: [],
    technologies: ["Streamlit"],
    strengths: ["Returns a severity class and its classification probability."],
    limitations: null,
  },
  {
    slug: "kovera",
    title: "Kovera",
    subtitle: "Book Cover Authenticity Verification Using Feature Matching",
    semester: "Semester 4",
    period: "February 2026 — July 2026",
    categories: ["Computer Vision", "Image Processing"],
    overview:
      "Kovera is a computer vision system for checking book-cover authenticity with image feature matching. It combines ORB and SIFT through Confidence-Based Ensemble Voting to classify an uploaded cover as authentic or counterfeit.",
    media: { type: "video", src: null, alt: "Kovera project media" },
    metrics: [
      { label: "Accuracy", value: "92.67%" },
      { label: "Counterfeit covers misclassified as authentic", value: "0" },
    ],
    github: "https://github.com/maureenclsta/Fake-Book-Detector---Computer-Vision.git",
    whyMadeThis: null,
    sdgs: [],
    technologies: [],
    strengths: ["Combines ORB and SIFT matching through confidence-based ensemble voting."],
    limitations: null,
  },
  {
    slug: "schola",
    title: "Schola",
    subtitle: "Integrated Scholarship Information System",
    semester: "Semester 4",
    period: "February 2026 — July 2026",
    categories: ["Software Engineering", "Web Application"],
    overview:
      "Schola is a web-based scholarship information system that brings scholarship opportunities into one platform. Users can browse and search scholarships, submit required application documents, and track application progress. Administrators can manage scholarship information and applications.",
    media: { type: "video", src: null, alt: "Schola project media" },
    metrics: [],
    github: "https://github.com/maureenclsta/Schola---Software-Engineering.git",
    whyMadeThis: null,
    sdgs: [],
    technologies: [],
    strengths: ["Brings scholarship browsing, applications, and progress tracking into one system."],
    limitations: null,
  },
  {
    slug: "snapdriver",
    title: "SnapDriver",
    subtitle: "Real-Time Driver Drowsiness Detection System",
    semester: "Semester 3",
    period: "September 2025 — January 2026",
    categories: ["Artificial Intelligence", "Computer Vision", "Deep Learning"],
    overview:
      "SnapDriver uses webcam video to detect driver behavior in real time, particularly yawning and talking patterns that may indicate drowsiness. It can trigger an alert and send a Telegram notification to designated emergency contacts.",
    media: { type: "video", src: null, alt: "SnapDriver project media" },
    metrics: [],
    github: "https://github.com/maureenclsta/SnapDrive.git",
    whyMadeThis: null,
    sdgs: [],
    technologies: [],
    strengths: ["Connects webcam-based behavior analysis with alerts and Telegram notifications."],
    limitations: null,
    process: ["Webcam", "Face/Behavior Detection", "Drowsiness Analysis", "Alert", "Telegram Notification"],
  },
];

export const experienceGroups: ExperienceGroup[] = [
  {
    title: "BINUS EXPERIENCE",
    items: [
      {
        company: "BINUS",
        role: "Beelingua BINUS Mentor",
        period: "2026 — Present",
        description:
          "I support around 50 students as they complete Beelingua requirements before moving on to enrichment or internships. I answer questions, help them work through issues, and guide them when they get stuck.",
        tags: ["Communication", "English", "Teamwork", "Problem Solving", "Student Support"],
        photos: [],
      },
      {
        company: "BINUS",
        role: "Character Building Kewarganegaraan — Biopori & Environmental Awareness",
        period: "2025",
        description:
          "I helped create 20 biopore infiltration holes in Kelurahan Manyaran, Semarang Barat, and took part in community education about waste management and flooding. The activity was aligned with the local Semarang Bersih initiative.",
        tags: ["Teamwork", "Community Engagement", "Environmental Awareness"],
        photos: [],
      },
      {
        company: "BINUS",
        role: "Character Building Agama — Sunday School Attendance & Learning Book",
        period: "2025",
        description:
          "I helped create a learning and attendance book for around 50 Sunday School children. It included attendance and reward pages, Catholic prayers, space for Bible verses, and information about Bible figures.",
        tags: ["Creativity", "Teamwork", "Educational Content", "Community Engagement"],
        photos: [],
      },
      {
        company: "BINUS",
        role: "ST★RLIGHT",
        period: "2024 — 2025",
        description: "Member of BINUS Starlight Semarang",
        tags: ["Teamwork", "Performance", "Coordination", "Time Management"],
        photos: [],
      },
      {
        company: "BINUS",
        role: "Character Building Pancasila — Anti-Poverty & Anti-Bullying Awareness",
        period: "2024",
        description:
          "For a school outreach activity in Semarang, I helped prepare and present materials about poverty and anti-bullying. I also took part in the Q&A and spoke with students about the topics.",
        tags: ["Public Speaking", "Communication", "Presentation", "Teamwork"],
        photos: [],
      },
      {
        company: "BINUS First Year Program (FYP)",
        role: "Mangrove Planting — Pantai Tirang",
        period: "2024",
        description:
          "As part of FYP orientation, I joined other students in planting mangrove seedlings at Pantai Tirang, Semarang, as an environmental awareness and coastal protection activity.",
        tags: ["Teamwork", "Environmental Awareness", "Community Participation"],
        photos: [],
      },
      {
        company: "BINUS First Year Program (FYP)",
        role: "Anti-Bullying Awareness — Elementary School Outreach",
        period: "2024",
        description:
          "I helped introduce anti-bullying to elementary school students in Semarang through conversation, educational activities, and a short quiz to revisit the topic.",
        tags: ["Communication", "Public Speaking", "Teamwork", "Social Awareness"],
        photos: [],
      },
      {
        company: "BINUS First Year Program (FYP)",
        role: "Pantai Tirang Beach Cleanup",
        period: "2024",
        description:
          "I joined a beach cleanup at Pantai Tirang, Semarang, collecting waste along the beach as part of an environmental awareness activity.",
        tags: ["Teamwork", "Environmental Awareness", "Community Participation"],
        photos: [],
      },
    ],
  },
  {
    title: "OUTSIDE BINUS",
    items: [
      {
        company: "PT Paragon Innovation and Technology",
        role: "Freelance Emina Brand Promoter",
        period: "2026",
        description:
          "At major beauty events, including Jakarta X Beauty, I explained Emina products, recommended options based on customers’ needs, and helped during purchases while supporting event sales targets.",
        tags: ["Communication", "Sales", "Customer Service", "Teamwork"],
        photos: [],
      },
      {
        company: "Allobank Festival",
        role: "Freelance Torriden Brand Promoter",
        period: "2026",
        description:
          "At Allobank Festival, I welcomed visitors to the Torriden booth, introduced its skincare products, answered questions, and suggested options based on what customers were looking for while supporting event sales activities.",
        tags: ["Customer Engagement", "Communication", "Sales", "Product Knowledge"],
        photos: [],
      },
      {
        company: "PetFest",
        role: "Freelance Dettol Brand Promoter",
        period: "2026",
        description:
          "At PetFest, I approached visitors to introduce Dettol products, explain their benefits, answer questions, and support product recommendations and sales activities.",
        tags: ["Communication", "Customer Engagement", "Sales", "Teamwork"],
        photos: [],
      },
      {
        company: "Millennium Luxuries · BrideStory",
        role: "Freelance Event Promoter / Usher",
        period: "2026",
        description:
          "At BrideStory events, I welcomed visitors and introduced Millennium Luxuries jewelry. I answered questions and assisted potential customers, helping keep their visit comfortable while supporting the brand’s event activities.",
        tags: ["Customer Service", "Communication", "Product Presentation", "Teamwork"],
        photos: [],
      },
      {
        company: "UBS Gold",
        role: "Freelance UBS Gold Usher",
        period: "2025 — 2026",
        description:
          "At UBS Gold events, I approached and engaged visitors, shared product information, answered questions, and helped visitors as they explored the brand’s offerings.",
        tags: ["Customer Engagement", "Communication", "Customer Service", "Teamwork"],
        photos: [],
      },
      {
        company: "Topeng The Event Organizer · Semarang",
        role: "Crew Event",
        period: "2024 — 2026",
        description:
          "I supported exhibitions, weddings, corporate events, and other activities. Depending on the event, I helped manage event flow, followed the rundown, assisted guests, coordinated with crew members, and adapted when plans changed.",
        tags: ["Event Coordination", "Teamwork", "Communication", "Adaptability"],
        photos: [],
      },
      {
        company: "Semarang X Beauty",
        role: "Freelance BLP Beauty Brand Promoter",
        period: "2024",
        description:
          "At Semarang X Beauty, I engaged visitors at the BLP Beauty booth, introduced products and their features, answered questions, and helped attendees explore options that suited them while supporting sales activities.",
        tags: ["Customer Engagement", "Product Knowledge", "Communication", "Sales Support"],
        photos: [],
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    description: "Languages I use to build interfaces, applications, and project logic.",
    items: [
      { name: "Python", description: "Used for machine learning, deep learning, NLP, computer vision, and data processing." },
      { name: "JavaScript", description: "Used to build interactive web interfaces." },
      { name: "TypeScript", description: "Used in web projects with typed JavaScript." },
      { name: "PHP", description: "Used for web application development." },
      { name: "HTML", description: "Used to structure web content." },
      { name: "CSS", description: "Used to style responsive web interfaces." },
    ],
  },
  {
    title: "Libraries",
    description: "Libraries I use for data work, machine learning, and visual analysis.",
    items: [
      { name: "TensorFlow", description: "Used for deep learning model work." },
      { name: "Keras", description: "Used to build deep learning models." },
      { name: "OpenCV", description: "Used for computer vision and image or video processing." },
      { name: "scikit-learn", description: "Used for machine learning models and evaluation." },
      { name: "Pandas", description: "Used to work with structured data." },
      { name: "NumPy", description: "Used for numerical computing with arrays." },
      { name: "Matplotlib", description: "Used to create data visualizations." },
    ],
  },
  {
    title: "Frameworks",
    description: "Frameworks and platforms for web applications and project interfaces.",
    items: [
      { name: "Next.js", description: "Used for frontend and web application development." },
      { name: "Laravel", description: "Used for backend and web application development." },
      { name: "Streamlit", description: "Used to build interactive interfaces for machine learning projects." },
      { name: "React", description: "Used to build component-based user interfaces." },
    ],
  },
  {
    title: "Tools",
    description: "Tools I use to create, manage, and present my work.",
    items: [
      { name: "Git", description: "Used for version control." },
      { name: "GitHub", description: "Used to host and manage code repositories." },
      { name: "VS Code", description: "My code editor for development work." },
      { name: "Figma", description: "Used to explore and design interface ideas." },
      { name: "Canva", description: "Used to create visual materials." },
      { name: "Jupyter Notebook", description: "Used for interactive coding and data exploration." },
    ],
  },
  {
    title: "Languages",
    description: "Languages I use and continue to learn.",
    items: [
      { name: "Indonesian", status: "Native" },
      { name: "English", status: "Active" },
      { name: "Mandarin", status: "Learning" },
    ],
  },
  {
    title: "Soft Skills",
    description: "People and work skills developed through study, mentoring, and event work.",
    items: [
      { name: "Communication", description: "Used in presentations, mentoring, and customer-facing work." },
      { name: "Public Speaking", description: "Practiced through presentations and school outreach." },
      { name: "Teamwork", description: "Built through university projects, events, and organization activities." },
      { name: "Problem Solving", description: "Applied when working through project and student-support issues." },
      { name: "Adaptability", description: "Developed across changing project, event, and customer situations." },
      { name: "Time Management", description: "Used to balance responsibilities and scheduled activities." },
      { name: "Leadership", description: "Practiced when coordinating tasks and supporting event flow." },
      { name: "Customer Engagement", description: "Developed through direct conversations with event visitors." },
      { name: "Presentation", description: "Used to explain ideas and information to an audience." },
      { name: "Coordination", description: "Used when preparing activities with students and event teams." },
    ],
  },
];

export const contactItems = [
  {
    label: "Email",
    links: [
      { value: "maureencalista437@gmail.com", href: "mailto:maureencalista437@gmail.com" },
      { value: "maureen.surjo@binus.ac.id", href: "mailto:maureen.surjo@binus.ac.id" },
    ],
  },
  { label: "LinkedIn", links: [{ value: "maureencalistas", href: "https://www.linkedin.com/in/maureencalistas" }] },
  { label: "GitHub", links: [{ value: "maureenclsta", href: "https://github.com/maureenclsta" }] },
];

export const socialItems = [
  { label: "Instagram", value: "maureenclsta", href: "https://www.instagram.com/maureenclsta" },
  { label: "LINE", value: "maureenclsta", href: "https://line.me/ti/p/~maureenclsta" },
  { label: "TikTok", value: "intercalistart", href: "https://www.tiktok.com/@intercalistart" },
];

export const profilePhotos: { src: string; alt: string }[] = [
  { src: "/images/maureen.jpg", alt: "Maureen" },
  { src: "/images/maureen2.jpg", alt: "Maureen" },
  { src: "/images/maureen3.jpg", alt: "Maureen" },
];
export const contactPhotos: { src: string; alt: string }[] = [];

export const profileStats = [
  { label: "Semester", value: "5" },
  { label: "Focus", value: "AI" },
  { label: "Interest", value: "Web" },
];
