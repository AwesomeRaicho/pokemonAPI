import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Pokemon from './pokemon.component';

import PokemonPage from './individual-pokemon-modal';

const Generation = () => {

    const [gen, setGen] = useState(null)
    const {genId} = useParams();

    // states fot activating modal and give information

    const [ pokemonPage, setPokemonPage ] = useState(null);
    const [ pokeModalShowing, setPokeModalShowing ] = useState(false)

    const givePokemonInfo = (pokemon) => {
        setPokeModalShowing(true);
        document.body.style.overflow = "hidden";
        setPokemonPage(pokemon);
    }
    const closePokemonModal = () => {
        setPokeModalShowing(false)
        document.body.style.overflow = "auto";
    }



    const {getOneGeneration, capFirst, genNumber} = useGlobalContext();

    useEffect(()=>{
        const fonundGeneration = getOneGeneration(genId);
        if(fonundGeneration){
            setGen(fonundGeneration);
        }
    },[gen, genId, getOneGeneration, pokemonPage, pokeModalShowing]);


    if(!gen){
        return (
            <h1>LOADING</h1>
        )
    }

  return (
        <div className='individual-region-container'>

            {/* HERO */}
            <div className="hero-container">
                <div className='generation-hero'>
                    <div className='hero-info-container'>
                        <h1 className='hero-generation'>{genNumber(capFirst(gen.name))}</h1>
                        <h2 className='hero-region'>{capFirst(gen.main_region.name)}</h2>
                        <div className="hero-list">
                            <p className='hero-games-label'>Games</p>
                            <ul >
                                {gen.version_groups.map((value, index)=>{
                                    return <li key={index}>{capFirst(value.name)}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='hero-map-container'>
                        <img className='hero-map' src={`/images/${gen.main_region.name}.jpg`} alt={gen.main_region.name} />
                    </div>
                </div>
            </div>

            {/* POKEMONS */}

            <Pokemon pokemon={gen.pokemon_species} givePokemonInfo={givePokemonInfo}/>
            {pokeModalShowing && <PokemonPage {...pokemonPage} closePokemonModal={closePokemonModal}/>}


        </div>

  )
}

export default Generation;
