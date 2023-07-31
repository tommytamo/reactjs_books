import React from 'react';
import { useState, useEffect } from 'react';
import { API_SALE} from '../../API';
import axios from 'axios';
import Loader from '../../components/loader/Loader';
import { useNavigate } from 'react-router-dom';

const Sale = () => {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate ();
  useEffect(() => {
    axios.get(API_SALE)
    .then(res=> {
      console.log(res.data)
      setBooks(res.data)
     })
     .catch(err=>console.log(err))
    }, [])

 return (
  
    <div className='container'>
             <button className='sale_btn' >-50%</button>
            
    <div className='book_list'>
      {books.map ((book) => (
        <div key={book.id} className='book'>
          <div>
             <h4> {book.title} </h4>
          </div>
          <div>
             <img src={book.image_url} alt="#" 
             onClick={() => navigate(`/books/${book.id}`)} 
             />
          </div>
        <button className='book_price'>$50.00 $25.00</button> 
        <hr />
        </div>
             
        
      ))}
<Loader />
    </div>
    </div>
   
  
 )

  
}

export default Sale
