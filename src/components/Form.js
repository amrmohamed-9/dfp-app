import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import './css/Form.css';
import { useLocation } from 'react-router';

function Form() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        jobTitle: "",
        sector: "",
        phone: "",
        email: "",
        message: "",
        participation: []
    });
    useEffect(() => {
            if (location.hash === '#form') {
                const element = document.getElementById('form');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, [location]);
    const [status, setStatus] = useState("");

    const formRef = useRef();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
        setFormData((prev) => ({
            ...prev,
            participation: checked
            ? [...prev.participation, value]
            : prev.participation.filter((item) => item !== value)
        }));
        } else {
        setFormData({ ...formData, [name]: value });
        }
    };

    const handlePhoneChange = (value) => {
        setFormData((prev) => ({ ...prev, phone: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
        // .sendForm(
        //     "service_r0lm6bh",    
        //     "template_imjt73a",   
        //     formRef.current,
        //     "1iCr5bBYMkIzPlO-a"   
        // )
        .sendForm(
            "service_x4el0yz",    
            "service_x4el0yz",   
            formRef.current,
            "ejMXt8leDjKOnGrV4"   
        )
        .then(
            (result) => {
            setStatus("Email successfully sent!");
            e.target.reset();
            setFormData({
                name: "",
                company: "",
                jobTitle: "",
                sector: "",
                phone: "",
                email: "",
                message: "",
                participation: []
            });
            },
            (error) => {
            console.log("Failed to send email:", error.text);
            setStatus("Failed to send email, Try again");
            }
        );
    };

    return (
        <section className="reg-form" id="form">
            <div className="container">
                <h2 className="mb-4 font-q">Register Now</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <div className="mb-3">
                            <input 
                            type="text" 
                            name="name" 
                            className="form-control" 
                            placeholder="Name"
                            required 
                            onChange={handleChange} 
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <input 
                            type="text" 
                            name="company" 
                            className="form-control" 
                            placeholder="Company Name"
                            required 
                            onChange={handleChange} 
                            />
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col">
                        <div className="mb-3">
                            <input 
                            type="text" 
                            name="jobTitle" 
                            className="form-control" 
                            placeholder="Job Title"
                            required 
                            onChange={handleChange} 
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <input 
                            type="text" 
                            name="sector" 
                            placeholder="Sector"
                            className="form-control" 
                            required 
                            onChange={handleChange} 
                            />
                        </div>
                    </div>
                </div>
                <div className="row d-flex flex-column flex-md-row">
                    <div className="col">
                    <div className="mb-3">
                        <PhoneInput
                            country={'eg'} 
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            inputStyle={{
                            width:"100%",
                            fontSize: "14px",
                            height: "35px"
                            }}
                            inputProps={{ name: "phone" }}
                            required
                        />
                        <input 
                            type="hidden" 
                            name="phone" 
                            value={formData.phone} 
                        />
                        </div>
                    </div>
                    <div className="col">
                        <div className="mb-3">
                            <input 
                            type="email" 
                            name="email" 
                            className="form-control" 
                            placeholder="Your Email"
                            required 
                            onChange={handleChange} 
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <textarea
                    name="message"
                    className="form-control"
                    placeholder="Leave your message"
                    required
                    onChange={handleChange}
                    style={{ resize: "none" ,width:"100%",height:"230px"}}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Participation Type:</label>
                    <div>
                    <div className="form-check">
                        <input 
                        className="form-check-input" 
                        type="checkbox" 
                        name="participation" 
                        value="Attending" 
                        onChange={handleChange} 
                        />
                        <label className="form-check-label">Attending</label>
                    </div>
                    <div className="form-check">
                        <input 
                        className="form-check-input" 
                        type="checkbox" 
                        name="participation" 
                        value="Sponsor" 
                        onChange={handleChange} 
                        />
                        <label className="form-check-label">Sponsor</label>
                    </div>
                    <div className="form-check">
                        <input 
                        className="form-check-input" 
                        type="checkbox" 
                        name="participation" 
                        value="Speaker" 
                        onChange={handleChange} 
                        />
                        <label className="form-check-label">Speaker</label>
                    </div>
                    </div>
                </div>
                <button type="submit" className="form-btn">
                    Submit
                </button>
                </form>
                {status && <p>{status}</p>}
            </div>
        </section>
    );
}

export default Form;
