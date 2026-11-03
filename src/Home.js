function Home({setCot}){
    return(
        
        
        <section id="Home" className="hero">
                <div className="hero-content">
                    <p className="hero-label">
                        RESIDENTIAL PLUMBING SERVICES
                    </p>

                    <h2>
                        Reliable Plumbing.
                        <br />
                        Quality You Can Trust.
                    </h2>

                    <p className="hero-description">
                        From plumbing repairs and water heater
                        installations to complete repiping,
                        Zuri Home Services provides dependable
                        solutions to help keep your home's
                        plumbing running smoothly.
                    </p>

                    <div className="hero-buttons">
                        <button
                            className="main-button"
                            onClick={() => setCot(true)}
                        >
                            Get a Quote
                        </button>

                        <a
                            href="#Services"
                            className="outline-button"
                        >
                            Explore Our Services
                        </a>
                    </div>
                </div>
            </section>
    )
}
export default  Home