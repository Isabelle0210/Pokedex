
const PokeAPI = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}


PokeAPI.getPokemonDetail=(pokemon)=>{
    return fetch(pokemon.url)
            .then((response)=>response.json())
            .then(convertPokeApiDetailToPokemon)
}
PokeAPI.getPokemons = (offset = 0,limit = 20)=>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    //o fetch irá retornar uma promisse
    //quando isso funcionar, irá executar a funcao, senao executara a funcao do catch
        .then((response) =>  response.json())//transformo o responde em uma promessa bodyjson
        .then((jsonBody)=> jsonBody.results)//recebo o body convertido
        .then((pokemons)=>pokemons.map(PokeAPI.getPokemonDetail))
        .then((detailRequest)=>Promise.all(detailRequest))
        .then((pokemonDetails)=> pokemonDetails)
}

/*Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/1'),
    fetch('https://pokeapi.co/api/v2/pokemon/2'),
    fetch('https://pokeapi.co/api/v2/pokemon/3'),
    fetch('https://pokeapi.co/api/v2/pokemon/4')
]).then((results)=>{
    console.log(results)
})*/


