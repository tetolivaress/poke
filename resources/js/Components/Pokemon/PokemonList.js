import Grid from '@mui/material/Grid';
import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import Alert from '@mui/material/Alert'
import PokemonItem from './PokemonItem'
import PokemonModal from './PokemonModal'
import PokemonDetail from './PokemonDetail'
import PokemonListHeader from './PokemonListHeader'

const PokemonList = ({ pokemons, loading, next, previous, current, isEmpty }) => {
    const [selectedPokemon, setSelectedPokemon] = useState({
        name: 'pokemon',
        wight: '',
        height: '',
        base_experience: '',
        image: '/img/pk.svg',
        abilities: []
    })
    const [search, setSearch] = useState('')
    const [openDetail, setOpenDetail] = useState(false)

    const filteredPokemons = pokemons.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase()))

    const openModal = poke => {
        setSelectedPokemon(poke)
        setOpenDetail(true)
    }

    return (
        <>
        <PokemonListHeader
            previous={previous}
            current={current}
            next={next}
            onChange={setSearch}
            isEmpty={isEmpty}
            search={search}
        />
        <Grid container spacing={2} sx={{overflow: 'hidden', marginTop: '12px'}}>
            <Grid item xs={12} md={8}>
                <Grid container spacing={2} sx={{maxHeight: '75vh', overflowY: 'scroll'}}>
                    {filteredPokemons.map((poke, i) => (
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
                    {!filteredPokemons.length && !loading && (
                        <Alert
                            severity="info"
                            sx={{ margin: '24px' }}
                        >
                            Su busqueda no coincide con la lista de pokemones en la lista
                        </Alert>
                    )}
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
            <Alert severity="info">Loading</Alert>
        </Dialog>
        </>
    )
}

export default PokemonList
