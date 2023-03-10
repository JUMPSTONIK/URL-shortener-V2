import { Button, Divider, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';

interface urlCardTypes {
    originalUrl: string;
    shortUrl: string;
    width: number;
}

export const UrlCard = (props: urlCardTypes) => {
    const match = useMediaQuery('(min-width: 1024px)');
    const [click, setClick] = useState(false);
    const handleCopy = (link: string) => {
        navigator.clipboard.writeText(link);
        setClick(true);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: `${match ? 'row' : 'column'}`,
                gap: `${match ? '24px' : '8px'}`,
                minHeight: `${match ? '72px' : '133px'}`,
                height: 'fit-content',
                minWidth: '327px',
                width: `${match ? `${props.width}px` : '100%'}`,
                maxWidth: `${!match ? '500px' : '1110px'}`,
                backgroundColor: '#fff',
                borderRadius: '5px',
                padding: `${match ? '18px 24px 18px 32px' : '6px 16px 16px'}`,
                alignItems: 'center',
            }}
        >
            <Typography
                sx={{
                    width: `${!match ? '100%' : 'fit-content'}`,
                    minWidth: `${match && '40%'}`,
                    wordWrap: 'break-word',
                    fontWeight: '500',
                    fontSize: `${match ? '2rem' : '1.6rem'}`,
                    color: '#000',
                    marginRight: `%${match && 'auto'}`,
                    textAlign: `${!match && 'left'}`,
                }}
            >
                {props.originalUrl}
            </Typography>
            {!match && <Divider />}
            <Typography
                sx={{
                    width: `${!match ? '100%' : 'fit-content'}`,
                    maxWidth: `${match && '40%'}`,
                    wordWrap: 'break-word',
                    fontWeight: '500',
                    fontSize: `${match ? '2rem' : '1.6rem'}`,
                    color: '#2BD0D0',
                    textAlign: `${!match && 'left'}`,
                }}
            >
                {props.shortUrl}
            </Typography>
            <Button
                onClick={() => handleCopy(props.shortUrl)}
                style={{ backgroundColor: `${!click ? '#2BD0D0' : '#3A3054'}` }}
                sx={{
                    color: '#fff',
                    backgroundColor: `${!click ? '#2BD0D0' : '#3A3054'}`,
                    height: '40px',
                    width: `${match ? 'fit-content' : '100%'}`,
                    radius: '1.5rem',
                    borderRadius: '10px',
                    fontSize: `${match ? '1.5rem' : '1.6rem'}`,
                    fontWeight: '700',
                    textTransform: 'none',
                    padding: `${match ? '10px 21px' : '10px 115px'}`,
                    textAlign: 'center',
                }}
            >
                {click ? 'Copied!' : 'Copy'}
            </Button>
        </Box>
    );
};
