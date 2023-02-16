import React, { useContext, useState, useEffect } from 'react';

const AppContext = React.createContext();


export const AppProvier = ({children}) => {


    const [loading, setLoading] = useState(true);
    const [generations, setGenerations] = useState([]);


    useEffect(() => {
    const getAllData = async () => {
        setLoading(true)
        try {
        const genResponse = await fetch('https://pokeapi.co/api/v2/generation/?limit=20');
        const gens = await genResponse.json();

        const promises = gens.results.map(async value => {
            const getGenInfo = await fetch(value.url);
            return await getGenInfo.json();
        });

        const data = await Promise.all(promises);
        setGenerations(data);
        } catch (error) {
        console.log(error);
        }
        setLoading(false)
    };

    getAllData();
    }, []);

    // getOneGeneration gets the individual generation that was clicked when selecting one generation for view
    const getOneGeneration = (gen) => {
         const fonundGeneration = generations.find((value)=>{
            return value.name === gen;
        });
        return fonundGeneration;
    };

    // 'capFirst' makes sure the first letter is capitalized because the API returns lower case names.

    function capFirst(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    // "genNumber" makes sure there is a number dusplayed and not a roman representation

    const genNumber = (word) => {
        switch (word.slice(word.length-5, word.length)) {
            case 'ion-i':
                return word.slice(0, word.length-2) + ' 1';
            
            case 'on-ii':
                return word.slice(0, word.length-3) + ' 2';
            
            case 'n-iii':
                return word.slice(0, word.length-4) + ' 3';
            
            case 'on-iv':
                return word.slice(0, word.length-3) + ' 4';
            
            case 'ion-v':
                return word.slice(0, word.length-2) + ' 5';
            
            case 'on-vi':
                return word.slice(0, word.length-3) + ' 6';
            
            case 'n-vii':
                return word.slice(0, word.length-4) + ' 7';
            
            case '-viii':
                return word.slice(0, word.length-5) + ' 8';
            
            case 'on-ix':
                return word.slice(0, word.length-3) + ' 9';
            default:
                return word;
        }
    };


    // Insertion algorithm for sorting partially ordered pokemon before the are rendered

    function insertionSort(pokemonArray) {
        for (let i = 1; i < pokemonArray.length; i++) {
          let currentPokemon = pokemonArray[i];
          let j = i - 1;
          while (j >= 0 && pokemonArray[j].id > currentPokemon.id) {
            pokemonArray[j + 1] = pokemonArray[j];
            j--;
          }
          pokemonArray[j + 1] = currentPokemon;
        }
        return pokemonArray;
      }




    return(
        <AppContext.Provider value={{
            loading,
            setLoading,
            generations,
            getOneGeneration,
            capFirst,
            genNumber,
            insertionSort,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};





