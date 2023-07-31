import React, {useState,useEffect} from 'react';
import '../../App.css';
import Header from '../header/Header';

const SearchApp = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    useEffect (() => {
        setLoading(true);
        fetch(`https://openlibrary.org/search.json?author=tolkien`)
       
        .then((response) => response.json())
        .then((data) => setData(data))
        .then(() => setLoading())
        .catch(setError);
       
    }, []);

     if (loading){
         return <h2>Loading . . .</h2>;
     }

     if (error) {
         return <pre>{JSON.stringify(error, null, 2)} </pre>;
    }
     if (!data) {
      return null;
     }
 
     let array = data.docs;

     const searchHandler = (search) => {
         setSearch(search);
         if (search !== '') {
         const newBookList = array.filter((book) => {
          return Object.values(book)
          .join('')
          .toLowerCase()
          .includes(search.toLowerCase()) ;
        });
        setSearchResults(newBookList);
      } else {
        setSearchResults(array);

      }
 };
      // console.log(searchResults);
      return (
            <div className='container_search'> 
            <Header 
            searchKeyword={searchHandler}
              term = {search}
            />
                  {search.length < 1 ?
                <ul className='list'>
                    {array.map((item, i) => {
                     return(
                      <li key={i} className='list_item'>
                        <i className='fa fa-book'></i>
                        &nbsp;
                         {item.title}
                      </li>
                       );                   
                    })}   
                </ul>
                : 
                <ul className='list'>
                {searchResults.map((item, i) => {
                 return(
                  <li key={i} className='list_item'>
                    <i className='fa fa-book'></i>
                    &nbsp;
                     {item.title}
                  </li>
                   );                   
                })}   
               </ul>
                }
            </div>
      );
    }
    // console.log(data.docs[0].title);
    // {data.docs[0].title} 18:00 ze remove  
export default SearchApp;