import { Box } from '@mui/material';
import './App.css';
import { Footer } from './Containers/Footer';
import { Header } from './Containers/Header';
import { Intro } from './Containers/Intro';

function App() {
    return (
        <Box sx={{ minWidth: '320px', maxWidth: '1440px', margin: '0 auto' }}>
            <Header />
            <Intro />
            <Footer />
        </Box>
    );
}

export default App;
