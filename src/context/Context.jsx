import { createContext, useContext } from "react";
import { useState} from "react";


const AppContext = createContext(null);

export const useAppContext = () => {
    const cotext = useContext(AppContext);
    if(cotext === undefined) {
        throw new Error('Appcontext must be within appContextProvider!')
    }
    return cotext;
};
const AppContextProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (book) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.concat(book);

        setFavorites(newFavorites);
    };

    const removeFromFavorites = (id) => {
        const oldFavorites = [...favorites];
        const newFavorites = oldFavorites.filter((book)=>book.id !== id);
        setFavorites(newFavorites);
    };

    return(
        <AppContext.Provider
         value={{ favorites, addToFavorites, removeFromFavorites,
          }}
        >
        {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
