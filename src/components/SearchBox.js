import React from 'react';

const SearchBox = ({searchChange}) => {
        
        return (
            <input 
                className="input-reset b--black-20 pa2 mb2" 
                type="search" 
                placeholder="Filter by series/name"
                onChange = {searchChange}
            />
        )
}

export default SearchBox;