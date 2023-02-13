
import { IndividualPokemon } from './individual-pokemon.component';

const Pokemon = ({pokemon}) => {


  console.log(pokemon)






  return (
      <section>
        <div className='section-title'>
          <h1 >Pokemon <br /> from the region</h1>
        </div>

        <div className='pokemon-container'>
          {pokemon.map((value, index)=>{
            return <IndividualPokemon key={index} item={value}/>;
          })}
          
        </div>
      </section>
  )
}

export default Pokemon;