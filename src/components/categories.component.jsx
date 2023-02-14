// import {useState} from 'react';
// import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Categories = () => {
    
    return (
      <div className='navigation-back'>
        <div className="categories-container">
          <Link to={'/'}><img className='navigation-logo' src="/images/pokemon-logo.png" alt="pokemon-logo" /></Link>
          <Link className='category-link' to={'/'}>Generation</Link>
        </div>
        <div className=" categories-container2 "></div>
      </div>
    )
};

export default Categories;