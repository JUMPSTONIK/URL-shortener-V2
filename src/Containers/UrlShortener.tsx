import { Box, useMediaQuery } from '@mui/material'
import { display, height } from '@mui/system';
import React from 'react'
import { useWindowSize } from '../Hooks/WindowsHook';

export const UrlShortener = () => {
    const match = useMediaQuery('(min-width: 1024px)');
    let width = useWindowSize().width * 0.77
    let height = '160px'
  return (
    <Box component={`section`} sx={{
        position: 'relative',
        height: '500px',
        backgroundColor: '#EFF1F7',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Box sx={{
            position: 'relative',
            backgroundColor: '#4B3F6B',
            width: `${match ? width : '327'}px`,
            height,
            borderRadius: '10px'
        }}>

        </Box>
    </Box>
  )
}
