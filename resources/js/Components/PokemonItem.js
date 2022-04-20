import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const PokemonItem = ({ pokemon, select }) => {
    return (
        <Card
            onClick={() => select(pokemon)}
        >
            <CardMedia
                component="img"
                height="140"
                image={pokemon.image}
                alt={pokemon.name}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textTransform: 'capitalize' }}
                >
                    {pokemon.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Detalles</Button>
            </CardActions>
        </Card>
    )
}

export default PokemonItem
