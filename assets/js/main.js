

function ConvertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span> 
            <div class="detail">
                <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}"
            </div>
    </li>
    `
}
const pokemonList = document.getElementById('pokemonList')
PokeAPI.getPokemons()
.then((pokemons=[])=> {
    const newHtml =pokemons.map(ConvertPokemonToLi).join('')
//passo uma função transformadora que vai transforma um elemento em outro elemento    
    pokemonList.innerHTML =  newHtml

})
