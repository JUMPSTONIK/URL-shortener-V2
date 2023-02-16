import { Box } from '@mui/material';
import { Boost } from './Boost';
import { Intro } from './Intro';
import { Statistics } from './Statistics';
import { UrlShortener } from './UrlShortener';

export const Main = () => {
    return (
        <Box component={`main`}>
            <Intro />
            <UrlShortener/>
            <Statistics/>
            <Boost />
        </Box>
    );
};
