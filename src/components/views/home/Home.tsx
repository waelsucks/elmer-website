import { Box, Divider, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import { Default } from '../../../global/Animations'
import { MobileContext, SpotifyContext, SpotifyToken } from '../../../global/Contexts'
import AlbumCard from '../../ui/data/AlbumCard'

function Home() {

    const [albums, setAlbums] = useState<any[] | null>(null)

    const spotifyApi = useContext(SpotifyContext).spotify
    const token = useContext(SpotifyToken)

    useEffect(() => {

        const getAlbums = async () => {

            spotifyApi.setAccessToken(token)

            const response = await spotifyApi.getArtistAlbums(process.env.REACT_APP_SPOTIFY_ID!)

            setAlbums(response.items)

        }

        getAlbums()

    }, [spotifyApi])

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

                gap: 5

            }}

        >

            <Typography variant={useContext(MobileContext).isMobile ? "h2" : "h2"} sx={{
                // textDecoration: "underline",
                textDecorationThickness: '3.5px',
                fontFamily: "Eightone",
                textAlign: "center",

            }} color="primary" >Latest Release</Typography>

            {/* <Divider sx={{ width: '100%', my: 5 }} /> */}

            {albums?.length! > 0 && <AlbumCard album={albums![0]} />}

        </Box>
    )
}

export default Home