import React, { useContext } from 'react'
import FavoriteContext from '../context/favoriteContext'

const Navbar = () => {

    const {favoritePokemons} = useContext(FavoriteContext)
    const imgHead = "https://fontmeme.com/permalink/220108/1a247c1fb56f1a666cbd5c1dd8f6b82c.png"

    return (
        <nav>
            <div />
            <div>
                <img src={imgHead} alt="Pokédex Sebastián App" className="navbar-image" />
            </div>
            <div className="fav-container">
            🧡 {favoritePokemons.length}
            </div>
        </nav>
    )
}

export default Navbar
