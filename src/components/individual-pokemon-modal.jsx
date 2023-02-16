
import {FaTimes} from 'react-icons/fa';
import { useGlobalContext } from '../context';

const PokemonPage = (pokemonPage) => {


  const {name, closePokemonModal} = pokemonPage;
  const {capFirst} = useGlobalContext();




  console.log(pokemonPage);
 
  return (
    <div className='pokemon-modal-fullbackground'>
      <div className='pokemon-modal-container'>
        <div className='pokemon-modal-container-overflow'>

          <h1 className='pokemon-modal-name'>{capFirst(name)}</h1>

          <div className='pokemon-modal-image-container'>
            <div className="pokemon-modal-info-container">
              <div className='pokemon-modal-stats-container'>
                {pokemonPage.stats.map((value,index)=>{
                  return  <p key={index} className='pokemon-modal-stat'>{`${value.stat.name}: ${value.base_stat}`}</p>
                })}
              </div>
              <div className='pokemon-modal-types-container'>
                {pokemonPage.types.map((value,index)=>{
                  return  <p key={index} className={`pokemon-modal-type ${value.type.name}`}>{ capFirst(value.type.name)}</p>
                })}
              </div>
            </div>
            <img className='pokemon-modal-image' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonPage.id}.png`} alt={name} />
          </div>

          <h3 className='pokemon-modal-moves-label'>Move List: </h3>
          <div className="pokemon-modal-moves-container">
            {pokemonPage.moves.map((value, index)=>{
              return <p key={index} className='modal-move'>{capFirst(value.move.name)}</p>
            })}
          </div>

        </div>
        <button className='pokemon-modal-close' type='button' onClick={closePokemonModal}><FaTimes color='red' size={'40px'}/></button>
      </div>
    </div>
  )
}


export default PokemonPage;