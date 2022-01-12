import React, { useContext } from 'react'
import FavoriteContext from '../context/favoriteContext'

const Pokemon = (props) => {
    const { pokemon } = props
    const { favoritePokemons, updateFavoritePokemon } = useContext(FavoriteContext)

    const redheart = "🧡"
    const blackheart = "🖤"  
    const heart = favoritePokemons.includes(pokemon.name) ? redheart : blackheart
    const clickHeart = (e) => {
        e.preventDefault()
        updateFavoritePokemon(pokemon.name)
    }
    const type_color = {
        bug: 'B1C12E',
        dark: '4F3A2D',
        dragon: '755EDF',
        electric: 'FCBC17',
        fairy: 'F4B1F4',
        fighting: '7D1F1A',
        fire: 'E73B0C',
        flying: 'A890F0',
        ghost: '6060B2',
        grass: '74C236',
        ground: 'D3B357',
        ice: 'A3E7FD',
        normal: 'A8A878',
        poison: '934594',
        psychic: 'ED4882',
        rock: 'B9A156',
        steel: 'B5B5C3',
        water: '3295F6'
    };
    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-img" />
            </div>
            <div className="pokemon-body">
                <div className="pokemon-middle">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="pokemon-info">
                    <div className="pokemon-type">{pokemon.types.map((type, idx) => {
                        return <div key={idx} className="pokemon-type-text" style={{
                            backgroundColor: `#${type_color[type.type.name]}`,
                            color: 'white'
                        }}>{type.type.name}</div>
                    })}
                    </div>
                    <button className="pokemon-button" onClick={clickHeart}>
                        <div className="pokemon-fav">{heart}</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon
