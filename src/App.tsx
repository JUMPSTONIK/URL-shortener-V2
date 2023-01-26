import { Box } from '@mui/material';
import './App.css';
import { Header } from './Containers/Header';

function App() {
    return (
        <Box sx={{ minWidth: '375px', maxWidth: '1440px', margin: '0 auto' }}>
            <Header />
        </Box>
    );
}

export default App;
