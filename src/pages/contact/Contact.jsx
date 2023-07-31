import React from 'react'
import ContactForm from './ContactForm';
import Footer from '../../components/footer/Footer';
import './contact.css';

const Contact = () => {
  return (
      <div className='map-responsive '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.1183815667064!2d44.78205877586579!3d41.717964275425466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472d4fa5b02d7%3A0xced15c2c7992ceb5!2sGeoLab!5e0!3m2!1sen!2sge!4v1689411752435!5m2!1sen!2sge"
          frameborder="0" 
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          >
        </iframe>
        <ContactForm /> 
  </div>

  );
};

export default Contact;