import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { BgBoostMobile } from '../Components/BgBoostMobile';
import { BgShortenDesktop } from '../Components/BgShortenDesktop';
import { IllustrationWorking } from '../Components/IllustrationWorking';
import { NavigationButtonsStyles } from '../Constants/Variables';

export const Intro = () => {
    const match = useMediaQuery('(min-width: 678px)');
    return (
        <Box
            component={`section`}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <IllustrationWorking
                translateX={'24px'}
                width={`${match ? '733' : '327'}`}
                height={`${match ? '482' : '270'}`}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component={`h1`}>
                    More than just shorter links
                </Typography>
                <Typography>
                    Build your brand’s recognition and get detailed insights on
                    how your links are performing.
                </Typography>
                <Button
                    sx={NavigationButtonsStyles({
                        textColor: '#fff',
                        backgroundColor: '#2BD0D0',
                        height: '56px',
                        width: '197px',
                        radius: '5rem',
                        padding: '1.2rem 4rem',
                        fontSize: '2rem',
                    })}
                >
                    Get Started
                </Button>
            </Box>
        </Box>
    );
};
