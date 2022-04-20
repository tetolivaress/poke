import React from 'react';
import { render } from 'react-dom'
import App from './components/App'
import Box from '@mui/material/Box'

const MaterialApp = () => (
    <Box>
        <App />
    </Box>
)

render(<MaterialApp />, document.getElementById('react'))
