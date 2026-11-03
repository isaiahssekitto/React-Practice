
import React, { useEffect, useState } from "react";
import "./Ugamaa.css";

const events = [
  {
    id: 1,
    title: "UGAMAA Camp Meeting",
    category: "Camp Meeting",
    description:
      "Come together for worship, fellowship, spiritual growth, and community connection.",
    status: "Check official announcements",
    icon: "✦",
  },
  {
    id: 2,
    title: "Community Fellowship",
    category: "Fellowship",
    description:
      "Connect with Ugandan Adventist families and friends across North America.",
    status: "Details to be announced",
    icon: "♡",
  },
  {
    id: 3,
    title: "Community Outreach",
    category: "Service",
    description:
      "Explore opportunities to serve, volunteer, and make a positive difference.",
    status: "Express your interest",
    icon: "✧",
  },
];

const ministries = [
  {
    icon: "✝",
    title: "Faith & Worship",
    description:
      "Growing together spiritually through prayer, worship, and fellowship.",
  },
  {
    icon: "♡",
    title: "Community & Families",
    description:
      "Building meaningful relationships and supporting one another.",
  },
  {
    icon: "✦",
    title: "Youth & Young Adults",
    description:
      "Encouraging young people to grow in faith, service, and leadership.",
  },
  {
    icon: "◎",
    title: "Outreach & Service",
    description:
      "Creating opportunities to give back and support our communities.",
  },
];

const questions = [
  {
    question: "What is UGAMAA?",
    answer:
      "UGAMAA stands for Ugandan American Adventist Association. It connects Ugandan Seventh-day Adventists in North America.",
  },
  {
    question: "How can I participate?",
    answer:
      "You can follow official UGAMAA announcements, attend community gatherings, and explore opportunities to volunteer.",
  },
  {
    question: "Where can I find official event details?",
    answer:
      "Visit www.ugamaa.org for confirmed event information, locations, dates, and official registration.",
  },
];

