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
  /**
   * Static thumbnail shown on the Projects card. Optional — when omitted, the
   * card falls back to `media`. Use this to show a preview image on the card
   * while `media` plays a video on the detail page.
   */
  thumbnail?: {
    type: "image" | "video";
    src: string | null;
    alt: string;
  };
  /** Main media shown on the project detail page (image or autoplay video). */
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
  /**
   * Path to the image under /public. Leave as `null` to show the styled
   * placeholder. To add a real photo later, drop the file in
   * `public/images/experience/` and set this to e.g.
   * "/images/experience/beelingua-mentor-1.jpg".
   */
  src: string | null;
  alt: string;
};

export type ExperienceItem = {
  /** Stable identifier, also used to name documentation image files. */
  slug: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  /** Bullet points shown when the card is expanded. Easy to edit here. */
  responsibilities: string[];
  /** Exactly 3 documentation photos. `src: null` renders a placeholder. */
  documentation: ExperiencePhoto[];
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
    thumbnail: { type: "image", src: "/images/projects/snapdriver.jpg", alt: "SnapDriver real-time driver drowsiness detection preview" },
    media: { type: "video", src: "/videos/projects/snapdriver.mp4", alt: "SnapDriver real-time driver drowsiness detection demo" },
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

/**
 * Builds the 3 documentation photo slots for an experience.
 * All start as placeholders (`src: null`). To show a real photo later, drop
 * files in `public/images/experience/` and set `src` here, e.g.:
 *   docPhotos("beelingua-mentor") -> replace null with
 *   "/images/experience/beelingua-mentor-1.jpg" (and -2, -3).
 * Expected filenames: `${slug}-1`, `${slug}-2`, `${slug}-3`.
 */
const docPhotos = (slug: string, label: string): ExperiencePhoto[] =>
  [1, 2, 3].map((n) => ({
    // Swap `null` for `/images/experience/${slug}-${n}.jpg` once uploaded.
    src: null,
    alt: `${label} — documentation photo ${n}`,
  }));

export const experienceGroups: ExperienceGroup[] = [
  {
    title: "BINUS EXPERIENCE",
    items: [
      {
        slug: "beelingua-mentor",
        company: "BINUS",
        role: "Beelingua BINUS Mentor",
        period: "2026 — Present",
        description:
          "I support around 50 students as they complete Beelingua requirements before moving on to enrichment or internships. I answer questions, help them work through issues, and guide them when they get stuck.",
        tags: ["Communication", "English", "Teamwork", "Problem Solving", "Student Support"],
        responsibilities: [
          "Guide around 50 students through their Beelingua language requirements.",
          "Answer questions and help students work through issues as they arise.",
          "Support students who feel stuck so they can progress to enrichment or internships.",
        ],
        documentation: docPhotos("beelingua-mentor", "Beelingua BINUS Mentor"),
      },
      {
        slug: "cb-kewarganegaraan-biopori",
        company: "BINUS",
        role: "Character Building Kewarganegaraan — Biopori & Environmental Awareness",
        period: "2025",
        description:
          "I helped create 20 biopore infiltration holes in Kelurahan Manyaran, Semarang Barat, and took part in community education about waste management and flooding. The activity was aligned with the local Semarang Bersih initiative.",
        tags: ["Teamwork", "Community Engagement", "Environmental Awareness"],
        responsibilities: [
          "Helped create 20 biopore infiltration holes in Kelurahan Manyaran, Semarang Barat.",
          "Took part in community education on waste management and flooding prevention.",
          "Supported the activity in line with the local Semarang Bersih initiative.",
        ],
        documentation: docPhotos("cb-kewarganegaraan-biopori", "Biopori & Environmental Awareness"),
      },
      {
        slug: "cb-agama-sunday-school",
        company: "BINUS",
        role: "Character Building Agama — Sunday School Attendance & Learning Book",
        period: "2025",
        description:
          "I helped create a learning and attendance book for around 50 Sunday School children. It included attendance and reward pages, Catholic prayers, space for Bible verses, and information about Bible figures.",
        tags: ["Creativity", "Teamwork", "Educational Content", "Community Engagement"],
        responsibilities: [
          "Helped design a learning and attendance book for around 50 Sunday School children.",
          "Prepared attendance and reward pages, prayers, and space for Bible verses.",
          "Compiled information about Bible figures for the learning material.",
        ],
        documentation: docPhotos("cb-agama-sunday-school", "Sunday School Learning Book"),
      },
      {
        slug: "starlight",
        company: "BINUS",
        role: "ST★RLIGHT",
        period: "2024 — 2025",
        description: "Member of BINUS Starlight Semarang",
        tags: ["Teamwork", "Performance", "Coordination", "Time Management"],
        responsibilities: [
          "Took part in BINUS Starlight Semarang as an active member.",
          "Coordinated with the team during rehearsals and performances.",
          "Managed time to balance activities alongside academic responsibilities.",
        ],
        documentation: docPhotos("starlight", "BINUS Starlight"),
      },
      {
        slug: "cb-pancasila-anti-poverty",
        company: "BINUS",
        role: "Character Building Pancasila — Anti-Poverty & Anti-Bullying Awareness",
        period: "2024",
        description:
          "For a school outreach activity in Semarang, I helped prepare and present materials about poverty and anti-bullying. I also took part in the Q&A and spoke with students about the topics.",
        tags: ["Public Speaking", "Communication", "Presentation", "Teamwork"],
        responsibilities: [
          "Helped prepare outreach materials on poverty and anti-bullying.",
          "Presented the topics to students during a school outreach activity in Semarang.",
          "Took part in the Q&A and discussed the topics directly with students.",
        ],
        documentation: docPhotos("cb-pancasila-anti-poverty", "Anti-Poverty & Anti-Bullying Awareness"),
      },
      {
        slug: "fyp-mangrove-planting",
        company: "BINUS First Year Program (FYP)",
        role: "Mangrove Planting — Pantai Tirang",
        period: "2024",
        description:
          "As part of FYP orientation, I joined other students in planting mangrove seedlings at Pantai Tirang, Semarang, as an environmental awareness and coastal protection activity.",
        tags: ["Teamwork", "Environmental Awareness", "Community Participation"],
        responsibilities: [
          "Planted mangrove seedlings at Pantai Tirang, Semarang, with fellow students.",
          "Joined the activity as part of FYP orientation.",
          "Supported coastal protection and environmental awareness goals.",
        ],
        documentation: docPhotos("fyp-mangrove-planting", "Mangrove Planting"),
      },
      {
        slug: "fyp-anti-bullying-outreach",
        company: "BINUS First Year Program (FYP)",
        role: "Anti-Bullying Awareness — Elementary School Outreach",
        period: "2024",
        description:
          "I helped introduce anti-bullying to elementary school students in Semarang through conversation, educational activities, and a short quiz to revisit the topic.",
        tags: ["Communication", "Public Speaking", "Teamwork", "Social Awareness"],
        responsibilities: [
          "Introduced anti-bullying topics to elementary school students in Semarang.",
          "Led conversations and educational activities to explain the topic.",
          "Ran a short quiz to help students revisit what they learned.",
        ],
        documentation: docPhotos("fyp-anti-bullying-outreach", "Anti-Bullying Outreach"),
      },
      {
        slug: "fyp-beach-cleanup",
        company: "BINUS First Year Program (FYP)",
        role: "Pantai Tirang Beach Cleanup",
        period: "2024",
        description:
          "I joined a beach cleanup at Pantai Tirang, Semarang, collecting waste along the beach as part of an environmental awareness activity.",
        tags: ["Teamwork", "Environmental Awareness", "Community Participation"],
        responsibilities: [
          "Collected waste along Pantai Tirang, Semarang, during a beach cleanup.",
          "Worked together with other students to cover the cleanup area.",
          "Took part as an environmental awareness activity.",
        ],
        documentation: docPhotos("fyp-beach-cleanup", "Pantai Tirang Beach Cleanup"),
      },
    ],
  },
  {
    title: "OUTSIDE BINUS",
    items: [
      {
        slug: "emina-brand-promoter",
        company: "PT Paragon Innovation and Technology",
        role: "Freelance Emina Brand Promoter",
        period: "2026",
        description:
          "At major beauty events, including Jakarta X Beauty, I explained Emina products, recommended options based on customers’ needs, and helped during purchases while supporting event sales targets.",
        tags: ["Communication", "Sales", "Customer Service", "Teamwork"],
        responsibilities: [
          "Explained Emina products to visitors at major beauty events such as Jakarta X Beauty.",
          "Recommended options based on each customer's needs.",
          "Assisted during purchases while supporting event sales targets.",
        ],
        documentation: docPhotos("emina-brand-promoter", "Emina Brand Promoter"),
      },
      {
        slug: "torriden-brand-promoter",
        company: "Allobank Festival",
        role: "Freelance Torriden Brand Promoter",
        period: "2026",
        description:
          "At Allobank Festival, I welcomed visitors to the Torriden booth, introduced its skincare products, answered questions, and suggested options based on what customers were looking for while supporting event sales activities.",
        tags: ["Customer Engagement", "Communication", "Sales", "Product Knowledge"],
        responsibilities: [
          "Welcomed visitors to the Torriden booth at Allobank Festival.",
          "Introduced skincare products and answered visitor questions.",
          "Suggested suitable options while supporting event sales activities.",
        ],
        documentation: docPhotos("torriden-brand-promoter", "Torriden Brand Promoter"),
      },
      {
        slug: "dettol-brand-promoter",
        company: "PetFest",
        role: "Freelance Dettol Brand Promoter",
        period: "2026",
        description:
          "At PetFest, I approached visitors to introduce Dettol products, explain their benefits, answer questions, and support product recommendations and sales activities.",
        tags: ["Communication", "Customer Engagement", "Sales", "Teamwork"],
        responsibilities: [
          "Approached visitors at PetFest to introduce Dettol products.",
          "Explained product benefits and answered questions.",
          "Supported product recommendations and sales activities.",
        ],
        documentation: docPhotos("dettol-brand-promoter", "Dettol Brand Promoter"),
      },
      {
        slug: "millennium-luxuries-usher",
        company: "Millennium Luxuries · BrideStory",
        role: "Freelance Event Promoter / Usher",
        period: "2026",
        description:
          "At BrideStory events, I welcomed visitors and introduced Millennium Luxuries jewelry. I answered questions and assisted potential customers, helping keep their visit comfortable while supporting the brand’s event activities.",
        tags: ["Customer Service", "Communication", "Product Presentation", "Teamwork"],
        responsibilities: [
          "Welcomed visitors and introduced Millennium Luxuries jewelry at BrideStory events.",
          "Answered questions and assisted potential customers.",
          "Helped keep visits comfortable while supporting the brand's event activities.",
        ],
        documentation: docPhotos("millennium-luxuries-usher", "Millennium Luxuries Usher"),
      },
      {
        slug: "ubs-gold-usher",
        company: "UBS Gold",
        role: "Freelance UBS Gold Usher",
        period: "2025 — 2026",
        description:
          "At UBS Gold events, I approached and engaged visitors, shared product information, answered questions, and helped visitors as they explored the brand’s offerings.",
        tags: ["Customer Engagement", "Communication", "Customer Service", "Teamwork"],
        responsibilities: [
          "Approached and engaged visitors at UBS Gold events.",
          "Shared product information and answered questions.",
          "Helped visitors as they explored the brand's offerings.",
        ],
        documentation: docPhotos("ubs-gold-usher", "UBS Gold Usher"),
      },
      {
        slug: "topeng-event-crew",
        company: "Topeng The Event Organizer · Semarang",
        role: "Crew Event",
        period: "2024 — 2026",
        description:
          "I supported exhibitions, weddings, corporate events, and other activities. Depending on the event, I helped manage event flow, followed the rundown, assisted guests, coordinated with crew members, and adapted when plans changed.",
        tags: ["Event Coordination", "Teamwork", "Communication", "Adaptability"],
        responsibilities: [
          "Supported exhibitions, weddings, corporate events, and other activities.",
          "Helped manage event flow and followed the rundown.",
          "Assisted guests, coordinated with crew, and adapted when plans changed.",
        ],
        documentation: docPhotos("topeng-event-crew", "Topeng Event Crew"),
      },
      {
        slug: "blp-beauty-brand-promoter",
        company: "Semarang X Beauty",
        role: "Freelance BLP Beauty Brand Promoter",
        period: "2024",
        description:
          "At Semarang X Beauty, I engaged visitors at the BLP Beauty booth, introduced products and their features, answered questions, and helped attendees explore options that suited them while supporting sales activities.",
        tags: ["Customer Engagement", "Product Knowledge", "Communication", "Sales Support"],
        responsibilities: [
          "Engaged visitors at the BLP Beauty booth during Semarang X Beauty.",
          "Introduced products and their features and answered questions.",
          "Helped attendees explore suitable options while supporting sales activities.",
        ],
        documentation: docPhotos("blp-beauty-brand-promoter", "BLP Beauty Brand Promoter"),
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

// Home page hero photos. Drop the files in `public/images/profile/`, then
// replace each `src: null` with its path (e.g. "/images/profile/maureen-1.jpg").
// While `src` is null the hero shows a styled placeholder — nothing breaks.
export const profilePhotos: { src: string | null; alt: string }[] = [
  { src: null, alt: "Maureen Calista Surjo" }, // -> /images/profile/maureen-1.jpg
  { src: null, alt: "Maureen Calista Surjo" }, // -> /images/profile/maureen-2.jpg
  { src: null, alt: "Maureen Calista Surjo" }, // -> /images/profile/maureen-3.jpg
];
export const contactPhotos: { src: string; alt: string }[] = [];

export const profileStats = [
  { label: "Semester", value: "5" },
  { label: "Focus", value: "AI" },
  { label: "Interest", value: "Web" },
];
