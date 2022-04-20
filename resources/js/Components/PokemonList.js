import Box from '@mui/material/Box'
import PokemonItem from './PokemonItem'
import Stack from '@mui/material/Stack'

const PokemonList = ({ pokemons }) => {
    return (
        <Stack>
            {pokemons.length && pokemons.map(poke => (<PokemonItem pokemon={poke} />))}
        </Stack>
    )
}

export default PokemonList
