import Box from '@mui/material/Box'
import { pink } from '@mui/material/colors'

const Footer = () => {
    const backgroundColor = pink[100];

    return (
        <Box sx={{ position: 'fixed', bottom: 0, backgroundColor, padding: '4px', width: '100%' }}>
            Pokedex
        </Box>
    )
}

export default Footer
