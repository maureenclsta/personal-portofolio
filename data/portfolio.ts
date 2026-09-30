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
  /** Optional live app / demo link. Shown as a "View Demo App" button. */
  demoUrl?: string;
  /** Supports multiple paragraphs when separated by a blank line ("\n\n"). */
  whyMadeThis: string | null;
  sdgs: string[];
  /** Optional richer SDG block (bold title + description) shown when present. */
  sdgInfo?: { title: string; description: string };
  /**
   * Simple chips (string[]), a flat detailed list (name + optional
   * description), or grouped lists ({ group, items }[]) for categorized tools.
   */
  technologies:
    | string[]
    | { name: string; description?: string }[]
    | { group: string; items: { name: string; description?: string }[] }[];
  /** Bullet points. Inline **bold** markers are rendered as bold text. */
  strengths: string[];
  /** Single paragraph (string) or a bullet list (string[]). */
  limitations: string | string[] | null;
  /** Simple step chips (string[]) or detailed steps (title + description). */
  process?: string[] | { title: string; description: string }[];
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
      "AgriYield is a web-based machine learning application that predicts paddy yield from agricultural cultivation data such as land characteristics, seed usage, fertilizer, nutrients, crop protection inputs, and other relevant farming features. Users can enter their cultivation data through an interactive Streamlit interface and receive an estimated total harvest in kilograms.\n\nThe application uses a machine learning regression model trained on historical paddy cultivation data and also provides a productivity ratio in kilograms per hectare, productivity classification, and rule-based cultivation recommendations based on the user's input.",
    thumbnail: { type: "image", src: "/images/projects/paddieYield.jpg", alt: "AgriYield paddy yield prediction preview" },
    media: { type: "video", src: null, alt: "AgriYield project media" },
    metrics: [
      { label: "R²", value: "0.99" },
      { label: "MAE", value: "657.62 Kg" },
    ],
    bestModel: "Random Forest",
    github: "https://github.com/maureenclsta/PaddyYield---Machine-Learning.git",
    whyMadeThis:
      "I developed AgriYield to explore how machine learning can be applied to a practical agricultural problem: estimating crop yield from measurable cultivation factors. Paddy yield can be influenced by many factors, including land area, seed usage, fertilization, and crop protection, making it difficult to estimate accurately through simple manual calculations.\n\nThrough this project, I wanted to build a complete machine learning application rather than only train a model. The project allowed me to work on data preprocessing, feature selection, model comparison, hyperparameter tuning, regression evaluation, model serialization, and deployment through an interactive web interface.",
    sdgs: [],
    sdgInfo: {
      title: "SDG 2 — Zero Hunger",
      description:
        "AgriYield is related to sustainable agriculture and food production by providing a data-driven approach to estimating paddy yield. By using agricultural cultivation data to estimate expected harvest output, the system can serve as a supporting tool for understanding crop productivity and agricultural planning.\n\nThe project is intended as a machine learning-based estimation tool and should not be considered a replacement for professional agricultural expertise or field-based assessment.",
    },
    technologies: [
      {
        group: "Programming Language",
        items: [{ name: "Python" }],
      },
      {
        group: "Framework & Libraries",
        items: [
          { name: "Streamlit" },
          { name: "Pandas" },
          { name: "NumPy" },
          { name: "Scikit-learn" },
          { name: "Joblib" },
          { name: "Pillow" },
        ],
      },
      {
        group: "Machine Learning",
        items: [
          { name: "RandomForestRegressor" },
          { name: "KNeighborsRegressor" },
          { name: "LinearRegression" },
          { name: "GridSearchCV" },
          { name: "KFold" },
          { name: "StandardScaler" },
        ],
      },
      {
        group: "Development & Deployment",
        items: [
          { name: "Jupyter Notebook" },
          { name: "Git" },
          { name: "GitHub" },
          { name: "Streamlit Community Cloud" },
        ],
      },
    ],
    strengths: [
      "Accepts **multiple agricultural inputs** covering land characteristics, seed usage, fertilization, nutrients, and crop protection.",
      "Uses an **Optimized Random Forest Regressor** trained on historical paddy cultivation data.",
      "Applies **GridSearchCV with 5-fold KFold cross-validation** for model hyperparameter tuning.",
      "Provides an estimated **total paddy yield in kilograms**.",
      "Calculates **productivity in kilograms per hectare** based on the predicted yield and land area.",
      "Automatically classifies productivity into **Low, Medium, or High** based on the yield-per-hectare ratio.",
      "Provides **rule-based cultivation recommendations** based on the entered farming inputs.",
      "Provides an interactive and user-friendly **Streamlit web interface**.",
      "Can be used as a simple demonstration of how machine learning regression can be integrated into an agricultural application.",
    ],
    limitations: [
      "Prediction accuracy depends on the quality and representativeness of the historical agricultural dataset used to train the model.",
      "The model provides an estimate based on the available input features and cannot account for every real-world factor affecting paddy yield.",
      "Weather, soil conditions, pest outbreaks, irrigation, farming practices, and other environmental factors may vary between locations and seasons.",
      "Predictions should be interpreted as data-driven estimates, not guaranteed harvest results.",
      "The system is intended as an academic and experimental machine learning application and should not replace professional agricultural assessment.",
      "Model performance on new farming conditions may differ from the reported evaluation results if those conditions are significantly different from the training data.",
    ],
  },
  {
    slug: "buginator",
    title: "Buginator",
    subtitle: "GitHub Issue Severity Classification Using NLP",
    semester: "Semester 4",
    period: "February 2026 — July 2026",
    categories: ["Natural Language Processing", "Machine Learning", "Web Application"],
    overview:
      "Buginator is a web-based NLP application that classifies GitHub issue reports as **Critical** or **Non-Critical**. Users enter an issue description and receive the predicted severity and classification probability through an interactive Streamlit interface.\n\nThe system uses classical machine learning with TF-IDF text features and compares three classification models: Logistic Regression, Multinomial Naive Bayes, and Support Vector Machine (SVM). The application also provides model comparison, data exploration, preprocessing visualization, feature extraction analysis, and evaluation results.",
    thumbnail: { type: "image", src: "/images/projects/Buginator.jpg", alt: "Buginator GitHub issue severity classification preview" },
    media: { type: "image", src: "/images/projects/Buginator.jpg", alt: "Buginator GitHub issue severity classification preview" },
    demoUrl: "https://bugclassifier.streamlit.app/",
    metrics: [
      { label: "Accuracy", value: "93.74%" },
      { label: "F1-score", value: "0.94" },
    ],
    bestModel: "SVM",
    github: "https://github.com/maureenclsta/Bug-Severity-Classification---NLP.git",
    whyMadeThis:
      "I developed Buginator to explore how Natural Language Processing can be applied to a practical software engineering problem: identifying the severity of GitHub issue reports. GitHub issues are often written as free-text descriptions, making it difficult to quickly determine which reports may require more urgent attention.\n\nThrough this project, I wanted to build a complete NLP pipeline rather than only train a classification model. The project allowed me to work with text preprocessing, label construction, exploratory data analysis, TF-IDF feature extraction, model training and tuning, evaluation, and deployment through an interactive Streamlit application.",
    sdgs: [],
    sdgInfo: {
      title: "SDG 9 — Industry, Innovation and Infrastructure",
      description:
        "Buginator relates to SDG 9 by applying Natural Language Processing and machine learning to support software development workflows. The system demonstrates how text classification can be used to assist with issue triage and organize software maintenance tasks more efficiently.",
    },
    technologies: [
      {
        group: "Programming Language",
        items: [{ name: "Python" }],
      },
      {
        group: "Framework & Libraries",
        items: [
          { name: "Streamlit" },
          { name: "Scikit-learn" },
          { name: "NLTK" },
          { name: "Pandas" },
          { name: "NumPy" },
        ],
      },
      {
        group: "Natural Language Processing",
        items: [
          { name: "TF-IDF" },
          { name: "CountVectorizer" },
          { name: "Stopword Removal" },
          { name: "Lemmatization" },
        ],
      },
      {
        group: "Machine Learning",
        items: [
          { name: "Logistic Regression" },
          { name: "Multinomial Naive Bayes" },
          { name: "LinearSVC" },
          { name: "Grid Search" },
        ],
      },
      {
        group: "Development & Deployment",
        items: [
          { name: "Jupyter Notebook" },
          { name: "Git" },
          { name: "GitHub" },
          { name: "Streamlit Community Cloud" },
        ],
      },
    ],
    strengths: [
      "Compares three classical NLP classification models: Logistic Regression, Multinomial Naive Bayes, and SVM.",
      "Uses TF-IDF feature extraction for transforming issue descriptions into numerical text features.",
      "Provides both severity classification and classification probability for supported models.",
      "Includes a preprocessing pipeline with text cleaning, stopword removal, and lemmatization.",
      "Uses hyperparameter tuning to improve model performance.",
      "Includes an interactive Data Explorer and EDA dashboard.",
      "Provides model evaluation through accuracy, F1-score, confusion matrix, learning curve, and classification reports.",
      "Deployed as an interactive Streamlit web application.",
    ],
    limitations: [
      "The system only predicts two severity categories: Critical and Non-Critical.",
      "Predictions are based primarily on the text of the GitHub issue and do not incorporate additional GitHub metadata such as repository activity, comments, or existing labels.",
      "The model's performance depends on the quality and characteristics of the training dataset.",
      "The dataset contains class imbalance, with Critical reports representing the minority class.",
      "Different repositories and software domains may use different language patterns, which can affect model performance.",
      "The classification should be treated as a decision-support tool rather than a definitive assessment of bug severity.",
    ],
  },
  {
    slug: "kovera",
    title: "Kovera",
    subtitle: "Book Cover Authenticity Verification Using Feature Matching",
    semester: "Semester 4",
    period: "February 2026 — July 2026",
    categories: ["Computer Vision", "Image Processing"],
    overview:
      "Kovera is a computer vision system for checking book-cover authenticity through local image feature matching. It compares an uploaded book cover with a reference cover using ORB and SIFT feature descriptors, then combines their predictions through Confidence-Based Ensemble Voting to classify the cover as **authentic, suspicious, or counterfeit**.\n\nInstead of relying on OCR or deep learning, Kovera focuses on distinctive visual features within the book cover. The system uses feature matching and tuned thresholds to measure visual similarity between the query and reference images.",
    thumbnail: { type: "image", src: "/images/projects/kovera.jpg", alt: "Kovera book cover authenticity verification preview" },
    media: { type: "video", src: null, alt: "Kovera project media" },
    metrics: [
      { label: "Accuracy", value: "92.67%" },
      { label: "Counterfeit covers misclassified as authentic", value: "0" },
    ],
    github: "https://github.com/maureenclsta/Fake-Book-Detector---Computer-Vision.git",
    whyMadeThis:
      "I developed Kovera to explore how classical computer vision techniques can be applied to a practical image authenticity problem. Book covers can be visually modified through cropping, distortion, compression, watermarks, and other manipulations, so comparing distinctive visual features can help identify whether an uploaded cover corresponds to its claimed reference.\n\nThis project also allowed me to gain hands-on experience with ORB and SIFT feature detection, descriptor matching, Lowe's Ratio Test, threshold optimization, ensemble decision-making, and computer vision evaluation without relying on deep learning.",
    sdgs: [],
    sdgInfo: {
      title: "SDG 9 — Industry, Innovation and Infrastructure",
      description:
        "Kovera relates to SDG 9 by exploring the use of computer vision technology to support image-based verification and automated inspection. The project demonstrates how classical computer vision techniques can be applied to a practical verification problem without requiring a deep learning model.",
    },
    technologies: [
      {
        group: "Programming Language",
        items: [{ name: "Python" }],
      },
      {
        group: "Computer Vision",
        items: [
          { name: "OpenCV" },
          { name: "ORB" },
          { name: "SIFT" },
          { name: "BFMatcher" },
          { name: "KNN Matching" },
          { name: "Lowe's Ratio Test" },
        ],
      },
      {
        group: "Data & Analysis",
        items: [{ name: "NumPy" }, { name: "Pandas" }, { name: "Scikit-learn" }],
      },
      {
        group: "Visualization",
        items: [{ name: "Matplotlib" }],
      },
      {
        group: "Development Environment",
        items: [{ name: "Jupyter Notebook" }],
      },
    ],
    strengths: [
      "Combines ORB and SIFT matching through Confidence-Based Ensemble Voting.",
      "Uses ORB for fast binary feature matching and SIFT for scale- and rotation-invariant feature detection.",
      "Uses BFMatcher with KNN matching and Lowe's Ratio Test to filter reliable feature correspondences.",
      "Uses grid search to optimize classification thresholds instead of relying on arbitrary fixed values.",
      "Classifies book covers into three categories: AUTHENTIC, SUSPICIOUS, and COUNTERFEIT.",
      "Uses a custom dataset containing 10 reference book covers with generated test and manipulated variations.",
      "Includes a complete evaluation pipeline with classification metrics, confusion matrix, and feature-match visualizations.",
    ],
    limitations: [
      "Performance can be affected by image quality, lighting, blur, compression, cropping, and viewpoint changes.",
      "The system depends on having sufficient distinctive visual features between the query and reference cover.",
      "The custom dataset contains only 10 reference book covers, so it may not represent the full variety of real-world book covers.",
      "Generated suspicious and counterfeit samples may not cover every type of real-world manipulation or counterfeit printing.",
      "The system focuses on visual similarity and does not verify physical printing quality, ISBN information, publisher records, or other non-visual authenticity indicators.",
      "The classification result should therefore be treated as an image-based assessment rather than definitive proof of physical book authenticity.",
    ],
  },
  {
    slug: "schola",
    title: "Schola",
    subtitle: "Integrated Scholarship Information System",
    semester: "Semester 4",
    period: "February 2026 — July 2026",
    categories: ["Software Engineering", "Web Application"],
    overview:
      "Schola is a full-stack web-based scholarship management system that brings scholarship discovery and application management into one platform. Students can browse and search scholarship opportunities, view requirements and benefits, submit applications and required documents, and track their application progress. Administrators can create and manage scholarship listings, review applicants and submitted documents, and update application statuses.",
    thumbnail: { type: "image", src: "/images/projects/schola.jpg", alt: "Schola scholarship management system preview" },
    media: { type: "image", src: "/images/projects/schola.jpg", alt: "Schola scholarship management system preview" },
    metrics: [],
    github: "https://github.com/maureenclsta/Schola---Software-Engineering.git",
    whyMadeThis:
      "I developed Schola to make the scholarship application process more organized and accessible by bringing scholarship information, applications, document submission, and progress tracking into one platform.\n\nThis project also allowed me to explore how a full-stack web application can support different user roles and workflows. I worked with authentication, role-based access control, database relationships, file validation, CRUD operations, and server-rendered web pages while building a system that addresses a practical educational administration problem.",
    sdgs: [],
    sdgInfo: {
      title: "SDG 4 — Quality Education",
      description:
        "Schola supports SDG 4 by helping students discover and manage scholarship opportunities that can provide access to educational funding. By centralizing scholarship information and simplifying the application process, the platform aims to make educational opportunities easier to navigate.",
    },
    technologies: [
      { name: "Programming Language", description: "Python" },
      { name: "Backend Framework", description: "Django" },
      { name: "Database", description: "SQLite" },
      { name: "Frontend", description: "HTML, CSS, Vanilla JavaScript" },
      { name: "Templating", description: "Django Template Language (DTL)" },
      { name: "Image & File Handling", description: "Pillow" },
      { name: "Design", description: "Figma" },
      { name: "Development Tools", description: "Git, GitHub" },
    ],
    strengths: [
      "Centralizes scholarship discovery, applications, document submission, and progress tracking.",
      "Provides separate workflows for students and scholarship administrators.",
      "Includes scholarship search and filtering by country and degree level.",
      "Supports application document uploads with file type and size validation.",
      "Prevents duplicate applications for the same scholarship.",
      "Provides application status tracking with Pending, Accepted, and Rejected states.",
      "Allows administrators to create, edit, delete, and manage their scholarship listings.",
      "Provides notifications for important application events.",
    ],
    limitations: [
      "Scholarship information depends on administrators to keep listings, requirements, and deadlines up to date.",
      "The system does not automatically determine whether an applicant is eligible for a scholarship.",
      "The current Saved Scholarships feature is not fully connected to persistent database logic.",
      "The Resources Hub is currently scaffolded but does not yet have persistent resource data.",
      "The platform is designed as a scholarship management system and does not guarantee scholarship acceptance.",
      "SQLite is used as the default database, which is suitable for development and academic use but may need to be replaced with a more scalable database for larger deployments.",
    ],
  },
  {
    slug: "snapdriver",
    title: "SnapDriver",
    subtitle: "Real-Time Driver Drowsiness Detection System",
    semester: "Semester 3",
    period: "September 2025 — January 2026",
    categories: ["Artificial Intelligence", "Computer Vision", "Deep Learning"],
    overview:
      "SnapDrive AI is a real-time driver drowsiness monitoring system that uses webcam video, computer vision, and deep learning to analyze driver behavior. The system detects visual patterns such as yawning and talking and classifies the driver's current state into four categories: Normal, Yawning, Talking, and Yawning & Talking.\n\nWhen sustained drowsiness-related behavior is detected, the system can trigger an audio alarm and send an emergency notification through Telegram to designated contacts. It also provides a real-time alertness score and session history through a Streamlit-based monitoring dashboard.",
    thumbnail: { type: "image", src: "/images/projects/snapdriver.jpg", alt: "SnapDriver real-time driver drowsiness detection preview" },
    media: { type: "image", src: "/images/projects/snapdriver.jpg", alt: "SnapDriver real-time driver drowsiness detection preview" },
    metrics: [],
    github: "https://github.com/maureenclsta/SnapDrive.git",
    whyMadeThis:
      "This project was developed to explore how artificial intelligence and computer vision can be applied to a real-world road safety problem. Driver fatigue can affect attention and behavior while driving, so we explored how real-time visual monitoring could be used to recognize potential signs of drowsiness and provide timely alerts.\n\nThe project also provided hands-on experience with real-time video processing, computer vision, CNN-based feature extraction, LSTM temporal modeling, and integration with external notification services.",
    sdgs: [],
    sdgInfo: {
      title: "SDG 3 — Good Health and Well-being",
      description:
        "SnapDrive AI is related to road safety and aims to contribute to reducing risks associated with driver fatigue through real-time monitoring and alert mechanisms.",
    },
    technologies: [
      { name: "Python 3.9+", description: "Main programming language." },
      { name: "TensorFlow / Keras", description: "Deep learning model development and inference." },
      { name: "MobileNetV2", description: "Pre-trained CNN used for spatial feature extraction." },
      { name: "LSTM", description: "Temporal sequence modeling across consecutive video frames." },
      { name: "OpenCV", description: "Webcam processing, face detection, and image preprocessing." },
      { name: "Haar Cascade Classifier", description: "Face detection." },
      { name: "Streamlit", description: "Web application and real-time monitoring dashboard." },
      { name: "Plotly & Pandas", description: "Data visualization and session analytics." },
      { name: "Pygame Mixer", description: "Audio alarm playback." },
      { name: "Telegram Bot API / Requests", description: "Emergency notification delivery." },
      { name: "Python threading & queue", description: "Real-time video processing and pipeline management." },
    ],
    strengths: [
      "Combines **Computer Vision and Deep Learning** for real-time driver behavior monitoring.",
      "Uses a **MobileNetV2 + LSTM** architecture to capture both visual features and temporal patterns across video frames.",
      "Classifies driver behavior into **4 states:** Normal, Yawning, Talking, and Yawning & Talking.",
      "Uses **16 consecutive frames** for temporal analysis and a **5-frame smoothing window** to reduce prediction fluctuations.",
      "Provides a real-time **alertness score** through the monitoring dashboard.",
      "Includes an **audio alarm** for sustained drowsiness-related behavior.",
      "Integrates **Telegram notifications** for emergency alerts.",
      "Provides **analytics and session history** through interactive visualizations.",
    ],
    limitations: [
      "Detection performance depends on webcam quality, positioning, and the visibility of the driver's face.",
      "Changes in lighting conditions, camera angle, or partial face visibility may affect face detection and behavior classification.",
      "The system focuses on visible behaviors such as yawning and talking rather than directly measuring physiological indicators of fatigue.",
      "Real-time performance can vary depending on the computer's available processing resources.",
      "The detected behaviors are indicators used for monitoring and should not be treated as a definitive measurement of a driver's physical or mental condition.",
    ],
    process: [
      { title: "Webcam", description: "Captures the driver's face through a real-time webcam video stream." },
      {
        title: "Face Detection & Preprocessing",
        description:
          "OpenCV's Haar Cascade detects the driver's face. The detected face is resized to 96×96 pixels and normalized before being processed by the deep learning model.",
      },
      {
        title: "Behavior Analysis",
        description:
          "A pre-trained MobileNetV2 extracts visual features from individual frames. These features are then processed as a sequence of 16 consecutive frames.",
      },
      {
        title: "Drowsiness Analysis",
        description:
          "An LSTM analyzes the temporal information between frames and classifies the driver's behavior into Normal, Yawning, Talking, or Yawning & Talking. A 5-frame smoothing window is applied to reduce false positives.",
      },
      {
        title: "Alert & Notification",
        description:
          "When sustained drowsiness-related behavior is detected, the system can trigger an audio alarm and send a Telegram notification to designated emergency contacts.",
      },
    ],
  },
];

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
        documentation: [{ src: "/images/experience/beelingua.jpeg", alt: "Beelingua BINUS Mentor — documentation photo" }],
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
        documentation: [
          { src: "/images/experience/biopori-1.png", alt: "Biopori & Environmental Awareness — documentation photo 1" },
          { src: "/images/experience/biopori-2.jpg", alt: "Biopori & Environmental Awareness — documentation photo 2" },
          { src: "/images/experience/biopori-3.jpg", alt: "Biopori & Environmental Awareness — documentation photo 3" },
        ],
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
        documentation: [
          { src: "/images/experience/CbAgama-1.jpeg", alt: "Sunday School Learning Book — documentation photo 1" },
          { src: "/images/experience/CbAgama-2.jpeg", alt: "Sunday School Learning Book — documentation photo 2" },
        ],
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
        documentation: [
          { src: "/images/experience/starlight.jpeg", alt: "BINUS Starlight — documentation photo" },
        ],
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
        documentation: [
          { src: "/images/experience/pancasila-1.jpg", alt: "Anti-Poverty & Anti-Bullying Awareness — documentation photo 1" },
          { src: "/images/experience/pancasila-2.JPG", alt: "Anti-Poverty & Anti-Bullying Awareness — documentation photo 2" },
          { src: "/images/experience/pancasila-3.jpg", alt: "Anti-Poverty & Anti-Bullying Awareness — documentation photo 3" },
        ],
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
        documentation: [
          { src: "/images/experience/mangrove.jpeg", alt: "Mangrove Planting — documentation photo" },
        ],
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
        documentation: [
          { src: "/images/experience/antiBullying-1.jpg", alt: "Anti-Bullying Outreach — documentation photo 1" },
          { src: "/images/experience/antiBullying-2.jpg", alt: "Anti-Bullying Outreach — documentation photo 2" },
          { src: "/images/experience/antiBullying-3.jpg", alt: "Anti-Bullying Outreach — documentation photo 3" },
        ],
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
        documentation: [
          { src: "/images/experience/tirang-1.png", alt: "Pantai Tirang Beach Cleanup — documentation photo 1" },
          { src: "/images/experience/tirang-2.png", alt: "Pantai Tirang Beach Cleanup — documentation photo 2" },
        ],
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
        documentation: [
          { src: "/images/experience/emina-1.jpeg", alt: "Emina Brand Promoter — documentation photo 1" },
          { src: "/images/experience/emina-2.jpeg", alt: "Emina Brand Promoter — documentation photo 2" },
          { src: "/images/experience/emina-3.jpeg", alt: "Emina Brand Promoter — documentation photo 3" },
        ],
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
        documentation: [
          { src: "/images/experience/torriden.jpeg", alt: "Torriden Brand Promoter — documentation photo" },
        ],
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
        documentation: [
          { src: "/images/experience/dettol-1.jpeg", alt: "Dettol Brand Promoter — documentation photo 1" },
          { src: "/images/experience/dettol-2.png", alt: "Dettol Brand Promoter — documentation photo 2" },
        ],
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
        documentation: [
          { src: "/images/experience/millenium-1.jpeg", alt: "Millennium Luxuries Usher — documentation photo 1" },
          { src: "/images/experience/millenium-2.jpeg", alt: "Millennium Luxuries Usher — documentation photo 2" },
        ],
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
        documentation: [
          { src: "/images/experience/ubs-1.jpeg", alt: "UBS Gold Usher — documentation photo 1" },
          { src: "/images/experience/ubs-2.jpeg", alt: "UBS Gold Usher — documentation photo 2" },
        ],
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
        documentation: [
          { src: "/images/experience/crew-1.jpeg", alt: "Topeng Event Crew — documentation photo 1" },
          { src: "/images/experience/crew-2.jpeg", alt: "Topeng Event Crew — documentation photo 2" },
          { src: "/images/experience/crew-3.jpeg", alt: "Topeng Event Crew — documentation photo 3" },
        ],
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
        documentation: [
          { src: "/images/experience/blp.jpeg", alt: "BLP Beauty Brand Promoter — documentation photo" },
        ],
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
