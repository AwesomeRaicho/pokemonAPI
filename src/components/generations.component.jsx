import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { useGlobalContext } from '../context';

const Generations = () => {

    // Deconstructing from context
    const {generations, loading, setLoading} = useGlobalContext();

    const [images, setImages] = useState([]);


    useEffect( ()=>{
        setLoading(true);
        // Fetching images of first 3 starter pokemons.////////////////
        const getStarterPokemons = async () => {
            // GET THE FIRST 3 of the generation
            const sets = generations.map((value)=>{
                const tempSet = []
                for (let i = 0; i < 3; i++) {
                    tempSet.push(value.pokemon_species[i].name);
                }
                return tempSet; 
            });
    
            // fetch the individual pokemon to get image URL
            const fullPokemon = sets.map( async (set)=>{
                const tempSet = set.map( async (pokemon)=>{
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                    return response.json();
                })
                return await Promise.all(tempSet);
            })
    
            const finalFullPokemons = await Promise.all(fullPokemon);
    
            // filter pokemons to asign the generation and url
            const urls = finalFullPokemons.map((set,index)=>{
    
                const images = set.map((pokemon)=>{
                    return pokemon.sprites.front_default;
                })
    
                return {
                    generation: index+1,
                    images,
                }
    
               
            });
    
            //console.log(urls)
            // set the urls to ther state
            setImages(urls);
            setLoading(false)
        }
    
    
        getStarterPokemons();
    },[generations,setLoading])


    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className='generations-container'>
            
            {generations.map((value) => {
                const {id, name, main_region, version_groups} = value;
                return (
                    <Link to={`/generation/${name}`} key={id} className='inv-generation-link'>
                        <div className='generation-link-container'>

                            <div className="starters-image-container">
                                {images.map((set)=>{
                                    if(set.generation === value.id){
                                        return set.images.map((url, index)=>{
                                            return <img key={index} className='starter-pokemons' src={`${url}`} alt="pokemon" />
                                        })
                                    }
                                    return null;
                                })}
                            </div>
                            
                         
                            <h1 className='generation-link-name'>{name}</h1>
                            
                            <h2 className='generation-link-region'>The {main_region.name} region</h2>
                            <h3 className='games-titles'>Games: </h3>
                            <ul className='versions'>
                                {version_groups.map((value,index) =>{
                                    return <li key={index} className='generation-link-versions'>{value.name}</li>
                                })}
                            </ul>
                        </div>
                    </Link>
                )
            })}


        </div>
    )
}

export default Generations;