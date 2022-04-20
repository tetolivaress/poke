import { usePokemon } from "@/hooks/usePokemon"
import Stack from '@mui/material/Stack'
import PokemonItem from "./PokemonItem"
import PokemonList from "./PokemonList"
PokemonList

const App = () => {
    const { pokemons, loadingPokemons } = usePokemon()
    return <PokemonList pokemons={pokemons} />
}

export default App
