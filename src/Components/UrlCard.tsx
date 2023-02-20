import { Button, Divider, Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface urlCardTypes {
    originalUrl: string,
    shortUrl: string,
    width : number
}

export const UrlCard = (props:urlCardTypes) => {
    const match = useMediaQuery('(min-width: 1024px)');
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: `${match ? 'row' : 'column'}`,
        gap: `${match ? '24px' : '8px'}`,
        height: `${match ? '72px' : '133px'}`,
        minWidth: '327px',
        width: `${match ? `${props.width}px` : '100%'}`,
        maxWidth: `${!match ? '500px' : '1110px'}`,
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: `${match ? '18px 24px 18px 32px' : '6px 16px 16px'}`,
        alignItems: 'center'

    }}>
        <Typography sx={{
            fontWeight: '500',
            fontSize: `${match ? '2rem': '1.6rem'}`,
            color: '#000',
            marginRight: 'auto'
        }}>{props.originalUrl}</Typography>
        {!match && <Divider/>}
        <Typography sx={{
            fontWeight: '500',
            fontSize: `${match ? '2rem': '1.6rem'}`,
            color: '#2BD0D0'
        }}>{props.shortUrl}</Typography>
        <Button sx={{
                color: '#fff',
                backgroundColor: '#2BD0D0',
                height: '40px',
                width: `${match ? '103px' : '100%'}`,
                radius: '1.5rem',
                borderRadius: '10px',
                fontSize: '2rem',
                fontWeight: '700',
                textTransform: 'none'
        }}>Copy</Button>
        </Box>
  )
}
