import React, { useEffect, useState } from 'react'
import PokemonCards from './PokemonCard'

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")
    const [showAll, setShowAll] = useState(false)  

    const API = "https://pokeapi.co/api/v2/pokemon?limit=40"

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const res = await fetch(API)
                const data = await res.json()

                const detailedPokemonData = data.results.map(async (currentPokemon) => {
                    const res1 = await fetch(currentPokemon.url)
                    const data1 = await res1.json()
                    return data1;
                })

                const detailedResponses = await Promise.all(detailedPokemonData)
                setPokemon(detailedResponses)
                setLoading(false)

            } catch (error) {
                setLoading(false)
                setError(error)
            }
        };   

        fetchPokemon()
    }, []);

    // Search filter
    const searchData = pokemon.filter((currPokemon) =>
        currPokemon.name.toLowerCase().includes(search.toLowerCase())
    )

    //  ONLY SHOW 4 UNTIL CLICK SHOW ALL
    const displayedPokemon = showAll ? searchData : searchData.slice(0, 4);


    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error.message}</h2>;

    return (
        <>
            <section>

                <div className="pokemon-search">
                    <input
                        type="text"
                        placeholder="Search Pokemon"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <i class="fa-solid fa-magnifying-glass" id='mglass'></i>
                </div>

                <ul className="cards">
                    {displayedPokemon.map((currentPokemon) => (
                        <PokemonCards
                            key={currentPokemon.id}
                            pokemonData={currentPokemon}
                        />
                    ))}
                </ul>

                {searchData.length > 4 && (
                    <button
                        className="show-btn"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? "Show Less" : "Show All"}
                    </button>
                )}

            </section>
        </>
    )
}

export default Pokemon
