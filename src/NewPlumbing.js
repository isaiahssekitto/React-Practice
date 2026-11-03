
import { useState } from "react";
import "./NewPlumbing.css";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";

function NewPlumbing() {
    const [cot, setCot] = useState(false);
    const [success, setSuccess] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [adress, setAdress] = useState("");
    const [massage, setMassage] = useState("");
    const [service, setService] = useState("");
    const[customers,setCustomers]=useState([])
    const [submittedName,setSubmittedName]= useState("")

    const submit = (e) => {
        e.preventDefault();

        if (!/^[A-Za-z]+$/.test(firstName)) {
            alert("name should be in letters");
            return;
        }

        

    

        setCot(false);
        setSuccess(true);

        const customer = {
            firstName,
            lastName,
            email,
            adress,
            massage,
            service
        };

setCustomers([...customers,customer])
setSubmittedName(firstName)
setFirstName("")
setLastname("")
setEmail("")
setAdress("")
setMassage("")
setService("")
    
    };

    return (
        <>
            {/* SUCCESS MESSAGE */}
            {success && (
                <div className="overlay">
                    <div className="thankyou">
                        <div className="success-icon">✓</div>
                        <h2>Thank You, {submittedName}!</h2>
                        <p>
                            Your quote request has been entered.
                            Thank you for your interest in
                            Zuri Home Services.
                        </p>
                        <button
                            onClick={() => setSuccess(false)}
                            className="close"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* HEADER */}
            <header className="site-header">
                <div className="logo">
                    <h1>ZURI</h1>
                    <span>HOME SERVICES</span>
                </div>

                <nav className="nav">
                    <a href="#Home">Home</a>
                    <a href="#Services">Services</a>
                    <a href="#About">About Us</a>
                    <a href="#Contact">Contact</a>
                </nav>

                <button
                    className="header-button"
                    onClick={() => setCot(true)}
                >
                    Request a Quote
                </button>
            </header>

            {/* HOME */}
        <Home setCot={setCot}/>

            {/* SERVICES */}

            < Services/>

            {/* ABOUT */}
            <About rat ={setCot}/>

            {/* CONTACT */}

            <Contact/>
            
            {/* QUOTE FORM */}
            {cot && (
                <div className="overlay">
                    <div className="quote-box">
                        <h2>Request a Plumbing Quote</h2>

                        <p>
                            Tell us a little about your project
                            using the form below.
                        </p>

                        <form onSubmit={submit}>
                            <label>First Name</label>
                            <input
                                value={firstName}
                                required
                                onChange={(e) =>
                                    setFirstName(e.target.value)
                                }
                            />

                            <label>Last Name</label>
                            <input
                                value={lastName}
                                required
                                onChange={(e) =>
                                    setLastname(e.target.value)
                                }
                            />

                            <label>Email Address</label>
                            <input
                            type ="email"
                            required
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                            />

                            <label>Service Address</label>
                            <input
                        
                            required
                                value={adress}
                                onChange={(e) =>
                                    setAdress(e.target.value)
                                }
                            />

                            <label>Select a Service</label>
                            <select
                            required
                                value={service}
                                onChange={(e) =>
                                    setService(e.target.value)
                                }
                            >
                                <option value="">...Select service...</option>
                                <option>water heater</option>
                                <option>cloged drain</option>
                                <option>fixture replacement</option>
                                <option>leaking water</option>
                                <option>remodel</option>
                                <option>house repiping</option>
                            </select>

                            <label>Tell Us About Your Project</label>
                            <textarea
                                value={massage}
                                onChange={(e) =>
                                    setMassage(e.target.value)
                                }
                            />

                            <div className="form-buttons">
                                <button type="submit">
                                    Submit Request
                                </button>

                                <button
                                    type="button"
                                    className="cancel-button"
                                    onClick={() => setCot(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* FOOTER */}
            <footer className="footer">
                <h3>Zuri Home Services</h3>
                <p>
                    Dependable Plumbing. Quality Workmanship.
                </p>
                <p>
                    © {new Date().getFullYear()} Zuri Home Services.
                    All rights reserved.
                </p>
            </footer>
        </>
    );
}

export default NewPlumbing;
