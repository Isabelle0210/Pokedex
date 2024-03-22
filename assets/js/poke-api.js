
const PokeAPI = {}

PokeAPI.getPokemons = (offset = 0,limit = 10)=>{
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
    //o fetch irá retornar uma promisse
    //quando isso funcionar, irá executar a funcao, senao executara a funcao do catch
        .then((response) =>  response.json())//transformo o responde em uma promessa bodyjson
        .then((jsonBody)=> jsonBody.results)//recebo o body convertido
        .catch((error)=> console.log(error))
}


