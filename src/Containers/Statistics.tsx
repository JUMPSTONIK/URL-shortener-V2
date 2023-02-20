import { Typography, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { StatisticsCard } from '../Components/StatisticsCard';
import { Cards } from '../Constants/Variables';

export const Statistics = () => {
    const match = useMediaQuery('(min-width: 1024px)');
  return (
    <Box 
        component={`section`}
        sx={{
        backgroundColor:'#EFF1F7',
        padding : `${match ? '0 11.5% 120px' : '0 24px 80px'}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: `${match ? '100px' : '92px'}`
    }}>
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: `${match ? '540px': '335px'}`,
            gap: `${match ? '18px' : '16px'}`
        }}>
            <Typography sx={{
                textAlign: 'center',
                fontSize: `${!match ? '2.8rem' : '4rem'}`,
                fontWeight: '700'
            }}>Advanced Statistics</Typography>
            <Typography sx={{
                textAlign: 'center',
                fontSize: `${!match ? '1.8rem': '1.6rem'}`,
                fontWeight: '500',
                color: '#9E9AA8',
            }}>Track how your links are performing across the web with our 
  advanced statistics dashboard.</Typography>
        </Box>
        <Box sx={{
            minHeight: '400px',
            position:'relative',
            display: 'flex',
            flexDirection: `${!match ? 'column': 'row'}`,
            justifyContent: 'center',
            alignItems: `${!match ? 'center' : ''}`,
            gap: `${!match ? '92px': '30px'}`,
        }}>
            <Box sx={{
                position: 'absolute',
                backgroundColor: '#2BD0D0',
                width: `${!match ? '8px' : '500px'}`,
                height: `${!match ? '900px' : '8px'}`,
                top: `${match ? '50%' : '0'}`,
                left: `${match ? '25%' : '50%'}`
            }}/>
            {Cards.map( card => 
            <StatisticsCard 
            media={card.media}
            vPosition={card.verticalPosition}
            title={card.title}
            paragraph={card.paragraph}
            />
            )}
        </Box>
    </Box>
  )
}
