import { Box } from '@mui/material';
import './App.css';
import { Footer } from './Containers/Footer';
import { Header } from './Containers/Header';
import { Main } from './Containers/Main';

function App() {
    return (
        <Box sx={{ minWidth: '375px' }}>
            <Header />
            <Main />
            <Footer />
        </Box>
    );
}

export default App;
