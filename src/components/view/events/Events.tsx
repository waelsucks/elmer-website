import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {}

function Events({ }: Props) {
    return (
        <Box>
            <Typography variant='h2' color="primary" sx={{
                textDecoration: 'underline',
                textDecorationThickness: '2.5px',
            }} >
                BOOKING FOR 2023
            </Typography>
        </Box>
  )
}

export default Events