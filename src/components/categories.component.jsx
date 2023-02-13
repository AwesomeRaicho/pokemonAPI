// import {useState} from 'react';
// import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const Categories = () => {
    
    return (
        <div className="categories-container">
          <Link to={'/'}><img className='navigation-logo' src="/images/pokemon-logo.png" alt="pokemon-logo" /></Link>
          <Link className='category-link' to={'/'}>Generation</Link>
        </div>
    )
};

export default Categories;