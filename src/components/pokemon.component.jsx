import React, {useEffect, useState} from 'react';
import { useGlobalContext } from '../context';

import { IndividualPokemon } from './individual-pokemon.component';

const Pokemon = ({pokemon, givePokemonInfo}) => {




  // do all calls here to sort and give the pokemons in order

  const [ invPokemon, setInvPokemon ] = useState([]);

  const {loading, setLoading, insertionSort} = useGlobalContext();



  useEffect(()=>{
    const getFullPokemon = async () =>{
      try {
        setLoading(true);
        const getFullPokemons = pokemon.map(async (value) => {
          const response = await fetch(`${value.url}`);
          return await response.json()
        });
        
        const data = await Promise.all(getFullPokemons);

        const getFullPokemons2 = data.map(async (value) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value.id}`);
        return await response.json();
        });

        const data2 = await Promise.all(getFullPokemons2);




        setInvPokemon(insertionSort(data2))
        setLoading(false);
        
      } catch (error) {
        console.log(error)
      }

    } 
    
    getFullPokemon();
    
  },[pokemon, loading, setLoading, insertionSort]);





  return (
      <section>
        <div className='section-title'>
          <h1 >Pokemon <br /> from the region</h1>
        </div>

        <div className='pokemon-container'>
          {insertionSort(invPokemon).map((value, index)=>{
            return <IndividualPokemon key={index} pokemon={value} givePokemonInfo={givePokemonInfo}/>;
          })}
          
        </div>
      </section>
  )
}

export default Pokemon;