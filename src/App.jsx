import { useState } from "react";
import "./App.css";
function TemplatePreview({ template, showOverlay = true, selectedTemplate, setSelectedTemplate }) {
  return (
    <div className={`template-preview preview-${template.id}`}>
      {/* YOUR 25 TEMPLATE PREVIEWS WILL GO HERE */}

      {showOverlay && (
        <div className="preview-overlay">
          <button
            type="button"
            onClick={() => setSelectedTemplate(template.id)}
          >
            {selectedTemplate === template.id
              ? "Selected ✓"
              : "Preview Template"}
          </button>
        </div>
      )}
    </div>
  );
}
function App() {
  const [isSignup, setIsSignup] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const [onboardingStep, setOnboardingStep] = useState(1);
  const [careerStage, setCareerStage] = useState("");
  const [field, setField] = useState("");
  const [interests, setInterests] = useState([]);
  const [goal, setGoal] = useState("");
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [templateSearch, setTemplateSearch] = useState("");
  const [templateCategory, setTemplateCategory] = useState("All");
  const templates = [
  {
    id: 1,
    name: "NOVA",
    designSystem: "Minimalism",
    category: "Minimal",
    description: "A refined, whitespace-driven portfolio focused on clarity and typography.",
    suitedFor: "Everyone • Students • Professionals",
    layout: "clean-grid",
    previewStyle: "minimal",
    accent: "cyan",
    sections: ["Hero", "About", "Skills", "Projects", "Experience", "Contact"],
  },

  {
    id: 2,
    name: "AURA",
    designSystem: "Luxury / Elegant",
    category: "Luxury",
    description: "A sophisticated personal-brand layout with premium typography and restrained detail.",
    suitedFor: "Professionals • Executives • Creatives",
    layout: "editorial-luxury",
    previewStyle: "luxury",
    accent: "aqua",
    sections: ["Hero", "About", "Experience", "Projects", "Achievements", "Contact"],
  },

  {
    id: 3,
    name: "CODEX",
    designSystem: "Futuristic",
    category: "Futuristic",
    description: "A technology-first portfolio with structured interfaces and digital visual language.",
    suitedFor: "Developers • Engineers • IT Professionals",
    layout: "tech-interface",
    previewStyle: "futuristic",
    accent: "blue",
    sections: ["Hero", "Tech Stack", "Projects", "Experience", "GitHub", "Contact"],
  },

  {
    id: 4,
    name: "EXECUTIVE",
    designSystem: "Corporate",
    category: "Corporate",
    description: "A structured professional presentation designed around credibility and experience.",
    suitedFor: "Managers • Business • Finance • HR",
    layout: "corporate",
    previewStyle: "corporate",
    accent: "steel",
    sections: ["Profile", "Experience", "Skills", "Education", "Achievements", "Contact"],
  },

  {
    id: 5,
    name: "CANVAS",
    designSystem: "Maximalism",
    category: "Maximalist",
    description: "An expressive visual composition combining bold typography, imagery and layered elements.",
    suitedFor: "Designers • Artists • Photographers • Creatives",
    layout: "asymmetric-canvas",
    previewStyle: "maximal",
    accent: "mint",
    sections: ["Hero", "About", "Selected Work", "Gallery", "Experience", "Contact"],
  },

  {
    id: 6,
    name: "PULSE",
    designSystem: "Neo-Brutalism",
    category: "Brutalist",
    description: "Bold blocks, strong borders and energetic typography built for high-impact personal brands.",
    suitedFor: "Sales • Marketing • Entrepreneurs",
    layout: "bold-blocks",
    previewStyle: "brutalist",
    accent: "sky",
    sections: ["Hero", "About", "Achievements", "Skills", "Projects", "Contact"],
  },

  {
    id: 7,
    name: "SOFTCORE",
    designSystem: "Neumorphism",
    category: "Neomorphic",
    description: "Soft raised surfaces and subtle inset shadows create a tactile digital workspace.",
    suitedFor: "Students • Professionals • Consultants",
    layout: "soft-dashboard",
    previewStyle: "neumorphic",
    accent: "cyan",
    sections: ["Profile", "About", "Skills", "Projects", "Journey", "Contact"],
  },

  {
    id: 8,
    name: "CRAFT",
    designSystem: "Skeuomorphism",
    category: "Tactile",
    description: "A physical-inspired interface using tactile controls, panels and material details.",
    suitedFor: "Designers • Creatives • Product Professionals",
    layout: "physical-interface",
    previewStyle: "skeuomorphic",
    accent: "aqua",
    sections: ["Desk", "About", "Work", "Skills", "Experience", "Contact"],
  },

  {
    id: 9,
    name: "MONO",
    designSystem: "Monochrome",
    category: "Monochrome",
    description: "A disciplined one-tone visual system where typography and structure do the talking.",
    suitedFor: "Developers • Writers • Consultants",
    layout: "monochrome-editorial",
    previewStyle: "monochrome",
    accent: "steel",
    sections: ["Intro", "About", "Work", "Writing", "Experience", "Contact"],
  },

  {
    id: 10,
    name: "VISION",
    designSystem: "Editorial",
    category: "Editorial",
    description: "A magazine-inspired portfolio combining strong headlines, imagery and storytelling.",
    suitedFor: "Photographers • Designers • Creatives",
    layout: "editorial",
    previewStyle: "editorial",
    accent: "aqua",
    sections: ["Cover", "Story", "Selected Work", "Gallery", "About", "Contact"],
  },

  {
    id: 11,
    name: "ASCEND",
    designSystem: "Swiss Grid",
    category: "Swiss",
    description: "A highly structured grid system built around precision, hierarchy and typography.",
    suitedFor: "Professionals • Managers • Graduates",
    layout: "swiss-grid",
    previewStyle: "swiss",
    accent: "mint",
    sections: ["Profile", "Experience", "Projects", "Skills", "Education", "Contact"],
  },

  {
    id: 12,
    name: "LAUNCH",
    designSystem: "Brutalism",
    category: "Brutalist",
    description: "Raw layouts, oversized typography, hard borders and unapologetic visual structure.",
    suitedFor: "Freshers • Students • Young Professionals",
    layout: "raw-brutalist",
    previewStyle: "brutal",
    accent: "sky",
    sections: ["Intro", "About", "Skills", "Projects", "Education", "Contact"],
  },

  {
    id: 13,
    name: "BUSINESS",
    designSystem: "Material Design",
    category: "Material",
    description: "A familiar professional interface built around elevation, hierarchy and practical navigation.",
    suitedFor: "Business • Management • Finance",
    layout: "material-dashboard",
    previewStyle: "material",
    accent: "blue",
    sections: ["Overview", "Experience", "Skills", "Projects", "Achievements", "Contact"],
  },

  {
    id: 14,
    name: "FREELANCE",
    designSystem: "Bento Grid",
    category: "Bento",
    description: "A modular portfolio built from flexible information blocks and service-focused sections.",
    suitedFor: "Freelancers • Consultants • Creators",
    layout: "bento",
    previewStyle: "bento",
    accent: "mint",
    sections: ["Intro", "Services", "Projects", "Testimonials", "About", "Contact"],
  },

  {
    id: 15,
    name: "TIMELINE",
    designSystem: "Editorial Timeline",
    category: "Timeline",
    description: "A chronological storytelling layout that turns your career journey into a visual narrative.",
    suitedFor: "Professionals • Graduates • Career Switchers",
    layout: "vertical-timeline",
    previewStyle: "timeline",
    accent: "aqua",
    sections: ["Journey", "Experience", "Education", "Milestones", "Skills", "Contact"],
  },

  {
    id: 16,
    name: "SPECTRUM",
    designSystem: "Glassmorphism",
    category: "Glass",
    description: "Layered translucent surfaces, blur and depth create a polished modern interface.",
    suitedFor: "Creatives • Designers • Personal Brands",
    layout: "glass-panels",
    previewStyle: "glass",
    accent: "sky",
    sections: ["Hero", "About", "Skills", "Projects", "Experience", "Contact"],
  },

  {
    id: 17,
    name: "GRID",
    designSystem: "Modular Bento",
    category: "Bento",
    description: "A flexible modular system where every part of your professional identity gets its own space.",
    suitedFor: "Developers • Designers • Digital Creators",
    layout: "modular-grid",
    previewStyle: "modular",
    accent: "cyan",
    sections: ["Profile", "Skills", "Projects", "Experience", "Achievements", "Contact"],
  },

  {
    id: 18,
    name: "FOCUS",
    designSystem: "Pure Minimalism",
    category: "Minimal",
    description: "A content-first experience designed to remove everything that distracts from your story.",
    suitedFor: "Writers • Consultants • Researchers",
    layout: "content-first",
    previewStyle: "focus",
    accent: "steel",
    sections: ["Introduction", "About", "Work", "Writing", "Experience", "Contact"],
  },

  {
    id: 19,
    name: "IMPACT",
    designSystem: "Maximalism",
    category: "Maximalist",
    description: "Large typography, layered visuals and bold composition designed around achievements.",
    suitedFor: "Sales • Marketing • Leaders • Entrepreneurs",
    layout: "impact-editorial",
    previewStyle: "impact",
    accent: "mint",
    sections: ["Statement", "Achievements", "Results", "Experience", "Projects", "Contact"],
  },

  {
    id: 20,
    name: "ORBIT",
    designSystem: "Cyber Futurism",
    category: "Cyber",
    description: "A futuristic digital interface inspired by technology dashboards and cyber environments.",
    suitedFor: "Developers • AI • Cybersecurity • Tech",
    layout: "cyber-interface",
    previewStyle: "cyber",
    accent: "aqua",
    sections: ["Command", "About", "Tech Stack", "Projects", "Systems", "Contact"],
  },

  {
    id: 21,
    name: "TECHFLOW",
    designSystem: "Glass + Futuristic",
    category: "Tech",
    description: "A high-tech portfolio combining glass surfaces, flowing navigation and digital depth.",
    suitedFor: "IT • Developers • Data • Engineers",
    layout: "tech-glass",
    previewStyle: "techglass",
    accent: "blue",
    sections: ["Hero", "Stack", "Projects", "Experience", "Certifications", "Contact"],
  },

  {
    id: 22,
    name: "PROFILE",
    designSystem: "Classic Swiss",
    category: "Classic",
    description: "A timeless professional structure with balanced typography and straightforward navigation.",
    suitedFor: "Everyone • Students • Professionals",
    layout: "classic-profile",
    previewStyle: "classic",
    accent: "cyan",
    sections: ["Profile", "About", "Experience", "Skills", "Education", "Contact"],
  },

  {
    id: 23,
    name: "SIGNATURE",
    designSystem: "Premium Luxury",
    category: "Luxury",
    description: "A refined personal-brand experience built around elegance, spacing and visual restraint.",
    suitedFor: "Executives • Entrepreneurs • Personal Brands",
    layout: "premium-brand",
    previewStyle: "signature",
    accent: "mint",
    sections: ["Signature", "Story", "Experience", "Selected Work", "Recognition", "Contact"],
  },

  {
    id: 24,
    name: "HORIZON",
    designSystem: "Organic / Fluid",
    category: "Organic",
    description: "Soft curves, flowing sections and natural movement create a human-centered experience.",
    suitedFor: "Creatives • Coaches • Personal Brands",
    layout: "organic-flow",
    previewStyle: "organic",
    accent: "sky",
    sections: ["Hero", "Story", "Services", "Work", "Journey", "Contact"],
  },

  {
    id: 25,
    name: "CLAY",
    designSystem: "Claymorphism",
    category: "Clay",
    description: "Soft dimensional surfaces and rounded forms create a playful but polished 3D interface.",
    suitedFor: "Students • Creatives • Young Professionals",
    layout: "clay-dashboard",
    previewStyle: "clay",
    accent: "aqua",
    sections: ["Profile", "About", "Skills", "Projects", "Achievements", "Contact"],
  },
];
  const templateCategories = [
  "All",
  "Minimal",
  "Luxury",
  "Futuristic",
  "Corporate",
  "Maximalist",
  "Brutalist",
  "Neomorphic",
  "Tactile",
  "Monochrome",
  "Editorial",
  "Swiss",
  "Material",
  "Bento",
  "Timeline",
  "Glass",
  "Cyber",
  "Tech",
  "Classic",
  "Organic",
  "Clay",
];
const recommendedTemplates = templates.filter((template) => {
  const text = (
    template.name +
    " " +
    template.designSystem +
    " " +
    template.category +
    " " +
    template.description +
    " " +
    template.suitedFor +
    " " +
    template.sections.join(" ")
  ).toLowerCase();

  const userProfile = (
    careerStage +
    " " +
    field +
    " " +
    interests.join(" ") +
    " " +
    goal
  ).toLowerCase();

  const keywords = userProfile.split(/\s+/);

  return keywords.some((keyword) =>
    keyword.length > 2 && text.includes(keyword)
  );
});
 

  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      templateCategory === "All" ||
      template.category === templateCategory;

    const searchText = templateSearch.toLowerCase();

    
      const matchesSearch =
        template.name.toLowerCase().includes(searchText) ||
        template.category.toLowerCase().includes(searchText) ||
        template.designSystem.toLowerCase().includes(searchText) ||
        template.layout.toLowerCase().includes(searchText) ||
        template.description.toLowerCase().includes(searchText) ||
        template.suitedFor.toLowerCase().includes(searchText) ||
        template.sections.some((section) =>
      section.toLowerCase().includes(searchText)
    );
    return matchesCategory && matchesSearch;
  });
  const careerOptions = [
    {
      icon: "🎓",
      title: "Student",
      description: "I'm currently studying and building my future.",
    },
    {
      icon: "🚀",
      title: "Fresher",
      description: "I'm starting my professional career.",
    },
    {
      icon: "💼",
      title: "Professional",
      description: "I have professional experience to showcase.",
    },
    {
      icon: "✨",
      title: "Freelancer",
      description: "I offer services and work with clients.",
    },
    {
      icon: "🌱",
      title: "Entrepreneur",
      description: "I'm building a business or personal brand.",
    },
  ];

  const fieldOptions = {
    Student: [
      ["💻", "IT & Software"],
      ["📊", "Business & Management"],
      ["💰", "Finance & Accounting"],
      ["📣", "Marketing & Sales"],
      ["🎨", "Design & Creative"],
      ["📈", "Data & Analytics"],
    ],

    Fresher: [
      ["💻", "IT & Software"],
      ["📊", "Business & Management"],
      ["💰", "Finance & Accounting"],
      ["📣", "Marketing & Sales"],
      ["🎨", "Design & Creative"],
      ["📈", "Data & Analytics"],
    ],

    Professional: [
      ["💻", "Technology"],
      ["💰", "Finance"],
      ["📣", "Marketing"],
      ["👥", "Human Resources"],
      ["⚙️", "Operations"],
      ["📊", "Management"],
    ],

    Freelancer: [
      ["💻", "Web Development"],
      ["🎨", "UI/UX Design"],
      ["✍️", "Content & Writing"],
      ["📣", "Digital Marketing"],
      ["📷", "Photography"],
      ["🧠", "Consulting"],
    ],

    Entrepreneur: [
      ["💻", "Technology"],
      ["🛒", "E-commerce"],
      ["💰", "Finance"],
      ["📣", "Marketing"],
      ["🧠", "Consulting"],
      ["🎨", "Creative Business"],
    ],
  };

  const interestOptions = {
    "IT & Software": [
      ["💻", "Full Stack Development"],
      ["🌐", "Web Development"],
      ["🤖", "AI & Machine Learning"],
      ["📱", "App Development"],
      ["☁️", "Cloud & DevOps"],
      ["🔐", "Cybersecurity"],
      ["📊", "Data & Analytics"],
      ["🚀", "Open Source"],
    ],

    "Business & Management": [
      ["📈", "Business Development"],
      ["🤝", "Sales"],
      ["📣", "Marketing"],
      ["👥", "Human Resources"],
      ["💼", "Management"],
      ["💰", "Finance"],
      ["📊", "Business Analytics"],
      ["🚀", "Entrepreneurship"],
    ],

    "Finance & Accounting": [
      ["💰", "Accounting"],
      ["📊", "Financial Analysis"],
      ["📈", "Investment"],
      ["🧾", "Taxation"],
      ["🏦", "Banking"],
      ["📋", "Auditing"],
      ["💼", "Corporate Finance"],
      ["📊", "Business Analytics"],
    ],

    "Marketing & Sales": [
      ["📣", "Digital Marketing"],
      ["🤝", "Business Development"],
      ["💬", "Sales"],
      ["📱", "Social Media"],
      ["🎯", "Brand Strategy"],
      ["📊", "Marketing Analytics"],
      ["✍️", "Content Marketing"],
      ["🚀", "Growth Strategy"],
    ],

    "Design & Creative": [
      ["🎨", "UI/UX Design"],
      ["🖌️", "Graphic Design"],
      ["📷", "Photography"],
      ["🎬", "Video & Motion"],
      ["✏️", "Illustration"],
      ["🧩", "Product Design"],
      ["✨", "Creative Direction"],
      ["🌐", "Web Design"],
    ],

    "Data & Analytics": [
      ["📊", "Data Analytics"],
      ["🤖", "Machine Learning"],
      ["🐍", "Python"],
      ["🗄️", "SQL & Databases"],
      ["📈", "Business Intelligence"],
      ["🧠", "Artificial Intelligence"],
      ["☁️", "Data Engineering"],
      ["📉", "Data Visualization"],
    ],

    Technology: [
      ["💻", "Software Development"],
      ["🌐", "Web Development"],
      ["☁️", "Cloud Computing"],
      ["🔐", "Cybersecurity"],
      ["🤖", "Artificial Intelligence"],
      ["📱", "App Development"],
      ["📊", "Data"],
      ["🚀", "DevOps"],
    ],

    Finance: [
      ["💰", "Financial Analysis"],
      ["📊", "Investment"],
      ["🏦", "Banking"],
      ["📈", "Financial Planning"],
      ["🧾", "Taxation"],
      ["📋", "Auditing"],
      ["💼", "Corporate Finance"],
      ["📊", "Risk Management"],
    ],

    Marketing: [
      ["📣", "Digital Marketing"],
      ["🎯", "Brand Strategy"],
      ["📱", "Social Media"],
      ["✍️", "Content"],
      ["📊", "Marketing Analytics"],
      ["🚀", "Growth"],
      ["🎥", "Content Creation"],
      ["🤝", "Business Development"],
    ],

    "Human Resources": [
      ["👥", "Talent Acquisition"],
      ["🧑‍💼", "Recruitment"],
      ["📚", "Learning & Development"],
      ["🤝", "Employee Relations"],
      ["📊", "HR Analytics"],
      ["🌱", "People Development"],
      ["💼", "HR Management"],
      ["🎯", "Employer Branding"],
    ],

    Operations: [
      ["⚙️", "Operations Management"],
      ["📊", "Process Improvement"],
      ["📦", "Supply Chain"],
      ["📈", "Business Operations"],
      ["🤝", "Vendor Management"],
      ["📋", "Project Management"],
      ["🎯", "Strategy"],
      ["💼", "Administration"],
    ],

    Management: [
      ["💼", "Leadership"],
      ["📊", "Business Strategy"],
      ["📈", "Growth"],
      ["🤝", "Team Management"],
      ["🎯", "Project Management"],
      ["💰", "Finance"],
      ["📣", "Marketing"],
      ["🚀", "Entrepreneurship"],
    ],

    "Web Development": [
      ["⚛️", "React"],
      ["🅰️", "Angular"],
      ["🟢", "Node.js"],
      ["💻", "Full Stack"],
      ["🎨", "Frontend"],
      ["⚙️", "Backend"],
      ["🗄️", "Databases"],
      ["🚀", "Web Applications"],
    ],

    "UI/UX Design": [
      ["🎨", "UI Design"],
      ["🧠", "UX Research"],
      ["🧩", "Product Design"],
      ["📱", "Mobile Design"],
      ["🌐", "Web Design"],
      ["✨", "Design Systems"],
      ["🖌️", "Visual Design"],
      ["🔍", "User Research"],
    ],

    "Content & Writing": [
      ["✍️", "Content Writing"],
      ["📝", "Copywriting"],
      ["📚", "Blogging"],
      ["🎬", "Script Writing"],
      ["📣", "Social Media"],
      ["🔎", "SEO"],
      ["📖", "Storytelling"],
      ["💼", "Technical Writing"],
    ],

    "Digital Marketing": [
      ["📱", "Social Media Marketing"],
      ["🔎", "SEO"],
      ["📣", "Advertising"],
      ["✍️", "Content Marketing"],
      ["📊", "Marketing Analytics"],
      ["🎯", "Performance Marketing"],
      ["📧", "Email Marketing"],
      ["🚀", "Growth Marketing"],
    ],

    Photography: [
      ["📷", "Portrait Photography"],
      ["🌄", "Landscape"],
      ["🏙️", "Street Photography"],
      ["🎬", "Photo & Video"],
      ["✨", "Creative Photography"],
      ["📸", "Event Photography"],
      ["🖼️", "Photo Editing"],
      ["📱", "Visual Content"],
    ],

    Consulting: [
      ["🧠", "Business Consulting"],
      ["📊", "Strategy"],
      ["💼", "Management Consulting"],
      ["📈", "Growth"],
      ["💰", "Finance"],
      ["📣", "Marketing"],
      ["⚙️", "Operations"],
      ["🎯", "Project Management"],
    ],

    "E-commerce": [
      ["🛒", "Online Business"],
      ["📣", "Digital Marketing"],
      ["📦", "Operations"],
      ["💰", "Business Strategy"],
      ["📊", "Analytics"],
      ["🌐", "E-commerce Development"],
      ["🚀", "Growth"],
      ["🎯", "Brand Building"],
    ],

    "Creative Business": [
      ["🎨", "Creative Direction"],
      ["📣", "Marketing"],
      ["💼", "Business Strategy"],
      ["📱", "Content Creation"],
      ["🖌️", "Design"],
      ["📷", "Photography"],
      ["🚀", "Brand Building"],
      ["✨", "Personal Branding"],
    ],
  };

  const goalOptions = [
    {
      icon: "💼",
      title: "Get hired",
      description: "Showcase my skills and attract employers.",
    },
    {
      icon: "🌐",
      title: "Build my personal brand",
      description: "Create a strong professional identity online.",
    },
    {
      icon: "🤝",
      title: "Find clients",
      description: "Showcase my work and attract new opportunities.",
    },
    {
      icon: "🚀",
      title: "Grow my career",
      description: "Present my experience and move forward.",
    },
    {
      icon: "🎓",
      title: "Showcase my journey",
      description: "Document my education, projects, and achievements.",
    },
    {
      icon: "✨",
      title: "Something else",
      description: "I have another goal for my portfolio.",
    },
  ];

  const selectedFields = fieldOptions[careerStage] || [];
  const selectedInterests = interestOptions[field] || [];

  const toggleInterest = (interest) => {
    setInterests((current) => {
      if (current.includes(interest)) {
        return current.filter((item) => item !== interest);
      }

      return [...current, interest];
    });
  };

  const handleContinue = () => {
    if (onboardingStep === 1 && careerStage) {
      setOnboardingStep(2);
      setField("");
      setInterests([]);
      return;
    }

    if (onboardingStep === 2 && field) {
      setOnboardingStep(3);
      setInterests([]);
      return;
    }

    if (onboardingStep === 3 && interests.length > 0 && goal) {
      setOnboardingComplete(true);

      console.log("Tempholio onboarding completed:");
      console.log({
        careerStage,
        field,
        interests,
        goal,
      });
    }
  };

  const handleBack = () => {
    if (onboardingStep === 3) {
      setOnboardingStep(2);
      setInterests([]);
      setGoal("");
      return;
    }

    if (onboardingStep === 2) {
      setOnboardingStep(1);
      setField("");
      return;
    }

    setShowOnboarding(false);
  };
  if (onboardingComplete) {
    return (
      <div className="app template-gallery-page">
        <div className="ocean-background">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>
          <div className="glow glow-three"></div>

          <div className="particle particle-one"></div>
          <div className="particle particle-two"></div>
          <div className="particle particle-three"></div>
          <div className="particle particle-four"></div>
          <div className="particle particle-five"></div>
          <div className="particle particle-six"></div>
        </div>

        <main className="template-gallery-container">

          <header className="gallery-header">

            <div className="gallery-brand">
              <div className="mini-symbol">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>TEMPHOLIO</span>
            </div>

            <div className="gallery-profile">
              <span className="profile-dot"></span>
              <span>{careerStage}</span>
            </div>

          </header>


          <section className="gallery-hero">

            <span className="eyebrow">
              YOUR CANVAS AWAITS
            </span>

            <h1>
              Choose your
              <span>template.</span>
            </h1>

            <p>
              We've curated designs based on your journey,
              field, and professional goals.
            </p>

            <div className="personalization-note">
              <span>✦</span>

              <div>
                <strong>
                  Personalized for {field}
                </strong>

                <small>
                  {careerStage} • {goal}
                </small>
              </div>
            </div>

          </section>


          <section className="gallery-toolbar">

            <div className="template-search">
              <span>⌕</span>

              <input
                type="text"
                placeholder="Search templates..."
                value={templateSearch}
                onChange={(event) =>
                  setTemplateSearch(event.target.value)
                }
              />
            </div>


            <div className="template-filters">

              {templateCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={
                    templateCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setTemplateCategory(category)
                  }
                >
                  {category}
                </button>
              ))}

            </div>

          </section>


          <section className="template-results-header">

            <div>
              <span className="section-label">
                CURATED DESIGNS
              </span>

              <h2>
                {filteredTemplates.length} templates
              </h2>
            </div>

            <span className="gallery-count">
              Explore • Preview • Build
            </span>

          </section>
          {recommendedTemplates.length > 0 && (
  <section className="recommended-section">
    <div className="recommended-header">
      <div>
        <span className="section-label">✦ SMART MATCH</span>
        <h2>Recommended for you</h2>
        <p>
          Templates selected based on your career stage, field,
          interests, and goals.
        </p>
      </div>

      <span className="recommended-count">
        {recommendedTemplates.length} matches
      </span>
    </div>

    <div className="recommended-grid">
      {recommendedTemplates.slice(0, 4).map((template) => (
        <article
          className={`template-card recommended-card ${
            selectedTemplate === template.id ? "selected" : ""
          }`}
          key={`recommended-${template.id}`}
        >
          <div
            className={`template-preview preview-${template.id}`}
          >
            {/* We'll connect the existing preview designs here next */}
            <div className="recommended-preview-placeholder">
              <span>✦</span>
              <strong>{template.name}</strong>
              <small>{template.designSystem}</small>
            </div>
          </div>

          <div className="template-info">
            <div className="template-title-row">
              <div>
                <span className="template-category">
                  {template.category}
                </span>
                <h3>{template.name}</h3>
              </div>

              <span className="template-index">
                {String(template.id).padStart(2, "0")}
              </span>
            </div>

            <p>{template.description}</p>

            <small>
              BEST FOR&nbsp;&nbsp; {template.suitedFor}
            </small>

            <div className="template-actions">
              <button
                type="button"
                className="preview-button"
                onClick={() =>
                  setSelectedTemplate(template.id)
                }
              >
                Preview
              </button>

              <button
                type="button"
                className="use-template-button"
                onClick={() =>
                  setSelectedTemplate(template.id)
                }
              >
                Use Template
                <strong>→</strong>
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
)}    

          <section className="template-grid">

            {filteredTemplates.map((template) => (

              <article
                className={`template-card ${
                  selectedTemplate === template.id
                    ? "selected"
                    : ""
                }`}
                key={template.id}
              >

                {/* =====================================================
                      TEMPLATE PREVIEW SYSTEM
                      Each design gets its own visual language
                    ===================================================== */}

                  {template.id === 1 && (
                    <div className="design-preview design-nova">
                      <div className="nova-top">
                        <span>N</span>
                        <div>
                            <i></i>
                            <i></i>
                            <i></i>
                          </div>
                        </div>

                        <div className="nova-content">
                          <small>HELLO, I'M</small>
                          <h4>NIKHIL K</h4>
                          <p>Full Stack Developer</p>
                          <div className="nova-line"></div>
                        </div>

                        <div className="nova-bottom">
                          <span>ABOUT</span>
                          <span>WORK</span>
                          <span>CONTACT</span>
                        </div>
                      </div>
                    )}

                    {template.id === 2 && (
                      <div className="design-preview design-aura">
                        <div className="aura-frame">
                          <span className="aura-label">PERSONAL BRAND</span>
                          <h4>Nikhil<br />K.</h4>
                          <p>Developer · Creator · Explorer</p>
                          <div className="aura-orb"></div>
                          <span className="aura-scroll">SCROLL ↓</span>
                        </div>
                      </div>
                    )}

                    {template.id === 3 && (
                      <div className="design-preview design-codex">
                        <div className="code-terminal">
                          <div className="terminal-bar">
                            <span>●</span>
                            <span>●</span>
                            <span>●</span>
                            <b>~/portfolio</b>
                          </div>

                          <div className="terminal-code">
                            <span>&lt;<b>developer</b>&gt;</span>
                            <strong>Nikhil K</strong>
                            <span>const skills = [</span>
                            <em>"React", "Node", "SQL"</em>
                            <span>]</span>
                            <span>&lt;/<b>developer</b>&gt;</span>
                          </div>

                          <div className="terminal-status">
                            <span>● SYSTEM ONLINE</span>
                            <span>01 / 25</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {template.id === 4 && (
                      <div className="design-preview design-executive">
                        <div className="exec-header">
                          <span>NIKHIL K</span>
                          <small>EXECUTIVE PROFILE</small>
                        </div>

                        <div className="exec-body">
                          <div className="exec-sidebar">
                            <strong>01</strong>
                            <span>PROFILE</span>
                            <span>EXPERIENCE</span>
                            <span>SKILLS</span>
                            <span>CONTACT</span>
                          </div>

                          <div className="exec-main">
                            <small>BUSINESS PROFESSIONAL</small>
                            <h4>Building<br />meaningful<br /><i>results.</i></h4>

                            <div className="exec-stats">
                              <span><b>04</b> PROJECTS</span>
                              <span><b>06</b> SKILLS</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {template.id === 5 && (
                      <div className="design-preview design-canvas">
                        <div className="canvas-word">CREATE</div>
                        <div className="canvas-card canvas-card-one">WORK<br /><b>01</b></div>
                        <div className="canvas-card canvas-card-two">IDEAS</div>
                        <div className="canvas-circle"></div>
                        <div className="canvas-name">NIKHIL K</div>
                        <div className="canvas-footer">DESIGN · STORY · EXPERIENCE</div>
                      </div>
                    )}

                    {template.id === 6 && (
                      <div className="design-preview design-pulse">
                        <div className="pulse-label">PULSE / 06</div>
                        <h4>MAKE<br /><span>IMPACT.</span></h4>

                        <div className="pulse-boxes">
                          <div>SALES</div>
                          <div>GROWTH</div>
                          <div>BRAND</div>
                        </div>

                        <div className="pulse-arrow">↗</div>
                      </div>
                    )}

                    {template.id === 7 && (
                      <div className="design-preview design-softcore">
                        <div className="soft-profile">
                          <div className="soft-avatar"></div>
                          <div>
                            <strong>NIKHIL K</strong>
                            <span>Developer</span>
                          </div>
                        </div>

                        <div className="soft-actions">
                          <div>ABOUT</div>
                          <div>SKILLS</div>
                          <div>WORK</div>
                        </div>

                        <div className="soft-main">
                          <span>WELCOME</span>
                          <h4>Build softly.<br />Think boldly.</h4>
                        </div>
                      </div>
                    )}

                    {template.id === 8 && (
                      <div className="design-preview design-craft">
                        <div className="craft-desk">
                          <div className="craft-paper">
                            <span className="paper-pin">●</span>
                            <small>MY PORTFOLIO</small>
                            <h4>NIKHIL<br />K</h4>
                            <p>Developer & Creator</p>

                            <div className="craft-stamp">WORK<br />WITH ME</div>
                          </div>

                          <div className="craft-button">VIEW WORK →</div>
                        </div>
                      </div>
                    )}

                    {template.id === 9 && (
                      <div className="design-preview design-mono">
                        <div className="mono-number">09</div>
                        <div className="mono-title">
                          <small>PORTFOLIO / 2026</small>
                          <h4>NIKHIL<br />K</h4>
                          <p>Developer / Builder / Learner</p>
                        </div>

                        <div className="mono-nav">
                          <span>01 ABOUT</span>
                          <span>02 WORK</span>
                          <span>03 CONTACT</span>
                        </div>
                      </div>
                    )}

                    {template.id === 10 && (
                      <div className="design-preview design-vision">
                        <div className="vision-image">
                          <span>SELECTED<br />WORK</span>
                        </div>

                        <div className="vision-title">
                          <small>CREATIVE PORTFOLIO</small>
                          <h4>Visual<br /><i>Stories.</i></h4>
                        </div>

                        <div className="vision-meta">
                          <span>NIKHIL K</span>
                          <span>2026</span>
                        </div>
                      </div>
                    )}

                    {template.id === 11 && (
                      <div className="design-preview design-ascend">
                        <div className="ascend-grid"></div>

                        <div className="ascend-top">
                          <span>AK</span>
                          <small>PORTFOLIO / 2026</small>
                        </div>

                        <div className="ascend-main">
                          <small>01 — PROFILE</small>
                          <h4>Moving<br />forward.</h4>
                          <p>Technology · Business · Growth</p>
                        </div>

                        <div className="ascend-side">SCROLL ↓</div>
                      </div>
                    )}

                    {template.id === 12 && (
                      <div className="design-preview design-launch">
                        <div className="launch-top">
                          <strong>LAUNCH</strong>
                          <span>12 / 25</span>
                        </div>

                        <h4>
                          START<br />
                          <span>SOMETHING.</span>
                        </h4>

                        <div className="launch-sticker">FRESH<br />TALENT</div>

                        <div className="launch-bottom">
                          <span>NIKHIL K</span>
                          <span>OPEN TO WORK ↗</span>
                        </div>
                      </div>
                    )}

                    {template.id === 13 && (
                      <div className="design-preview design-business">
                        <div className="business-nav">
                          <strong>NK</strong>
                          <span>ABOUT</span>
                          <span>EXPERIENCE</span>
                          <span>CONTACT</span>
                        </div>

                        <div className="business-hero">
                          <small>BUSINESS PORTFOLIO</small>
                          <h4>Strategy.<br />Execution.<br /><span>Growth.</span></h4>
                        </div>

                        <div className="business-cards">
                          <div><b>01</b><span>EXPERIENCE</span></div>
                          <div><b>02</b><span>PROJECTS</span></div>
                          <div><b>03</b><span>RESULTS</span></div>
                        </div>
                      </div>
                    )}

                    {template.id === 14 && (
                      <div className="design-preview design-freelance">
                        <div className="freelance-intro">
                          <span>AVAILABLE FOR WORK</span>
                          <h4>I turn ideas<br /><i>into reality.</i></h4>
                          <p>Web · Design · Strategy</p>
                        </div>

                        <div className="freelance-bento">
                          <div>WEB<br /><b>01</b></div>
                          <div>DESIGN<br /><b>02</b></div>
                          <div>BRAND<br /><b>03</b></div>
                          <div>CONTACT ↗</div>
                        </div>
                      </div>
                    )}

                    {template.id === 15 && (
                      <div className="design-preview design-timeline">
                        <div className="timeline-line"></div>

                        <div className="timeline-header">
                          <small>MY JOURNEY</small>
                          <h4>Growing<br />through time.</h4>
                        </div>

                        <div className="timeline-item item-one">
                          <b>2024</b>
                          <span>Education</span>
                        </div>

                        <div className="timeline-item item-two">
                          <b>2025</b>
                          <span>Internship</span>
                        </div>

                        <div className="timeline-item item-three">
                          <b>2026</b>
                          <span>Career</span>
                        </div>
                      </div>
                    )}

                    {template.id === 16 && (
                      <div className="design-preview design-spectrum">
                        <div className="spectrum-orb orb-one"></div>
                        <div className="spectrum-orb orb-two"></div>

                        <div className="glass-panel">
                          <small>HELLO, I'M</small>
                          <h4>Nikhil K</h4>
                          <p>Creative Developer</p>

                          <div className="glass-links">
                            <span>ABOUT</span>
                            <span>WORK</span>
                            <span>CONTACT</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {template.id === 17 && (
                      <div className="design-preview design-grid">
                        <div className="grid-cell grid-large">
                          <small>HELLO</small>
                          <h4>NIKHIL<br />K.</h4>
                        </div>

                        <div className="grid-cell grid-skills">
                          <small>SKILLS</small>
                          <strong>06</strong>
                        </div>

                        <div className="grid-cell grid-projects">
                          <small>PROJECTS</small>
                          <strong>03</strong>
                        </div>

                        <div className="grid-cell grid-about">ABOUT →</div>

                        <div className="grid-cell grid-contact">CONTACT ↗</div>
                      </div>
                    )}

                    {template.id === 18 && (
                      <div className="design-preview design-focus">
                        <div className="focus-left">
                          <small>FOCUS / 2026</small>
                          <h4>Less.<br />But<br /><i>better.</i></h4>
                        </div>

                        <div className="focus-right">
                          <span>ABOUT</span>
                          <span>WORK</span>
                          <span>WRITING</span>
                          <span>CONTACT</span>
                        </div>

                        <div className="focus-footer">
                          <span>NIKHIL K</span>
                          <span>SCROLL ↓</span>
                        </div>
                      </div>
                    )}

                    {template.id === 19 && (
                      <div className="design-preview design-impact">
                        <div className="impact-bg">IMPACT</div>

                        <div className="impact-content">
                          <small>RESULTS / 19</small>
                          <h4>BUILT<br /><span>TO MOVE.</span></h4>

                          <div className="impact-stat">
                            <strong>04</strong>
                            <span>KEY PROJECTS</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {template.id === 20 && (
                      <div className="design-preview design-orbit">
                        <div className="orbit-grid"></div>

                        <div className="orbit-ring ring-one"></div>
                        <div className="orbit-ring ring-two"></div>
                        <div className="orbit-core">NK</div>

                        <div className="orbit-name">
                          <small>SYSTEM / 20</small>
                          <strong>NIKHIL K</strong>
                          <span>TECH CREATOR</span>
                        </div>

                        <div className="orbit-status">● ONLINE</div>
                      </div>
                    )}

                    {template.id === 21 && (
                      <div className="design-preview design-techflow">
                        <div className="techflow-glass">
                          <div className="techflow-top">
                            <span>TECHFLOW</span>
                            <small>21 / 25</small>
                          </div>

                          <div className="techflow-main">
                            <small>FULL STACK</small>
                            <h4>Build.<br />Ship.<br />Repeat.</h4>
                          </div>

                          <div className="techflow-pills">
                            <span>REACT</span>
                            <span>NODE</span>
                            <span>SQL</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {template.id === 22 && (
                      <div className="design-preview design-profile">
                        <div className="profile-top">
                          <strong>NIKHIL K</strong>
                          <span>PROFILE</span>
                        </div>

                        <div className="profile-body">
                          <div className="profile-avatar"></div>

                          <div>
                            <small>ASPIRING</small>
                            <h4>FULL STACK<br />DEVELOPER</h4>
                            <p>Building digital experiences with technology.</p>
                          </div>
                        </div>

                        <div className="profile-links">
                          <span>ABOUT</span>
                          <span>EXPERIENCE</span>
                          <span>CONTACT</span>
                        </div>
                      </div>
                    )}

                    {template.id === 23 && (
                      <div className="design-preview design-signature">
    <div className="signature-border">
      <small>THE SIGNATURE COLLECTION</small>

      <div className="signature-name">
        <span>Nikhil</span>
        <strong>K.</strong>
      </div>

      <p>PERSONAL BRAND · 2026</p>

      <div className="signature-line"></div>
      <span className="signature-enter">ENTER PORTFOLIO →</span>
    </div>
  </div>
)}

{template.id === 24 && (
  <div className="design-preview design-horizon">
    <div className="horizon-wave wave-one"></div>
    <div className="horizon-wave wave-two"></div>

    <div className="horizon-content">
      <small>WELCOME TO MY WORLD</small>
      <h4>Flow with<br /><i>the journey.</i></h4>
      <p>NIKHIL K · CREATIVE PROFESSIONAL</p>
    </div>
  </div>
)}

{template.id === 25 && (
  <div className="design-preview design-clay">
    <div className="clay-profile">
      <div className="clay-avatar">NK</div>
      <small>HELLO, I'M</small>
      <h4>Nikhil K</h4>
      <span>Creative Developer</span>
    </div>

    <div className="clay-menu">
      <div>ABOUT</div>
      <div>WORK</div>
      <div>SKILLS</div>
    </div>

    <div className="clay-button">LET'S CONNECT →</div>
  </div>
)}

<div className="preview-number">
  {String(template.id).padStart(2, "0")}
</div>

<div className="preview-overlay">
  <button
    type="button"
    onClick={() => setSelectedTemplate(template.id)}
  >
    {selectedTemplate === template.id
      ? "Selected ✓"
      : "Preview Template"}
  </button>
</div>        

                <div className="template-info">

                  <div className="template-title-row">

                    <div>
                      <span className="template-category">
                        {template.category}
                      </span>

                      <h3>{template.name}</h3>
                    </div>

                    <span className="template-index">
                      {String(template.id).padStart(2, "0")}
                    </span>

                  </div>


                  <p>
                    {template.description}
                  </p>

                  <small>
                    BEST FOR&nbsp;&nbsp; {template.suitedFor}
                  </small>


                  <div className="template-actions">

                    <button
                      type="button"
                      className="preview-button"
                      onClick={() =>
                        setSelectedTemplate(template.id)
                      }
                    >
                      Preview
                    </button>

                    <button
                      type="button"
                      className="use-template-button"
                      onClick={() =>
                        setSelectedTemplate(template.id)
                      }
                    >
                      Use Template
                      <strong>→</strong>
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </section>


          {filteredTemplates.length === 0 && (
            <div className="no-templates">
              <span>◌</span>
              <h3>No templates found</h3>
              <p>
                Try another search or category.
              </p>
            </div>
          )}


          <footer className="gallery-footer">
            <span>
              YOUR STORY • YOUR IDENTITY • YOUR FUTURE
            </span>

            <span>
              TEMPHOLIO © 2026
            </span>
          </footer>

        </main>
      </div>
    );
  }

if (showOnboarding) {
    return (
      <div className="app onboarding-page">
        <div className="ocean-background">
          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>
          <div className="glow glow-three"></div>

          <div className="particle particle-one"></div>
          <div className="particle particle-two"></div>
          <div className="particle particle-three"></div>
          <div className="particle particle-four"></div>
          <div className="particle particle-five"></div>
          <div className="particle particle-six"></div>
        </div>

        <main className="onboarding-container">

          <div className="onboarding-top">
            <div className="mini-brand">
              <div className="mini-symbol">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span>TEMPHOLIO</span>
            </div>

            <div className="progress-info">
              <span>
                {String(onboardingStep).padStart(2, "0")}
              </span>

              <div className="progress-line">
                <div
                  style={{
                    width: `${(onboardingStep / 3) * 100}%`,
                  }}
                ></div>
              </div>

              <span>03</span>
            </div>
          </div>

          {/* STEP 1 */}

          {onboardingStep === 1 && (
            <>
              <section className="onboarding-header">
                <span className="eyebrow">
                  DISCOVER YOUR IDENTITY
                </span>

                <h1>
                  Where are you
                  <span>in your journey?</span>
                </h1>

                <p>
                  Tell us a little about yourself. We'll use
                  this to shape your Tempholio experience.
                </p>
              </section>

              <section className="career-grid">
                {careerOptions.map((option) => (
                  <button
                    key={option.title}
                    type="button"
                    className={`career-card ${
                      careerStage === option.title
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      setCareerStage(option.title)
                    }
                  >
                    <div className="career-icon">
                      {option.icon}
                    </div>

                    <div className="career-content">
                      <h3>{option.title}</h3>
                      <p>{option.description}</p>
                    </div>

                    <div className="selection-circle">
                      {careerStage === option.title && "✓"}
                    </div>
                  </button>
                ))}
              </section>
            </>
          )}

          {/* STEP 2 */}

          {onboardingStep === 2 && (
            <>
              <section className="onboarding-header">
                <span className="eyebrow">
                  DEFINE YOUR DIRECTION
                </span>

                <h1>
                  What is your
                  <span>field?</span>
                </h1>

                <p>
                  Choose the area that best represents what
                  you do or want to pursue.
                </p>
              </section>

              <section className="career-grid field-grid">
                {selectedFields.map(([icon, title]) => (
                  <button
                    key={title}
                    type="button"
                    className={`career-card ${
                      field === title ? "selected" : ""
                    }`}
                    onClick={() => setField(title)}
                  >
                    <div className="career-icon">
                      {icon}
                    </div>

                    <div className="career-content">
                      <h3>{title}</h3>

                      <p>
                        Build a portfolio around{" "}
                        {title.toLowerCase()}.
                      </p>
                    </div>

                    <div className="selection-circle">
                      {field === title && "✓"}
                    </div>
                  </button>
                ))}
              </section>
            </>
          )}

          {/* STEP 3 */}

          {onboardingStep === 3 && (
            <>
              <section className="onboarding-header step-three-header">
                <span className="eyebrow">
                  SHAPE YOUR DIRECTION
                </span>

                <h1>
                  What are you
                  <span>passionate about?</span>
                </h1>

                <p>
                  Pick the areas you'd like your portfolio
                  to highlight. You can choose more than one.
                </p>
              </section>

              <section className="interest-section">

                <div className="interest-heading">
                  <div>
                    <span className="section-label">
                      YOUR INTERESTS
                    </span>

                    <h3>
                      {field}
                    </h3>
                  </div>

                  <span className="selection-count">
                    {interests.length} selected
                  </span>
                </div>

                <div className="interest-grid">
                  {selectedInterests.map(([icon, title]) => (
                    <button
                      key={title}
                      type="button"
                      className={`interest-card ${
                        interests.includes(title)
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => toggleInterest(title)}
                    >
                      <span className="interest-icon">
                        {icon}
                      </span>

                      <span>{title}</span>

                      <span className="interest-check">
                        {interests.includes(title) && "✓"}
                      </span>
                    </button>
                  ))}
                </div>

              </section>

              <section className="goal-section">

                <div className="interest-heading">
                  <div>
                    <span className="section-label">
                      YOUR GOAL
                    </span>

                    <h3>
                      What do you want your portfolio to do?
                    </h3>
                  </div>
                </div>

                <div className="goal-grid">
                  {goalOptions.map((option) => (
                    <button
                      key={option.title}
                      type="button"
                      className={`goal-card ${
                        goal === option.title
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => setGoal(option.title)}
                    >
                      <div className="goal-icon">
                        {option.icon}
                      </div>

                      <div>
                        <h4>{option.title}</h4>
                        <p>{option.description}</p>
                      </div>

                      <div className="selection-circle">
                        {goal === option.title && "✓"}
                      </div>
                    </button>
                  ))}
                </div>

              </section>
            </>
          )}
            <div className="onboarding-actions">
  {onboardingStep !== 3 && (
    <button
      className="back-button"
      onClick={handleBack}
    >
      ← Back
    </button>
  )}

  <button
    className="continue-button"
    disabled={
      onboardingStep === 1
        ? !careerStage
        : onboardingStep === 2
          ? !field
          : interests.length === 0 || !goal
    }
    onClick={handleContinue}
  >
    {onboardingStep === 3
      ? "Discover My Templates"
      : "Continue"}

    <strong>→</strong>
  </button>
</div>
     

        </main>

        <footer className="onboarding-footer">
          <span>
            YOUR JOURNEY • YOUR IDENTITY • YOUR STORY
          </span>
        </footer>
      </div>  
    );
  }

  return (
    <div className="app">
      <div className="ocean-background">
        <div className="glow glow-one"></div>
        <div className="glow glow-two"></div>
        <div className="glow glow-three"></div>

        <div className="particle particle-one"></div>
        <div className="particle particle-two"></div>
        <div className="particle particle-three"></div>
        <div className="particle particle-four"></div>
        <div className="particle particle-five"></div>
        <div className="particle particle-six"></div>
      </div>

      <main className="auth-container">

        <section className="brand-section">
          <div className="brand-symbol">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <h1>TEMPHOLIO</h1>

          <p className="tagline">
            Surface Your Potential
          </p>

          <p className="brand-description">
            Create a portfolio that reflects your journey,
            skills, experience, and ambitions.
          </p>

          <div className="explore-line">
            <span></span>
            <small>YOUR STORY STARTS HERE</small>
            <span></span>
          </div>
        </section>

        <section className="auth-panel">

          <div className="auth-header">
            <span className="eyebrow">
              {isSignup
                ? "CREATE YOUR IDENTITY"
                : "WELCOME BACK"}
            </span>

            <h2>
              {isSignup
                ? "Create your account"
                : "Enter your world"}
            </h2>

            <p>
              {isSignup
                ? "Start building your professional presence."
                : "Continue shaping your professional journey."}
            </p>
          </div>

          <form
            className="auth-form"
            onSubmit={(event) => {
              event.preventDefault();

              setShowOnboarding(true);
              setOnboardingStep(1);
              setOnboardingComplete(false);
            }}
          >
            {isSignup && (
              <div className="input-group">
                <label>Full name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div className="input-group">
              <label>Email address</label>

              <input
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="input-group">
              <div className="label-row">
                <label>Password</label>

                {!isSignup && (
                  <button
                    type="button"
                    className="forgot-button"
                  >
                    Forgot password?
                  </button>
                )}
              </div>

              <input
                type="password"
                placeholder="Enter your password"
              />
            </div>

            {isSignup && (
              <div className="input-group">
                <label>Confirm password</label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            <button
              type="submit"
              className="submit-button"
            >
              <span>
                {isSignup
                  ? "Create account"
                  : "Explore Tempholio"}
              </span>

              <strong>→</strong>
            </button>
          </form>

          <div className="switch-auth">
            <span>
              {isSignup
                ? "Already have an account?"
                : "New to Tempholio?"}
            </span>

            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? "Sign in" : "Create account"}
            </button>
          </div>

          <div className="security-note">
            <span className="security-dot"></span>

            Your information stays yours.
          </div>

        </section>
      </main>

      <footer className="footer">
        <span>© 2026 TEMPHOLIO</span>

        <div>
          <span>CRAFT YOUR STORY</span>
          <i>•</i>
          <span>BUILD YOUR FUTURE</span>
        </div>
      </footer>
    </div>
  );
}

export default App;