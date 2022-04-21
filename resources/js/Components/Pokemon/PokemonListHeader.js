import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const PokemonListHeader = ({previous, current, next, onChange, isEmpty, search}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '12px'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '12px'
                }}
            >
                {!!current && <ChevronLeftIcon sx={{cursor: 'pointer'}} onClick={previous} />}

                <span>{current + 1}</span>
                {isEmpty && <ChevronRightIcon onClick={next}  sx={{cursor: 'pointer'}} />}
            </Box>
            <TextField
                id="filled-basic"
                label="Buscar"
                variant="filled"
                onChange={({target}) => onChange(target.value)}
                value={search}
            />
        </Box>
    )
}

export default PokemonListHeader
