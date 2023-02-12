import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../context';

export const IndividualPokemon = ({item}) => {

    const {name, url} = item;

    const [ invPokemon, setInvPokemon ] = useState({});

    const {loading, setLoading} = useGlobalContext()

    useEffect(() =>{

        const getPokemon = async () => {
        try {
            setLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setInvPokemon(data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }}
        getPokemon();
    },[]);

    


    if(loading){
        return <h1>LOADING...</h1>
    }
    
  return (
        <div className='individual-pokemon'>
            <img className='pokemon-sprite' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${invPokemon.id}.png`} alt="" />
            <p className='pokemon-name'>{name}</p>
            <div className='pokemon-number'>{invPokemon.id}</div>
        </div>
  )
}
