import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { sitemapType } from '../types/sitemapType';

export const Sitemap = (props: sitemapType) => {
    const match = useMediaQuery('(min-width: 1024px)');
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                height: 'fit-content',
                textAlign: `${!match ? 'center' : 'left'}`,
            }}
        >
            <Typography
                fontWeight={700}
                sx={{
                    color: '#EFF1F7',
                    marginBottom: '4px',
                    fontSize: '1.5rem',
                }}
            >
                {props.title}
            </Typography>
            {props.navigationPoints.map((navPoint) => (
                <Typography
                    key={navPoint}
                    sx={{
                        color: '#9E9AA8',
                        fontSize: '1.5rem',
                        '&:hover': { color: '#2BD0D0' },
                    }}
                >
                    {navPoint}
                </Typography>
            ))}
        </Box>
    );
};
