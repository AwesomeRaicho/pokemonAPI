//import React, { useEffect, useState } from 'react';

//import { useGlobalContext } from '../context';

export const IndividualPokemon = ({pokemon}) => {

    

    
  return (
        <div className='individual-pokemon'>
            <img className='pokemon-sprite' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="" />
            <p className='pokemon-name'>{pokemon.name}</p>
            <div className='pokemon-number'>{pokemon.order}</div>
        </div>
  )
}
