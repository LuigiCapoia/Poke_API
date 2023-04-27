import {Router} from 'express'
import pokemonController from './src/controller/PokemonController'


const routes = Router()



// Pokemons //
routes.get('/pokemonsURL', pokemonController.Pokecreate)
routes.post('/savepokemons', pokemonController.SavePokeData)
routes.get('/savetype', pokemonController.savetype)
routes.get('/pokemons', pokemonController.list)
routes.get('/pokemonsDex/:dex', pokemonController.findDex)
routes.get('/pokemonsType/:type', pokemonController.findType)
routes.get('/pokemonsMove/:move', pokemonController.findMove)