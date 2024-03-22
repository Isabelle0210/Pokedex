
const offset= 0;
const limit =10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon){
    return `
    <li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span> 
            <div class="detail">
                <ol class="types">
                    <li class="type">
                        grass
                    </li>
                    <li class="type">
                        poison
                    </li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
            </div>
    </li>
    `
}
const pokemonList = document.getElementById('pokemonList')
//AQUI USO UM LOOP FOR PARA FAZER A CONVERSAO DO TEXTO QUE ESTA NO JS PARA O HTML
PokeAPI.getPokemons()
.then((pokemons=[])=> {
    
//passo uma função transformadora que vai transforma um elemento em outro elemento    
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})
