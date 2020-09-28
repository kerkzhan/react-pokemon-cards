const axios = require('axios');

const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

const getPokemonData = names => 
    Promise.all(
        names.map(async name => {
        const { data: pokemon } = await get(`/pokemon/${name}`);
        const abilities = await Promise.all(
            pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
            const { data: ability } = await get(`/ability/${abilityName}`);

            return ability;
            })
        );

        return { ...pokemon, abilities };
        })
    ); 
    

exports.createPages = async ({ actions: { createPage } }) => {
    const allPokemon = await getPokemonData(['1', '2', '3','4','5', '6', '7', '8', '9']);
//    const allPokemon = await getPokemonData(9);

    allPokemon.forEach((pokemon, index)=> {
        createPage({
        path: `/pokemon/${index + 1}/`,
        component: require.resolve('./src/templates/card.js'),
        context: { pokemon }
        });
    });
};