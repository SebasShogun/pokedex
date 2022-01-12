import React, { useState } from 'react'

const Searchbar = (props) => {
    const { onSearch } = props
    const [search, setSearch] = useState("")

    const onChange = (e) => {
        setSearch(e.target.value)
        if (e.target.value.length === 0) {
            onSearch(null)
        }
    }

    const onClick = async (e) => {
        onSearch(search)
    }
    
    const handleKeypress = (e) => {
        //it triggers by pressing the enter key
        if (e.key === 'Enter') {
        onClick()
        }
    };
    
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input id="search_enter" placeholder="Buscar Pokémon..." onChange={onChange} onKeyPress={handleKeypress}/>
            </div>
            <div className="searchbar-btn">
                <button id="button_enter" onClick={onClick}>Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar
