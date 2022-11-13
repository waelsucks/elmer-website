import { Box, Typography } from '@mui/material'
import React from 'react'

type Props = {}

function Store({ }: Props) {
    return (
        <Box>
            <Typography variant='h2' color="primary" sx={{
                textDecoration: 'underline',
                textDecorationThickness: '2.5px',
            }} >
                COMING SOON
            </Typography>
        </Box>
  )
}

export default Store