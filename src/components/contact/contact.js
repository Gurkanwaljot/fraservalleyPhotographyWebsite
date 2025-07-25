import { useForm } from 'react-hook-form';
import React from 'react';
import emailjs from '@emailjs/browser';
// import ReCAPTCHA from 'react-google-recaptcha';
import '../../styles/contact/contact.css';
// import contactImg from '../../images/contactImg/contactImg.jpg'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    const { name, email, phoneNumber, message } = data;

    try {
      const templateParams = {
        name,
        email,
        phoneNumber,
        message,
      };
      await emailjs.send(
        'service_9qkwkjq',
        'template_i7czv7k',
        templateParams,
        'o2G-T7RNadEPB4g-a'
      );
      reset();
    } catch (e) {
      console.error('Failed to send message:', e);
    }
  };


  return (
      <section id="contacts" className="container">
        {/* <img src={contactImg} className='background-contact-img' /> */}
        <div className="contact-form-container">
        <h1 className="h1-title contact-form-title">CONTACT US</h1>
        <div className="border-line-div-contacts">
              <span className="border-line-contacts" />
        </div>
          <form
            id="contact-form"
            className="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              {...register('name', {
                required: { value: true, message: 'Please enter your name' },
                maxLength: {
                  value: 30,
                  message: 'Please use 30 characters or less',
                },
              })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}
            <input
              type="number"
              name="phoneNumber"
              className="input"
              placeholder="Contact Number"
              {...register('phoneNumber',{
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Invalid Contact Number',
                }
              })} 
            />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber.message}</span>}
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email address"
              {...register('email', {
                required: 'Please enter your email address',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}

            <textarea
              rows={10}
              name="message"
              className="input"
              placeholder="Message"
              {...register('message', {
                required: 'Please enter your message',
              })}
            />
            {errors.message && <span className="error">{errors.message.message}</span>}
            {/* <ReCAPTCHA
              // ref={recaptchaRef}
              sitekey='6Lep_SEqAAAAAGnxmsGaqXZFPYLpg6QO5H0tsxLi'// Ensure the site key is stored securely
            /> */}
            <button class="submit">Submit</button>
          
          </form>
        </div>
      </section>
  );
};

export default ContactForm;
