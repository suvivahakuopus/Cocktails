import React from 'react'
import CocktailList from './component/CockTailList';
import SearchInput from './component/SearchInput';

    const Cocktails = () => {
    return (
        <div>
            <SearchInput />
            <CocktailList />
            
        </div>
    );
}

export default Cocktails;
