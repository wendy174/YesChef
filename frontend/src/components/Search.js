import React from 'react';

// should we import NavBar?

function Search ({searchItem, onChangeSearch}) {

    // helper function for input change
    const handleChange = (e) => {
        onChangeSearch(e.target.value)
    }

    return (
        <>
            <div class="input-group">
                <div class="form-outline">
                <input
                    value={searchItem}
                    onChange={handleChange}
                    type="text"
                    placeholder="Search by recipe name"
                    class="form-control"/>
                </div>
            </div>
        </>
    )
}

export default Search;