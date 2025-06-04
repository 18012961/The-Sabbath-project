import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    const newErrors = {};
    
    if (!formData.first_name.trim()) {
      newErrors.first_name = 'First name is required';
    }
    
    if (!formData.last_name.trim()) {
      newErrors.last_name = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (formData.phone && !/^[\d\s\-()+]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(formRef.current));
    
    if (!validateForm(formData)) return;
    
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_g89w2o7',
      'template_9qkav1g',
      formRef.current,
      'oMn6rVIIRhNs2MTzN'
    )
    .then((result) => {
        console.log('Message sent:', result.text);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        formRef.current.reset();
    })
    .catch((error) => {
        console.log('Error:', error.text);
        setErrors({ submit: 'Failed to send message. Please try again.' });
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-container-gb">
      {showSuccess && (
        <div className="success-popup-gb">
          <p>Message sent successfully!</p>
        </div>
      )}
      
      <div className="contact-info-gb">
        <h1 className="contact-title-gb">Contact</h1>
        <p className="contact-subtext-gb">The sabbath album out now</p>
        <p className="contact-email-gb">Email: <a href="m.com">motsoenengfortunate3@gmail.com</a></p>
        <p className="contact-phone-gb">Phone: 1234567890</p>
      </div>
      
      <form ref={formRef} onSubmit={sendEmail} className="contact-form-gb" noValidate>
        <div className="contact-row-gb">
          <div className="input-wrapper-gb">
            <input 
              type="text" 
              name="first_name" 
              placeholder="First Name *" 
              required 
              className={`contact-input-gb ${errors.first_name ? 'input-error-gb' : ''}`} 
            />
            {errors.first_name && <span className="error-message-gb">{errors.first_name}</span>}
          </div>
          <div className="input-wrapper-gb">
            <input 
              type="text" 
              name="last_name" 
              placeholder="Last Name *" 
              required 
              className={`contact-input-gb ${errors.last_name ? 'input-error-gb' : ''}`} 
            />
            {errors.last_name && <span className="error-message-gb">{errors.last_name}</span>}
          </div>
        </div>
        <div className="contact-row-gb">
          <div className="input-wrapper-gb">
            <input 
              type="email" 
              name="email" 
              placeholder="Email *" 
              required 
              className={`contact-input-gb ${errors.email ? 'input-error-gb' : ''}`} 
            />
            {errors.email && <span className="error-message-gb">{errors.email}</span>}
          </div>
          <div className="input-wrapper-gb">
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone" 
              className={`contact-input-gb ${errors.phone ? 'input-error-gb' : ''}`} 
            />
            {errors.phone && <span className="error-message-gb">{errors.phone}</span>}
          </div>
        </div>
        <div className="input-wrapper-gb">
          <textarea 
            name="message" 
            placeholder="Leave us a message... *" 
            required
            minLength="10"
            className={`contact-message-gb ${errors.message ? 'input-error-gb' : ''}`}
          ></textarea>
          {errors.message && <span className="error-message-gb">{errors.message}</span>}
        </div>
        {errors.submit && <span className="error-message-gb submit-error-gb">{errors.submit}</span>}
        <button 
          type="submit" 
          className="contact-button-gb" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Contact;