import React from 'react';

function Search ({searchKeyword, term} )  {
   function handleSearch (e) {
    searchKeyword(e.target.value);
   }
  return (
    <>
        <input 
        className='form-control'
        type='text' 
        value={term}
        placeholder='Enter a book name'
        onChange={handleSearch}
        />
    </>
  )
}
export default Search
