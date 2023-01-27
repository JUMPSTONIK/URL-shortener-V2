import { Box } from '@mui/material';
import React from 'react';
import { Facebook } from './Facebook';
import { Instagram } from './Instagram';
import { Pinterest } from './Pinterest';
import { Twitter } from './Twitter';

export const SocialNetworks = () => {
    return (
        <Box sx={{ display: 'flex', gap: '8px' }}>
            <Facebook />
            <Twitter />
            <Pinterest />
            <Instagram />
        </Box>
    );
};
