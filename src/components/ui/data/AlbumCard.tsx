import { Card, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

import SpotifyIcon from '../../../global/images/SpotifyIcon.png'

type Props = {
    album: SpotifyApi.AlbumObjectSimplified
}

function AlbumCard({ album }: Props) {

    return (
        <Card

            elevation={15}

            component={motion.div}

            whileHover={{ scale: 1.05 }}


            sx={{

                backgroundImage: `url(${album.images[0].url})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',

                // width: "50%",
                aspectRatio: "1/1",

                // width: '100%',
                // height: '50%',

                maxWidth: '300px',

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',

            }}

            onClick={() => window.open(album.external_urls.spotify, '_blank')}

        >

            <img src={SpotifyIcon} alt="Spotify" style={{ width: "30%", height: "30%", filter: "invert(1)", opacity: "20%" }} />

        </Card>
    )
}

export default AlbumCard