import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { MobileContext } from '../../../global/Contexts'
import FastLinks from './FastLinks'
import Menu from './Menu'

type Props = {}

function MenuBar({ }: Props) {

    const { isMobile } = useContext(MobileContext)

    return (
        <Box

            sx={{

                width: '100%',
                height: '100%',

                backgroundColor: 'rgba(50, 0, 0, 0.06)',

                borderBottom: '2.5px solid rgba(50, 70, 0, 0.1)',

            }}

        >

            {isMobile

                ?

                (
                    <Box

                        sx={{

                            width: '100%',
                            height: '100%',

                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',

                            gap: 0

                        }}

                    >

                        <Typography sx={{ paddingTop: 4, pb: 0 }} variant='h2' fontWeight={isMobile ? "" : "bold"} fontFamily="Vonique" color="primary" >elmer</Typography>
                        <Menu />

                    </Box>

                )

                :

                (
                    <Box

                        sx={{

                            width: '100%',
                            height: '100%',

                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gridTemplateRows: '1fr',

                            alignItems: 'center',
                            justifyItems: 'center',

                        }}

                    >
                        <FastLinks />
                        <Typography sx={{ paddingTop: 4 }} variant='h2' fontWeight={"bold"} fontFamily="Vonique" color="primary" >elmer</Typography>
                        <Menu />

                    </Box>
                )

            }

        </Box>
    )
}

export default MenuBar