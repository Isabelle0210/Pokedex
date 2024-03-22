/*fazer requisição http */

const offset= 0;
const limit =10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
//o fetch irá retornar uma promisse
//quando isso funcionar, irá executar a funcao, senao executara a funcao do catch
fetch(url)

.then((response) =>  response.json())//transformo o responde em uma promessa bodyjson
.then((jsonBody)=> console.log(jsonBody))//recebo o body convertido
.catch((error)=> console.log(error))
