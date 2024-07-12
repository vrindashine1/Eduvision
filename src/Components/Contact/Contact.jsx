import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8cf4a2a8-410b-44c4-9236-1a5056ad1c7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const res = await response.json();

    if (res.success) {
      setResult("Email Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(res.message);
    }
  };
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt='' /></h3>
            <p>We're here to support your academic journey and answer any questions you may have.
             Whether you're a prospective student, current student, or alumni, feel free to reach out. 
             Our team is dedicated to providing the information and assistance you need. 
            Connect with us today to learn more about our programs and services.</p>
            <ul>
                <li><img src={mail_icon}  alt=''/> info@universityexample.edu</li>
                <li><img src={phone_icon} alt='' />+1 (555) 123-4567</li>
                <li><img src={location_icon} alt='' />University Example
                   123 Academic Way
                   College Town, State 98765
                   USA

                </li>
            </ul>
        </div>
       
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name='message' rows='6' placeholder='Enter your message'></textarea>
            <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt='' /></button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact