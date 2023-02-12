import React from 'react';
import { useParams } from 'react-router-dom';


const Generation = () => {

    const {genId} = useParams();
    console.log(genId);

  return (
    <div className='working-progress'>
        <h1>page in working progress</h1>
        <p>this page will display all pokemons, areas and abilities from this generation: <h1>{genId}</h1></p>
    </div>
  )
}

export default Generation;
