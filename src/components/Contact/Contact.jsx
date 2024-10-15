import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import $ from 'jquery'; // jQuery for AJAX handling

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false); // New state for submission status
  const [error, setError] = useState(false); // State for handling any errors

  const sendEmail = (e) => {
    e.preventDefault();

    var formData = new FormData(form.current);
    formData.append('service_id', 'service_iedi5mj'); // Replace with your service ID
    formData.append('template_id', 'template_f282ynm'); // Replace with your template ID
    formData.append('user_id', 'w4r1LlSRwHM-h2eBf'); // Replace with your public key

    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
    }).done(function () {
      setSubmitted(true);
      setError(false);
      form.current.reset(); // Optionally reset the form after successful submission
    }).fail(function (error) {
      setError(true);
      console.log('Oops...', error);
    });
  };

  return (
    <div id="contact" className={styles.container}>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <h2 className={styles.title}>Contact Us</h2>
        <label className={styles.label}>Name</label>
        <input type="text" name="user_name" className={styles.input} required />
        
        <label className={styles.label}>Email</label>
        <input type="email" name="user_email" className={styles.input} required />
        
        <label className={styles.label}>Message</label>
        <textarea name="message" className={`${styles.input} ${styles.textarea}`} required />
        
        <input type="submit" value="Send" className={styles.button} />
      </form>

      {/* Show success or error message */}
      {submitted && !error && (
        <p className={styles.successMessage}>Your message was sent successfully!</p>
      )}
      {error && (
        <p className={styles.errorMessage}>Oops! Something went wrong. Please try again.</p>
      )}
    </div>
  );
};

export default Contact;
