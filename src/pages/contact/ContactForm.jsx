import React from 'react'
import { useFormik } from 'formik';
import './contact.css'

const ContactForm = () => {

   const formik = useFormik ({
    initialValues: {
        name: '' ,
        email: '',
        number: ''
    },
    onSubmit: values => {
        console.log('Form data', values)
    }
   })
   
   console.log('Form values', formik.values)
  return (
    <div className='fomik-box'>
        <form  className='flex-outer'
            onSubmit={formik.handleSubmit}>
        <label htmlFor="name"> NAME </label>
        <input type="text" name="name" id="name" 
            placeholder='Enter your name:'
            onChange={formik.handleChange}
            value={formik.values.name}
        />

            <label htmlFor="email">EMAIL </label>
        <input type="email" name="email" id="email" 
            placeholder='Enter your email here'
            onChange={formik.handleChange}
            value={formik.values.name}
         />

            <label htmlFor="number">PHONE </label>
        <input type="number" name="number" id="number"
            placeholder='Enter your phone here'
            onChange={formik.handleChange}
            value={formik.values.name}
        />
            <label> 
                 <button className='submit_btn' type='submit'>  Submit </button> </label>
        </form>
    </div>
  )
}

export default ContactForm;