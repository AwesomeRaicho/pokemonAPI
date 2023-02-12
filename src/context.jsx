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

    return(
        <AppContext.Provider value={{
            loading,
            setLoading,
            generations
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};





