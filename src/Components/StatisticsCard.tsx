import { Avatar, Box, Card, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

export const StatisticsCard = (props:any) => {
    const match = useMediaQuery('(min-width: 1024px)');
    
  return (
    <Box sx={{
        backgroundColor: '#fff',
        position: `relative`,
        width: `${match ? '350px':'327px'}`,
        height: `fit-content`,
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: `${!match? 'center': 'flex-start'}`,
        alignSelf: `${match ? props.vPosition : 'center'}`,
        padding: '72px 32px 41px',
        gap: '12px'
        }}>
        <Avatar sx={{position: `absolute`,
            width: '88px',
            height: '88px',
            backgroundColor: '#3A3054',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: '-44px',
            right: `${match? '70%' :'35.5%'}`
            }}>
            {<props.media/>}
        </Avatar>
        <Typography component={`h2`} sx={{
            fontSize: '22px',
            lineHeight: '33px',
            fontWeight: '700',
            textAlign: `${!match ? 'center': 'left'}`,

        }}>{props.title}</Typography>
        <Typography sx={{
            fontWeight: '500',
            fontSize: '1.5rem',
            color: '#9E9AA8',
            lineHeight: '26px',
            textAlign: `${!match ? 'center': 'left'}`,
        }}>{props.paragraph}</Typography>
    </Box>
  )
}
