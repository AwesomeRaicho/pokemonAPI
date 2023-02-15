//import React, { useEffect, useState } from 'react';

import { useGlobalContext } from '../context';

export const IndividualPokemon = ({pokemon, givePokemonInfo}) => {

    const {capFirst} = useGlobalContext();
    
  return (
        <div className='individual-pokemon' onClick={() => givePokemonInfo(pokemon)}>
            <img className='pokemon-sprite' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="" />
            <p className='pokemon-name'>{capFirst(pokemon.name)}</p>
            <div className='pokemon-number'>{pokemon.id}</div>
        </div>
  )
}
