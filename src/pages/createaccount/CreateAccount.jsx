import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  
    return (
      <div className="app" >
        <div className='login'>
          <h1> CreateAccount </h1>
          <div className='container'>
            <form>
            <label  htmlFor='name'>Full name</label>
              <input name="name" id="name" placeholder="full name"/>
              <label>E-mail</label>
              <input type='email' placeholder='Enter your email' />
              <label>Password</label>
              <input type='password' placeholder='Enter your password' />
              <button>Log In</button>
            </form>
            <Link to={`/login`}>Back Account</Link>
          </div>
          <div className='theme-toggle'>
            <h2>Light Theme</h2>
            <i  class='fas fa-toggle-on'></i>
          </div>
        </div>
      </div>
    );   

  
}

export default CreateAccount
