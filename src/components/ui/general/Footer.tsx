import { Box } from '@mui/material'
import React, { useContext } from 'react'
import { MobileContext } from '../../../global/Contexts'
import FastLinks from '../navigation/FastLinks'

type Props = {}

function Footer({ }: Props) {
    return (
        <Box

            sx={{

                width: '100%',
                height: '100%',

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',

            }}

        >
            {useContext(MobileContext).isMobile

                ? (<FastLinks />)

                : (<div></div>)

            }

        </Box>
    )
}

export default Footer