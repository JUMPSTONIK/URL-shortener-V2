import { Box, Button, TextField, useMediaQuery } from '@mui/material';
import React from 'react';
import { BgShortenDesktop } from '../Components/BgShortenDesktop';
import { BgShortenMobile } from '../Components/BgShortenMobile';
import { UrlCard } from '../Components/UrlCard';
import { useUrlShortener } from '../Hooks/useUrlShortener';
import { useWindowSize } from '../Hooks/useWindowSize';

export const UrlShortener = () => {
    const match = useMediaQuery('(min-width: 1024px)');
    let desktopWidth = 1440 * 0.77;
    let mobileWidth = useWindowSize().width * 0.77;
    let width = useWindowSize().width > 1440 ? desktopWidth : mobileWidth;

    const { error, url, urlCards, handleOnChangeUrl, submitShortUrl } =
        useUrlShortener();
    return (
        <Box
            component={`section`}
            sx={{
                position: 'relative',
                height: 'fit-content',
                backgroundColor: '#EFF1F7',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '24px',
                margin: '68px 0 0 0',
                padding: `${match ? '0 165px 120px' : '0 24px 80px'}`,
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    backgroundColor: 'white',
                    height: '80px',
                    width: '100%',
                    zIndex: '1',
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    backgroundColor: '#3A3054',
                    minWidth: '327px',
                    width: `${match ? `${width}px` : '100%'}`,
                    maxWidth: `${!match ? '500px' : '1110px'}`,
                    height: 'fit-content',
                    borderRadius: '10px',
                    zIndex: '2',
                    overflow: 'hidden',
                    padding: `${match ? '52px 64px' : '24px'}`,
                }}
            >
                {match ? <BgShortenDesktop /> : <BgShortenMobile />}
                <Box
                    sx={{
                        width: '100%',
                        height: 'fit-content',
                        display: 'flex',
                        flexDirection: `${match ? 'row' : 'column'}`,
                        gap: `${match ? '24px' : !error ? '16px' : '38px'}`,
                    }}
                >
                    {error ? (
                        <TextField
                            error
                            placeholder="Shorten a link here..."
                            helperText="Please add a link"
                            value={url}
                            onChange={handleOnChangeUrl}
                            sx={{
                                position: 'relative',
                                width: `${match ? '80%' : '100%'}`,
                                '& input': {
                                    background: '#fff',
                                    borderRadius: '5px',
                                    height: '31.5px',
                                    fontSize: '2rem',
                                },
                                '& p': {
                                    position: 'absolute',
                                    left: '0',
                                    bottom: '-30px',
                                    margin: '0',
                                    fontSize: `${match ? '1.6rem' : '1.2rem'}`,
                                },
                            }}
                        />
                    ) : (
                        <TextField
                            placeholder="Shorten a link here..."
                            value={url}
                            onChange={handleOnChangeUrl}
                            sx={{
                                position: 'relative',
                                width: `${match ? '80%' : '100%'}`,
                                '& input': {
                                    background: '#fff',
                                    borderRadius: '5px',
                                    height: '31.5px',
                                    fontSize: '2rem',
                                },
                                '& p': {
                                    position: 'absolute',
                                    fontSize: `${match ? '1.6rem' : '1.2rem'}`,
                                },
                            }}
                        />
                    )}
                    <Button
                        onClick={submitShortUrl}
                        style={{ backgroundColor: '#2BD0D0' }}
                        sx={{
                            color: '#fff',
                            backgroundColor: '#2BD0D0',
                            height: '64px',
                            width: `${match ? '20%' : '100%'}`,
                            radius: '5rem',
                            borderRadius: '10px',
                            fontSize: '2rem',
                            fontWeight: '700',
                            textTransform: 'none',
                            '&:focus': {
                              backgroundColor: '#9AE3E3'
                            }
                        }}
                    >
                        Shorten It
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: `${match ? '16px' : '24px'}`,
                    height: 'fit-content',
                    width: '100%',
                }}
            >
                {urlCards.map((card) => (
                    <UrlCard
                        width={width}
                        originalUrl={card.originalUrl}
                        shortUrl={card.shortUrl}
                    />
                ))}
            </Box>
        </Box>
    );
};
