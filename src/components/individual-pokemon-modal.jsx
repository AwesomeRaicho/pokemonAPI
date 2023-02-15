
import {FaTimes} from 'react-icons/fa';
import { useGlobalContext } from '../context';

const PokemonPage = (pokemonPage) => {


  const {name, closePokemonModal} = pokemonPage;
  const {capFirst} = useGlobalContext();




  console.log(pokemonPage);
 
  return (
    <div className='pokemon-modal-fullbackground'>
      <div className='pokemon-modal-container'>
        <h1 className='pokemon-modal-name'>{capFirst(name)}</h1>
        <div className='pokemon-modal-image-container'>
          <div className="pokemon-modal-info-container">
            
          </div>
          <img className='pokemon-modal-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonPage.id}.png`} alt={name} />
        </div>
        <h3 className='pokemon-modal-moves-label'>Move List: </h3>
        <div className="pokemon-modal-moves-container">
          {pokemonPage.moves.map((value)=>{
            return <div><p className='modal-move'>{capFirst(value.move.name)}</p></div>
          })}
        </div>
        <button className='pokemon-modal-close' type='button' onClick={closePokemonModal}><FaTimes color='red' size={'40px'}/></button>

      </div>
    </div>
  )
}


export default PokemonPage;