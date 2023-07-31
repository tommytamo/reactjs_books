import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-white shadow ">
        <div className="container-fluid pt-2" >
          <div className="row footer-area">
            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
              <h6>About Us</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
              <h6>Contact</h6>
              <p>Stay update with our latest</p>
              <div className="d-inline-flex align-items-center">
                <input className="form-control"
                 name="EMAIL"
                 placeholder="Enter Email " 
                 required="" type="email">
                </input>
                <button className="click-btn btn btn-default bg-success">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
             
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-5">
              <h6>Follow Me on</h6>
                <div className="social"> 
                    <i className='fab fa-linkedin'></i>
                    <i className='fab fa-twitter-square'></i>
                    <i class='fab fa-google'></i>
                </div>

            </div>
          </div>
        </div>
        <div className="text-center text-white bg-dark p-4">
        Book Store App 2023&copy - All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
export default Footer;