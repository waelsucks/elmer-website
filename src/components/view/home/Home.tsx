import { Box, Container, Divider, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'

import SpotifyWebApi from 'spotify-web-api-js'
import { SpotifyContext } from '../../../global/Contexts'
import { spotifyID } from '../../../global/Models'
import useGetSpotifyToken from '../../hooks/useGetSpotifyToken'
import AlbumCard from '../../ui/data/AlbumCard'

function Home() {

    const [albums, setAlbums] = useState<any[] | null>(null)

    const spotifyApi = useContext(SpotifyContext)

    useEffect(() => {

        spotifyApi.getArtistAlbums(spotifyID).then(

            function (data) {
                setAlbums(data.items)
            },

            function (err) {
                console.error(err);
            }
        );

    }, [])

    return (
        <Container
        
        >

            {albums?.length! > 0 && (
                <Box 
                
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                    }}

                >

                    <Typography variant='h2' color="primary" sx={{
                        textDecoration: 'underline',
                        textDecorationThickness: '2.5px',
                    }} >
                        LATEST RELEASE
                    </Typography>

                    <Divider sx={{ mb: 5 }} />

                    <motion.div

                        whileHover={{ scale: 1.05, opacity: 0.85 }}

                        animate={{ opacity: 1 }}

                    >
                        <AlbumCard album={albums![0]} />
                    </motion.div>

                </Box>
            ) 
            
            }

        </Container>
    )
}

export default Home