function getSavedData(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function Ugamaa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [notification, setNotification] = useState("");

  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [registrations, setRegistrations] = useState(() =>
    getSavedData("ugamaa_registrations")
  );

  const [messages, setMessages] = useState(() =>
    getSavedData("ugamaa_messages")
  );

  useEffect(() => {
    localStorage.setItem(
      "ugamaa_registrations",
      JSON.stringify(registrations)
    );
  }, [registrations]);

  useEffect(() => {
    localStorage.setItem(
      "ugamaa_messages",
      JSON.stringify(messages)
    );
  }, [messages]);

  const filteredEvents = events.filter((event) => {
    const matchesCategory =
      category === "All" || event.category === category;

    const matchesSearch =
      `${event.title} ${event.description} ${event.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleRegistration = (e) => {
    e.preventDefault();

    if (
      !registration.name.trim() ||
      !registration.email.trim()
    ) {
      alert("Please enter your name and email.");
      return;
    }

    const newRegistration = {
      id: Date.now(),
      event: selectedEvent.title,
      ...registration,
      date: new Date().toLocaleString(),
    };

    setRegistrations((previous) => [
      newRegistration,
      ...previous,
    ]);

    setRegistration({
      name: "",
      email: "",
      phone: "",
    });

    setSelectedEvent(null);

    setNotification(
      "Your interest was saved in this browser. This is not an official event registration."
    );
  };

  const handleContact = (e) => {
    e.preventDefault();

    if (
      !contact.name.trim() ||
      !contact.email.trim() ||
      !contact.message.trim()
    ) {
      alert("Please complete the required fields.");
      return;
    }

    const newMessage = {
      id: Date.now(),
      ...contact,
      date: new Date().toLocaleString(),
    };

    setMessages((previous) => [
      newMessage,
      ...previous,
    ]);

    setContact({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setNotification(
      "Your message was saved in this browser. It has not been sent to UGAMAA."
    );
  };

  const deleteRegistration = (id) => {
    setRegistrations((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  const deleteMessage = (id) => {
    setMessages((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  const clearAllData = () => {
    if (window.confirm("Delete all saved demo information?")) {
      setRegistrations([]);
      setMessages([]);
    }
  };

  const openDashboard = () => {
    setDashboardOpen(true);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="uga-site">

      {/* TOP BAR */}
      <div className="uga-topbar">
        <span>Faith • Fellowship • Community • Service</span>

        <a
          href="https://www.ugamaa.org/"
          target="_blank"
          rel="noreferrer"
        >
          Official UGAMAA Website ↗
        </a>
      </div>

      {/* HEADER */}
      <header className="uga-header">
        <a href="#home" className="uga-brand">
          <img
            src="/ugamaa-logo.png"
            alt="UGAMAA Logo"
            className="uga-logo"
          />

          <div className="uga-brand-text">
            <strong>UGAMAA</strong>
            <small>
              UGANDAN AMERICAN ADVENTIST ASSOCIATION
            </small>
          </div>
        </a>

        <button
          className="uga-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`uga-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#ministries" onClick={() => setMenuOpen(false)}>
            Ministries
          </a>

          <a href="#events" onClick={() => setMenuOpen(false)}>
            Events
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <button
            className="uga-nav-cta"
            onClick={() => {
              if (dashboardOpen) {
                setDashboardOpen(false);
              } else {
                openDashboard();
              }
            }}
          >
            Demo Dashboard
          </button>
        </nav>
      </header>

      {/* NOTIFICATIONS */}
      {notification && (
        <div className="uga-notification" role="status">
          <p>{notification}</p>

          <button onClick={() => setNotification("")}>
            ✕
          </button>
        </div>
      )}

      {/* DASHBOARD */}
      {dashboardOpen && (
        <section className="uga-dashboard">
          <div className="uga-container">
            <div className="uga-dashboard-heading">
              <div>
                <span className="uga-kicker">
                  DEMONSTRATION DASHBOARD
                </span>

                <h2>Community Dashboard</h2>

                <p>
                  View information saved in this browser.
                  This is not a secure administrator system.
                </p>
              </div>

              <button
                className="uga-close-btn"
                onClick={() => setDashboardOpen(false)}
              >
                Close ✕
              </button>
            </div>

            <div className="uga-dashboard-stats">
              <div className="uga-stat">
                <strong>{registrations.length}</strong>
                <span>Event Interests</span>
              </div>

              <div className="uga-stat">
                <strong>{messages.length}</strong>
                <span>Contact Messages</span>
              </div>
            </div>

            <div className="uga-dashboard-grid">
              <div className="uga-dashboard-panel">
                <h3>Event Interests</h3>

                {registrations.length === 0 ? (
                  <p>No event interests saved yet.</p>
                ) : (
                  registrations.map((item) => (
                    <div className="uga-dashboard-record" key={item.id}>
                      <strong>{item.name}</strong>
                      <span>{item.event}</span>
                      <span>{item.email}</span>
                      <small>{item.date}</small>

                      <button
                        onClick={() =>
                          deleteRegistration(item.id)
                        }
                      >
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>

              <div className="uga-dashboard-panel">
                <h3>Contact Messages</h3>

                {messages.length === 0 ? (
                  <p>No messages saved yet.</p>
                ) : (
                  messages.map((item) => (
                    <div className="uga-dashboard-record" key={item.id}>
                      <strong>{item.name}</strong>
                      <span>{item.email}</span>
                      <p>{item.message}</p>
                      <small>{item.date}</small>

                      <button
                        onClick={() =>
                          deleteMessage(item.id)
                        }
                      >
                        Delete
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <button
              className="uga-delete-all"
              onClick={clearAllData}
            >
              Clear All Demo Data
            </button>
          </div>
        </section>
      )}

      <main>

        {/* HOME */}
        <section className="uga-hero" id="home">
          <div className="uga-container uga-hero-grid">
            <div className="uga-hero-content">
              <span className="uga-kicker">
                WELCOME TO UGAMAA
              </span>

              <h1>
                United in Faith.
                <br />
                <em>Connected</em> in Community.
              </h1>

              <p>
                Bringing Ugandan Seventh-day Adventists
                together across North America through
                worship, fellowship, heritage, and service.
              </p>

              <div className="uga-hero-buttons">
                <a
                  href="#about"
                  className="uga-btn uga-btn-gold"
                >
                  Discover UGAMAA ↗
                </a>

                <a
                  href="#events"
                  className="uga-btn uga-btn-outline"
                >
                  Explore Events →
                </a>
              </div>

              <div className="uga-hero-bottom">
                ONE FAITH • ONE FAMILY • ONE PURPOSE
              </div>
            </div>

            <div className="uga-hero-feature">
              <div className="uga-hero-feature-inner">
                <span>✺</span>

                <h2>
                  Together
                  <br />
                  We Grow
                </h2>

                <p>
                  FAITH • FELLOWSHIP • SERVICE
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES STRIP */}
        <div className="uga-values-strip">
          <div className="uga-container">
            <span>ROOTED IN FAITH</span>
            <span>CONNECTED BY HERITAGE</span>
            <span>COMMITTED TO SERVICE</span>
          </div>
        </div>

        {/* ABOUT */}
        <section className="uga-section uga-about" id="about">
          <div className="uga-container uga-about-grid">
            <div className="uga-about-art">
              <div>
                <span>UGAMAA</span>

                <h2>
                  Belong.
                  <br />
                  Believe.
                  <br />
                  Become.
                </h2>
              </div>
            </div>

            <div className="uga-about-content">
              <span className="uga-kicker">
                ABOUT OUR ASSOCIATION
              </span>

              <h2>
                A Community
                <br />
                <em>Built on Faith.</em>
              </h2>

              <p className="uga-lead">
                Connecting people, strengthening
                relationships, and growing together.
              </p>

              <p>
                UGAMAA is a community of Ugandan
                Seventh-day Adventists living in
                North America.
              </p>

              <p>
                Through faith, fellowship, cultural
                connection, and service, we celebrate
                our shared heritage while building
                meaningful relationships.
              </p>

              <a href="#ministries" className="uga-text-link">
                Discover Our Ministries ↗
              </a>
            </div>
          </div>
        </section>

        {/* MINISTRIES */}
        <section
          className="uga-section uga-ministries"
          id="ministries"
        >
          <div className="uga-container">
            <div className="uga-section-heading">
              <div>
                <span className="uga-kicker">
                  OUR COMMUNITY
                </span>

                <h2>
                  Growing Together.
                  <br />
                  <em>Serving Together.</em>
                </h2>
              </div>

              <p>
                Discover the values and opportunities
                that bring our community together.
              </p>
            </div>

            <div className="uga-ministry-grid">
              {ministries.map((ministry, index) => (
                <article
                  className="uga-ministry-card"
                  key={ministry.title}
                >
                  <div className="uga-ministry-top">
                    <span>{ministry.icon}</span>
                    <small>0{index + 1}</small>
                  </div>

                  <h3>{ministry.title}</h3>
                  <p>{ministry.description}</p>

                  <div className="uga-card-line"></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MESSAGE */}
        <section className="uga-message-section">
          <div className="uga-container">
            <span className="uga-quote-symbol">“</span>

            <h2>
              Our faith brings us together.
              <br />
              Our community makes us stronger.
            </h2>

            <p>UGAMAA WEBSITE REDESIGN CONCEPT</p>
          </div>
        </section>

        {/* EVENTS */}
        <section className="uga-section uga-events" id="events">
          <div className="uga-container">
            <div className="uga-section-heading">
              <div>
                <span className="uga-kicker">
                  EVENTS & FELLOWSHIP
                </span>

                <h2>
                  Come Together.
                  <br />
                  <em>Stay Connected.</em>
                </h2>
              </div>

              <p>
                Explore community activities and
                opportunities to participate.
              </p>
            </div>

            {/* EVENT FILTERS */}
            <div className="uga-event-controls">
              <div className="uga-event-filters">
                {[
                  "All",
                  "Camp Meeting",
                  "Fellowship",
                  "Service",
                ].map((item) => (
                  <button
                    key={item}
                    className={
                      category === item ? "active" : ""
                    }
                    onClick={() => setCategory(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <input
                type="search"
                placeholder="Search events..."
                aria-label="Search events"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* EVENT CARDS */}
            <div className="uga-event-grid">
              {filteredEvents.map((event) => (
                <article
                  className="uga-event-card"
                  key={event.id}
                >
                  <div className="uga-event-banner">
                    <span className="uga-event-icon">
                      {event.icon}
                    </span>

                    <span className="uga-event-tag">
                      {event.category}
                    </span>
                  </div>

                  <div className="uga-event-content">
                    <small>{event.status}</small>

                    <h3>{event.title}</h3>

                    <p>{event.description}</p>

                    <button
                      onClick={() => {
                        setSelectedEvent(event);
                        setRegistration({
                          name: "",
                          email: "",
                          phone: "",
                        });
                      }}
                    >
                      Express Interest ↗
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <p className="uga-no-results">
                No matching events found.
              </p>
            )}

            <p className="uga-event-note">
              Event dates and official registration
              must be confirmed at{" "}
              <a
                href="https://www.ugamaa.org/"
                target="_blank"
                rel="noreferrer"
              >
                ugamaa.org
              </a>.
            </p>
          </div>
        </section>

        {/* JOIN */}
        <section className="uga-join">
          <div className="uga-container uga-join-grid">
            <div>
              <span className="uga-kicker">
                YOU BELONG HERE
              </span>

              <h2>
                Stronger Together.
                <br />
                Better Connected.
              </h2>

              <p>
                Join a community built on faith,
                friendship, and shared purpose.
              </p>
            </div>

            <a
              href="#contact"
              className="uga-btn uga-btn-gold"
            >
              Get Connected ↗
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="uga-section uga-faq">
          <div className="uga-container uga-faq-grid">
            <div>
              <span className="uga-kicker">
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h2>
                Good to
                <br />
                <em>Know.</em>
              </h2>

              <p>
                Answers to common questions
                about UGAMAA.
              </p>
            </div>

            <div className="uga-faq-list">
              {questions.map((item, index) => (
                <div
                  className="uga-faq-item"
                  key={item.question}
                >
                  <button
                    onClick={() =>
                      setOpenQuestion(
                        openQuestion === index ? null : index
                      )
                    }
                    aria-expanded={openQuestion === index}
                  >
                    <span>{item.question}</span>
                    <strong>
                      {openQuestion === index ? "−" : "+"}
                    </strong>
                  </button>

                  {openQuestion === index && (
                    <p>{item.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          className="uga-section uga-contact"
          id="contact"
        >
          <div className="uga-container uga-contact-grid">
            <div className="uga-contact-info">
              <span className="uga-kicker">
                CONTACT & CONNECTION
              </span>

              <h2>
                Let's Stay
                <br />
                <em>Connected.</em>
              </h2>

              <p>
                Have a question, suggestion, or idea?
                Try the contact form.
              </p>

              <div className="uga-contact-notice">
                <strong>Demonstration Form</strong>

                <p>
                  Messages are saved only in your browser.
                  They are not sent to UGAMAA.
                </p>
              </div>

              <a
                href="https://www.ugamaa.org/"
                target="_blank"
                rel="noreferrer"
                className="uga-text-link"
              >
                Visit Official UGAMAA Website ↗
              </a>
            </div>

            <form
              className="uga-contact-form"
              onSubmit={handleContact}
            >
              <div className="uga-form-row">
                <label>
                  Full Name
                  <input
                    required
                    type="text"
                    placeholder="Enter your name"
                    value={contact.name}
                    onChange={(e) =>
                      setContact({
                        ...contact,
                        name: e.target.value,
                      })
                    }
                  />
                </label>

                <label>
                  Email Address
                  <input
                    required
                    type="email"
                    placeholder="Enter your email"
                    value={contact.email}
                    onChange={(e) =>
                      setContact({
                        ...contact,
                        email: e.target.value,
                      })
                    }
                  />
                </label>
              </div>

              <label>
                Subject
                <input
                  type="text"
                  placeholder="Message subject"
                  value={contact.subject}
                  onChange={(e) =>
                    setContact({
                      ...contact,
                      subject: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                Message
                <textarea
                  required
                  rows="5"
                  placeholder="Write your message..."
                  value={contact.message}
                  onChange={(e) =>
                    setContact({
                      ...contact,
                      message: e.target.value,
                    })
                  }
                />
              </label>

              <button
                className="uga-btn uga-btn-dark"
                type="submit"
              >
                Save Demo Message →
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="uga-footer">
        <div className="uga-container">
          <div className="uga-footer-grid">
            <div className="uga-footer-about">
              <div className="uga-footer-brand">
                <img
                  src="/ugamaa-logo.png"
                  alt="UGAMAA Logo"
                />

                <h2>UGAMAA</h2>
              </div>

              <p>
                Ugandan American Adventist Association
              </p>

              <p>
                Faith • Fellowship • Community • Service
              </p>
            </div>

            <div className="uga-footer-links">
              <h3>Quick Links</h3>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#ministries">Ministries</a>
              <a href="#events">Events</a>
            </div>

            <div className="uga-footer-links">
              <h3>Connect</h3>

              <a href="#contact">Contact</a>

              <a
                href="https://www.ugamaa.org/"
                target="_blank"
                rel="noreferrer"
              >
                Official Website
              </a>

              <button onClick={openDashboard}>
                Demo Dashboard
              </button>
            </div>
          </div>

          <div className="uga-footer-bottom">
            <p>
              © {new Date().getFullYear()} UGAMAA
              Redesign Concept. Not an official website.
            </p>

            <p>Built with React</p>
          </div>
        </div>
      </footer>

      {/* EVENT REGISTRATION MODAL */}
      {selectedEvent && (
        <div className="uga-modal-overlay">
          <div
            className="uga-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-modal-title"
          >
            <button
              className="uga-modal-close"
              onClick={() => setSelectedEvent(null)}
              aria-label="Close registration"
            >
              ✕
            </button>

            <span className="uga-kicker">
              EVENT INTEREST FORM
            </span>

            <h2 id="event-modal-title">
              {selectedEvent.title}
            </h2>

            <p>
              This demonstration form saves your
              interest locally. It does not register
              you for an official UGAMAA event.
            </p>

            <form onSubmit={handleRegistration}>
              <label>
                Full Name
                <input
                  required
                  type="text"
                  value={registration.name}
                  onChange={(e) =>
                    setRegistration({
                      ...registration,
                      name: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                Email Address
                <input
                  required
                  type="email"
                  value={registration.email}
                  onChange={(e) =>
                    setRegistration({
                      ...registration,
                      email: e.target.value,
                    })
                  }
                />
              </label>

              <label>
                Phone Number (Optional)
                <input
                  type="tel"
                  value={registration.phone}
                  onChange={(e) =>
                    setRegistration({
                      ...registration,
                      phone: e.target.value,
                    })
                  }
                />
              </label>

              <button
                type="submit"
                className="uga-btn uga-btn-dark"
              >
                Save My Interest →
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ugamaa;
