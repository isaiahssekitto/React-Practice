function About({rat}){
    return(
        <section id="About" className="about-section">
                <div className="about-content">
                    <p className="section-label">WHO WE ARE</p>

                    <h2>
                        Experience, Dedication,
                        and Quality Workmanship.
                    </h2>

                    <p>
                        At Zuri Home Services, we believe
                        every homeowner deserves reliable
                        plumbing and respectful,
                        professional service.
                    </p>

                    <p>
                        With more than 6,000 hours of
                        hands-on residential plumbing
                        experience in the Puget Sound
                        region, we bring practical knowledge
                        and attention to detail to every project.
                    </p>

                    <button
                        className="main-button"
                        onClick={() => rat(true)}
                    >
                        Discuss Your Project
                    </button>
                </div>
            </section>
    )
}
export default About