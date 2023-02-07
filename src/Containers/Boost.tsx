import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { BgBoostMobile } from '../Components/BgBoostMobile';
import { BgBoostDesktop } from '../Components/BgBoostDesktop';

export const Boost = () => {
    const match = useMediaQuery('(min-width: 678px)');
    return (
        <Box
            sx={{
                position: 'relative',
                backgroundColor: '#3A3054',
                height: `${match ? '250px' : '300px'}`,
                width: '100%',
            }}
        >
            {match ? <BgBoostDesktop /> : <BgBoostMobile />}
            <Typography>Boost your links today</Typography>
            <Button>Get Started</Button>
        </Box>
    );
};
