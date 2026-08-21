import React, { useState } from 'react';
import './Community.css';

// Exact Social Media & Channel Dataset
const SOCIAL_CHANNELS = [
  {
    id: "github",
    name: "GitHub",
    handle: "@gauravquest00-create",
    url: "https://github.com/gauravquest00-create",
    description: "Open-source repositories, system architectures, and full-stack experiments.",
    category: "Code & Systems",
    accent: "#8B5CF6",
    icon: "github"
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "Gaurav Verma",
    url: "https://www.linkedin.com/in/gaurav-verma-10b287248/",
    description: "Professional background, software engineering insights, and tech discussions.",
    category: "Network",
    accent: "#0A66C2",
    icon: "linkedin"
  },
  {
    id: "twitter",
    name: "Twitter / X",
    handle: "@Gouravcreationn",
    url: "https://x.com/Gouravcreationn",
    description: "Real-time tech thoughts, product build logs, and web development updates.",
    category: "Updates",
    accent: "#1D9BF0",
    icon: "twitter"
  },
  {
    id: "instagram",
    name: "Instagram",
    handle: "@gaurav_v9636",
    url: "https://www.instagram.com/gaurav_v9636/",
    description: "UI/UX explorations, creative visuals, and developer lifestyle moments.",
    category: "Visuals",
    accent: "#E4405F",
    icon: "instagram"
  },
  {
    id: "gumroad",
    name: "Gumroad",
    handle: "questor63",
    url: "https://questor63.gumroad.com/",
    description: "Digital products, full-stack boilerplates, UI templates, and dev assets.",
    category: "Store",
    accent: "#FF90E8",
    icon: "gumroad"
  },
  {
    id: "pinterest",
    name: "Pinterest",
    handle: "gauravquest00",
    url: "https://in.pinterest.com/gauravquest00/",
    description: "Visual curation, UI design inspiration, layout architecture, and aesthetic boards.",
    category: "Inspiration",
    accent: "#E60023",
    icon: "pinterest"
  },
  {
    id: "reddit",
    name: "Reddit",
    handle: "u/Additional_Horse8713",
    url: "https://www.reddit.com/user/Additional_Horse8713/",
    description: "Community discussions, developer forums, feedback loops, and tech subreddits.",
    category: "Community",
    accent: "#FF4500",
    icon: "reddit"
  },
  {
    id: "email",
    name: "Direct Email",
    handle: "gauravquest00@gmail.com",
    url: "mailto:gauravquest00@gmail.com",
    description: "Direct communication for freelance contracts, system design, and partnerships.",
    category: "Inquiries",
    accent: "#10B981",
    icon: "email"
  }
];

// Dedicated SVG Icon Renderer
const ChannelIcon = ({ name, size = 22 }) => {
  const iconProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };

  switch (name) {
    case 'github':
      return (
        <svg {...iconProps}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg {...iconProps}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'twitter':
      return (
        <svg {...iconProps}>
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      );
    case 'instagram':
      return (
        <svg {...iconProps}>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'gumroad':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M10 8h4a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-4v-5z" />
          <path d="M14 13h-4v3" />
        </svg>
      );
    case 'pinterest':
      return (
        <svg {...iconProps}>
          <line x1="8" y1="20" x2="12" y2="11" />
          <path d="M10.7 14c.437 1.263 1.43 2 2.55 2 2.071 0 3.75-1.554 3.75-4a5 5 0 1 0-9.7 1.7" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
    case 'reddit':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="9" cy="11" r="1" fill="currentColor" />
          <circle cx="15" cy="11" r="1" fill="currentColor" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
          <path d="M12 8l2 -3l3 1" />
        </svg>
      );
    case 'email':
      return (
        <svg {...iconProps}>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    default:
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

export const Community = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("gauravquest00@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="community-page">
      <div className="community-container">
        
        {/* PAGE HEADER */}
        <header className="community-header">
          <div className="community-micro-label">
            <span className="live-dot" />
            <span>COMMUNITY & DIGITAL PRESENCE</span>
          </div>
          <h1 className="community-title">
            Connect Across <span className="title-gradient">The Network</span>
          </h1>
          <p className="community-subtitle">
            Explore code repositories, architectural designs, visual moodboards, digital products, and direct communication channels.
          </p>
        </header>

        {/* SOCIAL CHANNELS GRID */}
        <section className="community-grid" aria-label="Social Channels">
          {SOCIAL_CHANNELS.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
              style={{ '--card-accent': item.accent }}
            >
              {/* CARD TOP */}
              <div className="channel-top">
                <div className="channel-icon-wrapper">
                  <ChannelIcon name={item.icon} size={22} />
                </div>
                <div className="channel-meta-badge">
                  <span className="channel-category">{item.category}</span>
                  <div className="channel-arrow-box">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="channel-body">
                <h3 className="channel-name">{item.name}</h3>
                <span className="channel-handle">{item.handle}</span>
                <p className="channel-description">{item.description}</p>
              </div>

              {/* CARD FOOTER */}
              <div className="channel-footer">
                <span className="channel-link-text">
                  {item.id === 'email' ? 'Send Message' : `Open ${item.name}`}
                </span>
                {item.id === 'email' && (
                  <button 
                    type="button" 
                    className="copy-chip" 
                    onClick={handleCopyEmail}
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                )}
              </div>
            </a>
          ))}
        </section>

        {/* DIRECT REACH-OUT CALLOUT */}
        <section className="community-reachout">
          <div className="reachout-glow" />
          <div className="reachout-content">
            <span className="reachout-badge">FASTEST RESPONSE</span>
            <h2 className="reachout-title">Have a project or architectural query?</h2>
            <p className="reachout-text">
              I actively discuss freelance full-stack systems, SaaS consulting, and technical collaborations. Reach out directly via email.
            </p>
            <div className="reachout-actions">
              <a href="mailto:gauravquest00@gmail.com" className="btn-primary-reachout">
                <ChannelIcon name="email" size={18} />
                <span>gauravquest00@gmail.com</span>
              </a>
              <button 
                type="button" 
                className="btn-secondary-reachout"
                onClick={handleCopyEmail}
              >
                {copiedEmail ? 'Email Copied!' : 'Copy Address'}
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Community;