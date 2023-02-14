//import Pokemon from './components/pokemon.component';
import Categories from './components/categories.component';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Generations from './components/generations.component';
import Generation from './components/individual-generation';

import './App.css';


function App() {
  return (
    <div className="App">
      <div className='background-image-container'></div>
      <BrowserRouter>
        <Categories />
        <Routes>
          <Route path={'/'} element={<Generations />}/>
          <Route path={'/generation/:genId'} element={<Generation />}/>
          <Route path={'*'} element={<Generations />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
