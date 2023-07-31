import React , {useState, useEffect} from 'react';
import '../../App';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BOOK_DETAILS_URL } from '../../API';



const BookDetails = () => {

  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${ BOOK_DETAILS_URL}/${id}`)
     .then(res=> {
      setBook(res.data);
     })
     .catch(err => console.log(err))

  }, [id])

  return (
    <div className='book_details'>
      <div className='book_img'>
        <img  src= {book?.image_url}  alt='#'/>
      </div>
        <div className="detail-text">
          <div className='detail-book-titles'>
            <h2> {book?.title} </h2>
          </div>
          <div className='book_description'>
            <p className='description-text'> 
            {book?.description} 
            </p>
            <div className=' detail-titles-author'>
              <h2 className='author'>Authors</h2>
              <p> {book?.authors} </p>
            </div>
            <h2 className='genres'>Genres</h2>
            <p className='description-genres'>
              {book?.genres} 
            </p>
         </div>
        </div>
    </div>
  )
}

export default BookDetails;

