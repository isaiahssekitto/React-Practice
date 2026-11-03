import { useState } from "react";
import "./PlumbingCompanyWebsite.css";

function PlumbingCompanyWebsite() {
    const [showForm, setShowForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        message: ""
    });

    const services = [
        "Water Leak Repair",
        "Water Heater Service",
        "Drain Cleaning",
        "Fixture Installation",
        "Pipe Repair",
        "Other"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);
    };

    return (
        <div className="website">

            {/* Navigation */}
            <nav className="navbar">
                <div className="logo">
                    ZURI
                    <span>HOME SERVICES</span>
                </div>

                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>

                <button
                    className="nav-button"
                    onClick={() => setShowForm(true)}
                >
                    Request Service
                </button>
            </nav>


            {/* Hero */}
            <section className="hero" id="home">

                <div className="hero-content">
                    <p className="eyebrow">TRUSTED HOME SERVICES</p>

                    <h1>
                        Reliable Service.
                        <br />
                        <span>Right When You Need It.</span>
                    </h1>

                    <p className="hero-text">
                        Professional plumbing services for homeowners
                        who want dependable work, honest communication,
                        and quality results.
                    </p>

                    <div className="hero-buttons">
                        <button
                            className="primary-button"
                            onClick={() => setShowForm(true)}
                        >
                            Request a Quote
                        </button>

                        <a
                            className="secondary-button"
                            href="#services"
                        >
                            View Services
                        </a>
                    </div>
                </div>

                <div className="hero-card">
                    <p>Professional</p>
                    <h3>Home Services</h3>
                    <span>Quality work. Dependable service.</span>
                </div>

            </section>


            {/* Service Strip */}
            <section className="service-strip">

                <div>
                    <strong>01</strong>
                    <p>Reliable Service</p>
                </div>

                <div>
                    <strong>02</strong>
                    <p>Quality Work</p>
                </div>

                <div>
                    <strong>03</strong>
                    <p>Clear Communication</p>
                </div>

                <div>
                    <strong>04</strong>
                    <p>Homeowner Focused</p>
                </div>

            </section>


            {/* Services */}
            <section className="services-section" id="services">

                <div className="section-heading">
                    <p className="eyebrow">WHAT WE DO</p>

                    <h2>
                        Plumbing services
                        <br />
                        you can count on.
                    </h2>

                    <p>
                        From everyday plumbing problems to larger
                        home-service needs, Zuri Home Services is here
                        to help.
                    </p>
                </div>


                <div className="services-grid">

                    {services.map((service, index) => (
                        <div className="service-card" key={service}>

                            <span className="service-number">
                                0{index + 1}
                            </span>

                            <h3>{service}</h3>

                            <p>
                                Professional service designed to
                                keep your home working properly.
                            </p>

                            <button
                                onClick={() => setShowForm(true)}
                            >
                                Get Started →
                            </button>

                        </div>
                    ))}

                </div>

            </section>


            {/* About */}
            <section className="about-section" id="about">

                <div className="about-box">

                    <div className="about-number">
                        Z
                    </div>

                    <div className="about-content">

                        <p className="eyebrow">ABOUT ZURI</p>

                        <h2>
                            Your home deserves
                            <br />
                            dependable service.
                        </h2>

                        <p>
                            Zuri Home Services is built around a simple
                            idea: homeowners should be able to get
                            professional service without unnecessary
                            complications.
                        </p>

                        <p>
                            We focus on quality workmanship, clear
                            communication, and treating every home
                            with respect.
                        </p>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="cta-section" id="contact">

                <p className="eyebrow">NEED HELP WITH YOUR HOME?</p>

                <h2>
                    Let's get your
                    <br />
                    project started.
                </h2>

                <button
                    className="primary-button"
                    onClick={() => setShowForm(true)}
                >
                    Request a Quote
                </button>

            </section>


            {/* Footer */}
            <footer>

                <div className="footer-logo">
                    ZURI
                    <span>HOME SERVICES</span>
                </div>

                <p>
                    Professional plumbing services for your home.
                </p>

                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#services">Services</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>

                <p className="copyright">
                    © 2026 Zuri Home Services. All rights reserved.
                </p>

            </footer>


            {/* Quote Modal */}
            {showForm && (

                <div className="modal">

                    <div className="form-container">

                        <button
                            className="close-button"
                            onClick={() => setShowForm(false)}
                        >
                            ×
                        </button>

                        {!submitted ? (

                            <>
                                <p className="eyebrow">
                                    REQUEST SERVICE
                                </p>

                                <h2>
                                    Tell us about
                                    <br />
                                    your project.
                                </h2>

                                <form onSubmit={handleSubmit}>

                                    <div className="form-row">

                                        <input
                                            name="firstName"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                        />

                                        <input
                                            name="lastName"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <div className="form-row">

                                        <input
                                            name="phone"
                                            type="tel"
                                            placeholder="Phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />

                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>

                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">
                                            Select a service
                                        </option>

                                        {services.map((service) => (
                                            <option
                                                key={service}
                                                value={service}
                                            >
                                                {service}
                                            </option>
                                        ))}
                                    </select>

                                    <textarea
                                        name="message"
                                        placeholder="Tell us about the job..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />

                                    <button
                                        type="submit"
                                        className="submit-button"
                                    >
                                        Submit Request
                                    </button>

                                </form>
                            </>

                        ) : (

                            <div className="success">

                                <div className="success-icon">
                                    ✓
                                </div>

                                <p className="eyebrow">
                                    REQUEST RECEIVED
                                </p>

                                <h2>
                                    Thank you,{" "}
                                    {formData.firstName}.
                                </h2>

                                <p>
                                    We've received your service request.
                                    We'll be in touch with you soon.
                                </p>

                                <button
                                    className="submit-button"
                                    onClick={() => {
                                        setShowForm(false);
                                        setSubmitted(false);
                                    }}
                                >
                                    Done
                                </button>

                            </div>

                        )}

                    </div>

                </div>

            )}

        </div>
    );
}

export default PlumbingCompanyWebsite;