import React from 'react';
import { useAppContext } from '../../context/Context';
import '../../App';
import BookDetails from '../bookdatails/BookDetails';


const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites} = useAppContext();

  const favoritesChecker = (id) => {
    const Checker = favorites.some((book) => book.id === id);

    return Checker;
  };
  return (
    <div className="fav-page">
      <div className="favorites">
        {favorites.length > 0 ? (
          favorites.map((book) => {
            return (
              <div key={book.id} className="fav-books">
                <div>
                  <img
                    className="fav-book-img"
                    src={book.image_url}
                    alt={`Cover of ${book.title}`}
                  />
                </div>
                

                <div>
                  <div className="fav-book-title">
                    <span> {book.title}</span>
                  </div>

                  <div className="booklist_btn">
                    {favoritesChecker(book.id) ? (
                      <button onClick={() => removeFromFavorites(book.id)}>
                        Remove from Favorites
                      </button>
                    ) : (
                      <button onClick={() => addToFavorites(book)}>
                      
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="favorite-books-empty">
            <h1>You don't have any favorite books yet !</h1>
          </div>
        )}
      </div>
    
    </div>
  );
};

export default Favorites;







