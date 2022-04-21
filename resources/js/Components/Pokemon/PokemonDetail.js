
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'


const PokemonDetail = ({ pokemon }) => {
    return (
        <>
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
                    <Box>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ textTransform: 'capitalize' }}
                        >
                            {pokemon.name}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" component="span">
                        {`Experiencia: `}
                        </Typography>
                        <Typography sx={{ fontSize: 18 }} component="span">
                        {pokemon.base_experience}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" component="span">
                        {`Peso: `}
                        </Typography>
                        <Typography sx={{ fontSize: 18 }} component="span">
                        {pokemon.weight}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" component="span">
                        {`Alto: `}
                        </Typography>
                        <Typography sx={{ fontSize: 18 }} component="span">
                        {pokemon.height}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" component="span">
                        {`Habilidades: `}
                        </Typography>
                        <List>
                            {pokemon.abilities.map((skill, i) => (
                                <ListItem key={i}>
                                    <Typography sx={{ textTransform: 'capitalize' }}>
                                        {skill.name.replace('-', ' ')}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </CardContent>
            </Card>
        </>
    )
}

export default PokemonDetail
