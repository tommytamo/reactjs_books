import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import { API_URL } from '../API';
import axios from 'axios';
import Loader from './loader/Loader';
import { useAppContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';


const BookList = () => {
  const [books, setBooks] = useState([]);

  //  აქ გვჭირდება რომ ამოვიღო values,რომელიც გადავეცით (useAppContext ფაილში)კომპონენტს
  //  AppContext.Provider value={{favorites, addToFavorites, removeFromFavorites  }}
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext ();
  // console.log('favorites are', favorites);

  const navigate = useNavigate ();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    // Some() მეთოდი ამოწმებს, გადის თუ არა მასივის მინიმუმ ერთი ელემენტი მოცემული ფუნქციის მიერ განხორციელებულ ტესტს.
    // ანუ true false ... არ ცვლის მასივს
    return boolean;
  };
  useEffect(() => {
  axios.get(API_URL).then(res=> {

    console.log(res.data)
    setBooks(res.data)
  }).catch(err=>console.log(err))
 }, [])
  return (
    <div className='container'>

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


          <div className='booklist_btn'>
            {favoritesChecker(book.id) ? (
            <button onClick={() => removeFromFavorites(book.id)}>
            Remove from Favorites
            </button>
            ) : (
            <button onClick={() => addToFavorites(book)}>
            Add to Favorites
            </button>
           )}
          </div>
        </div>
        
      ))}
<Loader />
    </div>
    </div>
   
  );
};

export default BookList

