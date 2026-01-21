import React from "react";
import '../Styles/details.css'

const PokemonDetails = ({ pokemon, onClose }) => {

    return (
        <div className="pokemon-modal" onClick={onClose}>
            <div
                className="pokemon-modal-content"
                onClick={(e) => e.stopPropagation()}>
                    
                <button className="close-btn" onClick={onClose}>✕</button>

                <img className="modal-img" src={
                    pokemon.sprites.other.dream_world.front_default ||
                    pokemon.sprites.front_default
                }
                    alt={pokemon.name} />

                <h2>{pokemon.name}</h2>

                <p><b>Height:</b> {pokemon.height}</p>
                <p><b>Weight:</b> {pokemon.weight}</p>
                <p><b>Base Experience:</b> {pokemon.base_experience}</p>

                <p>
                    <b>Types:</b>{" "}
                    {pokemon.types.map(t => t.type.name).join(", ")}
                </p>

                <p>
                    <b>Abilities:</b>{" "}
                    {pokemon.abilities.map(a => a.ability.name).join(", ")}
                </p>
            </div>
        </div>
    );
};

export default PokemonDetails;
