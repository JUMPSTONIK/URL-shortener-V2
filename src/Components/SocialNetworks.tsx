import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import { Facebook } from './Facebook';
import { Instagram } from './Instagram';
import { Pinterest } from './Pinterest';
import { Twitter } from './Twitter';

export const SocialNetworks = () => {
    const match = useMediaQuery('(min-width: 678px)');
    return (
        <Box
            component={`div`}
            sx={{
                display: 'flex',
                gap: '24px',
                height: 'fit-content',
                width: 'fit-content',
                margin: `${!match && '8px auto 0'}`,
            }}
        >
            <Facebook />
            <Twitter />
            <Pinterest />
            <Instagram />
        </Box>
    );
};
