import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'
import PokemonDetail from './PokemonDetail'

const PokemonModal = ({ open, pokemon, onClose }) => {
  return (
    <Dialog
        sx={{
            display: {
                xs: 'block',
                md: 'none'
            }
        }}
        fullWidth
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" sx={{ textTransform: 'capitalize' }}>
        {pokemon.name}
      </DialogTitle>
      <DialogContent>
        <PokemonDetail pokemon={pokemon} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} >Cerrar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default PokemonModal
