import Header from "./Header"
import Footer from "./Footer"
import Box from '@mui/material/Box'

const Layout = ({ children }) => {
    return (
        <>
        <Header />
        <Box sx={{ marginTop: '48px', padding: '12px' }}>
            {children}
        </Box>
        <Footer />
        </>
    )
}

export default Layout
