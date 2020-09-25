import React from "react";
import { useHttp } from "../hooks/http.js";

const DropdownSelect = () => {
    const fetchedData = useHttp('https://pokeapi.co/api/v2/pokemon?limit=5', []);
    const selectedPokemon = fetchedData ? "good" : "bad";
    console.log(fetchedData);
    console.log(selectedPokemon);
    return (
        <div className="flex text-black">
            <h2>selectedPokemon </h2>
        </div>
    )
};

export default DropdownSelect;
