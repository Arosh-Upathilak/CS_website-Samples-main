import React, { useState }  from "react";
import './contactSection.css';

const ContactSection = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
      };

    return (
        <div className="contact">
            <div className="contactForm_container"> 
            <form onSubmit={handleSubmit}>
                <div className="contactUs_inputMain">
                    <label htmlFor="name" className="contactUs_label">Your Name</label>
                    <input className="contactUs_input"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </div>
                <div className="contactUs_inputMain">
                    <label htmlFor="email" className="contactUs_label">Your Mail</label>
                    <input className="contactUs_input"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </div>
                <div className="contactUs_inputMain">
                    <label htmlFor="subject" className="contactUs_label">Subject</label>
                    <input className="contactUs_input"
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    />
                </div>
                <div className="contactUs_inputMain">
                    <label htmlFor="message" className="contactUs_label">Your Message</label>
                    <textarea className="contactUs_input"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                   
                    />
                </div>
                <div className="sendButton_container">
                <button className="readMore_button">Send</button>
                </div>
                
            </form>
            </div>
            
        </div>
    );
    };

export default ContactSection;
