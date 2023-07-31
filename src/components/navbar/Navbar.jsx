import React from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import '../../App.css';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand me-5" to="/home">
      <img src= {logo} alt='logo' style={{ width:'40px' }} /> 
    </Link>
        <button className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase me- "
               aria-current="page" 
              to="/books">
              Books&nbsp; 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase me-3" 
              to="/about">about 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase me-3 "
              to="/contact">contact 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase me-3 "
              to="/login">login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase me-3 " 
              to="/sale">Sale 
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase me-3 " 
              to="/favorites">Wishlist <i class="fa-regular fa-heart"></i>
              </Link>
            </li>
            <li className="nav-item ">
              <select className='nav-link border-0 ml-1'>
                <option value='en'>English</option>
                <option value='ge'>ქართული</option>
              </select>
            </li>
          </ul>
      </div>
    </div>
</nav>
  );
};

export default Navbar;










   {/* <div className='navbar2'>
        <div className='icon_fav_cart'> */}
          {/* <Link to='/favorites'>
            <button style={{ width: '48px', height: '48px', position: "relative"}}
            variant= " outline-primary" 
             className="rounded-circle">
            <i class="fa-solid fa-heart"></i>
            <div className='rounded-circle bg-danger d-flex justify-content-center
            align-items-center' 
            style={{
               color: 'white', 
               width: '20px',
              height: '20px',
              bottom: '0',
              right: '0',
              transform: "translate(25%, 25%')",
              position: 'absolute',
              }}>3</div>
          </button>
          </Link> */}
{/*   
        </div>
    </div> */}

