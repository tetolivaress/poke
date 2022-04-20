import { usePokemon } from "@/hooks/usePokemon"
import Layout from "./layout"
import PokemonList from "./PokemonList"

const App = () => {
    const { pokemons, loadingPokemons } = usePokemon()
    return (
        <Layout>
            <PokemonList pokemons={pokemons} loading={loadingPokemons} />
        </Layout>
    )
}

export default App
