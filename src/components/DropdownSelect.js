import React, {useState} from "react";
import { Link } from "gatsby";
import { useHttp } from "../hooks/http.js";

const DropdownSelect = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(0);
    const fetchedData = useHttp('https://pokeapi.co/api/v2/pokemon?limit=9', []);
    const pokemonList = fetchedData.includes(null) ? [] : fetchedData[0].results.map((pokemon, index) => ({
        name: pokemon.name,
        id: index
    }));

    const handleChange = (e) => {
        e.preventDefault();
        setSelectedPokemon(parseInt(e.target.value));
        console.log(`This is my pokemon: ${pokemonList[selectedPokemon].name}`);
    }

    return (
        <div className="text-center m-auto content-center">
            <h1 className="font-bold text-5xl m-3">Choose your Pokémon!</h1>
                <select onChange={handleChange} name="pokémon" className="block appearance-none m-auto bg-white border border-gray-400 hover:border-gray-500 px-3 py-2 shadow focus:outline-none focus:shadow-outline">
                    {pokemonList.map(char => (
                        <option key={char.id} value = {char.id}>
                            {char.name.charAt(0).toUpperCase() + char.name.slice(1)}
                        </option>
                    ))}
                </select>
                <br/>
                <Link to={`/pokemon/${selectedPokemon+1}`}><button className="flex-shrink-0 bg-red-600 hover:bg-red-800 border-red-600 hover:border-red-800 text-sm border-4 text-white py-1 px-2 rounded">Go!</button></Link>
        </div>
        )
};

export default DropdownSelect;
