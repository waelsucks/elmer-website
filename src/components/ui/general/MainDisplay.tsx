import { Box } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import React, { useContext } from 'react'
import { ViewContext } from '../../../global/Contexts'

type Props = {}

function MainDisplay({ }: Props) {

    const view = useContext(ViewContext).view

    return (
        <Box

            sx={{
                width: '100%',
                height: '100%',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

                // padding: 5,

            }}

        >
            <AnimatePresence mode='wait'>
                {view}
            </AnimatePresence>
        </Box>
    )
}

export default MainDisplay