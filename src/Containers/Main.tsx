import { Box } from '@mui/material';
import React from 'react';
import { Intro } from './Intro';

export const Main = () => {
    return (
        <Box component={`main`}>
            <Intro />
        </Box>
    );
};
