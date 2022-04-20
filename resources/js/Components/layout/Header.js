import Box from '@mui/material/Box'
import { pink } from '@mui/material/colors'

const Header = () => {
    const backgroundColor = pink[100];
    return (
        <Box sx={{ position: 'fixed', top: 0, backgroundColor, padding: '10px', width: '100%'}}>
            Pokedex
        </Box>
    )
}

export default Header
