import { useState } from "react";
import "./App.css";

function App() {
  const [isSignup, setIsSignup] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const [onboardingStep, setOnboardingStep] = useState(1);
  const [careerStage, setCareerStage] = useState("");
  const [field, setField] = useState("");
  const [interests, setInterests] = useState([]);
  const [goal, setGoal] = useState("");
  const [onboardingComplete, setOnboardingComplete] = useState(false);

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
      <div className="app completion-page">
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
          <div className="fish fish-one">
  <span className="fish-body"></span>
  <span className="fish-tail"></span>
  <span className="fish-fin"></span>
</div>

<div className="fish fish-two">
  <span className="fish-body"></span>
  <span className="fish-tail"></span>
  <span className="fish-fin"></span>
</div>

<div className="fish fish-three">
  <span className="fish-body"></span>
  <span className="fish-tail"></span>
  <span className="fish-fin"></span>
</div>

<div className="fish fish-four">
  <span className="fish-body"></span>
  <span className="fish-tail"></span>
  <span className="fish-fin"></span>
</div>
        </div>

        <main className="completion-container">
          <div className="completion-symbol">
            ✓
          </div>

          <span className="eyebrow">
            YOUR IDENTITY IS READY
          </span>

          <h1>
            Let's find the
            <span>right canvas.</span>
          </h1>

          <p>
            We've got everything we need to personalize
            your Tempholio experience.
          </p>

          <div className="completion-summary">
            <div>
              <small>CAREER</small>
              <strong>{careerStage}</strong>
            </div>

            <div>
              <small>FIELD</small>
              <strong>{field}</strong>
            </div>

            <div>
              <small>INTERESTS</small>
              <strong>{interests.length} selected</strong>
            </div>

            <div>
              <small>GOAL</small>
              <strong>{goal}</strong>
            </div>
          </div>

          <button
            className="discover-button"
            onClick={() => {
              console.log("Ready for Template Gallery");
            }}
          >
            Discover My Templates
            <strong>→</strong>
          </button>
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