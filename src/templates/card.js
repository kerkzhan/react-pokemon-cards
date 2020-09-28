import React from 'react'
import Layout from '../components/layout'
 
 const card = ({pageContext: {pokemon}}) => {
     const abilities = pokemon.abilities.map(ability => ability.name);
     return (
        <div>
            <Layout>
                <div className="flex flex-wrap flex-row items-center justify-center h-full">
                    <div className="w-1/2 h-full max-h-3/4 shadow rounded bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 border-4 border-solid border-gray-700">
                        <div className="block h-56 p-4 bg-gradient-to-r from-gray-500 via-gray-300 to-gray-200 m-4 shadow text-center border-8 border-solid border-black">
                            <img className="w-full h-full object-contain" src={pokemon.sprites.other["official-artwork"].front_default}></img>
                        </div>
                        <div className="block m-4 px-2">
                            <h1 className="font-bold text-2xl capitalize">{pokemon.name}</h1>
                            <h2 className="text-md italic mx-3">{`Weight: ${pokemon.weight/10}kg`}</h2>
                            <h1 className="font-bold text-xl mt-3 capitalize">Abilities</h1>
                            <h2 className="capitalize mx-3">&#183; {abilities[0]}</h2>
                            <h2 className="capitalize mx-3">&#183; {abilities[1]}</h2>
                        </div> 
                    </div>
                </div>
            </Layout>
        </div>
     )
 }
 
 export default card
 
