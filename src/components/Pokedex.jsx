import React from 'react'
import Pagination from './Pagination'
import Pokemon from './Pokemon'

const Pokedex = (props) => {
    const { pokemons, page, setPage, total, loading } = props
    
    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0)
        setPage(nextPage)
    }
    
    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1)
        setPage(nextPage)
    }

    return (
        <div>
            <div className="header-pagination">
                <h1>Pokédex</h1>
                <div className="pagination-container">
                    <Pagination page={page + 1} totalPages={total} onLeftClick={lastPage} onRightClick={nextPage} />
                </div>
            </div>
            {loading ?
            <div className="wrapper"><div className="pokeball"></div><div className="pokeball"></div><div className="pokeball"></div></div>
            :
            <div className="pokedex-grid">
                {pokemons.map((pokemon, idx) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name} />
                })}
            </div>
            }
        </div>
    )
}

export default Pokedex
