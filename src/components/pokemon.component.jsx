import React,{useState, useEffect } from 'react'
import { useGlobalContext } from '../context';
import { IndividualPokemon } from './individual-pokemon.component';

const Pokemon = () => {


  const { pokemon, loading } = useGlobalContext();

  if(loading){
    return (
      <h1>LOADING...</h1>
    )
  }

  console.log(pokemon)
  return (
    <div className='pokemon-container'>

      {pokemon.results.map((value, index)=>{
        return <IndividualPokemon key={index} item={value}/>;
      })}

      {/* <IndividualPokemon item={pokemon.results[0]}/> */}
      
    </div>
  )
}

export default Pokemon;