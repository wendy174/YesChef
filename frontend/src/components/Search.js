import React from 'react';
import { input , icon } from 'semantic-ui-react'

// should we import NavBar?

function Search ({searchItem, onChangeSearch}) {

    // helper function for input change
    const handleChange = (e) => {
        onChangeSearch(e.target.value)
    }

    return (
        <>
            {/* <div class="input-group">
                <div class="form-outline">
                <input
                    value={searchItem}
                    onChange={handleChange}
                    type="text"
                    placeholder="Search by recipe name"
                    class="form-control"/>
                </div>
            </div> */}
            <div class="ui search">
                <div class="ui icon input">
                    <input
                    class="prompt"
                    type="text"
                    placeholder="Search Recipes..."
                    value={searchItem}
                    onChange={handleChange}/>
                    <i class="search icon"></i>
                </div>
            </div>
        </>
    )
}

export default Search;