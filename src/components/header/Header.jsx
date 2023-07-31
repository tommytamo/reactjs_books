import React from "react";
import { useNavigate } from "react-router-dom";
import bg_girl from '../../images/bg.jpg';
import  SearchForm from '../search/SearchForm '
import "./header.css";


const Header = ({searchKeyword, term}) => {
  const navigate = useNavigate();
  return (
    <>
      <main>
          <div className="header"> 
            <div className='header-content flex flex-c text-center text-white'>
               <div class="row height d-flex justify-content-center align-items-center">
                  <div class="col-md-8">
                  <h2> Discover Books </h2> 
                  <SearchForm  searchKeyword={searchKeyword} term={term} />
                  <div className="potter_text">
                    <p className="harry_quotes">
                      It is our choices, Harry, that show what we truly are, far more than our abilities" <br />
                      "It does not do to dwell on dreams and forget to live" ... <br />
                      “Every human life is worth the same, and worth saving.”
                    </p>
                  </div>
                 </div>
               </div>
             </div>
          </div>
      </main> 
    </>
  );
};
export default Header ;