import "./MultiInputForm.css"
import { useState } from "react";

function MultiInputForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [interests, setInterests] = useState([])
    const [location, setLocation] = useState("")
    const [error, setError] = useState("")

    const handleInterestsCheckbox = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            setInterests([...interests, value]);
        } else {
            setInterests(interests.filter((interest) => interest !== value));
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name && !email && !gender && interests.length === 0 && !location) {
            setError("You can not submit an empty form!");
            return;
        }

        if (name.length < 3) {
            setError("Name must be at least 3 charachters long.");
            return
        };

        if (!validateEmail(email)) {
            setError("Please enter a valid form of an email.");
            return
        };

        if (!gender) {
            setError("Please select your gender.");
            return
        };

        if (interests.length === 0) {
            setError("Please select at least one interest.");
            return
        };

        if (!location) {
            setError("Please select your location.");
            return;
        };

        setError("");
        alert(`Form submitted:\nName: ${name}\nEmail: ${email}\nGender: ${gender}\nInterests: ${interests.join(", ")}\nLocation: ${location}`);
    };

    return (
        <div className="parentContainer">
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h3>Plase insert your name:</h3>
                        <label>Name:
                            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                        </label>
                    </div>


                    <div>
                        <h3>Please insert your email:</h3>
                        <label> Email:
                            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </label>
                    </div>


                    <div>
                        <h3>Select your gender:</h3>
                        <label>
                            <input type="radio" name="gender" value={"male"} checked={gender === "male"} onChange={(event) => setGender(event.target.value)} />
                            Male
                        </label>
                        <label>
                            <input type="radio" name="gender" value={"female"} checked={gender === "female"} onChange={(event) => setGender(event.target.value)} />
                            Female
                        </label>
                    </div>
                    
                    <h3>Please select at least one of your interests:</h3>

                    <div className="interests">
                        
                        <label>
                            <input type="checkbox" value={"sports"} checked={interests.includes("sports")} onChange={handleInterestsCheckbox} />
                            Sports
                        </label>

                        <label>
                            <input type="checkbox" value={"reading"} checked={interests.includes("reading")} onChange={handleInterestsCheckbox} />
                            Reading
                        </label>

                        <label>
                            <input type="checkbox" value={"writing"} checked={interests.includes("writing")} onChange={handleInterestsCheckbox} />
                            Writing
                        </label>

                        <label>
                            <input type="checkbox" value={"singing"} checked={interests.includes("singing")} onChange={handleInterestsCheckbox} />
                            Singing
                        </label>

                        <label>
                            <input type="checkbox" value={"dancing"} checked={interests.includes("dancing")} onChange={handleInterestsCheckbox} />
                            Dancing
                        </label>

                        <label>
                            <input type="checkbox" value={"art"} checked={interests.includes("art")} onChange={handleInterestsCheckbox} />
                            Art
                        </label>

                        <label>
                            <input type="checkbox" value={"fashion"} checked={interests.includes("fashion")} onChange={handleInterestsCheckbox} />
                            Fashion
                        </label>

                        <label>
                            <input type="checkbox" value={"socialMedia"} checked={interests.includes("socialMedia")} onChange={handleInterestsCheckbox} />
                            Social Media
                        </label>

                    </div>


                    <div>
                        <label htmlFor="locationSelect"><h3>Select your location:</h3></label>
                        <select id="locationSelect" value={location} onChange={(event) => setLocation(event.target.value)}>

                            <option value="">Select from the dropdown list</option>
                            <option value="northAmerica">North America</option>
                            <option value="southAmerica">South America</option>
                            <option value="europe">Europe</option>
                            <option value="asia">Asia</option>
                            <option value="africa">Africa</option>
                            <option value="oceania">Oceania</option>
                        </select>
                    </div>

                    {error && <p style={{ color: "red", margin: "5px"}}>{error}</p>}
                    <button type="submit">Submit</button>

                </form>
            </div>
        </div>
    )
}

export default MultiInputForm