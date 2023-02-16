import { Button } from '@mui/material'
import React from 'react'

export const PrimaryButton = () => {
  return (
    <Button
        style={{ backgroundColor: '#2BD0D0' }}
        sx={{
            color: '#fff',
            backgroundColor: '#2BD0D0',
            height: '56px',
            width: '197px',
            radius: '5rem',
            borderRadius: '28px',
            fontSize: '2rem',
            fontWeight: '700',
            textTransform: 'none'
        }}
    >
        Get Started
    </Button>
  )
}
