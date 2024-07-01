import React, { useState } from 'react';
import './Contact.css';
import video from '../../asset/branding/4779866-hd_1920_1080_30fps.mp4';
import arrow from '../../asset/ui/Up Left.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://v1.nocodeapi.com/jackies3668/google_sheets/tDDIfTJPaRQIhmfe?tabId=Sheet1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: "follow",
        body: JSON.stringify([[formData.name, formData.email, formData.message, new Date().toLocaleDateString()]])
      });
      await response.json();
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='contact-container'>
      <video className="contact-video" src={video} autoPlay muted loop type="video/mp4"></video>
      <h1>LET'S GET IN TOUCH</h1>
      <div className="contact-form">
        <div className="form-left">
          <h2>Let me turn your design into a 'Site for Sore Eyes'</h2>
          <p>Send a message and I'll get back to you.</p>
        </div>
        <div className="form-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Name'
              required
              autocomplete="off"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Email'
              required
              autocomplete="off"
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder='Message'
              rows="3"
              required
              autocomplete="off"
            ></textarea>
            <button type="submit">Send <img src={arrow} alt="" /></button>
            <div className={`popup ${showPopup ? 'unhide' : ''}`}>
              Your message has been sent!
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
