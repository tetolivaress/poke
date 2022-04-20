import PokemonItem from './PokemonItem'
import Grid from '@mui/material/Grid';
import { useState } from 'react'
import PokemonModal from './PokemonModal'
import PokemonDetail from './PokemonDetail'
import Dialog from '@mui/material/Dialog'
import Box from '@mui/material/Box'
import Alert from '@mui/material/Alert'

const PokemonList = ({ pokemons, loading }) => {
    const [selectedPokemon, setSelectedPokemon] = useState({
        name: 'pokemon',
        wight: '',
        height: '',
        base_experience: '',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg',
        abilities: []
    })
    const [openDetail, setOpenDetail] = useState(false)

    const openModal = poke => {
        setSelectedPokemon(poke)
        setOpenDetail(true)
    }

    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                    {pokemons.length && pokemons.map((poke, i) => (
                        <Grid item xs={6} md={3} key={i}>
                            <PokemonItem
                                pokemon={poke}
                                select={openModal}
                            />
                        </Grid>
                    ))}
                    <PokemonModal
                        open={openDetail}
                        onClose={() => setOpenDetail(false)}
                        pokemon={selectedPokemon}
                    />
                </Grid>
            </Grid>
            <Grid
                item md={4}
                sx={{
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}
            >
                <PokemonDetail pokemon={selectedPokemon} />
            </Grid>
        </Grid>
        <Dialog open={loading}>
            <Box>
                <Alert severity="info">Loading</Alert>
            </Box>
        </Dialog>
        </>
    )
}

export default PokemonList
