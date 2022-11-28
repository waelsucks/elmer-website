import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { MobileContext } from '../../../global/Contexts'
import FastLinks from './FastLinks'
import Menu from './Menu'

type Props = {}

function MenuBar({ }: Props) {
    return (
        <Box
        
            sx={{
                width: '100%',
                height: '100%',

                display: 'grid',
                gridTemplateColumns: useContext(MobileContext).isMobile ? '1fr 1fr' : '1fr 1fr 1fr',
                gridTemplateRows: '1fr',

                alignItems: 'center',
                justifyItems: 'center',


            }}
        
        >
            {!useContext(MobileContext).isMobile && <FastLinks />}
            <Typography sx={{ paddingTop: 4 }} variant='h2' fontWeight={"bold"} color="primary" >elmer</Typography>
            <Menu />

        </Box>
    )
}

export default MenuBar