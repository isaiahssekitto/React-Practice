import { useState } from 'react'
import './Reg.css'

function RegForm() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [age, setAge] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [country, setcountry] = useState("")
    const [phone, setPhone] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault()

        if(firstName===""){
            alert("First Name required")
            return
        }

        if(lastName ===""){
            alert("Last Name Required")
            return
        }
        if(phone===""){
            alert("phone number is requred")
        }
        if (phone.length < 10) {
            alert("phone must have atleast 10 digits")
        return}


        if (age===""){
            alert("age is required")
            return
        }
            setSubmitted(true)
        }
    return (
        <>
            <form className="fomu" onSubmit={handelSubmit}>
                <h1>Registration Form</h1>
                <label>First Name</label>
                <input
                    placeholder='First name'
                    type='text'
                    value={firstName}
                    onChange={(e) => {
                        const first = e.target.value

                        if (!/^[A-Za-z]+$/.test(first)) {
                            alert("Must be letters only")

                        } else { setFirstName(first) }
                        
                    }}
                />

                <label>Last Name</label>
                <input placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => {
                        const Love = e.target.value
                        if (/^[A-Za-z]+$/.test(Love)) {
                            setlastName(Love)
                        } else { alert("must contain only letters") }
                    }}
                />
                <label>Email</label>
                <input
                    placeholder="email adress"
                    type="email" />
                <label>Phone number</label>
                <input
                    type="tel"

                    value={phone}
                    onChange={(e) => {
                        const number = e.target.value

                        if (/^[0-9]*$/.test(number)){
                            setPhone(number)
                        }
                            else{
                                alert ("tel must numbers only")
                            }
                    }
                    }
                />
                <label>Age</label>
                <input type="number"
                    value={age}

                    onChange={(e) => {
                        const lan = e.target.value
                        setAge(lan)
                    }}
                />

                <label>Sex</label>
                <div>
                    <label>
                        <input type='radio' name='sex' />
                        Male</label>

                    <label>
                        <input type='radio' name='sex' />
                        Female</label>
                </div>
                <label>Country of Origin</label>

                <select>
                    <option>--Select your county--</option>
                    <option>Uganda</option>
                    <option>Kenya</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Rwanda</option>
                    <option>Somalia</option>
                    <option>Congo</option>
                    <option>Ethiopia</option>
                    <option>Mali</option>
                    <option>Tanzania</option>
                </select>

                {submitted && <p>registration submitted successfully!</p>}
                <button>Submit</button>
            </form>

        </>
    )
}
export default RegForm

