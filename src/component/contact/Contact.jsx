import React, {useState} from 'react';
import './Contact.css';
import video from '../../asset/branding/4779866-hd_1920_1080_30fps.mp4';
import arrow from '../../asset/ui/Up Left.png'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., sending data to server)
    console.log(formData); // Placeholder for demonstration, replace with actual submission code
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
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
            />


            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='Email'
              required
            />

        
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder='Message'
              rows="3"
              required
            ></textarea>

            <button type="submit">Send <img src={arrow} alt="" /></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
