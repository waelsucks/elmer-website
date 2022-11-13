import { Box, Divider, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { SpotifyContext } from '../../../global/Contexts'
import { spotifyID } from '../../../global/Models'

type Props = {}

function About({ }: Props) {

    return (
        <Box
        
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',

            }}
        
        >

            <Typography variant='h4' color="primary">
                About
            </Typography>

            <Divider sx={{ mb: 5 }} />

            <Typography variant='h5' color="primary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, rerum!
            </Typography>

            <Divider sx={{ mb: 5 }} />

            <Typography variant='h6' color="primary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente soluta qui dignissimos repellat nobis assumenda dolores saepe deleniti, eius quae, in tempora neque! A omnis labore illum doloremque ipsum porro! Cum distinctio eaque, molestias non exercitationem maiores! Quis ipsum ex dolorum obcaecati cum blanditiis, repudiandae vel vitae, rerum nesciunt quod?
            </Typography>

        </Box>
    )
}

export default About