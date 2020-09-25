import React from "react";
import { useHttp } from "../hooks/http.js";

const DropdownSelect = () => {
    const fetchedData = useHttp('https://pokeapi.co/api/v2/pokemon?limit=9', []);
    const selectedPokemon = fetchedData.includes(null) ? [] : fetchedData[0].results.map((pokemon, index) => ({
        name: pokemon.name,
        id: index+1
    }));
    console.log(selectedPokemon);
    return (
        <div className="flex text-black">
            <h2>selectedPokemon</h2>
        </div>
    )
};

export default DropdownSelect;
