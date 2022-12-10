import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { Default } from '../../../global/Animations'

type Props = {}

function Events({ }: Props) {
    return (
        <Box

            component={motion.div}

            initial={Default.initial}
            animate={Default.animate}
            exit={Default.exit}

            sx={{

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',

                height: '100%',
                width: '100%',

            }}

        >

            <Typography variant='h2' color="primary" sx={{
                // textDecoration: 'underline',
                textDecorationThickness: '2.5px',
            }} >
                PLANNING FOR
            </Typography>

            <Typography variant='h2' color="primary" sx={{
                    fontFamily: 'VoniQue',
                }}>
                    2023
                </Typography>

        </Box>
    )
}

export default Events