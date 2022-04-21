import { usePokemon } from "@/hooks/usePokemon"
import Layout from "./layout"
import PokemonList from "./Pokemon/PokemonList"

const App = () => {
    const { pokemons,
        loadingPokemons,
        nextPokemons,
        previousPokemons,
        current,
        isEmpty
    } = usePokemon()
    return (
        <Layout>
            <PokemonList
                pokemons={pokemons}
                loading={loadingPokemons}
                previous={previousPokemons}
                next={nextPokemons}
                current={current}
                isEmpty={isEmpty}
            />
        </Layout>
    )
}

export default App
